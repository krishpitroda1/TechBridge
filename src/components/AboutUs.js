"use client";
import React from "react";

export default function AboutUs() {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    <div className="w-full md:w-1/2">
                        <div className="relative">
                            {/* Decorative image or placeholder */}
                            <div className="aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden relative">
                                <img src="/team.png" alt="TechBridge Team" className="object-cover w-full h-full hover:scale-105 transition-transform duration-700" />
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-red rounded-full flex items-center justify-center text-white font-bold p-4 text-center text-xs shadow-xl hidden md:flex">
                                Trusted by Global Founders
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2">
                        <h3 className="text-brand-red font-semibold uppercase tracking-widest mb-2">About Us</h3>
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">
                            Boutique Tech M&A & Growth Execution Partner
                        </h2>
                        <div className="space-y-4 text-gray-600 leading-relaxed">
                            <p>
                                TechBridge Advisory Partners advises technology-first businesses across the full lifecycle —
                                <strong className="text-brand-dark"> Funding, M&A, Growth, and Exit.</strong>
                            </p>
                            <p>
                                With deep domain expertise in Telecom, CPaaS, SaaS, AI, and online platforms, we work hands-on
                                with founders, investors, and strategic buyers to unlock real, sustainable value — not just close transactions.
                            </p>
                            <p className="border-l-4 border-brand-red pl-4 italic text-gray-800 font-medium">
                                We are not just brokers. We are execution-focused growth and deal advisors.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6 mt-8">
                            <div>
                                <h4 className="font-bold text-3xl text-brand-dark mb-1">20+</h4>
                                <p className="text-sm text-gray-500">Years Experience</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-3xl text-brand-dark mb-1">Global</h4>
                                <p className="text-sm text-gray-500">Network Reach</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
