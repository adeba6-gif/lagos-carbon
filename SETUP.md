# Lagos Carbon React App - Setup Guide

## What's Been Done

Converted single-file HTML application  into a modern, component-based Vite React app with the following improvements:

### ✅ Conversion Complete

1. **Vite React Setup**: Initialized with all necessary build tools and dependencies
2. **Component Architecture**: 
   - 2 Layout Components (Navigation, Footer)
   - 5 Page Components (Home, About, Developers, FAQs, Contact)
   - 7 Section Components (Hero, TrustBar, WhatWeDo, HowItWorks, WhyLagosCarbon, Insights, RFPBanner)
3. **Global Context**: Page navigation using React Context API
4. **Styling**: All CSS organized in a single `theme.css` file with variables
5. **Responsive Design**: Mobile-first approach with breakpoints
6. **Forms & Interactivity**: Contact form with submission feedback, FAQ accordion

## Installation & Running

### Step 1: Install Dependencies

```bash
cd /Users/emmsdan/Repo/tn/lagos-carbon
npm install
```

### Step 2: Start Development Server

```bash
npm run dev
```

The app will open at `http://localhost:5173`

### Step 3: Build for Production

```bash
npm run build
```

Output will be in the `dist/` directory.

## Project Structure

```
src/
├── components/       # Navigation, Footer
├── pages/           # HomePage, AboutPage, DevelopersPage, FAQsPage, ContactPage
├── sections/        # Individual sections of the home page
├── context/         # PageContext for navigation state
├── styles/          # Centralized CSS
├── App.jsx          # Main component
└── main.jsx         # Entry point
```

## Key Files Modified/Created

### New Files:
- `src/components/Navigation.jsx` - Sticky navigation bar
- `src/components/Footer.jsx` - Footer with links
- `src/pages/HomePage.jsx` - Home page combining all sections
- `src/pages/AboutPage.jsx` - About/Mission page
- `src/pages/DevelopersPage.jsx` - For developers page
- `src/pages/FAQsPage.jsx` - FAQs with collapsible items
- `src/pages/ContactPage.jsx` - Contact form page
- `src/sections/*.jsx` - Individual sections (7 components)
- `src/context/PageContext.jsx` - Navigation context
- `src/styles/theme.css` - All global styles
- `ARCHITECTURE.md` - Detailed architecture documentation

### Updated Files:
- `src/App.jsx` - Now uses context-based routing
- `src/main.jsx` - Wrapped with PageProvider
- `index.html` - Added Google Fonts, updated title
- `src/index.css` - Simplified to base styles only
- `package.json` - No changes needed (Vite + React already installed)

## Features

✅ **Page Navigation**: Smooth transitions between 5 pages
✅ **Mobile Responsive**: Adapts to all screen sizes
✅ **Component Reusability**: Modular design for easy maintenance
✅ **Global Styling**: CSS variables for consistent theming
✅ **Form Handling**: Working contact form with feedback
✅ **FAQ Accordion**: Collapsible FAQ items
✅ **Smooth Scrolling**: Built-in scroll-to-top on page navigation

## Customization

### Colors & Typography

Edit `src/styles/theme.css` to customize:
- Color scheme (--green, --dark, --bg, etc.)
- Typography (font sizes, weights)
- Spacing and layout
- Breakpoints

### Adding More Pages

1. Create a new page in `src/pages/`
2. Import it in `src/App.jsx`
3. Add a new condition in the render
4. Update the navigation links in `Navigation.jsx`

### Adding Components

Create components in `src/components/` or `src/sections/` and import them where needed.

## Development Tips

- **Hot Module Replacement**: Changes save instantly during development
- **React DevTools**: Install React DevTools browser extension for debugging
- **CSS Variables**: Use defined variables instead of hardcoding colors
- **Component Props**: Avoid prop drilling by using Context where needed

## Next Steps (Optional Enhancements)

1. **Add React Router**: For better URL routing and browser history support
2. **Connect API**: Add form submission to a backend service
3. **Add Images**: Place project images in `/public` directory
4. **SEO**: Use react-helmet for meta tags
5. **Testing**: Add Jest and React Testing Library
6. **Analytics**: Integrate tracking tools
7. **Deployment**: Deploy to Vercel, Netlify, or GitHub Pages

## Troubleshooting

### Port Already in Use
```bash
npm run dev -- --port 3000  # Use a different port
```

### Build Issues
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Clear Cache
```bash
rm -rf dist
npm run build
```

## File Size Optimization

The new structure is more maintainable and follows React best practices:
- ✅ Components are smaller and easier to understand
- ✅ Code is reusable and DRY
- ✅ Styling is centralized
- ✅ Navigation is efficient
- ✅ Tree-shaking friendly for production builds

## Performance

Your app will benefit from:
- Vite's instant HMR (Hot Module Replacement)
- Optimized production bundles
- Code splitting capabilities
- Lazy loading options for routes

## Questions?

Refer to:
- `ARCHITECTURE.md` - Detailed component structure
- `vite.config.js` - Vite configuration
- `package.json` - Dependencies and scripts
