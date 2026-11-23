import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, ExternalLink, Sparkles, Heart, Lightbulb, TrendingUp } from "lucide-react";

const ventures = [
  {
    slug: "clinicall",
    name: "CliniCAll",
    tagline: "Simplifying Clinic Management. Empowering Medical Practices.",
    description:
      "A technology-driven clinic management platform designed to simplify everyday healthcare administration and help medical professionals focus on what matters most — patient care.",
    website: "https://www.clinicall.online",
    category: "Healthcare Technology",
    color: "sky",
    icon: "🏥",
    highlights: [
      "Smart appointment & queue management",
      "Electronic Medical Records (EMR)",
      "Digital prescriptions & documentation",
      "WhatsApp-based patient communication",
    ],
  },
  {
    slug: "datasandook",
    name: "DataSandook",
    tagline: "Making Data More Meaningful. Unlocking New Possibilities.",
    description:
      "A data repository in cloud with digital intelligence. Building a platform around the evolving opportunity of data organisation, understanding and deriving meaningful value from information.",
    website: "https://www.datasandook.com",
    category: "Data & Cloud Intelligence",
    color: "blue",
    icon: "🗄️",
    highlights: [
      "Cloud-based data repository",
      "Digital intelligence platform",
      "Practical digital value creation",
      "Innovative data-driven possibilities",
    ],
  },
  {
    slug: "chitrabharat",
    name: "ChitraBharat",
    tagline: "Celebrating India's Creative Identity. Sharing Bharat with the World.",
    description:
      "A digital creative platform dedicated to showcasing India's rich visual, cultural and artistic diversity to audiences across the world.",
    website: "https://www.chitrabharat.com",
    category: "Creative Media Platform",
    color: "orange",
    icon: "🎨",
    highlights: [
      "Indian stock photography",
      "High-quality video & cinematic footage",
      "Royalty-free audio and music",
      "Festival and regional content collections",
    ],
  },
];

const colorMap = {
  sky: {
    bg: "bg-sky-50",
    border: "border-sky-200",
    badge: "bg-sky-100 text-sky-700",
    icon: "bg-sky-100",
    btn: "bg-sky-600 hover:bg-sky-700",
    dot: "bg-sky-500",
    ring: "ring-sky-200",
  },
  blue: {
    bg: "bg-blue-50",
    border: "border-blue-200",
    badge: "bg-blue-100 text-blue-700",
    icon: "bg-blue-100",
    btn: "bg-blue-600 hover:bg-blue-700",
    dot: "bg-blue-500",
    ring: "ring-blue-200",
  },
  orange: {
    bg: "bg-orange-50",
    border: "border-orange-200",
    badge: "bg-orange-100 text-orange-700",
    icon: "bg-orange-100",
    btn: "bg-orange-600 hover:bg-orange-700",
    dot: "bg-orange-500",
    ring: "ring-orange-200",
  },
};

export default function VenturesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Banner */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-brand-dark via-slate-900 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FF4D4D_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red font-semibold text-xs uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            TechBridge Advisory Partners
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
            Ventures We{" "}
            <span className="text-brand-red">Support</span>
          </h1>

          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto mb-10">
            Supporting Ideas. Building Businesses. Creating Impact.
          </p>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto text-left">
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              At TechBridge Advisory Partners, we believe that meaningful businesses are built by identifying
              opportunities, embracing innovation and turning ideas into scalable solutions.
            </p>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base mt-4">
              Beyond our advisory and strategic growth activities, we actively support the development of promising
              digital businesses, technology platforms and entrepreneurial initiatives across emerging industries.
            </p>
          </div>

          {/* Three pillars */}
          <div className="grid sm:grid-cols-3 gap-4 mt-10 max-w-3xl mx-auto text-sm">
            {[
              { icon: <Lightbulb className="w-5 h-5" />, label: "Supporting Ideas" },
              { icon: <TrendingUp className="w-5 h-5" />, label: "Building Businesses" },
              { icon: <Heart className="w-5 h-5" />, label: "Creating Impact" },
            ].map((p, i) => (
              <div
                key={i}
                className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-medium text-white"
              >
                <span className="text-brand-red">{p.icon}</span>
                {p.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ventures Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-4">
              Our Supported <span className="text-brand-red">Ventures</span>
            </h2>
            <p className="text-gray-500 text-base max-w-2xl mx-auto">
              Three distinct ventures each building meaningful digital platforms across healthcare, data intelligence
              and creative media.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {ventures.map((venture) => {
              const c = colorMap[venture.color];
              return (
                <div
                  key={venture.slug}
                  className={`bg-white rounded-2xl border ${c.border} shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col`}
                >
                  {/* Card Header */}
                  <div className={`p-6 ${c.bg}`}>
                    <div className={`w-14 h-14 ${c.icon} rounded-2xl flex items-center justify-center text-2xl mb-4 ring-4 ${c.ring}`}>
                      {venture.icon}
                    </div>
                    <span className={`text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full ${c.badge}`}>
                      {venture.category}
                    </span>
                    <h3 className="text-xl font-bold text-brand-dark mt-3 mb-1">{venture.name}</h3>
                    <p className="text-sm text-gray-600 italic leading-snug">"{venture.tagline}"</p>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex flex-col flex-1">
                    <p className="text-gray-600 text-sm leading-relaxed mb-5">{venture.description}</p>

                    <ul className="space-y-2 mb-6">
                      {venture.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-gray-600">
                          <span className={`w-1.5 h-1.5 rounded-full ${c.dot} shrink-0 mt-1.5`} />
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto flex flex-col gap-2">
                      <Link
                        href={`/ventures/${venture.slug}`}
                        className={`w-full py-2.5 ${c.btn} text-white text-sm font-semibold rounded-xl text-center transition-colors flex items-center justify-center gap-2`}
                      >
                        Explore {venture.name} <ArrowRight className="w-4 h-4" />
                      </Link>
                      <a
                        href={venture.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium rounded-xl text-center transition-colors flex items-center justify-center gap-2"
                      >
                        Visit Website <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 text-center max-w-3xl">
          <h3 className="text-2xl sm:text-3xl font-bold text-brand-dark mb-4">
            Have a Venture Idea?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-8">
            If you have a promising digital business idea or early-stage platform looking for strategic support,
            advisory and network access, we would love to explore how TechBridge can help.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-red text-white font-semibold rounded-full hover:bg-red-600 transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5"
          >
            Start a Conversation <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
