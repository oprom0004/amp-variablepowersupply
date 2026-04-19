import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '../data/categories';

export default function Pricing() {
  useEffect(() => {
    document.title = "Variable Power Supply Pricing | Request a Quote";
  }, []);
  return (
    <div className="min-h-screen bg-[#F9F9F8] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <nav className="flex items-center space-x-2 font-sans text-[10px] font-black uppercase tracking-[0.2em] mb-8">
          <Link to="/" className="text-gray-400 hover:text-[#C53030] transition-colors">Home</Link>
          <span className="text-gray-300">/</span>
          <span className="text-[#1A1A1A]">Pricing</span>
        </nav>
        <div className="border-b border-[#1A1A1A] pb-12 mb-16">
          <div className="font-sans text-[11px] font-black text-[#C53030] uppercase tracking-[0.5em] mb-4">Variable_Power_Acquisition</div>
          <h1 className="font-sans text-5xl md:text-7xl font-black uppercase tracking-tighter mb-10">Variable Power Supply Pricing & Quotes</h1>
          <a 
            href="https://variabledcpowersupply.com/"
            target="_blank"
            rel="noopener"
            className="group flex items-center space-x-4 w-fit"
          >
            <span className="font-sans text-[10px] font-black uppercase tracking-[0.3em] border-b border-[#1A1A1A] group-hover:border-[#C53030] group-hover:text-[#C53030] transition-all">
              Visit Official Store for Live Inventory & Pricing
            </span>
            <div className="w-8 h-[1px] bg-[#1A1A1A] group-hover:bg-[#C53030] group-hover:w-12 transition-all"></div>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4 space-y-12">
            <section className="space-y-6">
              <h2 className="font-sans text-xs font-black uppercase tracking-[0.4em] text-gray-400">Buyer's Guide: Variable Power Systems</h2>
              <p className="font-sans text-[11px] font-bold leading-relaxed text-[#1A1A1A] uppercase tracking-tight opacity-60 italic">
                The price of a variable power supply is determined by four precision factors: Voltage range (up to 800V), Output stability, Programming interface (SCPI/GPIB), and Transient response speed.
              </p>
            </section>

            <div className="p-10 border border-[#1A1A1A] bg-white space-y-10">
               <h3 className="font-sans text-[10px] font-black uppercase tracking-[0.4em]">Price Influencer Indices</h3>
               <div className="space-y-6">
                 {[
                   ['High Frequency Switching', '+15% Efficiency'],
                   ['Linear Post-Regulation', 'Ultra-Low Ripple'],
                   ['Isolated Analog Control', 'Standard on Pro'],
                   ['LXI / LabVIEW Drivers', 'Enterprise Units']
                 ].map(([feat, benefit], i) => (
                   <div key={i} className="flex flex-col space-y-1 border-b border-gray-100 pb-4">
                     <span className="font-sans text-[10px] font-black uppercase tracking-widest text-[#1A1A1A]">{feat}</span>
                     <span className="font-sans text-[9px] font-bold uppercase tracking-widest text-gray-400 italic">{benefit}</span>
                   </div>
                 ))}
               </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="space-y-12">
              <section className="bg-white border border-[#1A1A1A] p-12">
                <h3 className="font-sans text-2xl font-black uppercase tracking-tighter mb-8 italic">Commercial Tiers for Programmable Variable Power Supplies</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                   <div className="p-6 bg-[#F9F9F8] border-l-4 border-[#1A1A1A]">
                     <div className="font-sans text-[9px] font-black uppercase tracking-[0.4em] text-[#C53030] mb-4">Entry / Lab</div>
                     <p className="font-sans text-[10px] font-bold uppercase leading-relaxed text-gray-500">Benchtop variable units for general PCB testing and education.</p>
                   </div>
                   <div className="p-6 bg-[#F9F9F8] border-l-4 border-[#1A1A1A]">
                     <div className="font-sans text-[9px] font-black uppercase tracking-[0.4em] text-[#C53030] mb-4">Professional / ATE</div>
                     <p className="font-sans text-[10px] font-bold uppercase leading-relaxed text-gray-500">SCPI programmable modules for automated production lines.</p>
                   </div>
                   <div className="p-6 bg-[#F9F9F8] border-l-4 border-[#1A1A1A]">
                     <div className="font-sans text-[9px] font-black uppercase tracking-[0.4em] text-[#C53030] mb-4">Industrial / High-V</div>
                     <p className="font-sans text-[10px] font-bold uppercase leading-relaxed text-gray-500">High-voltage 800V adjustable systems for EV and energy sectors.</p>
                   </div>
                </div>
              </section>

              <div className="p-12 bg-[#1A1A1A] text-white space-y-10 relative overflow-hidden">
                <div className="absolute right-0 bottom-0 text-[120px] font-black text-white/5 tracking-tighter pointer-events-none transform translate-y-12">QUOTE</div>
                <h3 className="font-sans text-3xl font-black uppercase tracking-tighter leading-none italic">
                  Request a Formal Quotation for <br /> Your Variable Power Application.
                </h3>
                <p className="font-sans text-xs font-bold uppercase opacity-50 max-w-xl leading-loose">
                  Our technical sales team provides comprehensive price breakdowns for custom variable power supply specifications including OVP thresholds, isolation requirements, and specific programming protocols. 
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                   <a 
                     href="https://variabledcpowersupply.com/" 
                     target="_blank"
                     rel="noopener noreferrer"
                     className="bg-[#C53030] px-12 py-5 font-sans text-xs font-black uppercase tracking-[0.3em] hover:bg-white hover:text-[#1A1A1A] transition-all rounded-[2px] text-center"
                   >
                     Initiate RFP Process
                   </a>
                   <div className="flex items-center space-x-4 px-6 border border-white/20">
                      <span className="font-sans text-[9px] font-black uppercase tracking-widest opacity-40">Average Response: 4H</span>
                   </div>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="font-sans text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">Pricing LSI FAQ</h4>
                <div className="font-sans text-[11px] font-bold uppercase tracking-tight text-gray-300 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                  <p>How much does a programmable variable power supply cost? Units start from lab entry levels up to industrial High-Voltage 800V modules depending on transient response and accuracy.</p>
                  <p>Are bulk discounts available for adjustable power sources? Yes, we offer tiered procurement for university labs and system integrators globally.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
