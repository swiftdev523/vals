# Admin Dashboard

## Access the Dashboard

1. Navigate to `/admin` in your browser
2. Default password: `admin123`
3. You'll be redirected to `/admin/dashboard`

## Features

### 🔐 General Settings

- **Secret Word**: Change the password users need to enter to access the website
- **Admin Password**: Change your admin dashboard password

### 📝 Content Management

Edit all text content across the website:

#### Login Page

- Emoji
- Title
- Subtitle text

#### Question Page

- Question text
- "Yes" button text
- "No" button text

#### Welcome Page

- Title
- Welcome message
- Call to action text

#### Photo Gallery (Forever Page)

- Page title
- Image URLs (add/edit multiple images)

#### Love Letter (Heart2Heart Page)

- Page title
- Letter greeting
- Four paragraphs of letter content
- Letter signature

#### Flowers Page

- Page title
- Six customizable love messages (emoji + text for each)

#### Video Page

- Page title
- Three overlay messages
- Note: To change the video, replace `public/video.mp4`

## How to Use

1. **Make Changes**: Edit any text field in the dashboard
2. **Save**: Click the "💾 Save Changes" button (top right)
3. **View Live**: Changes are immediately reflected on the main website
4. **Logout**: Click "🚪 Logout" when done

## Configuration File

All content is stored in: `src/config/siteConfig.json`

You can manually edit this file if needed, or use the dashboard interface.

## Security Notes

⚠️ **Important**:

- Change the default admin password immediately after first login
- In production, implement proper authentication (OAuth, JWT, etc.)
- Consider adding IP restrictions for admin routes
- Use environment variables for sensitive data

## Creating Multiple Versions

The config supports multiple versions of the website. To create a new version:

1. Edit `src/config/siteConfig.json`
2. Duplicate the version object in the `versions` array
3. Change the `id` and `name` fields
4. Modify content as needed
5. Set `active: true` for the version you want to use

Example:

```json
{
  "versions": [
    {
      "id": "version1",
      "name": "Valentine's Day 2026",
      "active": true,
      "secretWord": "forever",
      "content": { ... }
    },
    {
      "id": "version2",
      "name": "Anniversary Edition",
      "active": false,
      "secretWord": "always",
      "content": { ... }
    }
  ]
}
```

## Future Enhancements

Planned features:

- [ ] Image upload functionality
- [ ] Video upload support
- [ ] Multiple language support
- [ ] Theme customization (colors, fonts)
- [ ] Analytics dashboard
- [ ] Version switcher in admin UI
- [ ] Scheduled content publishing
- [ ] Content preview before saving
