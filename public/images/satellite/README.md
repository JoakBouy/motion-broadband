# Satellite Images Directory

This directory contains satellite imagery of South Sudan for the Motion Broadband website.

## Current Image Requirements

### Homepage Value Propositions (400x300px, WebP format)
- `south-sudan-coverage-map.webp` - Wide satellite view showing nationwide coverage
- `juba-urban-connectivity.webp` - Urban Juba area showing residential connectivity
- `malakal-support-center.webp` - Malakal region highlighting NGO operations
- `starlink-network-visualization.webp` - Network visualization overlay on satellite imagery

### Services Section (600x400px, WebP format)
- `residential-installations-juba.webp` - Aerial view of homes with Starlink dishes in Juba
- `ngo-office-compound-malakal.webp` - NGO office complex in Malakal with satellite installations
- `hotel-business-wau.webp` - Hotel and business district in Wau showing commercial installations

### Portfolio Case Studies (800x400px, WebP format)
- `before-after-bentiu.webp` - Before/after comparison of Bentiu connectivity
- `before-after-akobo.webp` - Before/after comparison of Akobo remote deployment
- `coverage-expansion-timeline.webp` - Visual timeline of coverage expansion

### About Page Coverage (1200x600px, WebP format)
- `interactive-coverage-map.webp` - Detailed coverage map for About page
- `network-growth-visualization.webp` - Historical growth visualization

## Image Specifications

### Technical Requirements
- **Format:** WebP with JPEG fallback
- **Compression:** Maintain quality while keeping file sizes under limits
- **Alt text:** Descriptive for accessibility and SEO
- **Responsive:** Multiple sizes for different screen resolutions

### Size Guidelines
- Hero images: 1920x1080px (<200KB)
- Card images: 400x300px (<150KB)
- Service images: 600x400px (<160KB)
- Portfolio images: 800x400px (<180KB)
- Full-width sections: 1200x600px (<220KB)

## Sourcing Notes

### Recommended Sources
1. **Google Earth Engine** - High-resolution South Sudan imagery
2. **Sentinel-2** - Free ESA satellite data
3. **Planet Labs** - Commercial high-resolution imagery
4. **Maxar** - Premium satellite imagery

### Legal Considerations
- Ensure proper licensing for all imagery
- Maintain attribution as required
- Document usage rights
- Comply with privacy regulations

## Implementation Status

### Phase 1: Essential Images (Current)
- [ ] Homepage value proposition images (4 images)
- [ ] Services section images (3 images)
- [ ] Basic coverage visualization

### Phase 2: Enhanced Content
- [ ] Portfolio case study images
- [ ] About page coverage maps
- [ ] Before/after comparisons

### Phase 3: Advanced Features
- [ ] Interactive coverage maps
- [ ] Animated network visualizations
- [ ] Seasonal variation imagery

## Fallback Strategy

Until actual satellite imagery is obtained, the website will continue to use placeholder SVGs. The image paths have been updated to point to the satellite directory, but fallback handling should be implemented in the components.

## Performance Optimization

### Loading Strategy
- Critical images (hero, above-fold) load immediately
- Below-fold images use lazy loading
- Progressive enhancement ensures functionality without images

### CDN Integration
- All images should be served through a CDN for optimal performance
- Implement proper caching headers
- Use responsive image techniques (srcset, sizes)
