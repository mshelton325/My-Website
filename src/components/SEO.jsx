import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * SEO Component - Route-aware metadata management
 * 
 * Updates document title, meta tags, and Open Graph tags based on current route
 * Ensures each page has its own canonical URL and metadata
 */

// Helper function to identify legitimate auxiliary routes
function isLegitimateRoute(pathname) {
  // Main SEO routes with full metadata
  const mainRoutes = [
    '/',
    '/about',
    '/results-feedback',
    '/insights-resources',
    '/speaking',
    '/work-with-matt',
    '/education-day',
  ];
  
  if (mainRoutes.includes(pathname)) {
    return 'main';
  }
  
  // Legitimate auxiliary routes (utility, product, archive pages)
  const auxiliaryRoutes = [
    '/fit',
    '/diagnostic',
    '/diagnostic/confirmation',
    '/preview-a',
    '/preview-b',
    '/preview-c',
    '/preview-d',
    '/preview-e',
    '/review-system-sales',
    '/review-system-complete',
    '/review-leverage-manual',
    '/review-system-owner',
    '/private-note',
    '/cca-qr',
    '/archive/fit',
    '/archive/anchor',
    '/archive/home',
    '/archive/about',
    '/archive/services',
    '/archive/contact',
    '/archive/insights',
  ];
  
  if (auxiliaryRoutes.includes(pathname)) {
    return 'auxiliary';
  }
  
  // Dynamic route patterns
  if (pathname.startsWith('/resources/')) {
    return 'auxiliary';
  }
  
  if (pathname.startsWith('/archive/insights/')) {
    return 'auxiliary';
  }
  
  // If we reach here, it's genuinely a 404
  return '404';
}

const routeMetadata = {
  '/': {
    title: 'Matt Shelton Consulting | Practical Systems for Independent Flooring Dealers',
    description: 'Practical systems, tools, and guidance for independent flooring dealers to improve control, follow-up, people development, profit protection, and owner visibility.',
    canonical: 'https://mattshelton.co/',
  },
  '/about': {
    title: 'About Matt Shelton | Matt Shelton Consulting',
    description: 'Nearly two decades of hands-on leadership, management, selling, coaching, systems-building, and operational problem-solving inside a family flooring business.',
    canonical: 'https://mattshelton.co/about',
  },
  '/results-feedback': {
    title: 'Results & Feedback | Matt Shelton Consulting',
    description: 'Documented outcomes, dealer feedback, and professional endorsements from Matt Shelton\'s flooring-industry work and experience.',
    canonical: 'https://mattshelton.co/results-feedback',
  },
  '/insights-resources': {
    title: 'Insights & Resources | Matt Shelton Consulting',
    description: 'Practical tools, downloadable resources, and systems thinking for independent flooring dealers. Learn, try, and use something today.',
    canonical: 'https://mattshelton.co/insights-resources',
  },
  '/speaking': {
    title: 'Speaking | Matt Shelton - CCA Education Day Speaker',
    description: 'Matt Shelton speaking engagements, including the CCA Education Day session rated 4.89/5 by attendees. Learn about booking Matt for your event.',
    canonical: 'https://mattshelton.co/speaking',
  },
  '/work-with-matt': {
    title: 'Work With Matt | Matt Shelton Consulting',
    description: 'Three ways to work with Matt Shelton: Learn from resources, get guidance on specific problems, or work directly on systems implementation.',
    canonical: 'https://mattshelton.co/work-with-matt',
  },
  '/education-day': {
    title: 'CCA Education Day Resources | Matt Shelton',
    description: '8 downloadable tools from the "Gold Beneath Your Feet" CCA Education Day session, focused on opportunity, follow-up, conversion, accountability, and operating leaks.',
    canonical: 'https://mattshelton.co/education-day',
  },
};

export default function SEO() {
  const location = useLocation();

  useEffect(() => {
    const routeType = isLegitimateRoute(location.pathname);
    
    // Handle true 404 routes
    if (routeType === '404') {
      document.title = 'Page Not Found | Matt Shelton Consulting';
      
      // Set noindex for 404 pages
      let robotsMeta = document.querySelector('meta[name="robots"]');
      if (!robotsMeta) {
        robotsMeta = document.createElement('meta');
        robotsMeta.name = 'robots';
        document.head.appendChild(robotsMeta);
      }
      robotsMeta.content = 'noindex';
      
      // Remove canonical for 404 pages
      const canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) {
        canonicalLink.remove();
      }
      
      return;
    }
    
    // Handle legitimate auxiliary routes (utility, product, archive pages)
    if (routeType === 'auxiliary') {
      document.title = 'Matt Shelton Consulting';
      
      // Set noindex for auxiliary routes
      let robotsMeta = document.querySelector('meta[name="robots"]');
      if (!robotsMeta) {
        robotsMeta = document.createElement('meta');
        robotsMeta.name = 'robots';
        document.head.appendChild(robotsMeta);
      }
      robotsMeta.content = 'noindex';
      
      // Remove canonical for auxiliary routes
      const canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) {
        canonicalLink.remove();
      }
      
      return;
    }
    
    // Handle main SEO routes with full metadata
    // Remove robots noindex if it exists
    const robotsMeta = document.querySelector('meta[name="robots"]');
    if (robotsMeta) {
      robotsMeta.remove();
    }
    
    const metadata = routeMetadata[location.pathname];

    // Update document title
    document.title = metadata.title;

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = metadata.description;

    // Update or create canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = metadata.canonical;

    // Update or create Open Graph title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.content = metadata.title;

    // Update or create Open Graph description
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.content = metadata.description;

    // Update or create Open Graph URL
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrl);
    }
    ogUrl.content = metadata.canonical;

  }, [location.pathname]);

  return null; // This component doesn't render anything
}
