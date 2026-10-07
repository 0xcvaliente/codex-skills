# Web Design Guidelines

`web-design-guidelines` provides a local checklist and workflow for interfaces that remain understandable and usable across input methods, viewport sizes, content lengths, themes, locales, and loading or failure states.

It covers accessibility and interaction quality as part of design and implementation. The guidance adapts to the product's existing tokens, components, language, and browser requirements instead of automatically imposing a new aesthetic.

## When to use it

Use it when building UI, polishing a flow, or conducting a file-level interface audit. Typical questions include whether forms provide usable errors, navigation works by keyboard, text survives long content, mobile layouts remain operable, or motion respects user preferences.

For new visual identity or substantial aesthetic direction, the entrypoint calls for [Frontend Design](../frontend-design/README.md) as well. [UI Design](../ui-design/README.md) offers a larger mode-based construction and audit system.

## How it works

Inspect the existing design system, typography, component conventions, accessibility utilities, browser support, and framework version. Load the detailed checklist and apply the relevant parts to the surface in scope.

For construction, establish semantic structure, keyboard behavior, focus, important states, and robust layout before visual polish. Reuse existing accessible primitives where possible and verify representative narrow, ordinary, and wide viewports.

For review, prioritize blocked access and focus failures, destructive or misleading interactions, broken responsive and asynchronous states, rendering or performance problems, and then visual and copy refinements. Findings use exact file and line locations where available, with a focused correction.

The skill is fully local: it does not fetch replacement rules from a remote branch during use. Product preferences and measurement-dependent recommendations should be presented with their actual context.

## Requirements and output

There are no bundled scanners or executable helpers. The workflow needs access to the target code and uses the project's existing tests and linting. A browser helps verify rendered behavior, keyboard navigation, zoom, reduced motion, narrow layouts, long content, form errors, and themes.

Implementation requests produce changed UI and validation. Dedicated audits produce findings grouped by relevant file. A static check alone does not establish that every rendered state is usable; [UI Verification](../ui-verification/README.md) can supply runtime evidence.

## Example requests

```text
$web-design-guidelines audit this form for keyboard access,
error recovery, mobile layout, and long translated labels.

$web-design-guidelines implement this navigation using our
existing primitives and verify focus and responsive behavior.
```

## Package guide

- [SKILL.md](SKILL.md): context, construction, review priorities, and verification.
- [references/guidelines.md](references/guidelines.md): detailed local checklist.
- [references/LICENSE.txt](references/LICENSE.txt): reference licensing.
- [agents/openai.yaml](agents/openai.yaml): interface metadata.

See the [main README](../README.md) for installation.
