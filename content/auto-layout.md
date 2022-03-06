---
layout: base.njk
---

# Auto Layout

Alright, listen… auto layout is cool. Like, real cool. What are some of the things you can do with auto layout? I thought you'd never ask.

- You can create buttons or menu items that will grow and/or shrink with the size of the text within them. (You know, like they do in the browser when you code them up, right?)
- You can built navigation bars or lists that expand or contract when stuff is added or removed.

## Configuration

You can kind of think of auto layout like [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/). The initial things that you might want to adjust are:

- the direction of the objects (horizontal and vertical, for instance),
- the gap or spacing between items,
- the padding for the container itself, the alignment of the items (left, right, center, top, bottom, etc.),
- how the items in the auto layout are distributed (this is kind of like [`justify-content` in Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)), and
- how it it should respond when its parent is [resized](https://help.figma.com/hc/en-us/articles/360040451373-Create-dynamic-designs-with-auto-layout#Resizing) (this is similar to [Constraints](/constraints)).

Additionally, you can [nest auto layouts](https://help.figma.com/hc/en-us/articles/360040451373-Create-dynamic-designs-with-auto-layout#Nest_auto_layout_frames) for fun and profit.

## Limitations

Okay, so auto layout seems _great_. Is there anything it can't do? Well, there are certainly places where you can't use it.

- You can't add [Layout Grids](/layout-grids) to a frame with auto layout applied.
- You can't apply [Constraints](/constraints) to a frame using auto layout.
- You can't use [Smart Selection](https://www.figma.com/blog/introducing-smart-selection/) on anything in a frame using auto layout.
