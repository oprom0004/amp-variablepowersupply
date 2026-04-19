/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import HowToUse from './components/HowToUse';
import WhereToBuy from './components/WhereToBuy';
import Pricing from './components/Pricing';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/Home';
import CategoryDetail from './components/CategoryDetail';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/how-to-use" element={<HowToUse />} />
            <Route path="/where-to-buy" element={<WhereToBuy />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/category/:slug" element={<CategoryDetail />} />
            {/* Catch-all for basic SEO slugs that should redirect to category detail or home */}
            <Route path="/:slug" element={<CategoryDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
