"use client";
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import ProductsPortfolio from '@/components/ProductsPortfolio';
import Services from '@/components/Services';
import IndustriesAndWhyUs from '@/components/Industries';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutUs />
      <ProductsPortfolio />
      <Services />
      <IndustriesAndWhyUs />
      <Contact />
      <Footer />
    </main>
  );
}
