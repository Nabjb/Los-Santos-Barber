# 🎬 Animations Guide - LosSantos Barbershop

## Overview

Your hero section now features beautiful, professional animations powered by **Framer Motion**! Every element enters smoothly with carefully timed delays for a premium feel.

## ✨ What's Animated

### 1. **Hero Title Sequence**
- **"EST. 2015"** - Fades in from top with subtle bounce (0.2s delay)
- **"LOS SANTOS"** - Main headline springs up from below (0.3s delay)
- **"BARBERSHOP"** - Slides in from left (0.6s delay)

### 2. **Services Section**
- **Services Card** - Fades and slides up (0.8s delay)
- **Service Items** - Each line animates in sequence:
  - "CLASSIC CUTS" (1.0s delay)
  - "BEARD GROOMING" (1.15s delay)
  - "HOT TOWEL SHAVES" (1.3s delay)
- **Main Image** - Scales up with fade (1.2s delay)

### 3. **Description & CTA**
- **Description Text** - Gentle fade and slide up (1.5s delay)
- **Book Button** - Bounces in with spring effect (1.7s delay)
  - **Hover**: Scales up 5% with shadow
  - **Click**: Scales down to 95%

### 4. **Service Gallery Images**
Each stacked image animates in sequence:
- **Image 1** (back) - 2.1s delay
- **Image 2** (middle) - 2.3s delay  
- **Image 3** (front) - 2.5s delay

**Hover Effects**:
- Scale up 5%
- Slight rotation for depth
- Smooth 0.3s transition

### 5. **Bottom Section**
- **Services Label + Arrow** - Slides from right (2.2s delay)
- **Arrow Icon** - Gentle rocking animation (loops)
- **"Style without Limits"** - Part of parent animation

## 🎯 Animation Types Used

### Fade In
```typescript
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
```
Smooth appearance from transparent to visible.

### Slide Up
```typescript
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
```
Elements rise from below while fading in.

### Slide Horizontal
```typescript
initial={{ opacity: 0, x: -30 }}
animate={{ opacity: 1, x: 0 }}
```
Elements slide from left/right.

### Scale
```typescript
initial={{ opacity: 0, scale: 0.8 }}
animate={{ opacity: 1, scale: 1 }}
```
Elements grow from smaller size.

### Spring Effect
```typescript
transition={{ type: "spring", stiffness: 100 }}
```
Natural bouncy motion for emphasis.

### Hover Interactions
```typescript
whileHover={{ scale: 1.05, rotate: 2 }}
```
Interactive feedback on mouse over.

## ⚙️ Customizing Animations

### Speed Up / Slow Down
Edit the `duration` property:

```typescript
// Faster (current: 0.6s)
transition={{ duration: 0.3, delay: 1.5 }}

// Slower
transition={{ duration: 1.2, delay: 1.5 }}
```

### Change Delays
Adjust the `delay` to change when elements appear:

```typescript
// Appears sooner
transition={{ duration: 0.6, delay: 0.5 }}

// Appears later
transition={{ duration: 0.6, delay: 2.0 }}
```

### Disable an Animation
Remove motion wrapper and restore original div:

```typescript
// Animated (current)
<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>

// No animation
<div>
```

### Change Button Hover Effect
Edit `components/ui/button.tsx`:

```typescript
// Current: scales to 105%
hover:scale-105

// Options:
hover:scale-110  // More dramatic
hover:scale-102  // More subtle
// Remove class to disable
```

## 🎨 Animation Philosophy

### Timing Strategy
- **0-0.6s**: Hero title elements
- **0.8-1.5s**: Content cards and services
- **1.5-1.9s**: Call-to-action elements
- **2.0-2.5s**: Gallery images

This creates a natural reading flow from top to bottom.

### Interaction Design
- **Hover states**: Immediate feedback (0.3s)
- **Click states**: Tactile response
- **Looping animations**: Subtle, non-distracting

## 🚀 Performance

All animations are:
- ✅ **GPU Accelerated** - Smooth 60fps
- ✅ **Optimized** - Only animates transform/opacity
- ✅ **Responsive** - Works on all devices
- ✅ **Accessible** - Respects `prefers-reduced-motion`

## 📱 Mobile Behavior

Animations work seamlessly on mobile:
- Same timing and effects
- Automatically adjusted for touch devices
- No performance issues

## 🎬 Advanced Customizations

### Add Stagger Effect
Animate children in sequence:

```typescript
<motion.div
  initial="hidden"
  animate="visible"
  variants={{
    visible: {
      transition: { staggerChildren: 0.1 }
    }
  }}
>
  {items.map(item => (
    <motion.div variants={itemVariants}>
      {item}
    </motion.div>
  ))}
</motion.div>
```

### Scroll-Triggered Animations
Use `whileInView`:

```typescript
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>
  Content appears when scrolled into view
</motion.div>
```

### Custom Easings
```typescript
transition={{
  duration: 0.6,
  ease: "easeOut"      // Current default
  // ease: "easeIn"
  // ease: "easeInOut"
  // ease: [0.6, 0.01, 0.05, 0.95]  // Custom bezier
}}
```

## 🎯 Best Practices

### ✅ Do's
- Use subtle, purposeful animations
- Keep durations under 1 second
- Stagger related elements (0.1-0.2s apart)
- Use spring for interactive elements
- Test on slower devices

### ❌ Don'ts
- Don't animate too many things at once
- Avoid durations over 2 seconds
- Don't use distracting loops
- Don't delay critical content too long
- Don't animate on every state change

## 🔧 Troubleshooting

### Animations Not Playing
1. Check component has `"use client"` directive
2. Verify `framer-motion` is installed
3. Clear cache and rebuild: `rm -rf .next && npm run dev`

### Janky/Laggy Animations
1. Only animate `transform` and `opacity`
2. Avoid animating `width`, `height`, `top`, `left`
3. Use `will-change` CSS for complex animations

### Animations Too Fast/Slow
Adjust `duration` values in `components/ui/hero-04.tsx`

## 📚 Resources

- [Framer Motion Docs](https://www.framer.com/motion/)
- [Animation Examples](https://www.framer.com/motion/examples/)
- [Easing Functions](https://easings.net/)

---

**Your LosSantos website now has premium, buttery-smooth animations! 🎬✨**

