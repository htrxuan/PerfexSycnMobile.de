/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Car, 
  BarChart3, 
  ShieldCheck, 
  Zap, 
  Smartphone, 
  Users, 
  ChevronRight, 
  Globe,
  ArrowRight
} from 'lucide-react';

// --- Animation Variants ---
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } }
};

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 border-b border-slate-800/50 backdrop-blur-md bg-slate-950/30">
    <div className="max-w-7xl mx-auto px-10 h-20 flex items-center justify-between">
      <div className="flex items-center gap-3 font-bold text-white text-xl tracking-tight">
        <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/20">
          <Car size={18} />
        </div>
        <span>PerfexAuto Integrator</span>
      </div>
      <div className="hidden md:flex gap-8 text-sm text-slate-400 font-medium">
        <a href="#" className="hover:text-white transition-colors">Two-Way Sync</a>
        <a href="#" className="hover:text-white transition-colors">Lead Routing</a>
        <a href="#" className="hover:text-white transition-colors">Perfex Quotes</a>
      </div>
      <button className="bg-white text-slate-950 px-5 py-2 rounded-full text-sm font-semibold hover:bg-slate-200 transition-all">
        Start Trial
      </button>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-32 pb-20 px-10 overflow-hidden text-center">
    {/* Background Glow */}
    <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-500/20 blur-[120px] rounded-full -z-10" />
    
    <div className="max-w-5xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-[10px] font-bold uppercase tracking-widest mb-6"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
        The Ultimate Mobile.de ↔ Perfex Bridge
      </motion.div>
      
      <motion.h1 
        className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-4 leading-[1.1]"
        {...fadeIn}
      >
        Stop losing deals to <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500">
          disconnected CRM data.
        </span>
      </motion.h1>
      
      <motion.p 
        className="text-lg text-slate-400 max-w-2xl mx-auto mb-10"
        transition={{ delay: 0.2 }}
        {...fadeIn}
      >
        Stop manual data entry. Our integrator automatically pipes Mobile.de inquiries directly into your Perfex CRM, creating a seamless, high-velocity sales engine.
      </motion.p>
      
      <motion.div 
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
        transition={{ delay: 0.3 }}
        {...fadeIn}
      >
        <button className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-indigo-500/20">
          Start Free Trial <ArrowRight size={18} />
        </button>
        <button className="w-full sm:w-auto px-8 py-4 bg-slate-900 border border-slate-800/50 backdrop-blur-md text-white rounded-xl font-bold hover:bg-slate-800 transition-all">
          Book a Demo
        </button>
      </motion.div>
    </div>
  </section>
);

const BentoGrid = () => (
  <section className="relative px-6 md:px-10 pb-20 max-w-7xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-2 gap-4 lg:h-[340px]">
      {/* Main Feature: Global Listing */}
      <motion.div 
        whileHover={{ y: -5 }}
        className="col-span-1 lg:col-span-2 lg:row-span-2 rounded-2xl border border-slate-800 bg-slate-900/40 p-8 flex flex-col justify-between relative overflow-hidden group"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-3xl z-0" />
        <div className="relative z-10">
          <div className="w-10 h-10 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center mb-6">
            <Globe className="w-6 h-6 text-indigo-400" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Two-Way Pipeline Sync</h3>
          <p className="text-slate-400 max-w-xs text-sm leading-relaxed mb-6">Instantly route incoming Mobile.de leads into Perfex CRM as actionable prospects. Your sales pipeline is always up-to-date and ready to close.</p>
        </div>
        <div className="flex gap-3 relative z-10">
          <div className="h-12 w-full bg-slate-800/50 rounded-lg border border-slate-700/50 flex items-center px-4 gap-2">
             <div className="w-2 h-2 rounded-full bg-emerald-500" />
             <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Perfex API Active</span>
          </div>
        </div>
      </motion.div>

      {/* Feature: Compliance */}
      <motion.div 
        whileHover={{ y: -5 }}
        className="col-span-1 border border-slate-800 bg-slate-900/40 p-6 rounded-2xl flex flex-col justify-between"
      >
        <div className="w-10 h-10 mb-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
          <Users className="w-5 h-5 text-emerald-400" />
        </div>
        <div>
          <h4 className="text-white font-bold mb-1">Auto-Lead Routing</h4>
          <p className="text-xs text-slate-500">Automatically assign Mobile.de leads to the right sales reps in Perfex CRM.</p>
        </div>
      </motion.div>

      {/* Feature: Mobile Desking */}
      <motion.div 
        whileHover={{ y: -5 }}
        className="col-span-1 border border-slate-800 bg-slate-900/40 p-6 rounded-2xl flex flex-col justify-between"
      >
        <div className="w-10 h-10 mb-4 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
          <Zap className="w-5 h-5 text-orange-400" />
        </div>
        <div>
          <h4 className="text-white font-bold mb-1">Integrated Quoting</h4>
          <p className="text-xs text-slate-500">Generate Perfex quotes from Mobile.de inquiries in under 30 seconds.</p>
        </div>
      </motion.div>

      {/* Feature: Analytics */}
      <motion.div 
        whileHover={{ y: -5 }}
        className="col-span-1 lg:col-span-2 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 flex items-center justify-between overflow-hidden"
      >
        <div className="flex flex-col">
          <h4 className="text-white text-lg font-bold mb-1">Unified Reporting</h4>
          <p className="text-sm text-slate-500">Track lead-to-close velocity directly inside your Perfex CRM dashboard.</p>
        </div>
        <div className="flex items-end gap-1 h-12 ml-4">
          <div className="w-2 h-4 bg-indigo-500/20 rounded-t-sm" />
          <div className="w-2 h-8 bg-indigo-500/40 rounded-t-sm" />
          <div className="w-2 h-6 bg-indigo-500/30 rounded-t-sm" />
          <div className="w-2 h-10 bg-indigo-500 rounded-t-sm" />
          <div className="w-2 h-7 bg-indigo-500/60 rounded-t-sm" />
        </div>
      </motion.div>
    </div>
  </section>
);

