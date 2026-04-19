"use client";

import Link from 'next/link';
import { motion } from 'motion/react';
import { ShieldCheck, Zap, Power, HelpCircle, BookOpen, Terminal, Activity } from 'lucide-react';

export default function HowToUseContent() {  const categories = [
    { title: 'Fundamental Operations', anchor: 'fundamentals' },
    { title: 'CV/CC Mode Logic', anchor: 'mode-logic' },
    { title: 'SCPI Automation', anchor: 'automation' },
    { title: 'Safety & Recalibration', anchor: 'safety' }
  ];
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-[#F9F9F8] pt-32 pb-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <nav className="flex items-center space-x-2 font-sans text-[10px] font-black uppercase tracking-[0.2em] mb-8">
          <Link href="/" className="text-gray-400 hover:text-[#C53030] transition-colors">Home</Link>
          <span className="text-gray-300">/</span>
          <span className="text-[#1A1A1A]">How_To_Use</span>
        </nav>
        {/* SEO Header */}
        <div className="border-b border-[#1A1A1A] pb-12 mb-16">
          <div className="font-sans text-[11px] font-black text-[#C53030] uppercase tracking-[0.5em] mb-4">Engineering_Knowledge_Base</div>
          <h1 className="font-sans text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.85]">
            Variable Power Supply <br /> Technical Support.
          </h1>
          <nav className="flex flex-wrap gap-x-10 gap-y-4 mt-12">
            {categories.map(cat => (
              <a key={cat.anchor} href={`#${cat.anchor}`} className="font-sans text-[10px] font-black uppercase tracking-[0.3em] text-[#1A1A1A]/40 hover:text-[#C53030] transition-colors flex items-center">
                <span className="w-1.5 h-1.5 bg-[#C53030] mr-2" /> {cat.title}
              </a>
            ))}
          </nav>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Main Content Hub */}
          <div className="lg:col-span-8 space-y-32">
            {/* Section 01 */}
            <section id="fundamentals" className="space-y-10 group">
              <div className="flex items-center space-x-6">
                 <div className="font-mono text-5xl font-black text-gray-100 group-hover:text-[#C53030] transition-colors leading-none">01</div>
                 <h2 className="font-sans text-2xl font-black uppercase tracking-tighter italic">Basic Commissioning: Power-Up Protocol</h2>
              </div>
              <p className="font-sans text-xs font-bold leading-relaxed text-[#1A1A1A] uppercase tracking-tight opacity-50 border-l-2 border-gray-100 pl-8">
                The initial setup of a high-performance variable power supply (鍙彉鐢垫簮) begins with grounding integrity. Before applying input AC, ensure the chassis ground is connected to a low-impedance earth loop. This prevents common-mode noise and ensures operator safety in high-voltage 800V environments.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                 <div className="p-8 border border-[#1A1A1A] bg-white space-y-4">
                    <ShieldCheck className="w-5 h-5 text-[#C53030]" />
                    <h3 className="font-sans text-[11px] font-black uppercase tracking-widest">Pre-Load Configuration</h3>
                    <p className="font-sans text-[10px] font-bold text-gray-400 uppercase tracking-tight leading-loose">
                       Always set OVP (Over-Voltage Protection) and I-LIMIT (Current Limit) thresholds 10% above your Device Under Test (DUT) rating before enabling the main output.
                    </p>
                 </div>
                 <div className="p-8 border border-[#1A1A1A] bg-white space-y-4">
                    <Power className="w-5 h-5 text-[#C53030]" />
                    <h3 className="font-sans text-[11px] font-black uppercase tracking-widest">Sense Terminal Management</h3>
                    <p className="font-sans text-[10px] font-bold text-gray-400 uppercase tracking-tight leading-loose">
                       For high-accuracy variable power supply applications, use remote sense terminals to compensate for voltage drops across the output cables.
                    </p>
                 </div>
              </div>
            </section>

            {/* Section 02 - Deep Technical Article */}
            <section id="mode-logic" className="p-16 bg-[#1A1A1A] text-white space-y-12 relative overflow-hidden">
               <Activity className="absolute bottom-0 right-0 w-64 h-64 text-white/5 -mb-20 -mr-20" />
               <div className="font-sans text-[9px] font-black opacity-30 uppercase tracking-[0.4em]">TECH_ARTICLE_02_MODES</div>
               <h2 className="font-serif text-4xl italic leading-tight">Understanding CV/CC Auto-Crossover in Variable Power Units</h2>
               <div className="space-y-8 font-sans text-xs font-bold leading-relaxed text-white/60 uppercase tracking-tight">
                  <p>A variable power supply operates in either Constant Voltage (CV) or Constant Current (CC) mode. The transition between these states depends on your set points and the load resistance. When the load current exceeds your set limit, the adjustable power supply will automatically switch to CC mode, dropping the voltage to maintain the current limit.</p>
                  <p>In programmable variable power supply systems, this "crossover point" is critical for battery charging and LED driver validation. Understanding the V/I curve of your variable source ensures you are providing the correct power profile ohne the risk of overcurrent damage.</p>
               </div>
               <div className="flex gap-10 border-t border-white/10 pt-10">
                  <div className="space-y-2">
                     <span className="block font-sans text-[9px] font-black uppercase tracking-widest text-[#C53030]">Transition Speed</span>
                     <span className="block font-sans text-2xl font-black tracking-tighter italic">&lt; 100ms</span>
                  </div>
                  <div className="space-y-2">
                     <span className="block font-sans text-[9px] font-black uppercase tracking-widest text-[#C53030]">Regulation Accuracy</span>
                     <span className="block font-sans text-2xl font-black tracking-tighter italic">±0.01% / mV</span>
                  </div>
               </div>
            </section>

            {/* Section 03 - Automation focus */}
            <section id="automation" className="space-y-12">
               <div className="flex items-center space-x-6 group">
                 <div className="font-mono text-5xl font-black text-gray-100 group-hover:text-[#C53030] transition-colors leading-none">03</div>
                 <h2 className="font-sans text-2xl font-black uppercase tracking-tighter italic">Automating Variable Power: SCPI & IEEE 488.2</h2>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                  <div className="space-y-6">
                     <p className="font-sans text-[11px] font-bold leading-relaxed text-gray-500 uppercase tracking-tight">
                        Modern programmable variable power supplies support a variety of digital interfaces (USB, LAN, RS232, LXI). Automating the voltage adjustment via SCPI allows for high-throughput ATE (Automated Test Equipment) sequencing.
                     </p>
                     <div className="p-10 border border-[#1A1A1A] bg-white space-y-6">
                        <Terminal className="w-5 h-5 text-[#C53030]" />
                        <h4 className="font-sans text-[11px] font-black uppercase tracking-widest leading-none">Protocol Stack</h4>
                        <div className="space-y-2 font-mono text-[9px] opacity-40">
                           - USB TMC Protocol Class <br />
                           - LXI VXI-11 Standard (LAN) <br />
                           - ASCII-based SCPI Commands
                        </div>
                     </div>
                  </div>
                  <div className="space-y-6 bg-white border border-[#1A1A1A] p-10">
                    <h4 className="font-sans text-[11px] font-black uppercase tracking-widest">Automation Scripting Sample (Python)</h4>
                    <pre className="font-mono text-[9px] bg-[#F9F9F8] p-6 border border-gray-100">
{`# Connect to Variable Power Supply
inst.write('*IDN?')
inst.write('VOLT 12.0') # Set Voltage
inst.write('CURR 2.0') # Set Current
inst.write('OUTP ON') # Enable Output`}
                    </pre>
                    <p className="font-sans text-[9px] font-bold text-[#C53030] uppercase tracking-widest italic">
                       // Reference ATE_COMMAND_LIB_REL_{currentYear}
                    </p>
                  </div>
               </div>
            </section>
          </div>

          {/* Sidebar - SEO Resource Index */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit space-y-12">
            <div className="p-10 bg-[#1A1A1A] text-white space-y-10 group">
               <BookOpen className="w-6 h-6 text-[#C53030]" />
               <h4 className="font-sans text-[11px] font-black uppercase tracking-[0.4em]">Resource Library</h4>
               <ul className="space-y-4 font-sans text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  <li><a href="https://variabledcpowersupply.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors border-b border-white/5 pb-3 block">SCPI Reference Guide.pdf</a></li>
                  <li><a href="https://variabledcpowersupply.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors border-b border-white/5 pb-3 block">LabVIEW Drivers (LXI).zip</a></li>
                  <li><a href="https://variabledcpowersupply.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors border-b border-white/5 pb-3 block">Safety Compliance Sheet.doc</a></li>
               </ul>
            </div>

            <div className="p-10 border border-[#1A1A1A] bg-white space-y-8">
               <h4 className="font-sans text-[10px] font-black uppercase tracking-[0.4em]">LSI Search Context</h4>
               <div className="flex flex-wrap gap-2">
                  {['Variable DC', 'Adjustable Output', 'Programmable Source', 'Voltage Regulation', 'Benchtop Power', 'OVP/OCP Logic'].map(tag => (
                    <span key={tag} className="px-3 py-1.5 bg-[#F9F9F8] border border-gray-100 text-[8px] font-black uppercase tracking-widest text-gray-400">
                      {tag}
                    </span>
                  ))}
               </div>
            </div>

            <div className="p-10 border border-[#1A1A1A] bg-white flex flex-col space-y-4">
               <HelpCircle className="w-5 h-5 text-[#C53030]" />
               <div className="font-sans text-[11px] font-black uppercase tracking-widest">Technician 24/7 Hotline</div>
               <p className="font-sans text-[10px] uppercase opacity-40 leading-relaxed font-bold">For critical variable power supply failures during 800V validation runs.</p>
               <div className="pt-4 font-mono text-[10px] font-black text-[#C53030] tracking-tighter underline">EN_SUPPORT_ASIA_6620</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}




