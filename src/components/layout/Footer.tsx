/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white py-24">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
          <div className="space-y-12">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-white text-[#1A1A1A] flex items-center justify-center font-sans text-xs font-black">A</div>
              <span className="font-sans text-lg font-black tracking-tight uppercase">
                AMP<span className="text-[#C53030]">SCREENS</span>
              </span>
            </Link>
            <p className="font-sans text-[10px] font-black leading-loose opacity-40 uppercase tracking-[0.1em]">
              Architecting precision DC power delivery systems for industrial research, aerospace validation, and semiconductor development. Established 2026. Global delivery logistics enabled.
            </p>
          </div>

          <div>
            <h4 className="font-sans text-[10px] font-black uppercase tracking-[0.4em] mb-10 text-[#C53030]">Inventory</h4>
            <ul className="space-y-4 font-sans text-[10px] font-bold uppercase tracking-widest text-gray-400">
              <li><Link to="/category/800v-variable-power-supply" className="hover:text-white transition-colors">800V DC Series</Link></li>
              <li><Link to="/category/600v-variable-power-supply" className="hover:text-white transition-colors">600V DC Series</Link></li>
              <li><Link to="/category/300v-variable-power-supply" className="hover:text-white transition-colors">300V DC Series</Link></li>
              <li><Link to="/category/120v-variable-power-supply" className="hover:text-white transition-colors">120V DC Series</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-[10px] font-black uppercase tracking-[0.4em] mb-10 text-[#C53030]">Applications</h4>
            <ul className="space-y-4 font-sans text-[10px] font-bold uppercase tracking-widest text-gray-400">
              <li><Link to="/category/rack-mount-variable-power-supply" className="hover:text-white transition-colors">Rack Systems</Link></li>
              <li><Link to="/category/linear-variable-power-supply" className="hover:text-white transition-colors">Linear DC</Link></li>
              <li><Link to="/category/10a-variable-power-supply" className="hover:text-white transition-colors">10A Series</Link></li>
              <li><Link to="/category/0-30v-10a-variable-power-supply" className="hover:text-white transition-colors">30V/10A SKU</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-[10px] font-black uppercase tracking-[0.4em] mb-10 text-[#C53030]">Resources</h4>
            <ul className="space-y-4 font-sans text-[10px] font-bold uppercase tracking-widest text-gray-400">
              <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing Index</Link></li>
              <li><Link to="/where-to-buy" className="hover:text-white transition-colors">Where to Buy</Link></li>
              <li><Link to="/how-to-use" className="hover:text-white transition-colors">Technical Guide</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Catalog Index</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[9px] font-black uppercase tracking-[0.4em] text-gray-400">
          <p>© 2026 AMP SCREENS INDUSTRIAL. ISO 9001 CERTIFIED.</p>
          <div className="flex space-x-12">
            <a href="#" className="hover:text-white transition-colors">Safety_Standards</a>
            <a href="#" className="hover:text-white transition-colors">Privacy_Index</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
