---
layout: base.njk
---

# Variants

Using variants has some perks:

- It adds a level of organization to your components.
- It provides you with a simpler interface for configuring your instances of a component.
- Style overrides and nested components are preserved when switching between variants.

## When should you use variants?

- You’ve got multiple, but similar, components and they share a lot of the same properties.
- You’ve got some state you want to be able to toggle between: enabled/disabled, checked/unchecked, on/off, etc.
- You’re looking ahead to the—ahem—poor souls that will be coding up these designs and you want to map to the properties that they’re going to be referencing in their front-end framework of choice.

There are worlds where there is just an insane number of variations. In this point, you might consider using **base components** (i.e. inheritance) or **nesting instances of components** (i.e. composition). (Yea, it’s weird how software engineering concepts map to design, right?)

## Nesting instances

So, let’s say that you have a button with an icon. And, let’s say you have like 12 icons. Do you make 12 variants of a button? And then, figure those buttons could be primary buttons or secondary buttons or disabled buttons or danger buttons. You can see how this might get out of hand.

In this case, you’re better off with a component for a button and a version where that button has an icon. And then you can nest the icon of your chosing.

## Base components

The other option is to create a base component—on that you’ll never use on its own. Yea, this is like a prototype object in JavaScript, right?

And just like in JavaScript, you might want to name these components appropriately. Treat yourself to prefixing the name with a `_` or something.
