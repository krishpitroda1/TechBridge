"use client";
import React, { useState } from "react";
import Link from "next/link";
import { products } from "@/data/products";
import ProductDemoScreen from "./ProductDemoScreen";
import { 
  ArrowRight, ExternalLink, Sparkles, CheckCircle2, Eye, 
  Layers, X, Play, ShieldCheck, Target, Laptop
} from "lucide-react";

export default function ProductsPortfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null); // for modal demo

  const categories = [
    "All",
    "Healthcare SaaS",
    "Media & Creative Assets",
    "B2B SaaS & CRM",
    "MarTech & CPaaS",
    "FinTech & MSME",
    "Fitness & Wellness",
    "Sports Tech & Community",
    "AI & Consumer Tech"
  ];

  const filteredProducts = activeCategory === "All"
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="products" className="py-24 bg-white relative overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-brand-red text-xs sm:text-sm font-semibold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Venture Studio Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark mb-5 tracking-tight">
            Our Products & <span className="text-brand-red">Platforms</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Market-tested platforms engineered, incubated, and scaled in-house. From specialized vertical SaaS to AI and high-volume CPaaS infrastructure — backed by 30+ years of technology leadership.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-brand-dark text-white shadow-md scale-105"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category}
              {category === "All" && ` (${products.length})`}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1"
            >
              <div className="p-6 sm:p-8">
                {/* Header row */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-brand-red">
                      {product.category}
                    </span>
                    <h3 className="text-2xl font-bold text-brand-dark mt-1 group-hover:text-brand-red transition-colors">
                      {product.name}
                    </h3>
                  </div>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full border border-gray-200">
                    {product.badge}
                  </span>
                </div>

                {/* Tagline */}
                <div className="text-sm font-medium text-gray-800 italic mb-3">
                  "{product.tagline}"
                </div>

                {/* Target Audience Pill */}
                <div className="mb-5 p-2.5 bg-gray-50 rounded-xl border border-gray-100 flex items-start gap-2 text-xs text-gray-600">
                  <Target className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-800">Target: </strong>
                    {product.target}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Proof Metrics Chips */}
                <div className="grid grid-cols-3 gap-2 mb-6 p-3 bg-gray-50 rounded-xl">
                  {product.metrics.map((m, idx) => (
                    <div key={idx} className="text-center">
                      <div className="font-bold text-sm text-brand-dark">{m.value}</div>
                      <div className="text-[11px] text-gray-500">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Highlights List */}
                <ul className="space-y-2 mb-6 text-xs text-gray-600">
                  {product.highlights.slice(0, 3).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-red shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Interactive Screenshot Preview — fixed height so all cards stay equal */}
                <div className="mb-6 rounded-xl overflow-hidden border border-gray-200 bg-slate-900 shadow-inner group/preview relative h-[320px]">
                  <div className="bg-slate-950 px-3 py-2 flex items-center justify-between text-[11px] text-slate-400 border-b border-slate-800 shrink-0">
                    <span className="font-mono">preview://{product.id}.app</span>
                    <span className="text-brand-red flex items-center gap-1 font-semibold">
                      <Eye className="w-3 h-3" /> Live UI View
                    </span>
                  </div>
                  <div className="overflow-hidden h-[calc(320px-33px)] pointer-events-none">
                    <div className="p-2 text-slate-200 scale-[0.72] origin-top-left w-[139%] filter blur-[0.3px]">
                      <ProductDemoScreen product={product} />
                    </div>
                  </div>
                  {/* Hover Overlay */}
                  <div 
                    onClick={() => setSelectedProduct(product)}
                    className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px] opacity-0 group-hover/preview:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 cursor-pointer p-4 text-center"
                  >
                    <span className="px-4 py-2 bg-brand-red text-white text-xs font-semibold rounded-full shadow-lg flex items-center gap-1.5 hover:scale-105 transition-transform">
                      <Play className="w-3.5 h-3.5 fill-current" /> Open Interactive Demo
                    </span>
                    <span className="text-slate-300 text-xs">Screenshots • Demo Workflows • Tech Specs</span>
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 sm:px-8 py-4 bg-gray-50 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="px-4 py-2 bg-brand-dark text-white rounded-lg text-xs font-semibold hover:bg-black transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Laptop className="w-3.5 h-3.5" />
                  View Demo & Screens
                </button>

                <a
                  href="#contact"
                  className="text-xs font-semibold text-brand-red hover:underline flex items-center gap-1"
                >
                  Request Studio Access <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio Stats Banner */}
        <div className="bg-gradient-to-r from-brand-dark to-slate-900 text-white rounded-2xl p-8 sm:p-12 shadow-xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-gray-800">
            <div className="pt-4 sm:pt-0">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">8</div>
              <div className="text-brand-red text-sm font-semibold mb-1">Proprietary Platforms</div>
              <div className="text-xs text-gray-400">Healthcare, AI, Media, CPaaS & Fintech</div>
            </div>
            <div className="pt-4 sm:pt-0">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">30+</div>
              <div className="text-brand-red text-sm font-semibold mb-1">Years Personal Experience</div>
              <div className="text-xs text-gray-400">Technology Architecture & Venture Leadership</div>
            </div>
            <div className="pt-4 sm:pt-0">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">25M+</div>
              <div className="text-brand-red text-sm font-semibold mb-1">Monthly Digital Volume</div>
              <div className="text-xs text-gray-400">Processed across platform networks</div>
            </div>
            <div className="pt-4 sm:pt-0">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">100%</div>
              <div className="text-brand-red text-sm font-semibold mb-1">In-House Engineering</div>
              <div className="text-xs text-gray-400">Ideation, execution & enterprise scale</div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Product Demonstration Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fadeIn">
          <div className="bg-slate-950 w-full max-w-5xl rounded-2xl border border-slate-800 overflow-hidden shadow-2xl relative max-h-[92vh] flex flex-col">
            {/* Modal Header */}
            <div className="px-6 py-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-red/20 text-brand-red flex items-center justify-center font-bold">
                  {selectedProduct.name.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-white">{selectedProduct.name}</h3>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-800 text-slate-300 border border-slate-700">
                      {selectedProduct.category}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">"{selectedProduct.tagline}"</p>
                </div>
              </div>

              <button
                onClick={() => setSelectedProduct(null)}
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-4 sm:p-6 overflow-y-auto space-y-6">
              {/* Target market callout */}
              <div className="p-3.5 bg-slate-900/90 rounded-xl border border-slate-800 flex items-start gap-3 text-xs text-slate-300">
                <Target className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Target Audience: </strong>
                  {selectedProduct.target}
                </div>
              </div>

              {/* Main Interactive Demo Screen */}
              <div>
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Laptop className="w-4 h-4 text-brand-red" />
                  Live Product Demonstration & UI Proof of Execution
                </div>
                <ProductDemoScreen product={selectedProduct} />
              </div>

              {/* Full Description & Highlights */}
              <div className="grid md:grid-cols-2 gap-4 text-xs">
                <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-2">
                  <h4 className="font-bold text-white text-sm">Platform Overview</h4>
                  <p className="text-slate-400 leading-relaxed">{selectedProduct.description}</p>
                </div>
                <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-2">
                  <h4 className="font-bold text-white text-sm">Core Capabilities</h4>
                  <ul className="space-y-1.5 text-slate-300">
                    {selectedProduct.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-red shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-slate-900 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 shrink-0">
              <div className="text-xs text-slate-400">
                Developed & Incubated by <span className="text-white font-semibold">TechBridge Venture Studio</span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="px-4 py-2 bg-slate-800 text-slate-300 hover:text-white rounded-lg text-xs font-medium transition-colors"
                >
                  Close
                </button>
                <a
                  href="#contact"
                  onClick={() => setSelectedProduct(null)}
                  className="px-5 py-2 bg-brand-red hover:bg-red-600 text-white rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5"
                >
                  Request Full Product Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
