import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import ResourceRouter from './pages/resources';
import ReviewLeverageManual from './pages/ReviewLeverageManual';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Routes>
          {/* Standalone Product Pages - no navigation/footer */}
          <Route path="/review-leverage-manual" element={<ReviewLeverageManual />} />
          <Route path="/resources/:token" element={<ResourceRouter />} />
          
          {/* Main site pages - with navigation/footer */}
          <Route path="/*" element={
            <>
              <Navigation />
              <main>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </main>
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
