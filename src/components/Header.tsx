'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';
import Image from 'next/image';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header className={`fixed inset-x-0 z-[100] transition-all duration-500 w-full flex justify-center px-4 md:px-8 ${scrolled ? 'top-4' : 'top-6'}`}>
        <nav
          className={`w-full max-w-[1280px] flex items-center justify-between px-6 md:px-8 transition-all duration-500 rounded-full shadow-sp ${
            scrolled
              ? 'py-2.5 bg-white/80 backdrop-blur-xl border border-white/70'
              : 'py-3.5 bg-white/40 backdrop-blur-lg border border-white/30'
          }`}
        >
          {/* Logo Section - Flex 1 to push links to exact center */}
          <div className="flex-1 flex justify-start items-center">
            <button
              onClick={() => scrollTo('#hero')}
              className="flex items-center gap-3 focus:outline-none"
              style={{ cursor: 'none' }}
              aria-label="ShreyPragya home"
            >
              <Image 
                src="/assets/images/app_logo.ico" 
                alt="ShreyPragya Logo" 
                width={48} 
                height={48} 
                className="object-contain hover:scale-105 transition-transform"
                unoptimized
              />
              <div className="leading-tight hidden sm:block text-left">
                <span className="block font-display font-800 text-[16px] text-sp-primary tracking-wide" style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800 }}>
                  Shree Pragya Insurance
                </span>
                <span className="block text-[10px] text-sp-muted font-body" style={{ fontFamily: 'DM Sans' }}>
                  Since 1990
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Nav Links - Centered */}
          <ul className="hidden lg:flex items-center justify-center gap-8 list-none">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className="text-[15px] font-semibold text-sp-text hover:text-sp-primary transition-colors duration-300 relative group focus:outline-none"
                  style={{ cursor: 'none', fontFamily: 'DM Sans' }}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-sp-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </button>
              </li>
            ))}
          </ul>

          {/* Right Actions Section - Flex 1 */}
          <div className="flex-1 flex justify-end items-center gap-4">
            {/* CTA Button */}
            <button
              onClick={() => scrollTo('#contact')}
              className="hidden sm:flex btn-primary items-center gap-2 px-6 py-3 rounded-full text-[14px]"
              style={{ cursor: 'none', fontFamily: 'Plus Jakarta Sans', fontWeight: 700 }}
            >
              <Icon name="PhoneIcon" size={16} variant="solid" />
              Free Consultation
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-full text-sp-primary hover:bg-black/5 focus:outline-none transition-colors"
              style={{ cursor: 'pointer' }}
              aria-label="Toggle menu"
            >
              <Icon name={menuOpen ? 'XMarkIcon' : 'Bars3Icon'} size={24} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 p-2 rounded-lg text-sp-primary"
          style={{ cursor: 'pointer' }}
          aria-label="Close menu"
        >
          <Icon name="XMarkIcon" size={28} />
        </button>
        <div className="flex items-center gap-3 mb-8">
          <Image 
            src="/assets/images/app_logo.ico" 
            alt="ShreyPragya Logo" 
            width={60} 
            height={60} 
            className="object-contain"
            unoptimized
          />
          <div>
            <span className="block font-display font-800 text-[18px] text-sp-primary" style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800 }}>
              ShreyPragya
            </span>
          </div>
        </div>
        {navLinks.map((link) => (
          <button
            key={link.href}
            onClick={() => scrollTo(link.href)}
            className="text-[20px] font-semibold text-sp-text hover:text-sp-primary transition-colors"
            style={{ cursor: 'pointer', fontFamily: 'DM Sans' }}
          >
            {link.label}
          </button>
        ))}
        <button
          onClick={() => scrollTo('#contact')}
          className="btn-primary mt-4 px-8 py-4 rounded-full text-[15px]"
          style={{ cursor: 'pointer', fontFamily: 'Plus Jakarta Sans', fontWeight: 700 }}
        >
          Free Consultation
        </button>
      </div>
    </>
  );
}