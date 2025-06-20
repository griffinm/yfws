# Using Images in Your Vite Static Site

This guide shows you how to properly use images stored in `src/images/` in your HTML and JavaScript files.

## Directory Structure

```
src/
├── images/
│   ├── logo.png
│   ├── hero-image.jpg
│   ├── about-photo.svg
│   └── icons/
│       ├── volunteer.svg
│       └── donate.svg
├── style.css
└── main.js
```

## Method 1: Direct Import in JavaScript (Recommended)

This is the **best approach** for Vite because it:
- Optimizes images automatically
- Adds proper hashing for cache busting
- Handles different image formats
- Provides better build optimization

### Step 1: Import the image in your JavaScript

```javascript
// In src/main.js
import logoImage from './images/logo.png'
import heroImage from './images/hero-image.jpg'
import aboutPhoto from './images/about-photo.svg'

// Use the imported images
document.addEventListener('DOMContentLoaded', () => {
  // Set logo
  const logoElement = document.querySelector('.logo');
  if (logoElement) {
    logoElement.src = logoImage;
  }
  
  // Set hero image
  const heroElement = document.querySelector('.hero-image');
  if (heroElement) {
    heroElement.src = heroImage;
  }
});
```

### Step 2: Reference in HTML

```html
<!-- In index.html -->
<img class="logo" alt="Logo" />
<img class="hero-image" alt="Hero Image" />
```

## Method 2: Direct Path in HTML

You can also reference images directly in HTML, but this approach has limitations:

```html
<!-- Works in development, but not optimized -->
<img src="./src/images/logo.png" alt="Logo" class="w-8 h-8 mr-3" />
<img src="./src/images/hero-image.jpg" alt="Hero Image" class="w-full h-64 object-cover" />
```

## Method 3: CSS Background Images

For background images, you can import them in CSS:

```css
/* In src/style.css */
@import './images/hero-bg.jpg';

.hero-section {
  background-image: url('./images/hero-bg.jpg');
  background-size: cover;
  background-position: center;
}
```

## Supported Image Formats

Vite supports these image formats out of the box:
- **PNG** - `.png`
- **JPEG** - `.jpg`, `.jpeg`
- **SVG** - `.svg`
- **WebP** - `.webp`
- **GIF** - `.gif`

## Image Optimization

Vite automatically optimizes images during the build process:
- **Development**: Images are served as-is for fast development
- **Production**: Images are optimized, compressed, and hashed

## Examples for Your Project

### Logo in Header
```html
<!-- In index.html -->
<div class="flex items-center">
  <img src="./src/images/logo.svg" alt="Yes For Wilmington Schools Logo" class="w-8 h-8 mr-3" />
  <h1 class="text-2xl font-bold text-gray-900">Yes For Wilmington Schools</h1>
</div>
```

### Hero Image
```html
<!-- In index.html -->
<section class="hero-section">
  <img src="./src/images/hero.jpg" alt="Students in classroom" class="w-full h-64 object-cover rounded-lg" />
</section>
```

### About Section Image
```html
<!-- In index.html -->
<div class="about-image">
  <img src="./src/images/about-photo.jpg" alt="About our mission" class="w-full h-full object-cover rounded-lg" />
</div>
```

## Best Practices

1. **Use descriptive alt text** for accessibility
2. **Optimize images** before adding them to the project
3. **Use appropriate formats**:
   - SVG for logos and icons
   - WebP/JPEG for photos
   - PNG for images with transparency
4. **Keep file sizes reasonable** (under 500KB for most images)
5. **Use responsive images** with appropriate CSS classes

## Adding Your Own Images

1. Place your images in `src/images/`
2. Use one of the methods above to reference them
3. The development server will automatically reload when you add new images

## Build Output

When you run `npm run build`, your images will be:
- Optimized and compressed
- Moved to `dist/assets/` with hashed filenames
- Ready for deployment 