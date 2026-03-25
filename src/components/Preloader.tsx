'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fading, setFading] = useState(false);
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  useEffect(() => {
    // Prevent browser from remembering scroll position
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    // Auto redirect to home on initial load/refresh
    if (window.location.pathname !== '/' || window.location.hash) {
      router.replace('/');
    }

    // Animate progress from 0 to 100 over 1500ms
    const duration = 1500;
    const intervalTime = 15;
    const step = 100 / (duration / intervalTime);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev + step >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + step;
      });
    }, intervalTime);

    // Start fade out shortly after reaching 100%
    const fadeTimer = setTimeout(() => {
      setFading(true);
    }, duration + 300);

    // Unmount after fade out transition (500ms) finishes
    const unmountTimer = setTimeout(() => {
      setLoading(false);
    }, duration + 300 + 500);

    return () => {
      clearInterval(interval);
      clearTimeout(fadeTimer);
      clearTimeout(unmountTimer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-sp-bg transition-opacity duration-500 ease-in-out ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative flex flex-col items-center w-full max-w-xs md:max-w-sm px-6">
        <div className="animate-bounce mb-8 drop-shadow-sp-lg">
          <Image
            src="/assets/images/app_logo.ico"
            alt="Shree Pragya Logo"
            width={100}
            height={100}
            className="object-contain"
            unoptimized
          />
        </div>
        
        <div className="flex flex-col items-center transition-all w-full">
          <h1 className="font-display font-extrabold text-[28px] md:text-[32px] text-sp-primary tracking-wide text-center leading-tight">
            Shree Pragya Insurance
          </h1>
          <p className="mt-2 text-sm md:text-base text-sp-muted font-body uppercase tracking-widest font-semibold mb-10">
            Since 1990
          </p>

          {/* Progress Bar Container */}
          <div className="w-full h-1.5 bg-sp-accent2/30 rounded-full overflow-hidden shadow-sm">
            <div 
              className="h-full bg-sp-primary transition-all duration-75 ease-linear rounded-full"
              style={{ width: `${Math.round(progress)}%` }}
            />
          </div>
          
          {/* Progress Text */}
          <div className="mt-4 text-sp-primary font-mono text-xs md:text-sm font-medium flex w-full justify-between items-center opacity-80">
            <span className="tracking-widest uppercase">Initializing</span>
            <span className="font-bold">{Math.round(progress)}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
