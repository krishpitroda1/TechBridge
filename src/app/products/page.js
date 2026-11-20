"use client";
import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductDemoScreen from "@/components/ProductDemoScreen";
import { products } from "@/data/products";
import { 
  Sparkles, CheckCircle2, Target, ArrowLeft, ArrowRight, 
  Layers, ExternalLink, Laptop, ShieldCheck, Activity 
} from "lucide-react";

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Header Banner */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-brand-dark via-slate-900 to-brand-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FF4D4D_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center max-w-4xl">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to TechBridge Home
          </Link>
          <div className="inline-block py-1 px-4 rounded-full bg-red-500/10 border border-red-500/20 text-brand-red font-semibold text-xs uppercase tracking-wider mb-4">
            TechBridge Venture Studio
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Products & <span className="text-brand-red">Platforms Portfolio</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Explore our 8 market-defining proprietary SaaS, AI, CPaaS, and consumer platforms engineered and incubated with 30+ years of digital experience.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-xs font-medium text-gray-300">
            <span className="flex items-center gap-1.5 bg-slate-800/80 px-3.5 py-1.5 rounded-full border border-slate-700">
              <CheckCircle2 className="w-3.5 h-3.5 text-brand-red" /> 8 Active Platforms
            </span>
            <span className="flex items-center gap-1.5 bg-slate-800/80 px-3.5 py-1.5 rounded-full border border-slate-700">
              <CheckCircle2 className="w-3.5 h-3.5 text-brand-red" /> Live Proof of Execution
            </span>
            <span className="flex items-center gap-1.5 bg-slate-800/80 px-3.5 py-1.5 rounded-full border border-slate-700">
              <CheckCircle2 className="w-3.5 h-3.5 text-brand-red" /> 30+ Years Leadership
            </span>
          </div>
        </div>
      </section>

      {/* Interactive Showcase Section */}
      <section className="py-20 container mx-auto px-4 sm:px-6">
        {/* Navigation Selector between 8 products */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {products.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelectedProduct(p)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
                selectedProduct.id === p.id
                  ? "bg-brand-red text-white shadow-lg scale-105"
                  : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
              }`}
            >
              <span>{p.name}</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                selectedProduct.id === p.id ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"
              }`}>
                {p.category.split(" ")[0]}
              </span>
            </button>
          ))}
        </div>

        {/* Selected Product Deep Dive */}
        <div className="bg-white rounded-3xl border border-gray-200/80 p-6 sm:p-10 shadow-lg mb-20">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Details & Specs */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold text-brand-red uppercase tracking-wider">
                  {selectedProduct.category}
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mt-1">
                  {selectedProduct.name}
                </h2>
                <p className="text-gray-700 italic text-sm mt-1">
                  "{selectedProduct.tagline}"
                </p>
              </div>

              {/* Target Audience */}
              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200 text-xs">
                <div className="flex items-center gap-2 font-bold text-gray-900 mb-1">
                  <Target className="w-4 h-4 text-brand-red" /> Target Market
                </div>
                <p className="text-gray-600 leading-relaxed">{selectedProduct.target}</p>
              </div>

              {/* Overview */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {selectedProduct.description}
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-3 p-4 bg-slate-900 text-white rounded-2xl">
                {selectedProduct.metrics.map((m, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-lg font-bold text-brand-red">{m.value}</div>
                    <div className="text-[10px] text-gray-400 mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Feature Highlights */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">Key Modules & Capabilities</h4>
                <ul className="space-y-2 text-xs text-gray-600">
                  {selectedProduct.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2">Technology Architecture</h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProduct.techStack.map((tech, idx) => (
                    <span key={idx} className="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs font-mono rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center gap-4">
                <Link
                  href="/#contact"
                  className="px-6 py-3 bg-brand-red text-white text-xs font-semibold rounded-full hover:bg-red-600 transition-colors shadow-md"
                >
                  Schedule Product Demo
                </Link>
                <Link
                  href="/"
                  className="text-xs font-medium text-gray-600 hover:text-brand-dark"
                >
                  Explore All Services
                </Link>
              </div>
            </div>

            {/* Right Column: Live UI Screenshot & Demo Simulator */}
            <div className="lg:col-span-7">
              <div className="mb-3 flex items-center justify-between text-xs text-gray-500">
                <span className="font-semibold text-gray-800 flex items-center gap-1.5">
                  <Laptop className="w-4 h-4 text-brand-red" /> Interactive Demonstration Screen
                </span>
                <span className="text-xs font-mono">Proof of Execution</span>
              </div>
              <ProductDemoScreen product={selectedProduct} />
            </div>

          </div>
        </div>

        {/* All 8 Products Quick Catalog */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-brand-dark mb-6 text-center">
            Complete Portfolio Overview
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p) => (
              <div
                key={p.id}
                onClick={() => {
                  setSelectedProduct(p);
                  window.scrollTo({ top: 400, behavior: "smooth" });
                }}
                className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                  selectedProduct.id === p.id 
                    ? "bg-white border-brand-red shadow-lg ring-2 ring-brand-red/20" 
                    : "bg-white border-gray-200 hover:border-gray-300 hover:shadow-md"
                }`}
              >
                <span className="text-[11px] font-bold text-brand-red uppercase tracking-wider block mb-1">
                  {p.category}
                </span>
                <h4 className="text-lg font-bold text-brand-dark">{p.name}</h4>
                <p className="text-xs text-gray-500 italic mb-3">"{p.tagline}"</p>
                <p className="text-xs text-gray-600 line-clamp-3 mb-4">{p.description}</p>
                <div className="text-xs font-semibold text-brand-red flex items-center gap-1">
                  View Demo & Screens &rarr;
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
