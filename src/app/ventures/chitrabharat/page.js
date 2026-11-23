import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, ExternalLink, CheckCircle2, Eye, Globe } from "lucide-react";

export default function ChitraBharatPage() {
  const offerings = [
    "Indian stock photography",
    "High-quality video and cinematic footage",
    "Royalty-free audio and music",
    "Festival and regional content collections",
    "AI-generated creative assets",
    "Opportunities for creators and contributors",
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-orange-950 via-orange-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fb923c_1px,transparent_1px)] [background-size:18px_18px]" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-5xl">
          <Link
            href="/ventures"
            className="inline-flex items-center gap-2 text-orange-300 hover:text-white text-sm font-medium transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Ventures We Support
          </Link>

          <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
            <div className="w-20 h-20 bg-orange-100 rounded-3xl flex items-center justify-center text-4xl shadow-xl ring-4 ring-orange-200/30 shrink-0">
              🎨
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-orange-300 bg-orange-500/10 border border-orange-400/20 px-3 py-1 rounded-full">
                Creative Media Platform
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold mt-3 leading-tight">ChitraBharat</h1>
              <p className="text-orange-200 text-lg mt-2 font-medium italic">
                Celebrating India's Creative Identity. Sharing Bharat with the World.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.chitrabharat.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-400 text-white font-semibold rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm"
            >
              Visit ChitraBharat <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium rounded-full transition-all text-sm"
            >
              Partner with Us
            </a>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 container mx-auto px-4 sm:px-6 max-w-5xl">
        <div className="grid md:grid-cols-3 gap-10">

          {/* Main Content */}
          <div className="md:col-span-2 space-y-10">

            {/* About */}
            <div>
              <h2 className="text-2xl font-bold text-brand-dark mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-orange-500 rounded-full inline-block" />
                About ChitraBharat
              </h2>
              <p className="text-gray-600 leading-relaxed text-base">
                ChitraBharat is a digital creative platform dedicated to showcasing India's rich visual, cultural and
                artistic diversity to audiences across the world.
              </p>
              <p className="text-gray-600 leading-relaxed text-base mt-4">
                India has an extraordinary wealth of photography, traditions, festivals, landscapes, art, music and
                everyday stories. ChitraBharat aims to bring this creative richness together through a digital
                destination for authentic Indian photographs, videos, music and other creative assets.
              </p>
              <p className="text-gray-600 leading-relaxed text-base mt-4">
                The platform connects creators, photographers, videographers, artists and content users, helping
                Indian creativity reach a wider global audience.
              </p>
            </div>

            {/* What It Offers */}
            <div>
              <h2 className="text-2xl font-bold text-brand-dark mb-5 flex items-center gap-2">
                <span className="w-1 h-6 bg-orange-500 rounded-full inline-block" />
                What ChitraBharat Offers
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {offerings.map((o, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-orange-50 rounded-xl border border-orange-100">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700 font-medium">{o}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* India's Creative Wealth Callout */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100 rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-brand-dark mb-2">India's Creative Richness, Globally Accessible</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    India's visual storytelling tradition spans millennia — from ancient murals and miniature paintings
                    to contemporary street photography and cinematic landscapes. ChitraBharat creates a digital bridge
                    between this creative wealth and the world's growing appetite for authentic, diverse content.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 border border-orange-100 rounded-2xl p-8">
              <h2 className="text-xl font-bold text-brand-dark mb-4 flex items-center gap-2">
                <Eye className="w-5 h-5 text-orange-500" /> Our Vision
              </h2>
              <p className="text-gray-700 leading-relaxed">
                To build a globally recognised creative platform that celebrates India's identity, empowers creators
                and makes authentic Indian creative content accessible to the world.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-orange-950 text-white rounded-2xl p-6 shadow-xl">
              <h3 className="font-bold text-lg mb-4 text-orange-200">Platform Details</h3>
              <div className="space-y-4 text-sm">
                <div className="border-b border-orange-800 pb-3">
                  <div className="text-orange-400 text-xs uppercase tracking-wider mb-1">Category</div>
                  <div className="font-medium">Creative Media Platform</div>
                </div>
                <div className="border-b border-orange-800 pb-3">
                  <div className="text-orange-400 text-xs uppercase tracking-wider mb-1">Target Audience</div>
                  <div className="font-medium">Creators, Photographers, Videographers, Artists, Businesses</div>
                </div>
                <div className="border-b border-orange-800 pb-3">
                  <div className="text-orange-400 text-xs uppercase tracking-wider mb-1">Content Types</div>
                  <div className="font-medium">Photography, Video, Audio, AI-Generated Assets</div>
                </div>
                <div>
                  <div className="text-orange-400 text-xs uppercase tracking-wider mb-1">Website</div>
                  <a
                    href="https://www.chitrabharat.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-300 hover:text-white font-medium flex items-center gap-1 transition-colors"
                  >
                    chitrabharat.com <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
              <h3 className="font-bold text-brand-dark mb-3 text-sm">Supported by TechBridge</h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-4">
                ChitraBharat is a creative venture backed by TechBridge Advisory Partners through strategic support,
                advisory and network access to help it scale globally.
              </p>
              <Link
                href="/ventures"
                className="text-xs font-semibold text-brand-red hover:underline flex items-center gap-1"
              >
                View All Ventures <span>→</span>
              </Link>
            </div>

            <a
              href="https://www.chitrabharat.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3.5 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-xl text-center transition-colors text-sm flex items-center justify-center gap-2"
            >
              Explore ChitraBharat <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
