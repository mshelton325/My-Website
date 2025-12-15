import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// NEW PUBLIC PAGES
import Anchor from './pages/Anchor';
import Diagnostic from './pages/Diagnostic';
import DiagnosticConfirmation from './pages/DiagnosticConfirmation';

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

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Routes>
          {/* NEW PUBLIC HOMEPAGE - Minimal Anchor Page (no nav/footer) */}
          <Route path="/" element={<Anchor />} />
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
          
          {/* HIDDEN PAGES - Preserved for future expansion (accessible via direct URL only) */}
          {/* Tagged: Future Expansion, Proof Library, Long-Form Authority Content */}
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
