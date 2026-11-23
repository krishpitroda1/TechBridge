import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, ExternalLink, CheckCircle2, Target, Eye } from "lucide-react";

export default function CliniCallPage() {
  const features = [
    "Smart appointment and queue management",
    "Electronic Medical Records (EMR)",
    "Digital prescriptions and medical documentation",
    "Pharmacy and inventory management",
    "Patient billing and payment tracking",
    "WhatsApp-based patient communication",
    "Clinic performance reports and insights",
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-sky-950 via-sky-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:18px_18px]" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-5xl">
          <Link
            href="/ventures"
            className="inline-flex items-center gap-2 text-sky-300 hover:text-white text-sm font-medium transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Ventures We Support
          </Link>

          <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
            <div className="w-20 h-20 bg-sky-100 rounded-3xl flex items-center justify-center text-4xl shadow-xl ring-4 ring-sky-200/30 shrink-0">
              🏥
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-sky-300 bg-sky-500/10 border border-sky-400/20 px-3 py-1 rounded-full">
                Healthcare Technology
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold mt-3 leading-tight">CliniCAll</h1>
              <p className="text-sky-200 text-lg mt-2 font-medium italic">
                Simplifying Clinic Management. Empowering Medical Practices.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.clinicall.online"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-sky-500 hover:bg-sky-400 text-white font-semibold rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm"
            >
              Visit CliniCAll <ExternalLink className="w-4 h-4" />
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
                <span className="w-1 h-6 bg-sky-500 rounded-full inline-block" />
                About CliniCAll
              </h2>
              <p className="text-gray-600 leading-relaxed text-base">
                CliniCAll is a technology-driven clinic management platform designed to simplify everyday healthcare
                administration and help medical professionals focus on what matters most — patient care.
              </p>
              <p className="text-gray-600 leading-relaxed text-base mt-4">
                Built for doctors, receptionists and clinic administrators, CliniCAll brings essential clinic
                operations together through a unified digital platform.
              </p>
              <p className="text-gray-600 leading-relaxed text-base mt-4">
                From appointment scheduling and electronic medical records to digital prescriptions, inventory
                management, billing and patient communication, CliniCAll aims to make clinic operations more
                organised, efficient and accessible.
              </p>
            </div>

            {/* What It Brings Together */}
            <div>
              <h2 className="text-2xl font-bold text-brand-dark mb-5 flex items-center gap-2">
                <span className="w-1 h-6 bg-sky-500 rounded-full inline-block" />
                What CliniCAll Brings Together
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {features.map((f, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-sky-50 rounded-xl border border-sky-100">
                    <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700 font-medium">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-sky-50 to-blue-50 border border-sky-100 rounded-2xl p-8">
              <h2 className="text-xl font-bold text-brand-dark mb-4 flex items-center gap-2">
                <Eye className="w-5 h-5 text-sky-500" /> Our Vision
              </h2>
              <p className="text-gray-700 leading-relaxed">
                To contribute to a more organised, connected and technology-enabled healthcare ecosystem by making
                modern clinic management accessible to medical practices of different sizes.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-sky-950 text-white rounded-2xl p-6 shadow-xl">
              <h3 className="font-bold text-lg mb-4 text-sky-200">Platform Details</h3>
              <div className="space-y-4 text-sm">
                <div className="border-b border-sky-800 pb-3">
                  <div className="text-sky-400 text-xs uppercase tracking-wider mb-1">Category</div>
                  <div className="font-medium">Healthcare Technology</div>
                </div>
                <div className="border-b border-sky-800 pb-3">
                  <div className="text-sky-400 text-xs uppercase tracking-wider mb-1">Target Users</div>
                  <div className="font-medium">Doctors, Receptionists, Clinic Administrators</div>
                </div>
                <div className="border-b border-sky-800 pb-3">
                  <div className="text-sky-400 text-xs uppercase tracking-wider mb-1">Focus</div>
                  <div className="font-medium">Clinic Management, EMR, Patient Care</div>
                </div>
                <div>
                  <div className="text-sky-400 text-xs uppercase tracking-wider mb-1">Website</div>
                  <a
                    href="https://www.clinicall.online"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-300 hover:text-white font-medium flex items-center gap-1 transition-colors"
                  >
                    clinicall.online <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
              <h3 className="font-bold text-brand-dark mb-3 text-sm">Supported by TechBridge</h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-4">
                CliniCAll is one of the promising ventures backed by TechBridge Advisory Partners through strategic
                support, advisory and network access.
              </p>
              <Link
                href="/ventures"
                className="text-xs font-semibold text-brand-red hover:underline flex items-center gap-1"
              >
                View All Ventures <span>→</span>
              </Link>
            </div>

            <a
              href="https://www.clinicall.online"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3.5 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-xl text-center transition-colors text-sm flex items-center justify-center gap-2"
            >
              Explore CliniCAll <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
