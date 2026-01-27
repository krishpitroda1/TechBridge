import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TermsAndConditions() {
    return (
        <div className="min-h-screen bg-black text-white pt-24 pb-12 px-6 md:px-12 lg:px-24 relative">
            <Link href="/" className="absolute top-8 left-6 md:left-12 lg:left-24 text-gray-500 hover:text-white transition-colors">
                <ArrowLeft className="w-8 h-8" />
            </Link>
            <div className="max-w-4xl mx-auto space-y-8">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
                    Terms & Conditions
                </h1>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-brand-red">Welcome to TechBridge</h2>
                    <p className="text-gray-300 leading-relaxed">
                        These terms and conditions outline the rules and regulations for the use of SMSCloud Hub's website and services By accessing this website and using our services, you agree to accept these terms and conditions. If you do not agree to all the terms and conditions stated on this page, please do not continue to use Techbridge
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-brand-red">Terminology</h2>
                    <p className="text-gray-300 leading-relaxed">
                        The following terminology applies to these Terms and Conditions, Privacy Policy, and Disclaimer Notice:
                        <br />
                        “Client,” “You,” and “Your” refer to you, the person accessing this website and using our services in compliance with these terms.
                        <br />
                        “The Company,” “We,” “Our,” and “Us” refer to TechBridge.
                        <br />
                        “Party” refers to both the Client and ourselves.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-brand-red">Cookies</h2>
                    <p className="text-gray-300 leading-relaxed">
                        We use cookies to enhance your experience on TechBridge. By accessing our website, you consent to the use of cookies in accordance with our Privacy Policy. Cookies help improve website functionality and may be used by our advertising and affiliate partners.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-brand-red">License</h2>
                    <p className="text-gray-300 leading-relaxed">
                        Unless otherwise stated, TechBridge and/or its licensors own the intellectual property rights for all material on TechBridge. All intellectual property rights are reserved. You may access this material for personal use only, subject to the following restrictions:
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>You must not republish material from TechBridge without proper attribution.</li>
                            <li>You must not sell, rent, or sub-license material from TechBridge.</li>
                            <li>“Party” refers to both the Client and ourselves.</li>
                            <li>You must not redistribute content from User-Generated Content</li>
                        </ul>
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-brand-red">User-Generated Content</h2>
                    <p className="text-gray-300 leading-relaxed">
                        Users may post comments, feedback, or other content on our website or through our services. The opinions expressed do not reflect the views of TechBridge. We are not responsible for user-generated content and reserve the right to monitor and remove any content deemed inappropriate or in violation of these terms.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-brand-red">Use of Google RCS Services</h2>
                    <p className="text-gray-300 leading-relaxed">
                        By using our Google RCS services, you agree to:
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Use RCS only for lawful and permissible purposes.</li>
                            <li>Refrain from engaging in spamming, phishing, or illegal marketing activities via RCS.</li>
                            <li>Adhere to Google’s RCS messaging guidelines, which we facilitate through our platform.</li>
                        </ul>
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-brand-red">Data Protection and Privacy</h2>
                    <p className="text-gray-300 leading-relaxed">
                        Your privacy is important to us. Please refer to our Privacy Policy to understand how we handle your personal information. We ensure that data collected through our messaging and ERP platforms, including RCS communications, is stored securely and processed in compliance with applicable laws.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-brand-red">Service Availability and Updates</h2>
                    <p className="text-gray-300 leading-relaxed">
                        We strive to keep our services available 24/7. However, we reserve the right to temporarily suspend or discontinue any service for maintenance or updates without prior notice. While we will make efforts to ensure minimal disruption, we are not liable for any downtime.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-brand-red">Hyperlinking to Our Content</h2>
                    <p className="text-gray-300 leading-relaxed">
                        Organizations such as government agencies, search engines, and news organizations may link to our website without prior written approval, provided that the link:
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>is not deceptive</li>
                            <li>Does not falsely imply sponsorship, endorsement, or approval.</li>
                            <li>Fits within the context of the linking party’s site.</li>
                        </ul>
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-brand-red">Limitation of Liability</h2>
                    <p className="text-gray-300 leading-relaxed">
                        TechBridge will not be held liable for any damages arising out of the use or inability to use our website or services, to the extent permitted by law. This includes, but is not limited to, damages for data loss, business interruption, or any other losses.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-brand-red">Third-Party Services and Links</h2>
                    <p className="text-gray-300 leading-relaxed">
                        Our website and services may include links to third-party websites or services for your convenience. We are not responsible for the content or accuracy of these third-party websites and disclaim any liability related to their usage.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-brand-red">Jurisdiction and Governing Law</h2>
                    <p className="text-gray-300 leading-relaxed">
                        These terms and conditions are governed by the laws of India. Any disputes arising under these terms will be resolved under the jurisdiction of Indian courts.
                    </p>
                </section>
            </div>
        </div>
    );
}
