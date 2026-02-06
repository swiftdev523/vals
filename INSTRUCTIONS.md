# 💕 Valentine's Day Website - Instructions 💕

A romantic website built with **Next.js 16**, featuring smooth animations and optimized performance.

## 🌟 Features

- **Password Protection**: Secret word authentication (default: "forever")
- **6 Romantic Pages**:
  - 🏠 Home - Password-protected entrance
  - ❓ Question - Interactive Valentine's question
  - 🎉 Welcome - Main landing with navigation
  - 💑 Forever - Photo gallery and love list
  - 💌 Heart2Heart - Heartfelt letter
  - 🌹 Flowers - Virtual bouquet with love messages
- **Smooth Animations**: Powered by Framer Motion
- **Fast Performance**: Next.js 16 with Turbopack
- **Responsive Design**: Works on all devices

## 🚀 Quick Start

1. **Install dependencies** (if not already done):

   ```bash
   npm install
   ```

2. **Start the development server**:

   ```bash

   ```

## 🎨 Customization

### Change the Secret Word

Edit `src/lib/Login.tsx` line 16:

```typescript
const SECRET_WORD = "forever"; // Change to your secret word
```

### Add Your Couple Photos

Update photo URLs in `src/lib/Forever.tsx`:

```typescript
const couplePhotos = [
  {
    id: 1,
    caption: "Our First Date 💕",
    url: "YOUR_IMAGE_URL_HERE",
  },
  // Add more photos...
];
```

### Customize Messages

- **Welcome message**: Edit `src/lib/Welcome.tsx`
- **Love letter**: Edit `src/lib/Heart2Heart.tsx`
- **Flower messages**: Edit `src/lib/Flowers.tsx`
- **Love list**: Edit `src/lib/Forever.tsx`

### Change Colors

Edit `src/App.css` to customize the pink gradient:

```css
.page-container {
  background: linear-gradient(135deg, #ff6b9d 0%, #ff8fab 50%, #ffa8c5 100%);
}
```

## 📱 Pages & Routes

1. **/** - Login page (password protection)
2. **/question** - Valentine's question
3. **/welcome** - Main landing page
4. **/forever** - Photo gallery and love list
5. **/heart2heart** - Romantic letter
6. **/flowers** - Virtual flower bouquet

## 🛠️ Tech Stack

- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Framer Motion** - Smooth animations
- **Tailwind CSS** - Utility-first styling
- **Turbopack** - Next-generation bundler

## 📦 Build for Production

When you're ready to deploy:

```bash
npm run build
npm start
```

The optimized build will be in the `.next` folder.

## 💖 Tips

- Password is stored in session storage (stays active during browser session)
- All animations are GPU-accelerated for smooth performance
- Fully responsive - works perfectly on mobile devices
- Add more pages by creating new routes in the `app/` directory
- Images are optimized automatically by Next.js

## 🎁 Happy Valentine's Day 2026!

Enjoy sharing this special website with your loved one! 💕
