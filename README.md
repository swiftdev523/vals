# 💕 Valentine's Day Website 💕

A beautiful, romantic Valentine's Day website built with **Next.js 16**, **React 19**, and **Framer Motion**, featuring blazing-fast performance and smooth animations.

## 🌟 Features

- ⚡ **Next.js App Router** - Instant page transitions and optimized performance
- 🔐 **Password Protection** - Secret word authentication (default: "forever")
- 🎨 **Smooth Animations** - Powered by Framer Motion with optimized rendering
- 💕 **6 Romantic Pages**:
  - 🏠 **Home** - Password-protected entrance
  - ❓ **Question** - Interactive "Will you be my Valentine?" with playful UI
  - 🎉 **Welcome** - Celebration page with confetti
  - 💑 **Forever** - Photo gallery and love list
  - 💌 **Heart2Heart** - Heartfelt love letter
  - 🌹 **Flowers** - Virtual rose bouquet with messages
- 📱 **Fully Responsive** - Perfect on all devices
- 🚀 **Turbopack** - Ultra-fast development with hot reload

## 🚀 Quick Start

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Start the development server**:

   ```bash
   npm run dev
   ```

3. **Open your browser** at [http://localhost:3000](http://localhost:3000)

4. **Enter the secret word**: Type "forever" to unlock

## 🎨 Customization

### Change Secret Word

Edit `src/lib/Login.tsx` line 13:

```typescript
const SECRET_WORD = "forever"; // Change this
```

### Update Love Messages

- **Welcome message**: `src/lib/Welcome.tsx`
- **Love letter**: `src/lib/Heart2Heart.tsx`
- **Flower messages**: `src/lib/Flowers.tsx`
- **Love list**: `src/lib/Forever.tsx`

### Replace Photos

Update photo URLs in `src/lib/Forever.tsx` with your own images.

## 📦 Production Build

```bash
npm run build
npm start
```

## 🛠️ Tech Stack

- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Framer Motion** - Animation library
- **Tailwind CSS** - Utility-first styling
- **Turbopack** - Next-generation bundler

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home/Login page
│   ├── question/          # Valentine question
│   ├── welcome/           # Welcome page
│   ├── forever/           # Photo gallery
│   ├── heart2heart/       # Love letter
│   └── flowers/           # Virtual bouquet
├── src/
│   ├── components/        # Reusable UI components
│   └── lib/              # Page components
└── public/               # Static assets
```

## 💝 Made with Love

Perfect for Valentine's Day 2026! 🌹
