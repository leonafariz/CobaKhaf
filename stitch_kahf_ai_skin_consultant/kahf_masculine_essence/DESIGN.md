---
name: Kahf Masculine Essence
colors:
  surface: '#e8fff0'
  surface-dim: '#b8e4cc'
  surface-bright: '#e8fff0'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#d1fee5'
  surface-container: '#ccf8df'
  surface-container-high: '#c6f2da'
  surface-container-highest: '#c1ecd4'
  on-surface: '#002114'
  on-surface-variant: '#404943'
  inverse-surface: '#0e3727'
  inverse-on-surface: '#cffbe2'
  outline: '#707973'
  outline-variant: '#bfc9c1'
  surface-tint: '#2c694e'
  primary: '#0f5238'
  on-primary: '#ffffff'
  primary-container: '#2d6a4f'
  on-primary-container: '#a8e7c5'
  inverse-primary: '#95d4b3'
  secondary: '#116c4a'
  on-secondary: '#ffffff'
  secondary-container: '#a1f4c8'
  on-secondary-container: '#1b724f'
  tertiary: '#8e1700'
  on-tertiary: '#ffffff'
  tertiary-container: '#b72607'
  on-tertiary-container: '#ffcfc5'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#b1f0ce'
  primary-fixed-dim: '#95d4b3'
  on-primary-fixed: '#002114'
  on-primary-fixed-variant: '#0e5138'
  secondary-fixed: '#a1f4c8'
  secondary-fixed-dim: '#86d7ad'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#ffdad3'
  tertiary-fixed-dim: '#ffb4a4'
  on-tertiary-fixed: '#3e0500'
  on-tertiary-fixed-variant: '#8d1600'
  background: '#e8fff0'
  on-background: '#002114'
  surface-variant: '#c1ecd4'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: DM Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
  accent-text:
    fontFamily: DM Sans
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 40px
  xl: 64px
  gutter: 20px
  margin-mobile: 16px
  margin-desktop: 80px
---

## Brand & Style
The design system for this brand centers on a "Modern Masculine" aesthetic that balances Islamic values (Halal) with scientific efficacy. The visual narrative is clean, professional, and grounded, avoiding excessive ornamentation in favor of structural clarity and functional beauty.

The design style is **Corporate Modern** with a focus on high-quality editorial layouts. It utilizes generous whitespace to evoke a sense of "purity" and "cleanliness," while the deep greens and sharp typography provide a masculine weight. The interface should feel like a premium apothecary—stable, reliable, and expertly formulated.

## Colors
The palette is rooted in a spectrum of botanical greens that represent the brand's natural and halal heritage. 

- **Primary & Secondary:** These greens are used for brand identification and primary UI signaling.
- **Deep Forest:** Reserved for high-contrast typography and iconography to ensure legibility and a sense of authority.
- **Off-White & Light Sage:** These form the structural layers of the UI, creating a soft, non-clinical environment for the user.
- **Shopee Orange:** Used exclusively for "Buy Now" or critical conversion actions to leverage existing consumer mental models in the Indonesian market.
- **Electric Blue:** Integrated sparingly for technological features, such as AI-driven skin analysis or laboratory-tested claims.

## Typography
The typography strategy uses a hierarchy of three distinct fonts to delineate purpose. 

**Plus Jakarta Sans** provides a bold, modern Indonesian identity for all headings. Use the ExtraBold weight for hero sections to project confidence. **Inter** handles all long-form reading and interface elements, ensuring maximum readability across devices. **DM Sans** is used for "meta" information—labels, tags, and small accents—adding a refined, geometric touch to the utility layers of the system.

## Layout & Spacing
The layout follows a **Fluid Grid** model with strict 8px incremental spacing. 

- **Desktop:** 12-column grid with 80px side margins and 24px gutters. Content is centered with a max-width of 1280px.
- **Mobile:** 4-column grid with 16px side margins and 16px gutters.
- **Rhythm:** Use "lg" (40px) or "xl" (64px) spacing between major content sections to maintain the minimalist, high-end aesthetic. Smaller "sm" (16px) spacing should be used within component groups to signify relationship.

## Elevation & Depth
This design system avoids heavy drop shadows in favor of **Tonal Layering** and subtle definition. 

Hierarchy is established by placing white elements on the Light Sage (#E8F5E2) secondary background. For interactive elements like cards, use a single, ultra-soft shadow: `0 2px 8px rgba(0,0,0,0.08)`. This creates a "hovering" effect that feels light and modern rather than heavy or dated. Borders should be used sparingly, primarily in a low-contrast Deep Forest tint (10% opacity) for input fields and dividers.

## Shapes
The shape language is structured and masculine but avoids being "sharp" or aggressive. 

- **Standard Elements:** Buttons and input fields use a medium `8px` radius, providing a sturdy, professional feel.
- **Containers:** Cards and larger surface areas use a more pronounced `12px` radius, softening the overall layout and making the brand feel approachable.
- **Icons:** Use Lucide-style icons with a 2px stroke weight. Avoid rounded terminals; prefer flat or square ends to maintain the masculine, technical character.

## Components

### Buttons
- **Primary:** KAHF Green background, White text, 8px radius. Semi-bold Inter.
- **CTA (Purchase):** Shopee Orange background. Used only for "Add to Cart" or final checkout steps.
- **Ghost/Secondary:** Deep Forest outline (1px), transparent background.

### Input Fields
- Background: White.
- Border: 1px Solid Light Sage (#E8F5E2).
- Focus State: 1px Solid KAHF Green with a 2px outer glow in 10% Green.
- Radius: 8px.

### Cards
- Background: White.
- Radius: 12px.
- Shadow: `0 2px 8px rgba(0,0,0,0.08)`.
- Padding: 24px for desktop, 16px for mobile.

### Chips & Tags
- Used for product benefits (e.g., "Halal," "Dermatologically Tested").
- Style: Light Sage background with Deep Forest text.
- Font: DM Sans Bold (Label-caps style).

### AI Elements
- Components like "Skin Analyzer" or "Routine Builder" should use the Electric Blue (#3B82F6) for progress bars, glow effects, or subtle 1px borders to differentiate "intelligent" features from standard commerce features.