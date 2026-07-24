---
name: Nocturne Elite
colors:
  surface: "#141313"
  surface-dim: "#141313"
  surface-bright: "#3a3939"
  surface-container-lowest: "#0e0e0e"
  surface-container-low: "#1c1b1b"
  surface-container: "#201f1f"
  surface-container-high: "#2b2a2a"
  surface-container-highest: "#353434"
  on-surface: "#e5e2e1"
  on-surface-variant: "#c4c7c7"
  inverse-surface: "#e5e2e1"
  inverse-on-surface: "#313030"
  outline: "#8e9192"
  outline-variant: "#444748"
  surface-tint: "#c9c6c5"
  primary: "#c9c6c5"
  on-primary: "#313030"
  primary-container: "#050505"
  on-primary-container: "#797777"
  inverse-primary: "#5f5e5e"
  secondary: "#bcc7de"
  on-secondary: "#263143"
  secondary-container: "#3e495d"
  on-secondary-container: "#aeb9d0"
  tertiary: "#c1c7cf"
  on-tertiary: "#2b3137"
  tertiary-container: "#020509"
  on-tertiary-container: "#71787f"
  error: "#ffb4ab"
  on-error: "#690005"
  error-container: "#93000a"
  on-error-container: "#ffdad6"
  primary-fixed: "#e5e2e1"
  primary-fixed-dim: "#c9c6c5"
  on-primary-fixed: "#1c1b1b"
  on-primary-fixed-variant: "#474646"
  secondary-fixed: "#d8e3fb"
  secondary-fixed-dim: "#bcc7de"
  on-secondary-fixed: "#111c2d"
  on-secondary-fixed-variant: "#3c475a"
  tertiary-fixed: "#dde3eb"
  tertiary-fixed-dim: "#c1c7cf"
  on-tertiary-fixed: "#161c22"
  on-tertiary-fixed-variant: "#41474e"
  background: "#141313"
  on-background: "#e5e2e1"
  surface-variant: "#353434"
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 64px
    fontWeight: "700"
    lineHeight: "1.1"
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: "700"
    lineHeight: "1.2"
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: "600"
    lineHeight: "1.3"
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: "600"
    lineHeight: "1.4"
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: "400"
    lineHeight: "1.6"
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: "400"
    lineHeight: "1.6"
  label-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: "500"
    lineHeight: "1.2"
    letterSpacing: 0.05em
  label-xs:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: "500"
    lineHeight: "1.2"
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  unit: 8px
  container-padding-desktop: 80px
  container-padding-mobile: 24px
  gutter: 24px
  section-gap: 120px
---

## Brand & Style

The design system is engineered for a premium, high-end experience that evokes feelings of exclusivity, cinematic depth, and quiet confidence. Targeted at a discerning audience, the aesthetic leverages a **Dark Luxury** style, blending ultra-dark surfaces with sophisticated glassmorphism and subtle light play.

The visual language is rooted in **Minimalism** and **Glassmorphism**. It avoids unnecessary ornamentation, relying instead on high-quality typography, precise spacing, and "soft ambient lighting"—where containers appear to glow faintly from within or reflect light like polished obsidian. The interface should feel like a premium physical product: weighty, tactile, yet digitally fluid.

## Colors

The palette is strictly curated to maintain a low-light, high-contrast atmosphere.

- **Foundation:** The deepest black (#050505) serves as the "infinite" base layer, providing maximum contrast for text and light effects.
- **Layering:** Progressive lightness in background colors (#0A0A0A and #111111) indicates hierarchy and elevation.
- **Accents:** Use the deep blue and silver accents sparingly. Blue is reserved for critical calls to action or active states, while silver is used for decorative dividers or subtle icon highlights.
- **Transparency:** Background blurs should be used on all floating surfaces to maintain a sense of glass-like materiality.

## Typography

This design system utilizes **Inter** exclusively to ensure a systematic, utilitarian, yet modern feel.

- **Confidence:** Large display sizes use tight letter-spacing and heavy weights to command attention.
- **Hierarchy:** Use `label-sm` in uppercase with letter-spacing for category headers or small metadata to contrast against larger, softer body text.
- **Readability:** Body text is set with generous line height (1.6) to ensure comfort against the dark background, preventing "vibration" of white text on black.

## Layout & Spacing

The layout follows a **Fluid Grid** philosophy with expansive margins to emphasize luxury through "wasted" space.

- **Desktop:** A 12-column grid with a maximum content width of 1440px. Gutters are 24px.
- **Mobile:** A 4-column grid with 24px side margins.
- **Rhythm:** All spacing is based on an 8px base unit. Section gaps are intentionally large (120px+) to allow content to breathe and maintain the cinematic feel.
- **Alignment:** Center-alignment is preferred for hero sections; left-alignment is used for functional data-heavy views.

## Elevation & Depth

Depth is not communicated through heavy shadows, but through **Tonal Layering** and **Backdrop Blurs**.

1.  **Level 0 (Floor):** #050505.
2.  **Level 1 (Cards/Containers):** #0A0A0A with a 1px `border_subtle`.
3.  **Level 2 (Modals/Overlays):** #111111 with a 1px white border at 0.12 opacity and a `backdrop-filter: blur(20px)`.
4.  **Lighting:** Apply a very soft, large-radius (100px+) radial gradient of deep blue (#2563EB at 5% opacity) behind primary elements to simulate a soft ambient spotlight.

## Shapes

The shape language is defined by extreme smoothness. All primary UI containers and interactive elements use **Pill-shaped (3)** logic.

- **Buttons & Inputs:** Use full-radius (9999px) for a "capsule" look.
- **Cards:** Use `rounded-xl` (48px or 3rem) to maintain a soft, friendly yet sophisticated silhouette that contrasts with the technical nature of the dark theme.
- **Icons:** Should be stroke-based (2px weight) with rounded terminals to match the container radius.

## Components

- **Buttons:** Primary buttons are either solid silver with black text or glass-morphic (transparent with 1px border and blur). Hovers should trigger a subtle inner glow.
- **Inputs:** Background should be `bg_surface` (#111111) with a capsule shape. The border glows slightly blue when focused.
- **Cards:** No shadows. Instead, use a 1px border `rgba(255,255,255,0.08)`. For premium cards, use a subtle linear gradient border from top-left to bottom-right.
- **Chips:** Small, pill-shaped tags with `bg_surface` and `text_secondary`.
- **Progress Indicators:** Use the deep blue accent color. For a premium touch, add a soft outer glow to the progress bar.
- **Lists:** Items are separated by thin `border_subtle` lines. Interactive list items should have a hover state that slightly lightens the background to #161616.
