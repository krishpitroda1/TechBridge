"use client";
import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">

                    <div className="w-full md:w-2/5 bg-brand-red text-white p-10 flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-bold mb-6">Let's Talk</h3>
                            <p className="opacity-90 mb-8 leading-relaxed">
                                Explore whether there is a strategic fit before we talk transactions.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <Phone className="w-5 h-5" />
                                    <a href="tel:+919833994266" className="hover:underline">+91 98339 94266</a>
                                </div>
                                {/* Assuming email wasn't provided directly, adding a placeholder or omitting */}
                                {/* <div className="flex items-center gap-3">
                            <Mail className="w-5 h-5" />
                            <a href="mailto:contact@techbridge.com" className="hover:underline">contact@techbridge.com</a>
                        </div> */}
                            </div>
                        </div>

                        <div className="mt-12">
                            <div className="text-sm opacity-75">TechBridge Advisory Partners</div>
                            <div className="text-xs opacity-50 mt-1">© 2024 All rights reserved</div>
                        </div>
                    </div>

                    <div className="w-full md:w-3/5 p-10">
                        <form className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-medium text-gray-400 uppercase tracking-widest mb-2">First Name</label>
                                    <input type="text" className="w-full border-b border-gray-300 focus:border-brand-red focus:outline-none py-2 transition-colors" placeholder="John" />
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-gray-400 uppercase tracking-widest mb-2">Last Name</label>
                                    <input type="text" className="w-full border-b border-gray-300 focus:border-brand-red focus:outline-none py-2 transition-colors" placeholder="Doe" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-medium text-gray-400 uppercase tracking-widest mb-2">Email Address</label>
                                <input type="email" className="w-full border-b border-gray-300 focus:border-brand-red focus:outline-none py-2 transition-colors" placeholder="john@example.com" />
                            </div>

                            <div>
                                <label className="block text-xs font-medium text-gray-400 uppercase tracking-widest mb-2">Company</label>
                                <input type="text" className="w-full border-b border-gray-300 focus:border-brand-red focus:outline-none py-2 transition-colors" placeholder="Your Company Ltd" />
                            </div>

                            <div>
                                <label className="block text-xs font-medium text-gray-400 uppercase tracking-widest mb-2">How can we help?</label>
                                <textarea rows="3" className="w-full border-b border-gray-300 focus:border-brand-red focus:outline-none py-2 transition-colors" placeholder="Tell us about your goals..."></textarea>
                            </div>

                            <button type="submit" className="px-8 py-3 bg-brand-dark text-white font-medium rounded-full hover:bg-black hover:shadow-lg hover:-translate-y-0.5 transition-all">
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
