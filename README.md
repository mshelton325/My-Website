# Matt Shelton Consulting Website

A modern, professional consulting website for Matt Shelton, a second-generation flooring retailer and performance consultant specializing in systems-driven business growth for independent flooring dealers.

## 🎯 Purpose

This website serves as the home base for Matt Shelton's consulting practice, showcasing:
- Operator-built playbooks for flooring dealers
- Proven systems for review-first marketing, sales training, and operations
- Ethics-first approach to business growth
- Real results and case studies

## 🚀 Tech Stack

- **React 18** - Modern UI framework
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing

## 📁 Project Structure

```
src/
├── components/
│   ├── Navigation.jsx    # Main navigation bar
│   └── Footer.jsx        # Site footer
├── pages/
│   ├── Home.jsx          # Landing page with hero and core offerings
│   ├── About.jsx         # Matt's story, mission, and methodology
│   ├── Services.jsx      # Detailed service offerings
│   └── Contact.jsx       # Contact form and information
├── App.jsx               # Main app component with routing
├── main.jsx             # Entry point
└── index.css            # Global styles with Tailwind

## 🛠️ Development

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Running Locally

```bash
# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Building for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## 🎨 Design System

### Colors
- **Primary**: Blue tones (#0369a1 to #0c4a6e) - Trust, professionalism
- **Accent**: Green for success states
- **Neutral**: Gray scale for text and backgrounds

### Typography
- System fonts for fast loading and native feel
- Clear hierarchy with semantic HTML

### Components
- Fully responsive mobile-first design
- Accessible navigation with mobile menu
- Clean card-based layouts
- Call-to-action buttons throughout

## 📄 Pages

### Home
- Hero section with value proposition
- Social proof (stats and results)
- Problem/solution framework
- Core services preview
- Mission statement
- Strong CTAs

### About
- Matt's turnaround story
- Mission and values
- Three-pillar methodology
- Consulting practice overview
- Long-term vision
- Personal background

### Services
- Four core service offerings:
  1. Review-First Marketing Systems
  2. Sales Training Systems
  3. Operational Systems
  4. Manufacturer Accountability
- How we work together
- Who this is for
- Clear CTAs

### Contact
- Simple contact form
- What to expect information
- FAQ section
- Direct email option

## 🔄 Future Enhancements

- [ ] Integrate real form submission (Formspree, Netlify Forms, or backend API)
- [ ] Add blog/resources section
- [ ] Implement testimonials section
- [ ] Add case studies
- [ ] Set up analytics (Google Analytics, Plausible, etc.)
- [ ] Add SEO optimization (meta tags, Open Graph, structured data)
- [ ] Integrate email marketing (newsletter signup)
- [ ] Add downloadable resources/lead magnets

## 📝 Content Updates

To update content, edit the respective page files in `src/pages/`:
- `Home.jsx` - Homepage content
- `About.jsx` - About page content
- `Services.jsx` - Services page content
- `Contact.jsx` - Contact page content

## 🚀 Deployment

This site can be deployed to various platforms:

### Netlify
```bash
# Build command
npm run build

# Publish directory
dist
```

### Vercel
```bash
# Build command
npm run build

# Output directory
dist
```

### GitHub Pages
```bash
# Install gh-pages
npm install -D gh-pages

# Add to package.json scripts
"deploy": "npm run build && gh-pages -d dist"

# Deploy
npm run deploy
```

## 📧 Contact Integration

The contact form currently logs to console. To make it functional, integrate one of these services:

1. **Formspree** - Simple form backend
2. **Netlify Forms** - Built-in if hosting on Netlify
3. **EmailJS** - Client-side email sending
4. **Custom API** - Build your own backend

## 🔒 Environment Variables

If adding form integration or analytics, create a `.env` file:

```env
VITE_FORM_ENDPOINT=your_form_endpoint
VITE_ANALYTICS_ID=your_analytics_id
```

## 📄 License

© 2025 Matt Shelton Consulting. All rights reserved.

## 🤝 Support

For questions or support regarding this website, contact: matt@mattshelton.consulting
