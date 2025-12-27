"use client";
import React from "react";
import { HandCoins, Handshake, TrendingUp, Network } from "lucide-react";

export default function Services() {
    const services = [
        {
            title: "Capital Advisory",
            icon: <HandCoins className="w-8 h-8 text-brand-red" />,
            description: "We help founders and growth-stage companies access the right capital at the right stage.",
            items: [
                "Fundraising (Seed to Series C)",
                "Strategic investor & VC introductions",
                "Debt advisory",
                "Structured strategic investments",
            ],
        },
        {
            title: "Mergers & Acquisitions",
            icon: <Handshake className="w-8 h-8 text-brand-red" />,
            description: "End-to-end advisory for buy-side and sell-side mandates.",
            items: [
                "Global deal sourcing (buy & sell mandates)",
                "Valuation and deal structuring",
                "Due diligence coordination",
                "Negotiation and transaction support",
            ],
        },
        {
            title: "Scale & Growth Consulting",
            icon: <TrendingUp className="w-8 h-8 text-brand-red" />,
            description: "We support companies beyond the deal to unlock sustainable value.",
            items: [
                "Go-to-market (GTM) strategy",
                "Country & cross-border expansion",
                "Business model optimisation",
                "Enterprise sales strategy",
            ],
        },
        {
            title: "Ecosystem Enablement (via partners)",
            icon: <Network className="w-8 h-8 text-brand-red" />,
            description: "Enabling scaling through a curated partner ecosystem under TechBridge oversight.",
            items: [
                "Technology & infrastructure scaling",
                "Cloud and communication automation",
                "Sales funnel design & optimisation",
                "Cross-border expansion (India, ME, EU, SE Asia, USA)",
            ],
        },
    ];

    return (
        <section id="services" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h3 className="text-brand-red font-semibold uppercase tracking-widest mb-2">What We Do</h3>
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">Core Services</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 flex flex-col items-center text-center md:items-start md:text-left h-full group relative overflow-hidden"
                        >
                            {/* Animated Border SVG */}
                            {/* Animated Border SVG */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none rounded-xl">
                                <rect
                                    x="0" y="0" width="100%" height="100%" rx="12" ry="12"
                                    fill="none"
                                    stroke="#FF4D4D"
                                    strokeWidth="2"
                                    pathLength="100"
                                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out draw-border"
                                />
                            </svg>
                            <div className="mb-6 p-3 bg-red-50 rounded-lg inline-block text-brand-red transition-all duration-300 group-hover:scale-110">{service.icon}</div>
                            <h3 className="text-xl font-bold text-brand-dark mb-3">{service.title}</h3>
                            <p className="text-gray-700 mb-6 text-sm leading-relaxed">{service.description}</p>
                            <ul className="space-y-2 w-full">
                                {service.items.map((item, idx) => (
                                    <li key={idx} className="text-sm text-slate-600 flex items-start gap-2 text-left">
                                        <span className="text-brand-red mt-1 shrink-0">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
