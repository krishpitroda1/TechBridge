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
                            Technology Venture Studio & Digital Solutions Company
                        </h2>
                        <div className="space-y-4 text-gray-600 leading-relaxed">
                            <p>
                                TechBridge is a technology venture studio and digital solutions enterprise. Backed by <strong className="text-brand-dark">30+ years of personal hands-on experience</strong> in technology architecture, telecom, digital infrastructure, and enterprise software, we build, incubate, and scale high-impact platforms.
                            </p>
                            <p>
                                As a dual-engine venture studio, we both engineer our own proprietary SaaS and AI platforms — spanning healthcare, Indian creative media, B2B sales intelligence, CPaaS marketing, and MSME fintech — and partner with ambitious digital businesses across their full growth and scale lifecycle.
                            </p>
                            <p className="border-l-4 border-brand-red pl-4 italic text-gray-800 font-medium">
                                We combine 30+ years of seasoned technology leadership with agile venture incubation to turn bold digital concepts into market-leading reality.
                            </p>
                        </div>

                        <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-gray-100">
                            <div>
                                <h4 className="font-bold text-3xl text-brand-dark mb-1">30+</h4>
                                <p className="text-xs sm:text-sm text-gray-500 font-medium">Years Personal Experience</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-3xl text-brand-red mb-1">8+</h4>
                                <p className="text-xs sm:text-sm text-gray-500 font-medium">Proprietary Platforms</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-3xl text-brand-dark mb-1">Global</h4>
                                <p className="text-xs sm:text-sm text-gray-500 font-medium">Network Reach</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
