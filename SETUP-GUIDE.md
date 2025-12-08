# LosSantos Barbershop - Setup Guide

## ✅ Project Setup Complete!

Your premium barbershop website is ready to go. Here's what has been configured:

## 📦 What's Included

### Core Technologies
- ✅ **Next.js 15** - Latest App Router with React 18
- ✅ **TypeScript** - Full type safety
- ✅ **Tailwind CSS** - Utility-first styling
- ✅ **shadcn/ui** - High-quality React components
- ✅ **Dark Mode** - Automatic theme support

### Dependencies Installed
```json
{
  "UI Libraries": [
    "@radix-ui/react-slot",
    "class-variance-authority",
    "clsx",
    "tailwind-merge"
  ],
  "Icons": [
    "@aliimam/icons",
    "lucide-react"
  ]
}
```

## 🎨 Hero Section Customization

The hero component (`components/ui/hero-04.tsx`) has been customized for LosSantos:

### Current Content
- **Headline**: "LOS SANTOS" (replaces "CREATIVE DESIGNER")
- **Tagline**: "BARBERSHOP" (replaces "ALI IMAM")
- **Established**: "EST. 2015" (replaces "1,996")
- **Services**: 
  - Classic Cuts
  - Beard Grooming
  - Hot Towel Shaves
- **CTA Button**: "Book Appointment"
- **Images**: Premium barbershop stock photos from Unsplash

### Images Used
1. **Main Image**: Barbershop interior (grayscale)
2. **Service Gallery**:
   - Haircut service
   - Beard trim service
   - Hot towel shave

## 🎯 Why `/components/ui` is Important

The `/components/ui` folder structure is critical for shadcn/ui:

1. **Standard Convention**: shadcn CLI automatically installs components here
2. **Easy Updates**: Run `npx shadcn@latest add [component]` to add more
3. **Separation of Concerns**: 
   - `/components/ui` → Reusable UI primitives
   - `/components` → Feature-specific components
4. **Team Consistency**: Other developers expect this structure

## 🚀 Getting Started

### 1. View Your Site
The development server is running at:
- 🌐 **Local**: http://localhost:3000
- 🌐 **Network**: Check terminal for network URL

### 2. Make Changes
Edit these files to customize:

**Content & Text**
```typescript
// components/ui/hero-04.tsx
- Line 14: "EST. 2015" → Your establishment year
- Line 18-20: "LOS SANTOS" → Your business name
- Line 22-28: "BARBERSHOP" → Your tagline
- Line 35-37: Services list
- Line 61-65: Description text
- Line 68: "Book Appointment" → CTA text
```

**Styling & Colors**
```css
// app/globals.css
- Lines 7-25: Light mode colors
- Lines 27-47: Dark mode colors
```

**Images**
```typescript
// components/ui/hero-04.tsx
- Line 40: Main hero image
- Lines 72-104: Service gallery images (3 images)
```

### 3. Add More Components

Install additional shadcn components:
```bash
npx shadcn@latest add card
npx shadcn@latest add navigation-menu
npx shadcn@latest add dialog
```

## 🎨 Customization Tips

### Change Brand Colors

Edit `app/globals.css`:
```css
:root {
  --primary: 24 9.8% 10%;        /* Main brand color */
  --secondary: 60 4.8% 95.9%;    /* Secondary color */
  /* ... more colors */
}
```

### Update Typography

Edit `app/layout.tsx`:
```typescript
import { Inter, Playfair_Display } from "next/font/google";

const heading = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-heading' 
});
```

### Add New Sections

Create new components in `/components`:
```bash
components/
  services-section.tsx
  testimonials-section.tsx
  booking-form.tsx
```

## 📱 Responsive Design

The hero is fully responsive:
- **Mobile**: Stacked layout, adjusted typography
- **Tablet (md)**: Side-by-side elements
- **Desktop (xl)**: Full layout with optimal spacing

## 🌙 Dark Mode

Toggle dark mode by adding the `dark` class to `<html>`:
```typescript
// app/layout.tsx
<html lang="en" className="dark">
```

For a theme toggle, add:
```bash
npx shadcn@latest add dropdown-menu
```

## 🔧 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
npm run dev -- -p 3001
```

### Images Not Loading
- Ensure image URLs are accessible
- Check `next.config.js` domains list
- Replace with local images in `/public` folder

### Missing Dependencies
```bash
npm install
```

## 📁 File Structure Overview

```
LosSantos/
├── app/
│   ├── layout.tsx              # Root layout (metadata, fonts)
│   ├── page.tsx                # Home page (renders hero)
│   ├── globals.css             # Global styles, theme variables
├── components/
│   └── ui/
│       ├── button.tsx          # Button component
│       └── hero-04.tsx         # Hero section (main component)
├── lib/
│   └── utils.ts                # cn() utility for class merging
├── public/                     # Static assets (add your images here)
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript settings
├── next.config.js              # Next.js configuration
└── package.json                # Dependencies & scripts
```

## 🚀 Next Steps

1. **Replace Images**: Add your barbershop photos to `/public`
2. **Add Sections**: Create services, about, contact sections
3. **SEO**: Update metadata in `app/layout.tsx`
4. **Analytics**: Add Google Analytics or similar
5. **Booking System**: Integrate with booking provider
6. **Contact Form**: Add contact/inquiry form

## 📚 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

## 🆘 Need Help?

Check these common files:
- Build errors → `tsconfig.json`
- Styling issues → `tailwind.config.ts`
- Component not found → Check import paths (`@/`)
- Env variables → Create `.env.local`

---

**Happy Building! 💈✨**

