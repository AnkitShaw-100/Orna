# AUREL Fine Jewelry E-Commerce Website

AUREL is a responsive jewelry e-commerce frontend built for the M2M Creative Solutions internship assignment. It uses React, TypeScript, Vite, and Tailwind CSS to present a premium fine-jewelry shopping experience with product cards, category browsing, a cart drawer, and a 3D product view modal.

## Tech Stack

- React.js
- TypeScript
- Tailwind CSS
- Vite
- Three.js / Sketchfab embeds for 3D jewelry previews
- Lucide React icons

## Features

- Full-width editorial hero banner with CTA
- Marquee ticker for luxury service highlights
- Our Collection section with 4 featured products
- Product cards with image preview, badge labels, price, category, hover actions, `View in 3D`, and `Quick Add`
- 3D product modal with 360 interactive viewer label
- Product configuration options for karat, diamond size, and metal color
- Add to cart with selected configuration shown in cart item details
- Category gallery for Rings, Necklaces, Earrings, and Bracelets
- Responsive layout for desktop, tablet, and mobile
- Footer with brand, navigation, service, account, and contact-style links

## Getting Started

```bash
cd frontend
npm install
npm run dev
```

Open the local URL shown by Vite. By default it is usually:

```bash
http://127.0.0.1:5173/
```

## Build

```bash
cd frontend
npm run build
```

## Lint

```bash
cd frontend
npm run lint
```

## Project Structure

```text
frontend/
  src/
    app/              App routing shell
    components/       UI and commerce components
    layouts/          Site layout and cart provider shell
    lib/              Product data and cart context
    pages/            Route pages
    styles.css        Tailwind theme and global styles
```

## Assignment Submission

Email subject:

```text
[M2M Intern Assignment] Your Name - Jewelry Website
```

Include:

- Public GitHub repository link
- 3-4 line description of the design approach and implementation

Suggested description:

AUREL is a luxury jewelry storefront focused on quiet editorial design, warm premium tones, refined typography, and interactive product exploration. The site includes responsive featured collection browsing, hover product actions, a 3D product modal, configurable jewelry options, and cart persistence during the session. The implementation uses React, TypeScript, Vite, Tailwind CSS, and componentized state management for a production-ready frontend structure.
