import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-black text-white pt-24 pb-12 px-6 md:px-12 lg:px-24 relative">
            <Link href="/" className="absolute top-8 left-6 md:left-12 lg:left-24 text-gray-500 hover:text-white transition-colors">
                <ArrowLeft className="w-8 h-8" />
            </Link>
            <div className="max-w-4xl mx-auto space-y-8">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
                    Privacy Policy
                </h1>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-brand-red">Who are we</h2>
                    <p className="text-gray-300 leading-relaxed">
                        TechBridge operates various products and services including messaging services (SMS, WhatsApp, Google RCS). This Privacy Policy outlines our practices regarding the collection, use, and disclosure of Personal Information across all our products and services.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-brand-red">Information Collection and Use</h2>
                    <p className="text-gray-300 leading-relaxed">
                        We collect and use Personal Information to provide and improve our services. Personal Information may include, but is not limited to, your name, contact details, and other information relevant to the use of our services.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-brand-red">Messaging Services (SMS, WhatsApp, Google RCS)</h2>
                    <p className="text-gray-300 leading-relaxed">
                        In providing messaging services, we collect and process data related to messages sent and received. This data is used to deliver messages, manage communication channels, and enhance our messaging services. We do not share this information with third parties without consent.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-brand-red">Security</h2>
                    <p className="text-gray-300 leading-relaxed">
                        The security of your Personal Information is paramount to us. While we use commercially acceptable means to protect your information, please be aware that no method of transmission over the Internet or electronic storage is completely secure. We cannot guarantee absolute security but strive to ensure your data is protected.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-brand-red">Log Data</h2>
                    <p className="text-gray-300 leading-relaxed">
                        We use APIs to integrate various functionalities such as tracking services and data management. These APIs may access certain data but are designed to ensure that no personal information is shared with unauthorized parties.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-brand-red">APIs</h2>
                    <p className="text-gray-300 leading-relaxed">
                        We use APIs to integrate various functionalities such as tracking services and data management. These APIs may access certain data but are designed to ensure that no personal information is shared with unauthorized parties.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-brand-red">Cookies</h2>
                    <p className="text-gray-300 leading-relaxed">
                        Cookies are small files with data, including an anonymous unique identifier, sent to your browser from a web Mobile App and stored on your device. We use cookies to enhance your experience and analyze usage patterns. You can choose to disable cookies through your browser settings, but this may affect your experience with our services.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-brand-red">Changes to This Privacy Policy</h2>
                    <p className="text-gray-300 leading-relaxed">
                        This Privacy Policy is effective as of 01/01/2025 and will remain in effect except for any changes in its provisions. We may update this policy from time to time, and any changes will be posted on this page. Your continued use of our services after modifications signifies your acceptance of the updated policy.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-brand-red">Contact Us</h2>
                    <p className="text-gray-300 leading-relaxed">
                        If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:info@techbridge.com" className="text-blue-400 hover:underline">info@techbridge.com</a>
                    </p>
                </section>
            </div>
        </div>
    );
}
