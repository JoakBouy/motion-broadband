# Motion Broadband Favicon Package

This directory contains all favicon files for the Motion Broadband website.

## File Generation Status

### ✅ Completed Files
- `favicon.svg` - Master SVG favicon with Motion Broadband branding
- `README.md` - This documentation file

### 📋 Required Files (To be generated from SVG)

#### Standard Web Favicons
- `favicon.ico` - Traditional ICO format (16x16, 32x32, 48x48)
- `favicon-16x16.png` - Small browser tab icon
- `favicon-32x32.png` - Standard browser tab icon
- `favicon-48x48.png` - Windows taskbar icon
- `favicon-96x96.png` - Android home screen icon

#### Apple Touch Icons
- `apple-touch-icon.png` - 180x180 (current iOS standard)
- `apple-touch-icon-152x152.png` - iPad Retina
- `apple-touch-icon-144x144.png` - iPad Retina (older)
- `apple-touch-icon-120x120.png` - iPhone Retina
- `apple-touch-icon-114x114.png` - iPhone Retina (older)
- `apple-touch-icon-76x76.png` - iPad
- `apple-touch-icon-72x72.png` - iPad (older)
- `apple-touch-icon-60x60.png` - iPhone
- `apple-touch-icon-57x57.png` - iPhone (older)

#### Android Chrome Icons
- `android-chrome-192x192.png` - Android home screen
- `android-chrome-512x512.png` - Android splash screen

#### Microsoft Tiles
- `mstile-70x70.png` - Small Windows tile
- `mstile-150x150.png` - Medium Windows tile
- `mstile-310x150.png` - Wide Windows tile
- `mstile-310x310.png` - Large Windows tile
- `mstile-144x144.png` - Windows tile (legacy)

#### PWA Icons
- `favicon-192x192.png` - PWA minimum icon
- `favicon-256x256.png` - PWA medium icon
- `favicon-384x384.png` - PWA large icon
- `favicon-512x512.png` - PWA splash screen icon

#### Safari Specific
- `safari-pinned-tab.svg` - Safari pinned tab icon (monochrome)

## Generation Instructions

### Using Online Tools (Recommended)
1. Visit [RealFaviconGenerator.net](https://realfavicongenerator.net/)
2. Upload the `favicon.svg` file
3. Configure settings for each platform
4. Download the generated package
5. Replace files in this directory

### Using Command Line Tools
```bash
# Install ImageMagick for batch conversion
# Convert SVG to various PNG sizes
convert favicon.svg -resize 16x16 favicon-16x16.png
convert favicon.svg -resize 32x32 favicon-32x32.png
convert favicon.svg -resize 48x48 favicon-48x48.png
# ... continue for all required sizes

# Create ICO file with multiple sizes
convert favicon-16x16.png favicon-32x32.png favicon-48x48.png favicon.ico
```

### Design Guidelines
- **Colors**: Use Motion Broadband brand colors (#0ea5e9, #d946ef)
- **Style**: Clean, modern, recognizable at small sizes
- **Content**: Satellite/connectivity theme
- **Contrast**: Ensure visibility on various backgrounds

## Testing Checklist

After generating all files, test:
- [ ] Browser tab display (Chrome, Firefox, Safari, Edge)
- [ ] Mobile home screen shortcuts (iOS, Android)
- [ ] Windows Start menu tiles
- [ ] PWA installation and app drawer
- [ ] Dark/light theme compatibility

## File Size Targets
- Individual PNG files: < 5KB each
- ICO file: < 15KB
- Total package: < 100KB
- SVG file: < 2KB (optimized)

## Browser Support
- **Modern browsers**: SVG favicon preferred
- **Legacy browsers**: ICO fallback
- **Mobile platforms**: PNG touch icons
- **PWA**: High-resolution PNG icons

## Maintenance Notes
- Update favicons when brand colors change
- Test new sizes as platforms evolve
- Optimize file sizes regularly
- Keep source SVG for future modifications
