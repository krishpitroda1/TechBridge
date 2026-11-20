"use client";
import React, { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        company: "",
        message: "",
        consent: false
    });
    const [status, setStatus] = useState(null); // null, 'submitting', 'success', 'error'

    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFormData({ ...formData, [e.target.name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const response = await fetch("https://formsubmit.co/ajax/info@techbridge.website", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ firstName: "", lastName: "", email: "", company: "", message: "", consent: false });
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };
    return (
        <section id="contact" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">

                    <div className="w-full md:w-2/5 bg-brand-red text-white p-10 flex flex-col justify-between">
                        <div>
                            <span className="text-xs uppercase tracking-widest font-semibold opacity-80 block mb-2">Venture Studio & Solutions</span>
                            <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
                            <p className="opacity-90 mb-8 leading-relaxed text-sm">
                                Whether you're exploring our proprietary platforms, looking for a venture studio partner, or seeking digital growth execution, let's talk.
                            </p>

                            <div className="space-y-4 text-sm">
                                <div className="flex items-center gap-3">
                                    <Phone className="w-5 h-5 shrink-0" />
                                    <a href="tel:+919429641563" className="hover:underline">+91 94296 41563</a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Mail className="w-5 h-5 shrink-0" />
                                    <a href="mailto:info@techbridge.website" className="hover:underline">info@techbridge.website</a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <MapPin className="w-5 h-5 shrink-0" />
                                    <span>Rajkot, Gujarat, India</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 pt-6 border-t border-white/20">
                            <div className="text-sm font-semibold">TechBridge</div>
                            <div className="text-xs opacity-75">Technology Venture Studio & Digital Solutions</div>
                            <div className="text-xs opacity-60 mt-1">© {new Date().getFullYear()} All rights reserved</div>
                        </div>
                    </div>

                    <div className="w-full md:w-3/5 p-10">
                        <form
                            className="space-y-6"
                            onSubmit={handleSubmit}
                        >

                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-medium text-gray-400 uppercase tracking-widest mb-2">First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        required
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="w-full border-b border-gray-300 focus:border-brand-red focus:outline-none py-2 transition-colors"
                                        placeholder="John"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-gray-400 uppercase tracking-widest mb-2">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        required
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="w-full border-b border-gray-300 focus:border-brand-red focus:outline-none py-2 transition-colors"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-medium text-gray-400 uppercase tracking-widest mb-2">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full border-b border-gray-300 focus:border-brand-red focus:outline-none py-2 transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-medium text-gray-400 uppercase tracking-widest mb-2">Company</label>
                                <input
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    className="w-full border-b border-gray-300 focus:border-brand-red focus:outline-none py-2 transition-colors"
                                    placeholder="Your Company Ltd"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-medium text-gray-400 uppercase tracking-widest mb-2">How can we help?</label>
                                <textarea
                                    rows="3"
                                    name="message"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full border-b border-gray-300 focus:border-brand-red focus:outline-none py-2 transition-colors"
                                    placeholder="Tell us about your goals..."
                                ></textarea>
                            </div>

                            <div className="flex items-start gap-3">
                                <input
                                    type="checkbox"
                                    name="consent"
                                    id="consent"
                                    required
                                    checked={formData.consent}
                                    onChange={handleChange}
                                    className="mt-1 w-4 h-4 text-brand-red border-gray-300 rounded focus:ring-brand-red"
                                />
                                <label htmlFor="consent" className="text-xs text-gray-500 leading-tight">
                                    By clicking this, you agree to disclose your personal information to TechBridge for contacting you via SMS, Email, RCS Messages, Calls and WhatsApp.
                                </label>
                            </div>

                            <div className="flex items-center gap-4">
                                <button
                                    type="submit"
                                    disabled={status === 'submitting'}
                                    className="px-8 py-3 bg-brand-dark text-white font-medium rounded-full cursor-pointer hover:bg-black hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                                </button>
                                {status === 'success' && (
                                    <span className="text-green-600 text-sm font-medium animate-pulse">Message sent successfully!</span>
                                )}
                                {status === 'error' && (
                                    <span className="text-red-600 text-sm font-medium">Something went wrong. Please try again.</span>
                                )}
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
