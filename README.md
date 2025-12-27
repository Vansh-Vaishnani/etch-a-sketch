# Etch-a-Sketch

A browser-based drawing app built with vanilla JavaScript. Draw by hovering or clicking-and-dragging over a dynamically generated grid. Part of [The Odin Project](https://www.theodinproject.com/) curriculum.

## What It Does

- Draw with random rainbow colors on a customizable grid (1×1 to 100×100)
- Progressive darkening effect - squares darken 10% with each pass
- Eraser mode to remove colors
- Clear button to reset the canvas
- Click-and-drag or hover to draw

## Key Learnings

**DOM Manipulation**: Dynamically creating grid elements, event handling for mouse interactions (mouseenter, mousedown), and using dataset attributes to track state.

**CSS Grid**: Switched from flexbox to CSS Grid with `1fr` units to fix border overflow issues caused by pixel rounding errors. Grid ensures perfect square alignment regardless of size.

**JavaScript State Management**: Implemented mode switching (rainbow/eraser), tracked mouse button states for click-drag functionality, and managed progressive darkening using data attributes and CSS filters.

**Problem Solving**: Fixed the border overflow by eliminating manual width calculations, improved drawing UX with multiple interaction methods, and separated opacity tracking from visual effects.

---

*Project from The Odin Project - Foundations Course*