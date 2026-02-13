# KodNest Premium Build System — Design Shell

This repository contains a static front-end shell for the **KodNest Premium Build System** design system. It focuses solely on layout, visual language, and core interaction patterns — not product-specific features.

## Structure

- `index.html` — Global layout: Top Bar → Context Header → Primary Workspace + Secondary Panel → Proof Footer.
- `styles.css` — Design tokens (color, spacing, typography) and component styles (cards, buttons, inputs, badges, proof footer).
- `script.js` — Minimal behaviour for:
  - Copying the builder prompt.
  - Enforcing that proof checkboxes require text input.
- `package.json` — Basic metadata and a convenience script for serving the static files.

## Running locally

You can open `index.html` directly in a browser, or use a simple static server:

```bash
npm install -g serve
serve .
```

## Design principles

- Calm, intentional, coherent, confident.
- No gradients, glassmorphism, neon, or playful/experimental visuals.
- Strict color, type, spacing, and radius tokens:
  - Colors: `#F7F6F3` (background), `#111111` (text), `#8B0000` (accent), muted green, muted amber, and a single neutral border.
  - Spacing scale: 8, 16, 24, 40, 64.
  - Radius: 6px (controls), 8px (cards).
  - Clear hierarchy via spacing and structure, not shadows or effects.

## Next steps

- Add additional pages that reuse the same layout skeleton and tokens.
- Introduce more components (tables, tabs, stepper) using the same system.
- Wire in real product flows once the design surface is approved.

