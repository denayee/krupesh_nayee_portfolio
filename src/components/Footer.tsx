import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

export default function Footer() {
  const year = new Date()?.getFullYear();

  return (
    <footer className="border-t border-sp-primary/10 py-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-[14px] font-semibold text-sp-primary" style={{ fontFamily: 'Plus Jakarta Sans' }}>
             Shree Pragya Insurance 
          </span>
        </div>

        <div className="flex items-center gap-6 text-[14px] font-medium text-sp-muted">
          <a href="#about" className="hover:text-sp-primary transition-colors">About</a>
          <a href="#services" className="hover:text-sp-primary transition-colors">Services</a>
          <a href="#contact" className="hover:text-sp-primary transition-colors">Contact</a>
          <Link href="/privacy-policy" className="hover:text-sp-primary transition-colors">Privacy</Link>
          <Link href="/terms-and-conditions" className="hover:text-sp-primary transition-colors">Terms</Link>
        </div>

        <p className="text-[13px] text-sp-muted">
          © {year} Shree Pragya Insurance. All rights reserved.
        </p>
      </div>
    </footer>
  );
}