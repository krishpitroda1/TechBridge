"use client";
import React from "react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-brand-dark text-white py-12 border-t border-gray-800">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-8 mb-8">

                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            {/* Logo or Text */}
                            <span className="text-2xl font-bold tracking-tighter text-white">
                                TechBridge
                            </span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                            A Technology Venture Studio and Digital Solutions Company. Building, incubating, and scaling market-defining platforms across SaaS, AI, MarTech, and MSME digital ecosystems.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-4">Company</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="/#about" className="hover:text-brand-red transition-colors">About Us</Link></li>
                            <li><Link href="/#products" className="hover:text-brand-red transition-colors">Products & Platforms</Link></li>
                            <li><Link href="/#services" className="hover:text-brand-red transition-colors">Services</Link></li>
                            <li><Link href="/#industries" className="hover:text-brand-red transition-colors">Industries</Link></li>
                            <li><Link href="/#contact" className="hover:text-brand-red transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-bold text-lg mb-4">Contact</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li className="flex items-center gap-2 text-white font-medium">Rajkot, Gujarat, India</li>
                            <li><a href="tel:+919429641563" className="hover:text-brand-red">+91 94296 41563</a></li>
                            <li><a href="mailto:info@techbridge.website" className="hover:text-brand-red">info@techbridge.website</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} TechBridge Advisory Partners. All rights reserved.</p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <Link href="/privacy-policy" className="hover:text-brand-red transition-colors">Privacy Policy</Link>
                        <Link href="/terms-conditions" className="hover:text-brand-red transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
