/* Integration regressions for the optional browser helper. Needs Playwright/Chromium. */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const {spawnSync} = require('node:child_process');
const root = path.resolve(__dirname,'..');
const tmp = fs.mkdtempSync(path.join(os.tmpdir(),'diagram-craft-test-'));
const browserArgs = process.env.DIAGRAM_CRAFT_BROWSER ? ['--browser-executable',process.env.DIAGRAM_CRAFT_BROWSER] : [];
function run(name,html) {
  const file=path.join(tmp,`${name}.html`), dir=path.join(tmp,name);
  fs.writeFileSync(file,html);
  const result=spawnSync(process.execPath,[path.join(root,'scripts/inspect_diagram.cjs'),file,'--out-dir',dir,...browserArgs],{encoding:'utf8'});
  if (!fs.existsSync(path.join(dir,'report.json'))) throw new Error(result.stderr||result.stdout||'No browser report produced');
  return {status:result.status,report:JSON.parse(fs.readFileSync(path.join(dir,'report.json'),'utf8'))};
}
try {
  const healthy=fs.readFileSync(path.join(root,'assets/architecture.html'),'utf8');
  let result=run('healthy',healthy);
  assert.equal(result.status,0,JSON.stringify(result.report));
  assert.equal(result.report.ok,true);
  result=run('overflow',healthy.replace('>Web client<','>'+'UnbrokenLongLabel'.repeat(20)+'<'));
  assert.equal(result.status,1);
  assert(result.report.desktop.findings.some(x=>x.includes('Text escapes node')));
  result=run('missing-name',healthy.replace(/aria-labelledby="[^"]+"/,'aria-labelledby="missing"'));
  assert.equal(result.status,1);
  assert(result.report.desktop.findings.some(x=>x.includes('accessible name')));
  result=run('low-contrast',healthy.replace(/fill="#172b36"/g,'fill="#ffffff"'));
  assert.equal(result.status,1);
  assert(result.report.desktop.findings.some(x=>x.includes('Contrast')));
  process.stdout.write('Browser integration checks passed: healthy, text overflow, missing accessible name, low contrast.\n');
} finally {fs.rmSync(tmp,{recursive:true,force:true});}
