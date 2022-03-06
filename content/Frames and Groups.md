# Frames and Groups

A frame is a high-level grouping. It's an area where you're going to create your design. You can set a frame's size to be any number of popular device sizes. You can also nest frames inside of frames.

We played around with **frames** a little bit in [Getting Started](Getting%20Started.md), but now let's dive a little bit deeper.

## Groups

Groups are multiple elements that you’ve—umm—grouped together. This is helpful when you’re constantly selecting multiple objects to move them and you’re getting increasingly annoyed by this reality. Make a group, click it once, drag them around together.

You can create a group by pressing `Command-Shift-G` on macOS or `Control-Shift-G` on Windows and Linux.

If you grab a corner of the group and try to stretch it out, then you’ll scale the vector elements—but not things like text size and strokes. If you want scale *everything*, you’ll need to use the **Scale tool**.

If you find yourself wanting to use [Constraints](Constraints.md), then it’s probably time to look at **frames** instead.

## Frames

You might know a frame by any of the names that something similar might go by in some of the other tools out there: *canvas* or *art board* come to mind.

You’ve got two major techniques for whipping out some frames:

1. Use the **Frame tool** and either pick a predetermined size from the right sidebar or click and drag to whatever size you’re looking for.
1. Select a bunch of layers and press `Command-Option-G` or `Control-Alt-G` to create a frame wound those layers.
   * Yes, this keystroke is suspiciously similar to the keystroke for grouping items and is further muddied by the fact that removing the parent frame uses `Command/Control-Shift-G` just like ungrouping items.
   * I would like to take this moment to remind you that I don’t make the rules around here, my job is just to explain them to you.

While a group’s size is mostly determined by the stuff in the group, a frame has its own size—independent of its children. Adjusting the bounds of the frame will not move its children around. For that, you’ll need tools like [Constraints](Constraints.md) or [Auto Layout](Auto%20Layout.md) to get the job done.

### Overflowing Content

You have a few options for determining how layers that extend outside of the bounds of your frame behave. These are mostly controlled with **clip content** and a few other tricks.

* **Hide out of bounds content**: Anything that overflows the bounds of you frame is hidden.
* **Showing out of bounds content**: Let it overflow outside of the bounds of the frame.
* **Reveal additional content**: For this, you’re going to use **clip content**, but you’re also going to apply some constraints in order to have some hidden fun stuff that you can reveal as your expand the bounds of the frame.
* **Overflow on scroll in prototypes**: This is similar to `overflow-scroll` in CSS. You can use this to simulate interactivity in your prototypes.

%%Exercise: Make a drop down menu or table that can reveal more as needed.%%
