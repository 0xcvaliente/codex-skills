# UI Animation

`ui-animation` is a broad toolkit for designing, implementing, reviewing, debugging, and measuring interface motion. It covers CSS transitions, WAAPI, Motion, springs, gestures, scroll effects, SVG, choreography, and restrained interface sound.

It also supports reverse engineering a transition from a recording. The package includes scripts to extract frames, track changing properties, and fit spring or cubic-bezier models, allowing a reference animation to become an implementation and handoff specification.

## When to use it

Use it to add or fix motion, identify worthwhile animation opportunities, name an effect, tune a gesture, match recorded easing, or add a sparse confirmation sound. Overall visual direction belongs to [UI Design](../ui-design/README.md).

For a focused construction sequence, [Animate](../animate/README.md) is a smaller route. For a dedicated motion critique, [Review Animations](../review-animations/README.md) supplies a strict review format. The references also mention external `product-design` and `animate-text` skills, which are not included here.

## Main workflows

- **Build and debug:** establish the purpose and frequency of the interaction, choose a technique, load the relevant component or gesture guide, and validate timing and interruption.
- **Review:** apply the documented motion standards and explain before, after, and why, with an explicit verdict.
- **Discover:** inspect interaction seams for motion that would improve feedback or continuity; implement suggestions only when that is in scope.
- **Measure a recording:** extract a transition, identify its elements and phases, track properties where precision matters, fit curves, document lead and lag, emit code, and compare a new recording with the source.

The guidance favors immediate focus and repeated navigation, continuity between states, trigger-based origins, paired open and close behavior, and motion whose expressive budget reflects how often users encounter it. Reduced motion and real touch behavior belong in validation.

## Requirements and output

Ordinary implementation uses the target project's stack; no new animation dependency is inherently required. The recording pipeline needs `ffmpeg` for extraction and Python packages `opencv-python`, `numpy`, and `scipy` for tracking and fitting. The extraction script can also create its contact sheet through ffmpeg.

Outputs vary by task: motion code, review findings, justified opportunities, fitted parameters, contact sheets, measurement JSON, and a choreography handoff. Screen-recording artifacts and sampling error limit how precisely the source can be reconstructed.

When measuring, match extraction to the source frame rate and pass that same rate to curve fitting. Measure different open and close behavior separately; reusing one fitted curve in reverse can miss the actual choreography.

## Example requests

```text
$ui-animation make this drawer interruptible and verify rapid
reversals, touch behavior, and reduced motion.

$ui-animation measure the opening and closing transitions in
this recording and emit Motion code plus a timing specification.
```

## Package guide

- [SKILL.md](SKILL.md): routing, core rules, timing, validation, and measurement workflow.
- [references/](references/): focused guides for decisions, springs, gestures, performance, SVG, sound, and choreography.
- [scripts/extract_frames.py](scripts/extract_frames.py): frame extraction and contact sheets.
- [scripts/track_motion.py](scripts/track_motion.py): property tracking and measurement JSON.
- [scripts/fit_curves.py](scripts/fit_curves.py): fitted spring and bezier parameters.
- [evals/](evals/) and [evaluations/](evaluations/): maintenance scenarios and fixtures.

See the [main README](../README.md) for installation.
