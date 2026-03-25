import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import WhyChooseSection from './components/WhyChooseSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import StickyConsultationButton from './components/StickyConsultationButton';

export const metadata: Metadata = {
  title: 'ShreyPragya — Trusted Insurance & Investment Advisor Since 1990',
  description:
    'Krupesh Nayee, trusted insurance and investment advisor since 1990. Expert in life insurance, mutual funds, SIP, mediclaim, and wealth creation at Shree Pragya Insurance.',
  openGraph: {
    title: 'ShreyPragya — Krupesh Nayee, Insurance Advisor',
    description: 'Trusted financial guidance since 1990. Life insurance, mutual funds, SIP, mediclaim & wealth creation.',
    images: [{ url: '/assets/images/no_image.png', width: 1200, height: 630 }],
  },
};

export default function Homepage() {
  return (
    <>
      {/* Noise texture overlay for premium feel */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Sticky CTA */}
      <StickyConsultationButton />

      {/* Navigation */}
      <Header />

      <main>
        {/* 1. Hero — Fibonacci Spiral layout with 3D object + cursor parallax */}
        <HeroSection />

        {/* 2. About — Krupesh Nayee credibility + 30+ years */}
        <AboutSection />

        {/* 3. Services — 3D Orbit Spinner with 12 services */}
        <ServicesSection />

        {/* 4. Why Choose Us — Trust pillars bento grid */}
        <WhyChooseSection />

        {/* 5. Testimonials — Glassmorphism cards */}
        <TestimonialsSection />

        {/* 6. Contact — Form + WhatsApp CTA */}
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}