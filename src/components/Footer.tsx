import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import { promises as fs } from 'fs';
import path from 'path';

async function getVisitorCount() {
  try {
    const logPath = path.join(process.cwd(), 'visitors.log');
    const content = await fs.readFile(logPath, 'utf8');
    const lines = content.split('\n').filter(line => line.trim().length > 0);
    const uniqueIps = new Set();
    
    lines.forEach(line => {
      try {
        const data = JSON.parse(line);
        if (data.ip) uniqueIps.add(data.ip);
      } catch (e) {
        // ignore invalid JSON
      }
    });
    
    return uniqueIps.size;
  } catch (error) {
    // Return 0 if file doesn't exist
    return 0;
  }
}

export default async function Footer() {
  const year = new Date()?.getFullYear();
  const visitorCount = await getVisitorCount();

  return (
    <footer className="border-t border-sp-primary/10 py-8 px-6 md:px-12 w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
        <div className="flex items-center gap-2">
          <span className="text-[14px] font-semibold text-sp-primary" style={{ fontFamily: 'Plus Jakarta Sans' }}>
             Shree Pragya Insurance 
          </span>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 text-[14px] font-medium text-sp-muted">
          <a href="#about" className="hover:text-sp-primary transition-colors">About</a>
          <a href="#services" className="hover:text-sp-primary transition-colors">Services</a>
          <a href="#contact" className="hover:text-sp-primary transition-colors">Contact</a>
          <Link href="/privacy-policy" className="hover:text-sp-primary transition-colors">Privacy</Link>
          <Link href="/terms-and-conditions" className="hover:text-sp-primary transition-colors">Terms</Link>
        </div>

        <div className="flex flex-col items-center md:items-end gap-2">
          <p className="text-[13px] text-sp-muted text-center md:text-right">
            © {year} Shree Pragya Insurance. All rights reserved.
          </p>
          {visitorCount > 0 && (
            <div className="flex items-center gap-2 px-3 py-1 bg-sp-primary/5 rounded-full border border-sp-primary/10" title="Unique Visitors">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[12px] font-medium text-sp-muted/80 tracking-wide">
                <strong className="text-sp-primary">{visitorCount.toLocaleString()}</strong> Unique Visitors
              </span>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}