"use client";
import React from "react";
import { CheckCircle2 } from "lucide-react";

export default function IndustriesAndWhyUs() {
    const industries = [
        "Telecom & Messaging (A2P, CPaaS)",
        "SaaS & Enterprise Software",
        "AI & Data Platforms",
        "Cloud & Digital Marketplaces",
        "Tech-enabled Services",
    ];

    const whyUs = [
        "Deep domain expertise in Telecom & Technology",
        "Strong global investor & strategic network",
        "Finance-savvy advisory for valuation & diligence",
        "Hands-on execution support post-deal",
        "Recognised and awarded across global tech forums",
        "Trusted by angels, family offices, and strategic investors",
    ];

    return (
        <section id="industries" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16">

                    {/* Industries */}
                    <div>
                        <h3 className="text-brand-red font-semibold uppercase tracking-widest mb-2">Industries</h3>
                        <h2 className="text-3xl font-bold text-brand-dark mb-8">We Specialise In</h2>
                        <div className="space-y-4">
                            {industries.map((industry, index) => (
                                <div key={index} className="flex items-center gap-4 bg-gray-50 p-6 rounded-xl hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-gray-100">
                                    <div className="w-2 h-2 rounded-full bg-brand-red"></div>
                                    <span className="text-lg font-medium text-gray-800">{industry}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Why Us */}
                    <div className="bg-brand-dark text-white rounded-2xl p-10 relative overflow-hidden">

                        {/* Abstract red accent */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red opacity-10 blur-3xl rounded-full transform translate-x-1/2 -translate-y-1/2"></div>

                        <h3 className="text-brand-red font-semibold uppercase tracking-widest mb-2 relative z-10">Why TechBridge</h3>
                        <h2 className="text-3xl font-bold mb-8 relative z-10">Why Founders Choose Us</h2>

                        <ul className="space-y-4 relative z-10">
                            {whyUs.map((reason, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                                    <span className="text-gray-200">{reason}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-10 pt-8 border-t border-gray-800 relative z-10">
                            <h4 className="font-bold text-white mb-2">Our Approach</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Selective • Transparent • Execution-driven. <br />
                                We focus on strategic fit before transactions, ensuring long-term outcomes for all stakeholders.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
