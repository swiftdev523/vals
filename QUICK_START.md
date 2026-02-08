# Quick Start Guide - Admin Dashboard

## 🚀 Accessing Your Admin Dashboard

### Step 1: Start the Website
```bash
npm run dev
```

### Step 2: Open Admin Panel
Navigate to: `http://localhost:3000/admin`

### Step 3: Login
- **Password**: `admin123`
- Click "Login"

### Step 4: Manage Content
You'll see the dashboard with these sections:

#### ⚙️ General Settings
- Change the **secret word** users enter to access the website
- Update your **admin password**

#### 🔐 Login Page
- Customize emoji, title, and subtitle

#### ❓ Question Page
- Edit the question text
- Customize "Yes" and "No" button text

#### 🎉 Welcome Page
- Modify celebration messages

#### 📸 Forever (Photos)
- Add/edit image URLs
- Change page title

#### 💌 Love Letter
- Edit greeting, paragraphs, and signature

#### 💐 Flowers
- Customize 6 love messages with emojis

#### 🎥 Video
- Edit overlay messages
- (Replace video file in `public/video.mp4`)

### Step 5: Save Changes
Click the **"💾 Save Changes"** button at the top right

## 🔒 Security

**IMPORTANT**: Change the default passwords immediately!

1. In the dashboard, go to **General Settings**
2. Update **Admin Password**
3. Click **Save Changes**
4. Update the secret word for website access

## 📁 Where Data is Stored

All content is saved in: `src/config/siteConfig.json`

## 🎨 Advanced: Multiple Versions

To create different versions of your website (e.g., for different people or occasions):

1. Open `src/config/siteConfig.json`
2. Duplicate the `versions` array item
3. Give it a new `id` and `name`
4. Customize the content
5. Set `active: true` for the version you want to display

## 🛠️ Technical Details

- **Framework**: Next.js 16
- **API Routes**: `/api/admin/config`
- **Auth**: LocalStorage (upgrade to JWT/OAuth for production)
- **Database**: JSON file (can be upgraded to MongoDB/PostgreSQL)

## 📝 Making Manual Edits

You can also directly edit `src/config/siteConfig.json`:

```json
{
  "secretWord": "your-secret-word",
  "adminPassword": "your-admin-password",
  "versions": [...]
}
```

After editing, refresh the website to see changes.

## 🎯 Tips

1. **Test changes**: Make small edits and save frequently
2. **Backup**: Keep a copy of `siteConfig.json` before major changes
3. **Images**: Use high-quality URLs from Unsplash or your own hosting
4. **Emojis**: Copy from emoji keyboards or websites like emojipedia.org

## ❓ Troubleshooting

**Can't access dashboard?**
- Check if the server is running (`npm run dev`)
- Try clearing browser cache
- Verify you're using the correct password

**Changes not showing?**
- Click "Save Changes" button
- Refresh the main website
- Check browser console for errors

**Lost admin password?**
- Edit `src/config/siteConfig.json`
- Find `"adminPassword"` and change it
- Restart the server

## 🚀 Deploy to Production

When deploying:
1. Change all default passwords
2. Consider using a real database (MongoDB, Supabase)
3. Implement proper authentication (NextAuth.js)
4. Add environment variables for sensitive data
5. Enable HTTPS

---

Enjoy managing your Valentine's website! 💕
