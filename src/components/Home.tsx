/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '../data/categories';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  useEffect(() => {
    document.title = "Variable Power Supply | High-Precision Programmable Engineering Sources";
  }, []);
  const featured = CATEGORIES;

  return (
    <div className="bg-[#F9F9F8] min-h-screen text-[#1A1A1A]">
      {/* Hero Section - Refined side-by-side */}
      <section className="border-b border-[#1A1A1A] bg-white pt-10 md:pt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
          <div className="p-8 md:p-16 flex flex-col justify-center border-r-[0.5px] border-[#1A1A1A]">
            <div className="font-sans text-[11px] font-black uppercase tracking-[0.4em] mb-12 text-[#C53030]">
              Engineering Catalog / 2026 Series
            </div>
            <h1 className="font-sans text-6xl md:text-7xl font-black uppercase tracking-[-0.04em] leading-[0.85] mb-12">
              VARIABLE <br />
              POWER <br />
              <span className="text-[#C53030]">SUPPLY.</span>
            </h1>
            <div className="max-w-md space-y-10">
              <p className="font-sans text-xs font-bold uppercase tracking-tight leading-relaxed opacity-60 italic">
                Leading authority in high-precision variable power solutions. Engineering micro-adjustable power systems for aerospace validation and laboratory research.
              </p>
              
                <div className="flex flex-col space-y-4">
                  <button 
                    onClick={() => {
                      const el = document.getElementById('catalog');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-[#1A1A1A] text-white px-12 py-6 font-sans text-xs font-black uppercase tracking-[0.3em] hover:bg-[#C53030] shadow-sm transition-all w-full md:w-auto text-center rounded-[2px]"
                  >
                    View Technical Catalog
                  </button>
                  <a 
                    href="https://variabledcpowersupply.com/"
                    target="_blank"
                    rel="noopener"
                    className="flex items-center gap-2 group/link"
                  >
                    <span className="font-sans text-[10px] font-black uppercase tracking-[0.2em] border-b border-[#1A1A1A] group-hover/link:border-[#C53030] transition-colors">
                      Check Live Stock & Pricing on eTommens Official
                    </span>
                    <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform group-hover/link:text-[#C53030]" />
                  </a>
                </div>
            </div>
          </div>
          <div className="bg-[#F9F9F8] flex flex-col relative group overflow-hidden">
            <div className="p-8 border-b border-[#1A1A1A]/10 flex justify-between items-center">
              <div className="font-mono text-[9px] uppercase tracking-widest text-gray-400">Reference_Model: MOD_720_GEN</div>
              <div className="w-4 h-4 border border-[#1A1A1A]/20 flex items-center justify-center">
                <div className="w-1 h-1 bg-[#C53030]" />
              </div>
            </div>
            
            <div className="flex-1 relative flex items-center justify-center p-12">
               {/* Engineering Grid */}
               <div className="absolute inset-0 opacity-[0.03]" 
                    style={{backgroundImage: 'linear-gradient(#1A1A1A 1px, transparent 1px), linear-gradient(90deg, #1A1A1A 1px, transparent 1px)', backgroundSize: '40px 40px'}}>
               </div>
               
               <motion.div 
                 initial={{ opacity: 0, scale: 0.98 }}
                 animate={{ opacity: 1, scale: 1 }}
                 className="relative z-10 w-full aspect-video grayscale hover:grayscale-0 transition-all duration-1000"
               >
                 <img 
                   src="https://picsum.photos/seed/industrial/1200/675" 
                   alt="Main Industrial SKU"
                   referrerPolicy="no-referrer"
                   className="w-full h-full object-cover"
                 />
                 
                 <div className="absolute top-4 right-4 bg-white/90 p-3 border border-[#1A1A1A] font-mono text-[8px] uppercase tracking-tighter">
                    V_SET: 800.00V <br />
                    I_REG: 10.000A
                 </div>
               </motion.div>
            </div>

            <div className="px-10 py-8 border-t border-[#1A1A1A] flex justify-between items-center bg-white">
               <span className="font-sans text-[10px] font-black uppercase tracking-[0.5em] text-[#1A1A1A]">Variable Power Supply Index</span>
               <div className="flex items-center space-x-3">
                 <div className="w-2 h-2 rounded-full bg-[#C53030] animate-pulse" />
                 <span className="font-mono text-[9px] text-gray-400 uppercase tracking-widest">REF_SYS_2026</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Grid Section */}
      <section id="catalog" className="bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l-[0.5px] border-[#1A1A1A]">
          {featured.map((cat, idx) => (
            <Link 
              key={cat.slug} 
              to={`/${cat.slug}`}
              className="group border-r-[0.5px] border-b-[0.5px] border-[#1A1A1A] p-12 hover:bg-[#F9F9F8] transition-all flex flex-col justify-between aspect-square relative"
            >
              <div className="relative z-10">
                <div className="font-sans text-[11px] font-black text-[#C53030] mb-8">
                  NO. {String(idx + 1).padStart(2, '0')}
                </div>
                <h4 className="font-sans text-2xl font-black uppercase tracking-tighter leading-none mb-4 group-hover:translate-x-1 transition-transform">
                  {cat.name}
                </h4>
                <p className="font-sans text-[9px] font-bold uppercase tracking-[0.2em] leading-relaxed opacity-40">
                  {cat.description}
                </p>
              </div>
              <div className="flex justify-between items-end relative z-10">
                <div className="w-10 h-10 border border-[#1A1A1A] flex items-center justify-center group-hover:bg-[#C53030] group-hover:border-[#C53030] transition-all">
                  <ArrowRight className="w-5 h-5 group-hover:text-white" />
                </div>
                <div className="font-mono text-[8px] text-gray-400 group-hover:text-[#1A1A1A] uppercase tracking-widest">DS_SHEET_REF</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Technical Standards Section - High SEO & LSI density */}
      <section className="py-24 bg-white border-t border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
           <div className="flex flex-col lg:flex-row items-baseline justify-between mb-20 gap-8">
              <div className="space-y-4">
                <div className="font-sans text-[11px] font-black text-[#C53030] uppercase tracking-[0.5em]">// INDUSTRY_BENCHMARKS</div>
                <h2 className="font-sans text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none italic">
                  Variable Power Supply <br /> Technical Standards
                </h2>
              </div>
              <p className="max-w-md font-sans text-xs font-bold uppercase tracking-tight leading-loose opacity-60">
                 Our engineering protocols for 2026 revolve around four critical success factors in variable power architecture: high-speed logic control, redundant OVP safety arrays, precision linear regulation, and dynamic transient recovery.
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1A1A1A]/10 border border-[#1A1A1A]/10">
              {[
                { 
                  title: 'Programmable Control', 
                  kw: 'Variable Power Supply LSI', 
                  desc: 'Integrating SCPI and GPIB protocols for automated variable voltage sequences. Reliable remote sensing for precise power delivery across long-lead connections.'
                },
                { 
                  title: 'Transient Response', 
                  kw: 'Adjustable DC Source Specs', 
                  desc: 'Sub-50μs recovery times for high-frequency switching environments. Essential for testing sensitive micro-controllers and high-speed CMOS circuits.'
                },
                { 
                  title: 'Ripple & Noise Ratio', 
                  kw: 'Laboratory Precision Power', 
                  desc: 'Linear-stage post-regulation achieving <10mV rms purity. The industry-leading benchmark for benchtop variable power supply laboratory research.'
                },
                { 
                  title: 'Isolated Protection', 
                  kw: 'Industrial Safety Standards', 
                  desc: 'Redundant Over-Voltage (OVP) and Over-Current (OCP) interlocks. Isolated analog interfaces provide decoupled control logic from high-voltage rails.'
                }
              ].map((item, i) => (
                <div key={i} className="bg-white p-12 space-y-6 hover:bg-[#F9F9F8] transition-colors">
                   <div className="font-sans text-[10px] font-black uppercase tracking-widest text-[#C53030] opacity-40">STANDARD_REF_{i+1}</div>
                   <h3 className="font-sans text-xl font-black uppercase tracking-tighter italic leading-none">{item.title}</h3>
                   <p className="font-sans text-[10px] font-bold uppercase leading-relaxed text-gray-500">{item.desc}</p>
                   <div className="pt-4 font-mono text-[8px] text-gray-300 uppercase tracking-widest">{item.kw}</div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Heavy SEO Content Matrix */}
      <section className="py-24 bg-white border-t border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-8">
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              <div className="space-y-6">
                <div className="font-sans text-[9px] font-black uppercase tracking-[0.4em] text-[#C53030] mb-2">// TECH_INSIGHT_01_AVIONICS</div>
                <h4 className="font-sans text-xl font-black uppercase tracking-tighter">Mission-Critical Calibration: Variable Power Supply in Avionics Repair</h4>
                <p className="font-sans text-[11px] font-bold uppercase tracking-tight leading-loose text-gray-500 italic">
                   Ensuring the integrity of aerospace electronic components demands a variable power supply with zero-overshoot characteristics. From logic rail simulation to high-precision signal conditioning, our variable sources provide the NIST-traceable stability required for FAA-standard aviation maintenance environments.
                </p>
              </div>
              <div className="space-y-6">
                <div className="font-sans text-[9px] font-black uppercase tracking-[0.4em] text-[#C53030] mb-2">// TECH_INSIGHT_02_SEMICONDUCTOR</div>
                <h4 className="font-sans text-xl font-black uppercase tracking-tighter">Advanced Semiconductor Validation via Programmable Variable Systems</h4>
                <p className="font-sans text-[11px] font-bold uppercase tracking-tight leading-loose text-gray-500 italic">
                   Scaling semiconductor production requires automated variable power supply integration into ATE (Automated Test Equipment) frameworks. Our programmable variable units offer sub-millisecond transient response times, allowing for rigorous stress-testing of integrated circuits under dynamic load variations.
                </p>
              </div>
              <div className="space-y-6">
                <div className="font-sans text-[9px] font-black uppercase tracking-[0.4em] text-[#C53030] mb-2">// TECH_INSIGHT_03_ENERGY</div>
                <h4 className="font-sans text-xl font-black uppercase tracking-tighter">High-Voltage Stability for Renewable Energy R&D</h4>
                <p className="font-sans text-[11px] font-bold uppercase tracking-tight leading-loose text-gray-500 italic">
                   Analyzing the efficiency crossover of next-generation solar inverters necessitates an adjustable 800V variable power supply. We focus on low-ripple output and galvanic isolation, providing researchers with a surgical-level adjustable source for safe and reliable renewable energy hardware development.
                </p>
              </div>
           </div>
        </div>
      </section>

      {/* Simplified SEO Footer Context */}
      <section className="py-24 bg-[#F9F9F8] border-y border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20">
           <div className="space-y-8">
             <div className="font-sans text-[11px] font-black text-[#C53030] uppercase tracking-[0.4em]">// ARCHITECTURE_CONTEXT</div>
             <h2 className="font-sans text-4xl font-black uppercase tracking-tighter leading-tight italic">
               PRECISION VARIABLE <br /> POWER SUPPLY SOLUTIONS.
             </h2>
             <p className="font-sans text-xs font-bold uppercase tracking-tight leading-[1.8] opacity-60">
               Engineering high-performance variable power systems for global industrial compliance. From benchtop variable power supplies for lab research to 800V switching modules for EV validation, we provide 28 distinct industrial classes.
             </p>
           </div>
           <div className="flex flex-col justify-center space-y-8">
              <div className="grid grid-cols-2 gap-8 border-l-4 border-gray-200 pl-8">
                 <div>
                   <div className="font-sans text-[10px] font-black uppercase tracking-widest mb-2">Linear Adjustment</div>
                   <p className="font-sans text-[9px] font-bold text-gray-400 uppercase tracking-tight italic">Resolution ±10mV / 1mA</p>
                 </div>
                 <div>
                   <div className="font-sans text-[10px] font-black uppercase tracking-widest mb-2">Transient Recovery</div>
                   <p className="font-sans text-[9px] font-bold text-gray-400 uppercase tracking-tight italic">&lt; 50μs Response Time</p>
                 </div>
              </div>
              <button className="self-start text-[11px] font-black underline uppercase tracking-[0.4em] hover:text-[#C53030] transition-colors">
                Contact Technical Support
              </button>
           </div>
        </div>
      </section>
    </div>
  );
}
