# Review Animations

`review-animations` critiques animation code against a strict craft standard informed by Emil Kowalski's animation philosophy. It asks whether motion serves a purpose and feels responsive, coherent, physically understandable, interruptible, and accessible.

This is a specialized review workflow. It does not build unrelated features or provide a general correctness audit. The entrypoint includes `disable-model-invocation: true`, so it is intended to be deliberately invoked rather than treated as a catch-all review skill.

## When to use it

Use it to review an animation diff, inspect a component's entrances and exits, or evaluate timing, origins, gestures, and reduced-motion behavior. Provide the target files or change and enough product context to establish interaction frequency.

Use [Animate](../animate/README.md) to construct motion and [UI Animation](../ui-animation/README.md) for broader implementation, debugging, or recording analysis.

## What it reviews

The ten standards cover justified motion, frequency, responsive easing, routine UI duration, transform origin and physicality, interruption, inexpensive animated properties, accessibility, asymmetric timing, and cohesion with the product.

High-signal issues include `transition: all`, entrances from `scale(0)`, slow UI easing, long unmotivated durations, keyframes that restart during repeated actions, layout-heavy animation, missing reduced motion, and hover behavior that misfires on touch devices.

Its correction hierarchy starts with removing motion that does not belong, then reducing it, improving easing and origin, preserving interruption, addressing performance, and polishing only where the fundamentals already work. The standards are this skill's review criteria; applying them still requires understanding the reviewed scenario.

## Output and validation

The required result has two parts: a **Before / After / Why** findings table and a tiered assessment ending in **Block** or **Approve**. Findings cite exact file and line locations. Precise curves, durations, and spring values come from the standards reference.

Source inspection can identify implementation defects, but perceived timing and gesture behavior may require browser playback, slow motion, frame stepping, or a real device. When feel cannot be established from code alone, the review should name the additional check.

## Requirements

The package has no executable scanner or runtime dependency. It needs access to the motion code and preferably a rendered example. It reviews the requested scope rather than automatically sweeping an entire repository.

## Example requests

```text
$review-animations review this drawer diff for timing, origin,
interruptibility, performance, and reduced-motion behavior.

$review-animations assess these toast transitions and return
specific corrections with a Block or Approve verdict.
```

## Package guide

- [SKILL.md](SKILL.md): scope, review method, correction hierarchy, and output contract.
- [STANDARDS.md](STANDARDS.md): detailed rules, timing tables, curves, and technique guidance.

See the [repository README](../README.md) for installation.
