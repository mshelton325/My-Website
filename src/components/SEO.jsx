import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * SEO Component - Route-aware metadata management
 * 
 * Updates document title, meta tags, and Open Graph tags based on current route
 * Ensures each page has its own canonical URL and metadata
 */

const routeMetadata = {
  '/': {
    title: 'Matt Shelton Consulting | Flooring Business Systems & Sales Training',
    description: 'Operator-built playbooks to grow sales, protect margin, and get your life back. Systems-driven consulting for independent flooring dealers.',
    canonical: 'https://mattshelton.co/',
  },
  '/about': {
    title: 'About Matt Shelton | Flooring Business Systems Expert',
    description: 'Nearly two decades inside a family flooring business. Learn about Matt\'s experience building systems, coaching teams, and helping dealers gain control.',
    canonical: 'https://mattshelton.co/about',
  },
  '/results-feedback': {
    title: 'Results & Feedback | Matt Shelton Consulting',
    description: 'Documented outcomes, dealer feedback, and testimonials from flooring business owners who have worked with Matt Shelton.',
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
    description: '8 downloadable tools from the "Gold Beneath Your Feet" CCA Education Day session. Find hidden revenue and reduce operational chaos.',
    canonical: 'https://mattshelton.co/education-day',
  },
};

export default function SEO() {
  const location = useLocation();

  useEffect(() => {
    const metadata = routeMetadata[location.pathname] || routeMetadata['/'];

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
