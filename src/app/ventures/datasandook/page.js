import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, ExternalLink, CheckCircle2, Eye, Database } from "lucide-react";

export default function DataSandookPage() {
  const highlights = [
    "Cloud-based data repository and storage",
    "Digital intelligence and data insights",
    "Practical digital value creation for businesses",
    "Innovative data-driven solutions",
    "Organised data management tools",
    "Scalable infrastructure for data-driven organisations",
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero — Light Theme */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 via-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#bfdbfe_1px,transparent_1px)] [background-size:18px_18px]" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-5xl">
          <Link
            href="/ventures"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Ventures We Support
          </Link>

          <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
            <div className="w-20 h-20 bg-blue-100 rounded-3xl flex items-center justify-center text-4xl shadow-lg ring-4 ring-blue-200 shrink-0">
              🗄️
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-100 border border-blue-200 px-3 py-1 rounded-full">
                Data & Cloud Intelligence
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold mt-3 leading-tight text-brand-dark">DataSandook</h1>
              <p className="text-blue-600 text-lg mt-2 font-medium italic">
                Making Data More Meaningful. Unlocking New Possibilities.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.datasandook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 text-sm"
            >
              Visit DataSandook <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-gray-50 border border-gray-200 text-brand-dark font-medium rounded-full transition-all text-sm shadow-sm"
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
                <span className="w-1 h-6 bg-blue-500 rounded-full inline-block" />
                About DataSandook
              </h2>
              <p className="text-gray-600 leading-relaxed text-base">
                DataSandook is a data repository in cloud with digital intelligence. In an increasingly data-driven
                world, the ability to organise, understand and derive meaningful value from information is becoming
                essential for individuals, businesses and organisations.
              </p>
              <p className="text-gray-600 leading-relaxed text-base mt-4">
                DataSandook represents an initiative to build a platform around this evolving opportunity, with a
                focus on creating practical digital value through innovative thinking and technology.
              </p>
            </div>

            {/* The Opportunity */}
            <div>
              <h2 className="text-2xl font-bold text-brand-dark mb-5 flex items-center gap-2">
                <span className="w-1 h-6 bg-blue-500 rounded-full inline-block" />
                The Opportunity
              </h2>
              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-6">
                <div className="flex items-start gap-3">
                  <Database className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <p className="text-gray-700 text-sm leading-relaxed">
                    In an increasingly data-driven world, the ability to organise, understand and derive meaningful
                    value from information is becoming essential for individuals, businesses and organisations.
                    DataSandook is built to address this fundamental and growing need.
                  </p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700 font-medium">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-8">
              <h2 className="text-xl font-bold text-brand-dark mb-4 flex items-center gap-2">
                <Eye className="w-5 h-5 text-blue-500" /> Our Vision
              </h2>
              <p className="text-gray-700 leading-relaxed">
                To develop a meaningful digital platform that explores the potential of data and technology to create
                smarter possibilities for the future.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Platform Details — Light card */}
            <div className="bg-white border border-blue-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-lg">🗄️</div>
                <h3 className="font-bold text-brand-dark">Platform Details</h3>
              </div>
              <div className="space-y-4 text-sm">
                <div className="border-b border-gray-100 pb-3">
                  <div className="text-blue-600 text-xs uppercase tracking-wider font-semibold mb-1">Category</div>
                  <div className="font-medium text-brand-dark">Data & Cloud Intelligence</div>
                </div>
                <div className="border-b border-gray-100 pb-3">
                  <div className="text-blue-600 text-xs uppercase tracking-wider font-semibold mb-1">Focus Area</div>
                  <div className="font-medium text-brand-dark">Data Repositories, Digital Intelligence, Cloud</div>
                </div>
                <div className="border-b border-gray-100 pb-3">
                  <div className="text-blue-600 text-xs uppercase tracking-wider font-semibold mb-1">Stage</div>
                  <div className="font-medium text-brand-dark">Platform in Development</div>
                </div>
                <div>
                  <div className="text-blue-600 text-xs uppercase tracking-wider font-semibold mb-1">Website</div>
                  <a
                    href="https://www.datasandook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1 transition-colors"
                  >
                    datasandook.com <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
              <h3 className="font-bold text-brand-dark mb-3 text-sm">Supported by TechBridge</h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-4">
                DataSandook is a venture backed by TechBridge Advisory Partners, receiving strategic advisory,
                technology guidance and network support.
              </p>
              <Link
                href="/ventures"
                className="text-xs font-semibold text-brand-red hover:underline flex items-center gap-1"
              >
                View All Ventures <span>→</span>
              </Link>
            </div>

            <a
              href="https://www.datasandook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl text-center transition-colors text-sm flex items-center justify-center gap-2 shadow-md"
            >
              Explore DataSandook <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
