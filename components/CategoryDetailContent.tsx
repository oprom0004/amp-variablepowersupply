"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Link from 'next/link';
import { CATEGORIES } from '@/src/data/categories';
import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { getCategoryHeroImage } from '@/lib/category-images';

interface CategoryDetailContentProps { slug: string; }

const CORE_NAME_SUFFIX = /Variable( DC)? Power Supply/i;
const compactCategoryName = (name: string) => name.replace(CORE_NAME_SUFFIX, "").trim() || name;

export default function CategoryDetailContent({ slug }: CategoryDetailContentProps) {  const category = CATEGORIES.find(c => c.slug === slug);
  const heroImage = getCategoryHeroImage(slug);
  if (!category) {
    return (
      <div className="min-h-screen bg-[#F9F9F8] text-[#1A1A1A] flex flex-col items-center justify-center p-8">
        <h1 className="font-sans text-4xl font-black mb-4">404_CATALOG_ENTRY_NOT_FOUND</h1>
        <p className="font-sans text-[10px] font-bold opacity-40 mb-8 uppercase tracking-[0.2em]">The requested technical module is not present in the current production series.</p>
        <Link href="/" className="bg-[#1A1A1A] text-white px-8 py-4 font-sans text-[10px] font-black uppercase tracking-[0.2em]">Return to Catalog</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F9F9F8] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="flex justify-between items-center mb-8">
           <nav className="flex items-center space-x-2 font-sans text-[10px] font-black uppercase tracking-[0.2em]">
             <Link href="/" className="text-gray-400 hover:text-[#C53030] transition-colors">Catalog_Index</Link>
             <span className="text-gray-300">/</span>
             <span className="text-[#1A1A1A]">{category.name}</span>
           </nav>
           <div className="font-mono text-[9px] uppercase text-gray-400 tracking-widest">SPEC_ID: {category.slug.toUpperCase()}_REV26</div>
        </div>

        {/* Hero Datasheet Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-[#1A1A1A] bg-white">
          {/* Left Column: Core Identity */}
          <div className="p-10 md:p-14 border-r-[0.5px] border-[#1A1A1A] flex flex-col justify-center space-y-12">
            <div>
              <div className="font-sans text-[11px] font-black text-[#C53030] uppercase tracking-[0.5em] mb-6">Series_Classification</div>
              <h1 className="font-sans text-5xl md:text-7xl font-black text-[#1A1A1A] uppercase tracking-tighter leading-[0.85] mb-8">
                {category.name}
              </h1>
              <p className="font-sans text-xs font-bold uppercase tracking-tight text-[#1A1A1A] leading-relaxed max-w-md opacity-60 italic mb-8">
                {category.description}
              </p>

              <div className="space-y-8">
                <a 
                  href={category.url} 
                  target="_blank" 
                  rel="noopener" 
                  className="inline-flex items-center justify-center space-x-3 bg-[#C53030] text-white px-12 py-6 font-sans text-xs font-black uppercase tracking-[0.3em] hover:bg-[#1A1A1A] shadow-sm transition-all w-full md:w-auto text-center rounded-[2px]"
                >
                  <span>VIEW ALL {compactCategoryName(category.name) || 'SERIES'} MODELS</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <p className="font-sans text-[9px] font-bold text-gray-400 uppercase tracking-widest italic pt-4 border-t border-gray-100">
                  Direct links to official performance sheets and real-time inventory.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 border-t border-gray-100 pt-10">
               <div className="space-y-1">
                 <div className="font-sans text-[9px] font-black uppercase tracking-[0.3em] text-gray-300 italic">Peak_Output</div>
                 <div className="font-sans text-4xl font-black tracking-tighter italic">
                   {category.name.match(/\d+/)?.[0] || '800'}<span className="text-sm ml-1 opacity-20">V_DC</span>
                 </div>
               </div>
               <div className="space-y-1">
                 <div className="font-sans text-[9px] font-black uppercase tracking-[0.3em] text-gray-300 italic">Regulation_Acc</div>
                 <div className="font-sans text-4xl font-black tracking-tighter italic">
                   ±0.01<span className="text-sm ml-1 opacity-20">%/FS</span>
                 </div>
               </div>
            </div>
          </div>

          {/* Right Column: SKU Visualizer */}
          <div className="bg-[#F9F9F8] relative overflow-hidden flex flex-col min-h-[500px]">
            <div className="p-6 border-b border-[#1A1A1A]/10 flex justify-between items-center">
               <span className="font-mono text-[9px] uppercase tracking-widest text-gray-400 font-bold">Hardware_Visual_Ref</span>
               <div className="w-1.5 h-1.5 bg-[#C53030]" />
            </div>
            
            <div className="flex-1 relative flex items-center justify-center p-12">
               {/* Engineering Grid */}
               <div className="absolute inset-0 opacity-[0.04]" 
                    style={{backgroundImage: 'linear-gradient(#1A1A1A 1px, transparent 1px), linear-gradient(90deg, #1A1A1A 1px, transparent 1px)', backgroundSize: '40px 40px'}}>
               </div>
               
               <motion.div 
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 className="relative z-10 w-full aspect-video transition-all duration-1000 shadow-[20px_20px_0px_0px_rgba(26,26,26,0.03)]"
               >
                 <img
                   src={heroImage}
                   alt={`${category.name}`}
                   className="w-full h-full object-contain border border-[#1A1A1A] bg-white p-2"
                 />
                 
                 <div className="absolute -bottom-4 -left-4 bg-white p-4 border border-[#1A1A1A] font-mono text-[8px] uppercase tracking-widest leading-none">
                    Status: Verified_Compliant
                 </div>
               </motion.div>
            </div>
          </div>
        </div>

        {/* Detailed Spec Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mt-24">
          <div className="lg:col-span-7 space-y-20">
            <div className="space-y-6">
              <h4 className="font-sans text-[10px] font-black uppercase tracking-[0.4em] text-[#C53030]">01 // Technical Summary</h4>
              <p className="font-sans text-sm font-bold leading-relaxed text-[#1A1A1A] uppercase tracking-tight opacity-70">
                {category.techSummary}
              </p>
            </div>

            <div className="space-y-6">
              <h4 className="font-sans text-[10px] font-black uppercase tracking-[0.4em] text-[#C53030]">02 // Security Logic</h4>
              <p className="font-sans text-xs font-bold leading-relaxed text-[#1A1A1A] border-l-4 border-[#1A1A1A] pl-10 uppercase tracking-tight opacity-50">
                {category.safetyLogic}
              </p>
            </div>

            <div className="space-y-10">
              <h4 className="font-sans text-[10px] font-black uppercase tracking-[0.4em] text-[#C53030]">03 // Operation Environments</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1A1A1A]/10 border border-[#1A1A1A]/10">
                {category.useCases.map((useCase, idx) => (
                  <div key={idx} className="p-6 bg-white flex items-center space-x-6 hover:bg-[#F9F9F8] transition-colors">
                    <span className="font-mono text-[9px] text-[#C53030] font-black">[{String(idx+1).padStart(2, '0')}]</span>
                    <span className="font-sans text-[9px] font-black uppercase tracking-[0.2em]">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
             <div className="sticky top-32 space-y-12">
                {category.physicalSpecs && (
                  <div className="p-10 border border-[#1A1A1A] bg-white space-y-10">
                    <h4 className="font-sans text-[10px] font-black uppercase tracking-[0.4em]">Structural Integration</h4>
                    <div className="space-y-6">
                       <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                          <span className="font-sans text-[9px] font-black text-gray-300 uppercase tracking-widest italic">Cooling_System</span>
                          <span className="font-sans text-[10px] font-black uppercase">{category.physicalSpecs.cooling}</span>
                       </div>
                       <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                          <span className="font-sans text-[9px] font-black text-gray-300 uppercase tracking-widest italic">Terminal_Type</span>
                          <span className="font-sans text-[10px] font-black uppercase">{category.physicalSpecs.interface}</span>
                       </div>
                       <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                          <span className="font-sans text-[9px] font-black text-gray-300 uppercase tracking-widest italic">Dimensions_Ref</span>
                          <span className="font-sans text-[10px] font-black uppercase">{category.physicalSpecs.formFactor}</span>
                       </div>
                    </div>
                  </div>
                )}

                <div className="p-10 bg-[#1A1A1A] text-white space-y-8">
                   <div className="font-sans text-[9px] font-black opacity-30 uppercase tracking-[0.4em]">Procurement_Status</div>
                   <div className="font-serif text-3xl italic">Certified Ready for Deployment</div>
                   <div className="flex items-center space-x-3">
                      <div className="w-8 h-[1px] bg-[#C53030]" />
                      <span className="font-sans text-[9px] font-black uppercase tracking-[0.3em] opacity-60">Global Shipping: Available</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
        {/* Engineering Insights Section - SEO Thickening */}
        {(category.engineeringInsights || category.applicationBrief) && (
          <div className="mt-32 space-y-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-5">
                 <div className="font-sans text-[11px] font-black text-[#C53030] uppercase tracking-[0.5em] mb-8">// APPLICATION_BRIEF</div>
                 <h3 className="font-sans text-3xl font-black uppercase tracking-tighter leading-tight mb-8">
                   Engineering Deployment of {category.name} in Industrial R&D
                 </h3>
                 <div className="font-sans text-[11px] font-bold uppercase tracking-tight leading-relaxed opacity-60 space-y-6">
                    {category.applicationBrief ? (
                      <p>{category.applicationBrief}</p>
                    ) : (
                      <p>The strategic deployment of a variable power supply within a laboratory environment requires meticulous planning regarding transient response and load regulation. Our {category.name} series is engineered to mitigate EMI while providing high-current stability for semiconductor and aerospace validation protocols.</p>
                    )}
                 </div>
              </div>
              <div className="lg:col-span-7 bg-white border border-[#1A1A1A] p-12 md:p-16 relative">
                 <div className="absolute top-0 right-0 p-8 opacity-10 font-sans text-9xl font-black italic select-none">DATA</div>
                 <div className="font-sans text-[11px] font-black text-[#C53030] uppercase tracking-[0.5em] mb-10">TECH_INSIGHT_LOG</div>
                 <div className="prose prose-sm max-w-none font-sans text-xs font-bold uppercase leading-loose text-[#1A1A1A]/80">
                    {category.engineeringInsights ? (
                      <div className="whitespace-pre-line">{category.engineeringInsights}</div>
                    ) : (
                      <p>In high-voltage adjustable units like the {category.name}, the integration of soft-switching IGBTs significantly reduces thermal dissipation while providing surgical control over DC output. For precise {category.useCases[0].toLowerCase()}, engineers must account for the CV/CC auto-crossover thresholds to avoid unintended oscillation during rapid load steps.</p>
                    )}
                 </div>
                 <div className="mt-12 pt-8 border-t border-gray-100 flex items-center justify-between">
                    <span className="font-mono text-[9px] text-gray-400 uppercase tracking-widest italic">Doc_Ref: {category.slug}_TECH_REF_26</span>
                    <Link href="/pricing" className="font-sans text-[10px] font-black uppercase tracking-[0.2em] text-[#C53030] hover:underline">Price_Review</Link>
                 </div>
              </div>
            </div>
          </div>
        )}

        {/* Enhanced Internal Linking - Related Categories */}
        <div className="mt-32 pt-24 border-t border-[#1A1A1A]">
           <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
              <div className="space-y-4">
                 <div className="font-sans text-[11px] font-black text-[#C53030] uppercase tracking-[0.5em]">// CROSS_REFERENCE</div>
                 <h3 className="font-sans text-4xl font-black uppercase tracking-tighter italic">Related Variable Power Solutions</h3>
              </div>
              <Link href="/" className="font-sans text-[10px] font-black uppercase tracking-[0.3em] bg-[#1A1A1A] text-white px-10 py-5 hover:bg-[#C53030] transition-colors">View_Full_Index</Link>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1A1A1A]/10 border border-[#1A1A1A]/10">
              {CATEGORIES.filter(c => c.slug !== category.slug)
                .sort(() => 0.5 - Math.random())
                .slice(0, 4)
                .map((rel, i) => (
                   <Link key={rel.slug} href={`/${rel.slug}`} className="group bg-white p-10 space-y-8 hover:bg-[#F9F9F8] transition-colors flex flex-col">
                      <div className="flex-1 space-y-4">
                        <div className="font-mono text-[9px] text-gray-300 font-bold uppercase tracking-widest leading-none italic">REF_SERIES: {rel.slug.split('-')[0].toUpperCase()}</div>
                        <h4 className="font-sans text-lg font-black uppercase tracking-tight group-hover:text-[#C53030] transition-colors leading-tight">{rel.name}</h4>
                        <p className="font-sans text-[10px] font-bold uppercase tracking-tight opacity-40 leading-relaxed line-clamp-2 italic">{rel.description}</p>
                      </div>
                      <div className="pt-6 border-t border-gray-50 flex justify-between items-center group-hover:border-[#C53030]/20">
                         <span className="font-sans text-[9px] font-black uppercase tracking-widest text-gray-300">Explore_Spec</span>
                         <svg className="w-4 h-4 text-gray-200 group-hover:text-[#C53030] transform group-hover:translate-x-1 transition-all" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                         </svg>
                      </div>
                   </Link>
                ))}
           </div>
        </div>

        {/* Category SEO Knowledge Base */}
        <div className="mt-32 pt-24 border-t border-[#1A1A1A]/10">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-4 space-y-8">
                 <div className="font-sans text-[11px] font-black text-[#C53030] uppercase tracking-[0.5em] mb-4">// KNOWLEDGE_BASE</div>
                 <h3 className="font-sans text-3xl font-black uppercase tracking-tighter leading-none italic">
                    Technical Insights: <br /> {compactCategoryName(category.name) || 'Professional Series'}
                 </h3>
                 <p className="font-sans text-xs font-bold uppercase tracking-tight leading-loose opacity-50">
                    Understanding the integration of {category.name.toLowerCase()} into professional ATE systems requires deep knowledge of {category.useCases[0].toLowerCase()} and transient response.
                 </p>
              </div>
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                 {(category.faqs || [
                   {
                     q: `Why choose this ${compactCategoryName(category.name) || 'Variable'} series for precision work?`,
                     a: `The ${category.name} is engineered for environments where stability is paramount. By utilizing high-grade insulation and precision regulation, it ensures that your devices are protected from transients.`
                   },
                   {
                     q: `How does the protection logic work on a ${category.name}?`,
                     a: `Safety is baked-in. This specific variable power supply features active OVP/OCP crossover, meaning it will automatically clamp current or voltage to prevent damage to your sensitive load.`
                   },
                   {
                     q: `Is remote control supported on the ${category.name.split(' ')[0]} range?`,
                     a: `Most units in our ${category.name.split(' ')[0]} catalog support at least analog programming. Higher-tier models include full digital SCPI over USB or LAN for automated testing.`
                   },
                   {
                     q: `What is the expected lifespan of this variable power source?`,
                     a: "Built for industrial duty-cycles, our units feature semi-passive cooling and oversized capacitors, typically delivering over 50,000 hours of failure-free operation in laboratory conditions."
                   }
                 ]).map((item, i) => (
                   <div key={i} className="space-y-4">
                      <h4 className="font-sans text-[11px] font-black uppercase tracking-widest text-[#1A1A1A]">Q: {item.q}</h4>
                      <p className="font-sans text-[10px] font-bold uppercase tracking-tight leading-relaxed opacity-50 italic">
                        {item.a}
                      </p>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}




