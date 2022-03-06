---
layout: base.njk
---

# Shared Styles

You've got two main ways to share and reuse your hard work in Figma.

- You can use [Shared Styles](/shared-styles).
- You can create [Components](/components).

The term “shared” can mean different things depending on what tier you're on. On the **free tier**, you can only share components and styles within whatever file you’re currently working on. If you’re sporting **Figma Professional**, then you can share styles and components across different files and projects. And if you’re lucky enough to part of a **Figma Organization**, then you can share all of this goodness across teams.

## So, Styles

In this workshop, I’m going to just assume that you’re part of the **free tier**, since that’s the most obvious common denominator and because we only have limited time with each other to begin with.

These are collections of properties that you can reuse throughout your application. While you might make a **[component](/components)** for something like a card or drop down menu, you’d make a **style** for stuff like the color and font weight of your heading text throughout your application. And then if you tweak that style, then all of the layers that have applied that style will update as you might expect.

You can create styles for any of the following:

- Colors
- Text
- Effects (e.g. shadows and blurs)
- [Layout Grids](/layout-grids)

One of the things to notice here is that **text styles** and **color styles** are separate. This is intended to make your life easier. You don’t need to make three styles for red text: one right-aligned, one center-aligned, and one-left aligned. You can make your color style and your alignment style and them apply them both separately to the layer in question.

**Grid styles** are useful for grids that you plan on using across multiple frames or layers. Maybe you use a 12-column grid for desktop and a 8-column grid for tables. Those are good candidates for their own styles.

There is a little icon that has four little dots arranged in a square. If you go ahead and click that you can add a shared style.

The super cool part is that now you can update that style and anything that references that shared style will also update accordingly. This makes my cold, dark engineer heart sing with joy. I'll leave it as an exercise for you to make your own metaphors to variables, CSS, or whatever you want.

Styles are also super useful for **placeholder images** that you might use in your design in the absence of real data.

## Groupings

The way you name your styles will help you as your design does it inevitable march into complexity. You can use a slash in the name of your file to create an ad hoc folder-like structure to your components.

Using this you can group your colors by theme or hue or type styles by size or use case. You might group your grid styles by the viewport of whatever device they’re intended for.

## Tips and tricks

Let's look at how to the following:

- Using naming conventions to organize your styles
- Create a color palette for our super cool application
- Adjusting and updating styles that you've created
- Adding metadata so that your co-workers don't hate you
- Mapping some Tailwind concepts to styles in order to make our developers lives easier.
