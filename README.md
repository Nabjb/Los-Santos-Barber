# LosSantos Barbershop Website

A premium barbershop website built with Next.js 15, TypeScript, Tailwind CSS, and shadcn/ui components.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Icons:** @aliimam/icons, lucide-react

## 📁 Project Structure

```
LosSantos/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles & Tailwind
├── components/
│   └── ui/
│       ├── button.tsx      # Button component (shadcn)
│       └── hero-04.tsx     # Hero section component
├── lib/
│   └── utils.ts            # Utility functions (cn helper)
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies
```

## 🎨 Features

- Responsive hero section with premium design
- Dark mode support (via Tailwind)
- Type-safe with TypeScript
- Optimized images from Unsplash
- Modern component architecture

## 📝 Important Notes

### Component Structure

The `/components/ui` folder is crucial for shadcn/ui integration:
- This is the default path where shadcn CLI installs components
- Keeps UI primitives separate from feature components
- Enables easy updates via `npx shadcn@latest add [component]`

### Customization

To customize for your barbershop:
1. Update images in `components/ui/hero-04.tsx`
2. Modify text content to match your brand
3. Adjust colors in `app/globals.css` (CSS variables)
4. Configure Tailwind theme in `tailwind.config.ts`

## 🚢 Deployment

Build for production:

```bash
npm run build
npm start
```

Deploy to Vercel (recommended):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

This is a client project for LosSantos Barbershop.

## 📄 License

Private - All rights reserved.

