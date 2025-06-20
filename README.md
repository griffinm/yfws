# Yes For Wilmington Schools

A static HTML website built with Vite, Tailwind CSS, and Hot Module Replacement (HMR).

## Features

- ⚡ **Fast Development** - Vite provides instant HMR and fast builds
- 🎨 **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- 📱 **Responsive Design** - Mobile-first approach with responsive components
- 🚀 **Static Site Generation** - Compiles to pure HTML, CSS, and JavaScript
- 🔧 **Modern Tooling** - PostCSS, Autoprefixer, and modern JavaScript

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

### Development

Start the development server with HMR:
```bash
npm run dev
```

The site will be available at `http://localhost:3000` with hot module replacement enabled.

### Building for Production

Build the static site:
```bash
npm run build
```

The compiled files will be in the `dist/` directory.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## Project Structure

```
├── index.html          # Main HTML file
├── src/
│   ├── style.css       # Main CSS file with Tailwind imports
│   └── main.js         # Main JavaScript file
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── postcss.config.js   # PostCSS configuration
└── package.json        # Dependencies and scripts
```

## Customization

### Styling
- Edit `src/style.css` to add custom styles
- Modify `tailwind.config.js` to customize Tailwind theme
- Add new CSS classes using Tailwind's `@layer` directive

### Content
- Update `index.html` to modify the site content
- Add new sections or components as needed

### Functionality
- Enhance `src/main.js` with additional JavaScript functionality
- Add new interactive features or animations

## Deployment

The `dist/` folder contains the static files that can be deployed to any web server:

- **Netlify**: Drag and drop the `dist/` folder
- **Vercel**: Connect your repository and set build command to `npm run build`
- **GitHub Pages**: Push the `dist/` contents to a `gh-pages` branch
- **Traditional hosting**: Upload the `dist/` contents to your web server

## Browser Support

- Modern browsers with ES6+ support
- Mobile browsers (iOS Safari, Chrome Mobile)
- Desktop browsers (Chrome, Firefox, Safari, Edge)

## License

ISC License - see package.json for details. 