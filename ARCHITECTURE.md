# Lagos Carbon - Vite React App

A modern, component-based React application for Lagos Carbon, Africa's first government-organised environmental market.

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navigation.jsx   # Top navigation bar
│   └── Footer.jsx       # Footer component
│
├── pages/               # Page components
│   ├── HomePage.jsx     # Home page with hero, features, etc.
│   ├── AboutPage.jsx    # About page
│   ├── DevelopersPage.jsx  # For Developers page
│   ├── FAQsPage.jsx     # FAQs page
│   └── ContactPage.jsx  # Contact/Submit form page
│
├── sections/            # Home page sections
│   ├── Hero.jsx         # Hero section
│   ├── TrustBar.jsx     # Trust bar with partners
│   ├── WhatWeDo.jsx     # What we do section
│   ├── HowItWorks.jsx   # How it works (3-step process)
│   ├── WhyLagosCarbon.jsx  # Why choose Lagos Carbon
│   ├── Insights.jsx     # Sample reports section
│   └── RFPBanner.jsx    # Call-to-action banner
│
├── context/             # React Context API
│   └── PageContext.jsx  # Page navigation context
│
├── styles/              # Global styles
│   └── theme.css        # All CSS styles and variables
│
├── App.jsx              # Main app component
├── main.jsx             # Entry point with PageProvider
├── index.css            # Base styles
└── [other files]

```

## Key Features

- **Multi-page Navigation**: 5 main pages with context-based page switching
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox
- **Component Architecture**: Modular, reusable components
- **Global Styling**: Centralized CSS with CSS variables for theming
- **Form Handling**: Contact form with submission feedback
- **FAQ Accordion**: Collapsible FAQ items

## Pages

### Home Page
- Hero section with call-to-action buttons
- Trust bar highlighting partner institutions
- What We Do section
- How It Works (3-step process)
- Why Lagos Carbon advantages
- Sample project reports
- RFP banner

### About Page
- Mission statement
- Lagos Standard explanation
- Ecosystem flow diagram
- Who we work with (6 categories)

### For Developers Page
- Benefits of registration
- Eligible project types
- Example economics box
- 6-step onboarding process
- Checklist of supported projects

### FAQs Page
- 8 collapsible FAQ items
- Topics: environmental credits, I-RECs, onboarding, costs, etc.

### Contact Page
- Project submission form with 3 sections
- Contact details sidebar
- Form submission feedback

## Styling

All styles are defined in `src/styles/theme.css` using:
- CSS Variables for colors and spacing
- CSS Grid for layouts
- Flexbox for components
- Mobile-first responsive design
- BEM-style class naming

### Color Palette
- Primary Green: `#1D6B47`
- Dark: `#0D1F14`
- Light Gray: `#FAFCFA`
- Text: `#1a2e1f`
- Muted: `#5a7060`

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## Component Hierarchy

```
PageProvider (Context)
  └── App
      ├── Navigation
      ├── HomePage
      │   ├── Hero
      │   ├── TrustBar
      │   ├── WhatWeDo
      │   ├── HowItWorks
      │   ├── WhyLagosCarbon
      │   ├── Insights
      │   ├── RFPBanner
      │   └── Footer
      ├── AboutPage
      │   └── Footer
      ├── DevelopersPage
      │   └── Footer
      ├── FAQsPage
      │   └── Footer
      └── ContactPage
          └── Footer
```

## Context API Usage

The `PageContext` provides:
- `currentPage`: The currently active page name
- `showPage(name)`: Function to navigate to a page and scroll to top

Usage:
```jsx
const { showPage } = useContext(PageContext);
showPage('contact'); // Navigate to contact page
```

## Form Handling

The contact form on the Contact page:
- Validates required fields (name, email)
- Shows submission confirmation message
- Clears after 5 seconds

## Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

Grid layouts automatically adjust:
- 2-column grids → 1 column on mobile
- 3-column grids → 1 column on mobile

## Typography

Fonts from Google Fonts:
- **Headings**: DM Serif Display (400 weight)
- **Body**: DM Sans (300, 400, 500 weights)

## Next Steps

To extend this project:

1. **Add Navigation**: Implement React Router for client-side routing
2. **API Integration**: Connect to backend for form submissions
3. **Image Assets**: Add logo and project images to `/public`
4. **Analytics**: Integrate Google Analytics or similar
5. **SEO**: Add meta tags and Open Graph tags
6. **Testing**: Add Jest and React Testing Library tests

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
