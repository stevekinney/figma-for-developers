---
layout: base.njk
---

# Layout Grids

One of the reason that you might want to nest frames is because frames support layout grids and as you’ve probably learned from implementing designs, most of what we do these days is just a nested series of CSS Grids and Flexboxes.

You can apply a **layout grid** to any [frame](/frames-and-groups). Hey, you can even apply _multiple_ grids to a single frame. You can also tweak how the grid looks (e.g. the color and opacity).

With your grids, you can adjust the number of columns or rows, the width of those columns and rows, the margins around your columns or rows, and the gutters between them.

## Nested Grids

The super cool thing about Figma is that you can apply multiple grids to a frame _and_ you can nest frames, this means you can compose some pretty sophisticated grid layouts.

## Usage with Constraints

If a layer has a constraint, it will be applied to whatever section of the grid its in as opposed to the frame itself. This means you have elements that flow like they would in CSS if you adjusted the size of the window.

## Visualizing padding with grids

There is a time and a place for a one-column or one-row grid. If you adjust the margin, you can control the padding and then use constraints to have the inner-layer expand and contract appropriately.

## Uniform Grids

The layout grids that we’ve played around with so far are responsive. Figma also provides a uniform grid that can be useful when you’re aiming for a pixel-perfect design (e.g. you’re designing an icon or a logo).
