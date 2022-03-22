---
layout: base.njk
---

# Components

We're developers, right? Yea, we are. So, we're all subscribed to this whole "don't repeat yourself" thing. In Figma, we can re-usable things using _components_.

You can think of components like classes in your object-oriented programming of choice. (If we really want to nerd out, the mental model is probably closest to JavaScript's prototypal inheritance.)

You can make components for pretty much anything from simple shapes to buttons to drop-down menus and card elements.

What else might make a good component?

- Common UI elements
- Logos and branding assets
- Icons, either your own or some icon library that you like
- UI elements from your framework of choice, particularly if you’re developing a native platform like iOS or Android, but also if you’re using something like MaterialUI, Bootstrap, or Charkra.
- Meta stuff like post-it notes and arrows and whatnot

You've got your **main component**, which is the one that you can edit and change. It serves as the template for all of your **component instances**.

All of your **component instances** are linked up to that main component, when you update the main component, all of the instances update accordingly. Again, the metaphor of JavaScript’s prototypal inheritance model holds up here. Unless your instance overrides a certain property, it’ll inherit from the **main component**. (There are some nuances of how this works across files, but that’s beyond the scope of this workshop.)

You can use components locally or you can pop them into your Team Library if you’re on a non-free tier. We’re just going to pretend that you’re on the **free tier** in this workshop.

**Pro-tip**: If you want to go rogue, you can always detach an instance from main component.

## Creating Components

You can create components using any of the following means:

- This fun little icon in the toolbar: ![component-icon.svg](/_assets/images/component-icon.svg)

- Right-click on the _thing_ that you want to turn into a component and then click **Create Component**.
- Press a fun hotkey:
  - `Command-Option-K` on macOS
  - `Control-Alt-K` on Windows (and probably Linux)

You can also create multiple components if your heart desires. If you select multiple things, you should see **Create Multiple Components** as an option.

### When and where should I create components?

This probably isn’t so much of a [YAGNI](https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it) thing. You’re probably going to need components. I don’t know if we need to belabor this point too much, you probably have a well-attuned taste for what granularity of components you’re going to need from whatever modern-day front-end framework you’ve chosen (or have had chosen for you).

A maybe more nuanced question is where you should put your components. Should you break them out into their own page and then use the instances in your design? Eventually, probably. But as you’re still figuring out your design, main components can live right along the rest of your design and you can refactor them out later.

It makes sense to start with smaller building blocks (e.g. a button or a card) and building up from there. Basically, anything that you find yourself repeating is probably a good candidate.

**Pro-tip**: If you prefix a component with a `_` or a `.` then it won’t be included in the even you want to publish your library across a team or whatever.

## Overrides

**Overrides** are changes you make to the properties of a single instance. Like, this of the label of a button. Again, the metaphor to JavaScript's inheritance model holds up here.

Things you can override:

- Text stuff: font, weight, size, line height, letter spacing, etc.
- Color stuff: the fill or stroke of any layers.
- Shadows and blurs
- [Layout Grids](/layout-grids)
- Nested components (like icons)

Things you can't change:

- The order of things
- The position of things
- Constraints
- The bounds of text layers

What happens if you start messing around with an instance and you want to actually make those changes stick with the main component? Well, you're in luck: If you click the three dots (street tacos), then you can select **Push overrides to Main**, which will do what it says in the tin.

The one thing that you need to be careful about is that if you want the overrides to work as you switch between different instances, then you need to make sure that the property has the same name across all of the instances.

### Resetting overrides

Okay, but what if things get out of hand you want to reset your overrides? Well, it turns out that's totally possible. You can click on the street tacos or right-click on the component.

You can reset a specific property or reset them all in one fell swoop.

There is also a cool **Reset All Overrides** icon that you can click if your heart desires.

## Variants

Chances are that you don't want _exact_ replicas of every component. For example, maybe your buttons have different text in them instead of just "Button." Or, maybe not. I don't know. You do you.

We'll get into the nitty-gritty in a hot minute, but let's briefly do our due diligence and talk about _what_ you can customize.

A variant is a property and a value. (It's not wrong if your mind wanders toward keys and values in JavaScript objects.) So, like let's say you have some fun toast notifications: might have a _type_ property that has the following values You get the idea.

Variants have their own fun naming conventions: `Property1=value, Property2=value, Property3=value`.

Let's walk through the following:

- Making a set of variants for a button
- Creating. variants out existing components
