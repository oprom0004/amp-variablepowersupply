"use client";

import Link from 'next/link';
import { Globe, Truck, ShieldCheck, FileText, Landmark, PackageCheck, Headphones, HelpCircle } from 'lucide-react';

export default function WhereToBuyContent() {  const currentYear = new Date().getFullYear();
  return (
    <div className="min-h-screen bg-[#F9F9F8] pt-32 pb-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <nav className="flex items-center space-x-2 font-sans text-[10px] font-black uppercase tracking-[0.2em] mb-8">
          <Link href="/" className="text-gray-400 hover:text-[#C53030] transition-colors">Home</Link>
          <span className="text-gray-300">/</span>
          <span className="text-[#1A1A1A]">Where_To_Buy</span>
        </nav>
        {/* SEO Header */}
        <div className="border-b border-[#1A1A1A] pb-12 mb-16">
          <div className="font-sans text-[11px] font-black text-[#C53030] uppercase tracking-[0.5em] mb-4">Logistics_&_Acquisition_Network</div>
          <h1 className="font-sans text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.85]">
            Variable Power Supply <br /> Procurement Network.
          </h1>
          <p className="mt-10 font-sans text-xs font-bold uppercase tracking-tight opacity-50 max-w-2xl leading-relaxed italic">
            Acquiring a high-precision variable power supply for industrial ATE systems or research laboratories requires a verified supply chain. We provide authenticated procurement channels for enterprise-level volume orders and individual research units across 120+ countries.
          </p>
          <div className="mt-12">
            <a 
              href="https://variabledcpowersupply.com/"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-6 bg-[#1A1A1A] text-white px-10 py-5 group hover:bg-[#C53030] transition-all"
            >
              <span className="font-sans text-xs font-black uppercase tracking-[0.3em]">Shop on eTommens Official Store</span>
              <div className="w-8 h-px bg-white/30 group-hover:w-12 transition-all"></div>
              <PackageCheck className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Main Procurement Channels */}
          <div className="lg:col-span-8 space-y-24">
            {/* Enterprise sourcing Section */}
            <section className="space-y-12">
               <div className="flex items-center space-x-6 group">
                  <div className="p-4 bg-[#1A1A1A] text-white">
                    <Landmark className="w-8 h-8" />
                  </div>
                  <h2 className="font-sans text-2xl font-black uppercase tracking-tighter italic">Institutional & Enterprise Sourcing</h2>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1A1A1A]/10 border border-[#1A1A1A]/10">
                  <div className="p-10 bg-white space-y-6">
                    <h3 className="font-sans text-[11px] font-black uppercase tracking-widest text-[#C53030]">Volume Tenders</h3>
                    <p className="font-sans text-[10px] font-bold uppercase tracking-tight leading-loose opacity-50">
                       Direct procurement for university laboratories and government research tenders. We provide full tax-exempt documentation and institutional pricing schedules for variable power supply rack integrations.
                    </p>
                    <div className="pt-4 font-sans text-[9px] font-black uppercase underline tracking-widest">Request Tender Package</div>
                  </div>
                  <div className="p-10 bg-white space-y-6">
                    <h3 className="font-sans text-[11px] font-black uppercase tracking-widest text-[#C53030]">OEM/ODM Customization</h3>
                    <p className="font-sans text-[10px] font-bold uppercase tracking-tight leading-loose opacity-50">
                       Factory-direct engineering for custom voltage/current ranges. Ideal for ATE system builders requiring non-standard variable source enclosures or specialized remote control protocols.
                    </p>
                    <div className="pt-4 font-sans text-[9px] font-black uppercase underline tracking-widest">Consult Engineering Dept</div>
                  </div>
               </div>
            </section>

            {/* Logistics Depth Article */}
            <section className="bg-[#1A1A1A] text-white p-20 relative overflow-hidden">
               <Truck className="absolute bottom-0 right-0 w-80 h-80 text-white/5 -mb-24 -mr-24" />
               <h3 className="font-sans text-[9px] font-black opacity-30 uppercase tracking-[0.4em] mb-10">LOGISTICS_CAPABILITIES_{currentYear}</h3>
               <h2 className="font-serif text-4xl italic leading-[1.1] mb-12 max-w-lg">Seamless Global Logistics for Mission-Critical Hardware</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12 font-sans text-xs font-bold uppercase tracking-tight leading-relaxed text-white/60">
                  <div className="space-y-6">
                     <p>Exporting high-voltage variable power supply units requires strict compliance with international dual-use regulations. Our logistics hub specializes in DDP (Delivered Duty Paid) shipping, ensuring customs clearance for high-value test equipment is handled pre-arrival.</p>
                     <p>Every shipment is tracked via a real-time blockchain-verified ledger to ensure the NIST-traceable calibration status remains valid during transit.</p>
                  </div>
                  <div className="space-y-10">
                    <div className="border-l-2 border-[#C53030] pl-6 space-y-2">
                       <span className="block text-[10px] font-black text-[#C53030]">Regional Lead Times</span>
                       <span className="block text-xl font-black italic">3-5 Days (Express Air)</span>
                    </div>
                    <div className="border-l-2 border-[#C53030] pl-6 space-y-2">
                       <span className="block text-[10px] font-black text-[#C53030]">Compliance Verified</span>
                       <span className="block text-xl font-black italic">CE, RoHS, FCC Gen-4</span>
                    </div>
                  </div>
               </div>
            </section>

            {/* Regional Presence Grid */}
            <section className="space-y-12">
               <div className="flex items-center space-x-6">
                 <Globe className="w-8 h-8 text-[#C53030]" />
                 <h4 className="font-sans text-2xl font-black uppercase tracking-tighter italic">Authenticated Distribution Network</h4>
               </div>
               <div className="space-y-px bg-[#1A1A1A]/10 border border-[#1A1A1A]/10">
                  {[
                    { region: 'North America / EU', hubs: 'Regional Stocking Distributors', lead: '48hr Ship' },
                    { region: 'Asia Pacific', hubs: 'Main Manufacturing & Logistics Center', lead: 'Direct' },
                    { region: 'Middle East & India', hubs: 'Certified Systems Integration Partners', lead: 'Wholesale' }
                  ].map((hub, i) => (
                    <div key={i} className="bg-white p-10 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-[#F9F9F8] transition-colors">
                       <div className="space-y-2">
                         <span className="block font-sans text-xs font-black uppercase">{hub.region}</span>
                         <span className="block font-sans text-[10px] font-bold uppercase text-gray-400">{hub.hubs}</span>
                       </div>
                       <div className="font-mono text-[9px] font-black text-[#C53030] border border-[#C53030]/20 px-4 py-2 uppercase">
                         Status: {hub.lead}
                       </div>
                    </div>
                  ))}
               </div>
            </section>
          </div>

          {/* Supply Chain Support Sidebar */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit space-y-12">
            <div className="p-10 border border-[#1A1A1A] bg-white flex flex-col space-y-4">
               <HelpCircle className="w-5 h-5 text-[#C53030]" />
               <div className="font-sans text-[11px] font-black uppercase tracking-widest">Global Support Hotline</div>
               <p className="font-sans text-[10px] uppercase opacity-40 leading-relaxed font-bold">For critical variable power supply support during industrial validation runs.</p>
               <div className="pt-4 font-mono text-[10px] font-black text-[#C53030] tracking-tighter underline">TECH_SUPPORT_GLOBAL</div>
            </div>

             <div className="p-10 bg-[#1A1A1A] text-white flex flex-col space-y-6">
                <Truck className="w-6 h-6" />
                <h5 className="font-sans text-[11px] font-black uppercase tracking-[0.4em]">Logistics Assistance</h5>
                <p className="font-sans text-[10px] uppercase font-bold leading-relaxed opacity-80 italic">
                   Direct assistance for international delivery and shipping inquiries.
                </p>
                <a 
                  href="https://variabledcpowersupply.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs font-black tracking-tighter pt-4 border-t border-white/20 hover:text-[#C53030] transition-colors"
                >
                   GLOBAL_SHIPPING_QUERY
                </a>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}



