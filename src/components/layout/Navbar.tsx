/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CATEGORIES } from '../../data/categories';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleFullIndex = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (location.pathname === '/') {
      const el = document.getElementById('catalog');
      el?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById('catalog');
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const getInquiryUrl = () => {
    const path = location.pathname;
    
    // Exact slug extraction from path
    // path might be "/category/slug" or "/slug"
    const pathParts = path.split('/').filter(Boolean);
    const currentSlug = pathParts[pathParts.length - 1];
    
    // Check if it's a category page using exact match first
    const categoryMatch = CATEGORIES.find(c => c.slug === currentSlug);
    if (categoryMatch) return categoryMatch.url;

    // Mapping for operational pages
    if (path === '/how-to-use') return 'https://variabledcpowersupply.com/';
    if (path === '/where-to-buy') return 'https://variabledcpowersupply.com/';
    if (path === '/pricing') return 'https://variabledcpowersupply.com/';

    return 'https://variabledcpowersupply.com/';
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F9F9F8] border-b border-[#1A1A1A] text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-8 h-8 bg-[#1A1A1A] text-white flex items-center justify-center font-sans text-lg font-black tracking-tighter group-hover:bg-[#C53030] transition-colors">
              A
            </div>
            <span className="font-sans text-xl font-black tracking-tight uppercase">
              AMP<span className="text-[#C53030]">SCREENS</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="flex space-x-10 mr-10 h-20 items-center">
              <div className="relative group h-full flex items-center">
                <Link to="/" className="font-sans text-[10px] font-black uppercase tracking-[0.2em] hover:text-[#C53030] transition-colors flex items-center gap-1">
                  Catalog
                  <svg className="w-2.5 h-2.5 transition-transform group-hover:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </Link>
                
                {/* Mega Menu Dropdown */}
                <div className="absolute top-full -left-20 w-[720px] bg-white border border-[#1A1A1A] shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0 grid grid-cols-[1fr_1.2fr_1.8fr] p-8 gap-10">
                  <div className="space-y-5">
                    <div className="font-sans text-[10px] font-black text-[#C53030] uppercase tracking-[0.2em] border-b border-gray-100 pb-2 mb-2">High_Voltage</div>
                    <div className="grid grid-cols-1 gap-2.5">
                      {CATEGORIES.filter(c => c.slug.includes('v-variable') && parseInt(c.slug) >= 300).map(cat => (
                        <Link key={cat.slug} to={`/${cat.slug}`} className="font-sans text-[10px] font-bold uppercase tracking-tight hover:text-[#C53030] transition-colors">{cat.name.split(' ')[0]}</Link>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-5">
                    <div className="font-sans text-[10px] font-black text-[#C53030] uppercase tracking-[0.2em] border-b border-gray-100 pb-2 mb-2">Standard_DC</div>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
                      {CATEGORIES.filter(c => c.slug.includes('v-variable') && parseInt(c.slug) < 300).map(cat => (
                        <Link key={cat.slug} to={`/${cat.slug}`} className="font-sans text-[10px] font-bold uppercase tracking-tight hover:text-[#C53030] transition-colors">{cat.name.split(' ')[0]}</Link>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-5 border-l border-gray-100 pl-10">
                    <div className="font-sans text-[10px] font-black text-[#C53030] uppercase tracking-[0.2em] border-b border-gray-100 pb-2 mb-2">Specialized_Catalog</div>
                    <div className="grid grid-cols-1 gap-2.5">
                      {CATEGORIES.filter(c => !c.slug.includes('v-variable') && c.slug !== 'variable-power-supply').map(cat => (
                        <Link key={cat.slug} to={`/${cat.slug}`} className="font-sans text-[10px] font-bold uppercase tracking-tight hover:text-[#C53030] whitespace-nowrap">
                          {cat.name.replace('Variable Power Supply', '').trim()}
                        </Link>
                      ))}
                      <Link to="/" onClick={handleFullIndex} className="mt-2 pt-2 border-t border-gray-100 block font-sans text-[9px] font-black uppercase text-gray-400 hover:text-[#1A1A1A]">Full_Index_→</Link>
                    </div>
                  </div>
                </div>
              </div>

              <Link to="/how-to-use" className="font-sans text-[10px] font-black uppercase tracking-[0.2em] hover:text-[#C53030] transition-colors">
                Technical
              </Link>
            </div>
            <a 
              href={getInquiryUrl()}
              target="_blank"
              rel="noopener"
              className="bg-[#1A1A1A] text-white px-5 py-3 font-sans text-[10px] font-black uppercase tracking-[0.15em] hover:bg-[#C53030] transition-all flex items-center gap-2"
            >
              Check Live Stock & Pricing
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-[#1A1A1A]">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-[#F9F9F8] border-t border-[#1A1A1A] h-[calc(100vh-80px)] overflow-y-auto pb-20"
          >
            <div className="px-6 py-12 space-y-10">
              <div className="space-y-6">
                <Link onClick={handleFullIndex} to="/" className="block font-sans text-3xl font-black uppercase tracking-tighter">Catalog</Link>
                <Link onClick={() => setIsOpen(false)} to="/how-to-use" className="block font-sans text-3xl font-black uppercase tracking-tighter">Technical</Link>
              </div>

              <a 
                href={getInquiryUrl()}
                target="_blank"
                rel="noopener"
                className="block bg-[#1A1A1A] text-white px-6 py-5 font-sans text-xs font-black uppercase tracking-[0.2em] text-center"
              >
                Check Live Stock & Pricing
              </a>
              
              <div className="space-y-6 pt-10 border-t border-[#1A1A1A]">
                <p className="font-sans text-[10px] text-gray-400 font-bold uppercase tracking-[0.3em] mb-4">Quick_Access_Index</p>
                <div className="grid grid-cols-2 gap-x-6 gap-y-5">
                  {CATEGORIES.filter(c => c.slug !== 'variable-power-supply').slice(0, 16).map(cat => (
                    <Link 
                      key={cat.slug} 
                      onClick={() => setIsOpen(false)}
                      to={`/${cat.slug}`} 
                      className="block font-sans text-[11px] font-black uppercase tracking-tight hover:text-[#C53030] py-1"
                    >
                      {cat.name.replace('Variable Power Supply', '').trim() || cat.name}
                    </Link>
                  ))}
                  <Link 
                    onClick={handleFullIndex}
                    to="/" 
                    className="block font-sans text-[11px] font-black uppercase tracking-widest text-[#C53030] border-t border-[#C53030]/20 pt-4 mt-2 col-span-2"
                  >
                    View_All_28_Solutions_→
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
