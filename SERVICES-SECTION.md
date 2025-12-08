# 💈 Services Section - Documentation

## ✅ What's Been Added

A beautiful, clean services section that perfectly continues the hero's design pattern!

## 🎨 Design Features

### **Matches Hero Pattern:**
- ✅ Same container width (`max-w-7xl`)
- ✅ Same padding (`py-20`, `px-6`)
- ✅ Small uppercase label ("FAHED")
- ✅ Large bold heading ("SERVICES")
- ✅ Gray card backgrounds (`bg-secondary`)
- ✅ Subtle grid background (continues from hero)
- ✅ Monospace font for details

### **Visual Elements:**
- Clean service cards with icons
- Service name in large text
- Duration and price in monospace font
- Animated arrow (→) that pulses
- Hover effect - card slides right slightly
- Shadow on hover for depth

### **Current Services:**
1. **Hair & Beard Cut** - 30 mins · €15
2. **Beard Trim** - 15 mins · €7
3. **Beard Shave** - 15 mins · €8

## 🎬 Animations

### **Scroll-Based Animations:**
- Label fades in from top
- Heading slides up
- Each service card appears in sequence (staggered by 0.1s)
- Cards slide right on hover
- Arrow pulses continuously

### **Interaction:**
- **Hover**: Card shifts 5px right + shadow appears
- **Arrow**: Gentle pulse animation (loops)
- **Smooth**: All transitions are 0.2s for instant feedback

## 📱 Responsive Design

### **Mobile (< 768px):**
- Smaller icons (48px)
- Single column layout
- Smaller text sizes
- Cards stack vertically
- Touch-friendly spacing

### **Desktop (≥ 768px):**
- Larger icons (64px)
- Max width constraint (4xl = ~56rem)
- Larger text sizes
- More generous padding

## 🎯 Key Features

### **1. Icon System**
Using Lucide React icons:
- `Scissors` - Hair & Beard Cut
- `Wind` - Beard Trim (represents blow-dry/styling)
- `Razor` - Beard Shave

Icons are in rounded squares with background for contrast.

### **2. Typography Hierarchy**
```
FAHED          → text-sm (label)
Services       → text-4xl/6xl (heading)
Service Name   → text-xl/2xl (title)
Duration/Price → text-sm/base + mono (details)
```

### **3. Color Scheme**
- Cards: `bg-secondary` (light gray)
- Text: Default foreground
- Muted: `text-muted-foreground` (gray)
- Borders: `border-border` (subtle)
- Hover: Shadows for depth

### **4. Layout**
```
┌─────────────────────────────────────────┐
│ FAHED                                    │
│ Services                                 │
│                                          │
│ ┌─────────────────────────────────────┐ │
│ │ [Icon] Hair & Beard Cut     →      │ │
│ │        30 mins · €15               │ │
│ └─────────────────────────────────────┘ │
│                                          │
│ ┌─────────────────────────────────────┐ │
│ │ [Icon] Beard Trim          →       │ │
│ │        15 mins · €7                │ │
│ └─────────────────────────────────────┘ │
│                                          │
│ ┌─────────────────────────────────────┐ │
│ │ [Icon] Beard Shave         →       │ │
│ │        15 mins · €8                │ │
│ └─────────────────────────────────────┘ │
│                                          │
│ ALL SERVICES INCLUDE CONSULTATION...    │
└─────────────────────────────────────────┘
```

## 🔧 Customization

### **Add More Services:**
Edit `components/services-section.tsx`:

```typescript
const services = [
  {
    id: 1,
    name: "Hair & Beard Cut",
    duration: "30 mins",
    price: "€15",
    icon: Scissors,
  },
  // Add new service here:
  {
    id: 4,
    name: "Hot Towel Shave",
    duration: "20 mins",
    price: "€12",
    icon: Droplet, // Import from lucide-react
  },
];
```

### **Change Icons:**
Import different icons from Lucide React:

```typescript
import { Scissors, Wind, Razor, Sparkles, Coffee } from "lucide-react";
```

Browse all icons: https://lucide.dev/icons/

### **Update Prices:**
Simply edit the price in the services array:

```typescript
price: "€20", // Change price
duration: "45 mins", // Change duration
```

### **Change Section Title:**
```typescript
<h2>Services</h2>
// Change to:
<h2>Our Services</h2>
// or
<h2>What We Offer</h2>
```

### **Change Label:**
```typescript
<p>FAHED</p>
// Change to:
<p>PREMIUM SERVICES</p>
// or
<p>WHAT WE DO</p>
```

### **Modify Bottom Text:**
```typescript
<p>ALL SERVICES INCLUDE CONSULTATION · PREMIUM PRODUCTS · HOT TOWEL FINISH</p>
// Customize to your offering
```

## 🎨 Styling Options

### **Add Clickable Links:**
Wrap each card in a Link or add onClick:

```typescript
<Link href={`/services/${service.id}`}>
  <motion.div className="...">
    {/* Service card content */}
  </motion.div>
</Link>
```

### **Change Card Style:**
Current: Rounded with border
Options:
- Remove border: Delete `border border-border`
- Square corners: Change `rounded-lg` to `rounded-none`
- Add shadow: Add `shadow-md`

### **Different Grid Layout:**
Change from list to grid:

```typescript
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  {services.map(...)}
</div>
```

## 🚀 Performance

- ✅ Scroll animations use `whileInView` (only animate when visible)
- ✅ `viewport={{ once: true }}` - animations run only once
- ✅ Icons are tree-shaken (only imports what's used)
- ✅ No heavy images or assets
- ✅ GPU-accelerated animations

## 📐 Spacing

Matches hero section:
- Section padding: `py-20` (80px top/bottom)
- Container padding: `px-6` (24px sides)
- Card spacing: `space-y-4` (16px between)
- Internal padding: `p-6 md:p-8`

## 🎯 Next Steps

### **Make Cards Clickable:**
Add routing to individual service pages with more details.

### **Add Booking:**
Link arrow to booking system or open modal.

### **Add More Info:**
Expand cards on click to show full descriptions.

### **Add Images:**
Include service photos in each card.

---

**Your services section is live! Refresh your browser to see it below the hero.** 💈✨

