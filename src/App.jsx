import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { SEO_PAGES } from './seoPages';
import Navigation from './components/Navigation';

// NEW PUBLIC PAGES
import Anchor from './pages/Anchor';
import Diagnostic from './pages/Diagnostic';
import DiagnosticConfirmation from './pages/DiagnosticConfirmation';
import Fit from './pages/Fit';
import ResultsFeedback from './pages/ResultsFeedback';
import Speaking from './pages/Speaking';
import InsightsResources from './pages/InsightsResources';
import WorkWithMatt from './pages/WorkWithMatt';
import Ask from './pages/Ask';

// HIDDEN PAGES (preserved, not deleted - for future expansion)
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Insights from './pages/Insights';
import BlogPost from './pages/BlogPost';
import BlogPostEnhanced from './pages/BlogPostEnhanced';

// PRODUCT PAGES (standalone, accessible via direct URL)
import ResourceRouter from './pages/resources';
import ReviewLeverageManual from './pages/ReviewLeverageManual';
import ReviewSystemOwner from './pages/ReviewSystemOwner';
import ReviewSystemComplete from './pages/ReviewSystemComplete';
import ReviewSystemSales from './pages/ReviewSystemSales';
import ReviewSystemSalesPreview from './pages/ReviewSystemSalesPreview';
import ReviewSystemSalesPreviewV2 from './pages/ReviewSystemSalesPreviewV2';
import ReviewSystemSalesPreviewV3 from './pages/ReviewSystemSalesPreviewV3';
import ReviewSystemSalesPreviewD from './pages/ReviewSystemSalesPreviewD';
import ReviewSystemSalesPreviewE from './pages/ReviewSystemSalesPreviewE';
import EducationDay from './pages/EducationDay';
import PrivateNote from './pages/PrivateNote';
import CcaQr from './pages/CcaQr';

function PageMetadata() {
  const { pathname } = useLocation();

  useEffect(() => {
    const data = SEO_PAGES[pathname] ?? SEO_PAGES['/'];
    const canonical = 'https://mattshelton.co' + (SEO_PAGES[pathname] ? pathname : '/');
    document.title = data.title;

    const setMeta = (selector, attribute, value) => {
      const element = document.querySelector(selector);
      if (element) element.setAttribute(attribute, value);
    };
    setMeta('meta[name="description"]', 'content', data.description);
    setMeta('meta[property="og:title"]', 'content', data.title);
    setMeta('meta[property="og:description"]', 'content', data.description);
    setMeta('meta[property="og:url"]', 'content', canonical);
    setMeta('link[rel="canonical"]', 'href', canonical);

    const existingRobots = document.querySelector('meta[name="robots"]');
    if (pathname === '/diagnostic/confirmation') {
      if (existingRobots) existingRobots.setAttribute('content', 'noindex,follow');
      else {
        const tag = document.createElement('meta');
        tag.setAttribute('name', 'robots');
        tag.setAttribute('content', 'noindex,follow');
        document.head.appendChild(tag);
      }
    } else if (existingRobots) {
      existingRobots.remove();
    }
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <PageMetadata />
        <Routes>
          {/* PUBLIC PAGES WITH NAVIGATION */}
          <Route path="/" element={<><Navigation /><Home /></>} />
          <Route path="/about" element={<><Navigation /><About /></>} />
          <Route path="/results-feedback" element={<><Navigation /><ResultsFeedback /></>} />
          <Route path="/speaking" element={<><Navigation /><Speaking /></>} />
          <Route path="/insights-resources" element={<><Navigation /><InsightsResources /></>} />
          <Route path="/work-with-matt" element={<><Navigation /><WorkWithMatt /></>} />
          <Route path="/ask" element={<><Navigation /><Ask /></>} />
          <Route path="/education-day" element={<><Navigation /><EducationDay /></>} />
          <Route path="/fit" element={<Navigate to="/work-with-matt" replace />} />
          
          {/* STANDALONE PAGES WITHOUT NAVIGATION */}
          <Route path="/diagnostic" element={<Diagnostic />} />
          <Route path="/diagnostic/confirmation" element={<DiagnosticConfirmation />} />
          
          {/* Standalone Product Pages - no navigation/footer */}
          <Route path="/preview-a" element={<ReviewSystemSalesPreview />} />
          <Route path="/preview-b" element={<ReviewSystemSalesPreviewV2 />} />
          <Route path="/preview-c" element={<ReviewSystemSalesPreviewV3 />} />
          <Route path="/preview-d" element={<ReviewSystemSalesPreviewD />} />
          <Route path="/preview-e" element={<ReviewSystemSalesPreviewE />} />
          <Route path="/review-system-sales" element={<ReviewSystemSales />} />
          <Route path="/review-system-complete" element={<ReviewSystemComplete />} />
          <Route path="/review-leverage-manual" element={<ReviewLeverageManual />} />
          <Route path="/review-system-owner" element={<ReviewSystemOwner />} />
          <Route path="/resources/:token" element={<ResourceRouter />} />
          <Route path="/private-note" element={<PrivateNote />} />
          <Route path="/cca-qr" element={<CcaQr />} />
          
          {/* HIDDEN PAGES - Preserved for future expansion (accessible via direct URL only) */}
          {/* Tagged: Future Expansion, Proof Library, Long-Form Authority Content */}
          <Route path="/archive/fit" element={<Fit />} />
          <Route path="/archive/anchor" element={<Anchor />} />
          <Route path="/archive/home" element={<Home />} />
          <Route path="/archive/about" element={<About />} />
          <Route path="/archive/services" element={<Services />} />
          <Route path="/archive/contact" element={<Contact />} />
          <Route path="/archive/insights" element={<Insights />} />
          <Route path="/archive/insights/:slug" element={<BlogPostEnhanced />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
