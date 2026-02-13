# KodNest Premium Build System — Design Tokens

This document captures the core tokens that define the KodNest Premium Build System. All screens and components should be built from these values without introducing new, arbitrary variants.

## Color

- **Background**: `#F7F6F3`
- **Surface**: `#FFFFFF`
- **Primary text**: `#111111`
- **Border / Divider**: `#D0CCC2`
- **Accent / Primary action**: `#8B0000`
- **Success**: `#3E6B52`
- **Warning**: `#B07A24`

Derived values (e.g. hover states) use opacity or subtle darkening of these colors only.

## Spacing

All spacing uses the following scale:

- `--space-xs`: 8px
- `--space-s`: 16px
- `--space-m`: 24px
- `--space-l`: 40px
- `--space-xl`: 64px

No other spacing values should be introduced.

## Radius

- **Controls (buttons, inputs, checkboxes)**: 6px
- **Cards and panels**: 8px
- **Badges**: 999px (pill)

## Typography

- **Headings (H1–H2)**: Serif — `"Georgia", "Times New Roman", serif`
- **Body and UI text**: Sans-serif — `"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`

Base sizes:

- Body: 16px, line-height 1.6–1.8, max width 720px
- H1: ~34px, 600 weight, 1.3 line-height
- H2: 24px, 600 weight
- Small/meta text: 13–14px

## Motion

- `--transition-fast`: 150ms ease-in-out
- `--transition-medium`: 200ms ease-in-out

Used for background-color, border-color, color, and subtle pressed states only. No bouncing or parallax.

