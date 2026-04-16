# Design System: High-End Editorial Portfolio

## 1. Overview & Creative North Star: "The Digital Curator"

This design system is built upon the concept of **The Digital Curator**. It rejects the noisy, component-heavy aesthetic of standard web frameworks in favor of an editorial, "gallery-space" experience. The goal is to treat digital content with the same reverence as a physical art exhibition or a premium fashion lookbook.

By leveraging **intentional asymmetry**, high-contrast typographic scales, and a complete rejection of traditional borders, we move beyond "minimalism" into "intentionalism." The layout should feel like a custom-printed monograph where whitespace isn't just "empty," but a deliberate structural element that guides the eye.

**Core Principles:**
*   **Architectural Breathing Room:** Use whitespace to group elements, never lines.
*   **Typographic Tension:** Pair the intellectual weight of a serif (`newsreader`) with the functional clarity of a sans-serif (`manrope`).
*   **Tonal Depth:** Establish hierarchy through subtle shifts in surface luminosity rather than drop shadows.

---

## 2. Colors: The Monochrome Spectrum

The palette is a sophisticated range of "warm greys" and "cool slates," designed to be invisible so that the portfolio content (photography, case studies, renders) takes center stage.

### The "No-Line" Rule
**1px solid borders are strictly prohibited for sectioning.** To define boundaries between content blocks, use background color shifts. For example:
*   A hero section set in `surface`.
*   Transitioning into a "Selected Works" section set in `surface-container-low`.
*   Using `surface-container-high` for subtle call-outs.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. We use the surface-container tiers to create "nested" depth:
1.  **Base Layer:** `surface` (#f9f9f9) - The primary canvas.
2.  **Inset Layer:** `surface-container-lowest` (#ffffff) - Used for cards or highlighted content to make them appear "lifted" by brightness.
3.  **Accent Layer:** `surface-container` (#ebeeef) - Used for background wrappers of secondary information.

### Signature Textures
To avoid a "flat" digital look, use subtle linear gradients for main CTAs or high-impact hero containers. 
*   **Gradient Formula:** `primary` (#5f5e5e) to `primary-dim` (#535252) at a 135-degree angle. This adds a "silk-like" depth to buttons and headers.

---

## 3. Typography: Editorial Authority

The system uses a high-contrast pairing to distinguish between "The Narrative" (Serif) and "The Data" (Sans-Serif).

### The Headline Voice (Newsreader)
Used for storytelling, big ideas, and section introductions.
*   **Display-lg (3.5rem):** Use for hero statements. Increase letter-spacing slightly (-0.02em) for a more premium feel.
*   **Headline-md (1.75rem):** The standard for case study titles.

### The Functional Voice (Manrope)
Used for navigation, metadata, and body copy.
*   **Body-lg (1rem):** The primary reading experience. Ensure a generous line-height (1.6) to maintain the "editorial" feel.
*   **Label-md (0.75rem):** All-caps metadata (e.g., "YEAR: 2024"). This should always have +5% to +10% letter spacing for legibility.

---

## 4. Elevation & Depth: Tonal Layering

Traditional shadows and borders create "visual noise." This system uses atmospheric depth.

*   **The Layering Principle:** Place a `surface-container-lowest` card on a `surface-container-low` section. The change in hex value alone provides enough contrast for the human eye to perceive a "lift."
*   **Ambient Shadows:** If a floating element (like a Navigation Bar) is required, use a shadow with a 40px-60px blur and only 4% opacity. The shadow color should be `on-surface` (#2d3435), never pure black.
*   **The "Ghost Border" Fallback:** If a container requires definition against a complex background, use the `outline-variant` (#adb3b4) at **15% opacity**. This creates a "breath" of a line rather than a hard edge.
*   **Glassmorphism:** For overlays or sticky headers, use `surface` at 80% opacity with a `backdrop-filter: blur(20px)`. This creates a frosted-glass effect that integrates the content with the background.

---

## 5. Components: The Primitive Set

### Buttons
*   **Primary:** Solid `primary` background with `on_primary` text. **Corner radius: 0px.** This sharp edge communicates architectural precision.
*   **Secondary:** No background. `outline-variant` (at 20% opacity) border. 
*   **Interaction:** On hover, primary buttons should transition to `primary-dim`.

### Cards & Projects
*   **No Dividers:** Never use a line to separate project items. 
*   **Asymmetric Spacing:** Use 80px of vertical space between project items. Use a "grid-break" where one image is 100% width and the next is 60% width, offset to the right.
*   **Background Shifts:** Use `surface-container-low` for the card background to distinguish it from the page `surface`.

### Input Fields
*   **Text Inputs:** No 4-sided boxes. Use a 1px bottom border using `outline-variant` at 40% opacity. 
*   **Labels:** Use `label-md` (Manrope) positioned 8px above the input line.

### Chips (Category Tags)
*   Small, rectangular (0px radius) containers using `surface-container-highest`. Text in `on_surface_variant`. No borders.

---

## 6. Do’s and Don’ts

### Do:
*   **Use Asymmetry:** Place a `display-lg` headline on the left and a `body-md` paragraph on the right with a 2-column gap between them.
*   **Embrace the Void:** If a section feels "empty," it’s likely working. Do not feel the need to fill corners with icons or decorations.
*   **Tone-on-Tone:** Use `on_surface_variant` for secondary text to create a soft hierarchy against the `on_surface` primary text.

### Don’t:
*   **Don’t Round Corners:** The `roundedness` scale is set to `0px`. Rounding corners introduces a "friendly/consumer" feel that undermines the high-end editorial aesthetic.
*   **Don’t Use Standard Icons:** Avoid heavy, filled icons. If icons are necessary, use ultra-thin (1pt) stroke icons that match the `outline` token.
*   **Don’t Use High Contrast for Everything:** Error states (`error`) should be used sparingly. A minimalist system loses its "calm" if too many elements compete for attention.

### Accessibility Note:
While we use subtle tonal shifts, always ensure the contrast ratio between `surface` and `on_surface` (text) meets WCAG AA standards. This system prioritizes clarity through typography even when visual boundaries are soft.