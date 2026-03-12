## Motifino Strap Bundler

A small React + Vite demo that recreates a watch‑strap “bundler” experience similar to high‑end e‑commerce configurators.  
Users can preview strap images, choose strap materials, and see pricing in a clean, Tailwind‑styled UI.

### Tech Stack

- **React + Vite** – fast SPA setup and dev server
- **Tailwind CSS** – utility‑first styling
- **JavaScript (ESM)** – no TypeScript for simplicity

### Features

- **Strap preview panel**  
  Two straps stacked one above another, using real images from the `assets` folder. Layout adapts with Tailwind for a subtle, premium look.

- **Image selector**  
  Reusable `ImageSelectable` component that shows either:
  - A strap image, or  
  - An SVG belt‑shaped placeholder when no image is available.  
  Clicking an image tile updates the main strap preview.

- **Material option groups**  
  `StrapOptions` component composed of:
  - `OptionGroup` – section header + description (Full Grain, Suede, Vegan)  
  - `OptionSwatch` – small, clickable color/texture chips  
  Selected options are highlighted using Tailwind classes.

- **Price bar**  
  `PriceBar` shows base and discounted price, quantity stepper (+/–), and “ADD TO CART” button. Sticky at the bottom of the left panel for a true checkout feel.

- **Composable components**  
  `BundleConfigurator` – main layout shell.  
  `StrapPreview` / `StrapPreviewRow` – encapsulate visual strap logic.  
  `bundleVisuals` data file for mapping IDs → images.

### Getting Started

```bash
# install dependencies
yarn       # or: npm install

# start dev server
yarn dev   # or: npm run dev
```

Then open the printed localhost URL (usually `http://localhost:5173`) in your browser.

### Project Structure (key files)

- `src/App.jsx` – mounts the main `BundleConfigurator`.
- `src/components/BundleConfigurator.jsx` – overall page layout and state.
- `src/components/StrapPreview.jsx` / `StrapPreviewRow.jsx` – left‑side strap visuals.
- `src/components/ImageSelectable.jsx` – generic image + SVG placeholder selector.
- `src/components/StrapOptions.jsx`, `OptionGroup.jsx`, `OptionSwatch.jsx` – right‑side material options.
- `src/components/PriceBar.jsx` – price + quantity + CTA.
- `src/data/bundleVisuals.js` – strap/buckle image references.

### Customization

- Add or change strap images in `src/assets/bunddle` and update `bundleVisuals.js`.
- Adjust Tailwind classes in the components to tweak spacing, typography, or colors.
- Extend the bundler with new steps (e.g., case, dial, stitching) by reusing the existing option and image‑select components.
