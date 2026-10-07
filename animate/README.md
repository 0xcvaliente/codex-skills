# Animate

`animate` turns a request for interface motion into an implementation. It follows a deliberate order: decide whether the interaction benefits from animation, name its purpose, choose an implementation tool, and then specify properties, easing, duration, interruption, exit behavior, and accessibility.

The skill is opinionated about responsiveness. An interaction used constantly may deserve an immediate state change, while an occasional drawer or a first-time success moment can support more expressive movement. Choosing to omit animation is a valid result of its decision process.

## When to use it

Use it to build a transition, animate a component, add press feedback, or make an existing state change easier to follow. Typical targets include popovers, drawers, toasts, accordions, tab indicators, and drag-to-dismiss interactions.

For a critique of existing motion, use [review-animations](../review-animations/README.md). For recording analysis, motion discovery, or a broader motion toolkit, use [ui-animation](../ui-animation/README.md). The entrypoint also mentions external skills such as `pick-ui-library` and `animate-expo`; those packages are not included in this collection.

## How it works

1. Classify how frequently the interaction occurs and decide whether it should animate.
2. Give the motion a concrete job, such as feedback, orientation, or continuity.
3. Choose the smallest suitable tool: CSS transitions, CSS entry or keyframe animation, WAAPI, or Motion for more dynamic behavior.
4. Use the skill's timing and easing guidance while preserving existing project tokens.
5. Handle rapid reversals, symmetrical movement paths, reduced motion, and pointer-specific hover behavior.
6. Deliver code and a short explanation of the choices and any remaining visual checks.

## Requirements and output

The package contains Markdown guidance rather than an animation runtime. Implementation requires access to the target application's code. Additional libraries are needed only if the chosen technique requires them; a simple fade does not require a new dependency. Browser inspection helps validate timing, interruptions, and perceived smoothness.

The result is application code plus a concise motion rationale. It does not produce a whole-codebase audit or implement unrelated component behavior.

## Example requests

```text
$animate add an interruptible entrance and exit to this drawer,
preserving keyboard focus and the project's motion tokens.

$animate add subtle button press feedback and a reduced-motion variant.
```

## Package guide

- [SKILL.md](SKILL.md): selection metadata, decision sequence, timing tables, and implementation rules.
- [RECIPES.md](RECIPES.md): concrete patterns for common components and gestures.

For installation and the complete collection, see the [repository README](../README.md).