const FeaturePAS = () => (
  <section className="py-24 bg-slate-950 border-y border-slate-900 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
      <div>
        <h2 className="text-indigo-500 font-semibold mb-4 tracking-widest uppercase text-sm">The Problem</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
          Manual lead entry is killing your response times.
        </h3>
        <p className="text-slate-400 text-lg mb-8">
          The average dealership loses 14 hours a week copying Mobile.de leads into Perfex CRM, leading to delayed follow-ups and lost sales.
        </p>
        <ul className="space-y-4">
          {[
            "High-intent leads falling through the cracks",
            "Double data entry between Mobile.de and Perfex",
            "No central tracking of sales pipeline and inventory"
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-slate-300">
              <div className="min-w-5 w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
              </div>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative mt-10 md:mt-0">
         <div className="absolute inset-0 bg-indigo-600/20 blur-[80px] -z-10" />
         <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl relative z-10 w-full overflow-hidden">
            <div className="flex items-center justify-between mb-8">
              <div className="h-2 w-24 bg-slate-800 rounded" />
              <div className="h-8 w-8 rounded-full bg-indigo-500/20" />
            </div>
            <div className="space-y-6">
               <div className="h-4 w-full bg-slate-800 rounded" />
               <div className="h-4 w-3/4 bg-slate-800 rounded" />
               <div className="h-12 w-full bg-indigo-600/20 border border-indigo-500/30 rounded-lg flex items-center px-4 text-emerald-400 font-bold overflow-hidden text-ellipsis whitespace-nowrap">
                 Syncing lead to Perfex CRM...
               </div>
            </div>
         </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="w-full px-6 md:px-10 py-6 flex flex-col md:flex-row justify-between items-center border-t border-slate-800/50 bg-slate-950/80 mt-auto z-10 relative">
    <div className="flex flex-col md:flex-row gap-4 mb-4 md:mb-0">
      <div className="flex items-center gap-2 text-[11px] font-medium text-slate-500 uppercase tracking-wider">
        <div className="w-2 h-2 rounded-full bg-indigo-500" />
        Trusted by 450+ Dealerships
      </div>
      <div className="flex items-center gap-2 text-[11px] font-medium text-slate-500 uppercase tracking-wider">
        <div className="w-2 h-2 rounded-full bg-emerald-500" />
        $2.4B Transaction Volume
      </div>
    </div>
    <div className="text-[11px] text-slate-600 font-mono tracking-widest">
      SYSTEM STATUS: OPTIMAL // VERSION 2.0.4
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-indigo-500/30 font-sans overflow-x-hidden relative flex flex-col">
      {/* Linear-style Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />
      
      <Navbar />
      
      <div className="relative flex-grow flex flex-col justify-center">
        <Hero />
        <BentoGrid />
      </div>

      {/* Feature PAS and Final CTA left as they were but adjusted for theme padding and border overrides if necessary */}
      <div className="relative z-10 bg-slate-950">
        <FeaturePAS />
        <section className="py-24 px-6 text-center border-t border-slate-800/50">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-gradient-to-b from-indigo-600 to-indigo-800 p-8 md:p-12 lg:p-20 rounded-[2rem] md:rounded-[3rem] shadow-2xl shadow-indigo-500/20 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 relative z-10 leading-tight">Dominate your local market.</h2>
            <p className="text-indigo-100 text-base md:text-lg mb-10 max-w-xl mx-auto relative z-10">
              Join 450+ dealerships who have unified Mobile.de and Perfex CRM. Start your 14-day free trial today.
            </p>
            <button className="bg-white text-indigo-900 px-8 md:px-10 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:scale-105 transition-transform relative z-10 w-full sm:w-auto shadow-lg">
              Claim Your Free Audit
            </button>
          </motion.div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
