# 💕 Valentine's Day Website for Couples 💕

A beautiful, romantic website built with React + Vite, featuring smooth animations and a pink love theme.

## 🌟 Features

- **Password Protection**: Secret word authentication (default: "forever")
- **4 Romantic Pages**:
  - 🏠 Welcome Page - Main landing with navigation
  - 💑 Forever Page - Your couple photo and love list
  - 💌 Heart2Heart - A heartfelt letter
  - 🌹 Flowers - Virtual bouquet with love messages
- **Smooth Animations**: Powered by Framer Motion
- **Floating Hearts**: Continuous heart animations
- **Pink Theme**: Beautiful gradient backgrounds
- **Responsive Design**: Works on all devices

## 🚀 Quick Start

1. **Install dependencies** (if not already done):

   ```bash
   npm install
   ```

2. **Start the development server**:

   ```bash
   npm run dev
   ```

3. **Open your browser** and visit the URL shown in terminal (usually http://localhost:5174)

4. **Enter the secret word**: Type "forever" (without quotes) to unlock the website

## 🎨 Customization

### Change the Secret Word

Edit `src/pages/Login.tsx` and change line 13:

```typescript
const SECRET_WORD = "forever"; // Change to your secret word
```

### Add Your Couple Photo

Replace the placeholder in `src/pages/Forever.tsx`:

1. Add your image to the `public` folder (e.g., `couple-photo.jpg`)
2. In `src/pages/Forever.tsx`, replace the placeholder div with:

```tsx
<img src="/couple-photo.jpg" alt="Us" className="photo-frame" />
```

### Customize Messages

- **Welcome message**: Edit `src/pages/Welcome.tsx`
- **Love letter**: Edit `src/pages/Heart2Heart.tsx`
- **Love messages**: Edit `src/pages/Flowers.tsx`
- **Love list**: Edit `src/pages/Forever.tsx`

### Change Colors

Edit `src/App.css` to customize the pink gradient and other colors:

```css
.page-container {
  background: linear-gradient(135deg, #ff6b9d 0%, #ff8fab 50%, #ffa8c5 100%);
}
```

## 📱 Pages Navigation

1. **Login** (`/`) - Password protection page
2. **Welcome** (`/welcome`) - Main landing page
3. **Forever** (`/forever`) - Couple photo and love list
4. **Heart2Heart** (`/heart2heart`) - Romantic letter
5. **Flowers** (`/flowers`) - Virtual flower bouquet

## 🛠️ Tech Stack

- **Vite** - Lightning-fast build tool
- **React** - UI framework
- **TypeScript** - Type safety
- **React Router** - Navigation
- **Framer Motion** - Smooth animations
- **CSS3** - Styling and animations

## 📦 Build for Production

When you're ready to deploy:

```bash
npm run build
```

This creates an optimized build in the `dist` folder.

## 💖 Tips

- The password is stored in session storage, so it stays active during the browser session
- All animations are GPU-accelerated for smooth performance
- The website is fully responsive and works on mobile devices
- You can add more pages by creating new components in `src/pages/`

## 🎁 Happy Valentine's Day!

Enjoy sharing this special website with your loved one! 💕
