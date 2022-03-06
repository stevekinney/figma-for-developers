---
layout: base.njk
---

# Batch Renaming

[Larry Wall](https://en.wikipedia.org/wiki/Larry_Wall), the creator of the [Perl programming language](https://www.perl.org/), [famously said](https://wiki.c2.com/?LazinessImpatienceHubris) that the three great virtues of a programmer were _laziness_, _impatience_, and _hubris_.

Let's take a look at this color palette?

_Could_ I create a style out of each color by hand? Sure. Do I want to? Absolutely not.

So, here is what we're going to do. We're going to rename all of those colorful little circles in bulk to the names of the colors that I want to use in my design system. Then, we're going to use the [Styler](https://www.figma.com/community/plugin/820660579767995949/Styler) to create styles out of those plugins.

I'll do the first few you you can take it from there.

- Select a row of color swatches
- Use the **Quick Action** panel and search for **Rename** or hit **Command/Control-R**
- Rename them all using the `Gray / $n00` (the `$n` is a variable for a number that will increment).

![batch-rename.png](/_assets/images/batch-rename.png)

## Exercise

Alright, now it's your turn. Rename the styles using the following names in order of the rows:

- Primary
- Danger
- Warning
- Success
- Information
- Gray

The lightest shade should be 100 and the darkest should be 500. At the end of the day, you should have the following styles.

- `Primary / 500`
- `Primary / 400`
- `Primary / 300`
- `Primary / 200`
- `Primary / 100`
- `Danger / 500`
- `Danger / 400`
- `Danger / 300`
- `Danger / 200`
- `Danger / 100`
- `Warning / 500`
- `Warning / 400`
- `Warning / 300`
- `Warning / 200`
- `Warning / 100`
- `Success / 500`
- `Success / 400`
- `Success / 300`
- `Success / 200`
- `Success / 100`
- `Information / 500`
- `Information / 400`
- `Information / 300`
- `Information / 200`
- `Information / 100`
- `Gray / 500`
- `Gray / 400`
- `Gray / 300`
- `Gray / 200`
- `Gray / 100`
