'use client';

import React, { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const objectRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouse, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  const parallaxStyle = (depth: number) => ({
    transform: `translate(${mousePos.x * depth * 18}px, ${mousePos.y * depth * 18}px)`,
    transition: 'transform 0.6s cubic-bezier(0.23,1,0.32,1)',
  });

  return (
    <section
      id="hero"
      ref={heroRef}
      className="fib-hero grid-pattern pt-24 pb-16 md:pt-28 md:pb-20"
    >
      {/* Fibonacci Spiral Arc Backgrounds */}
      <div className="fib-spiral-bg">
        {/* Arc 1 - large */}
        <div
          className="fib-spiral-arc"
          style={{
            width: '900px',
            height: '900px',
            top: '-200px',
            right: '-300px',
            animationDelay: '0s',
            borderColor: 'rgba(39,24,126,0.06)',
          }}
        />
        {/* Arc 2 */}
        <div
          className="fib-spiral-arc"
          style={{
            width: '560px',
            height: '560px',
            top: '-50px',
            right: '-80px',
            animationDelay: '1s',
            borderColor: 'rgba(117,139,253,0.1)',
          }}
        />
        {/* Arc 3 */}
        <div
          className="fib-spiral-arc"
          style={{
            width: '340px',
            height: '340px',
            top: '80px',
            right: '60px',
            animationDelay: '2s',
            borderColor: 'rgba(39,24,126,0.08)',
          }}
        />
        {/* Arc 4 - small */}
        <div
          className="fib-spiral-arc"
          style={{
            width: '200px',
            height: '200px',
            top: '150px',
            right: '140px',
            animationDelay: '0.5s',
            borderColor: 'rgba(117,139,253,0.14)',
          }}
        />
        {/* Gradient blob left */}
        <div
          style={{
            position: 'absolute',
            top: '10%',
            left: '-10%',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(174,184,254,0.18) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
        {/* Gradient blob right */}
        <div
          style={{
            position: 'absolute',
            bottom: '5%',
            right: '-5%',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(39,24,126,0.1) 0%, transparent 70%)',
            filter: 'blur(50px)',
          }}
        />
        {/* Animated graph SVG background */}
        <svg
          style={{ position: 'absolute', bottom: '60px', left: '5%', opacity: 0.12 }}
          width="300"
          height="120"
          viewBox="0 0 300 120"
          fill="none"
        >
          <polyline
            className="graph-line"
            points="0,100 40,80 80,85 120,60 160,50 200,30 240,20 280,8 300,5"
            stroke="#27187E"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <polyline
            className="graph-line"
            points="0,110 40,95 80,98 120,75 160,65 200,50 240,38 280,22 300,18"
            stroke="#758BFD"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ animationDelay: '0.4s' }}
          />
        </svg>
      </div>

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            width: `${4 + (i % 3) * 3}px`,
            height: `${4 + (i % 3) * 3}px`,
            background: i % 2 === 0 ? '#27187E' : '#758BFD',
            left: `${8 + i * 11}%`,
            bottom: `${10 + (i % 4) * 15}%`,
            animationDuration: `${4 + i * 0.7}s`,
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}

      {/* Main Grid — Fibonacci-inspired: 55% text + 45% visual */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid lg:grid-cols-[1fr_0.82fr] gap-12 xl:gap-20 items-center min-h-[80vh]">

          {/* LEFT — Spiral Flow: top-left → headline → sub → CTA → icons */}
          <div className="flex flex-col gap-0 relative">

            {/* SPIRAL STEP 1: Intro badge (top-left, start of spiral) */}
            <div style={parallaxStyle(0.15)} className="mb-6">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-semibold"
                style={{
                  background: 'rgba(39,24,126,0.08)',
                  border: '1px solid rgba(39,24,126,0.15)',
                  color: '#27187E',
                  fontFamily: 'DM Mono',
                  letterSpacing: '0.1em',
                }}
              >
                <span
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ background: '#27187E' }}
                />
                Trusted Since 1990
              </div>
            </div>

            {/* SPIRAL STEP 2: Main Headline (golden ratio focal point) */}
            <div style={parallaxStyle(0.08)} className="mb-6">
              <h1
                className="font-display leading-[1.08] tracking-tight"
                style={{
                  fontFamily: 'Plus Jakarta Sans',
                  fontWeight: 900,
                  fontSize: 'clamp(2.2rem, 5.5vw, 4rem)',
                  color: '#1a1a2e',
                }}
              >
                Secure Your Future with{' '}
                <span className="gradient-text">Smart Insurance</span>
                {' '}&amp;{' '}
                <span style={{ color: '#27187E' }}>Investments</span>
              </h1>
            </div>

            {/* SPIRAL STEP 3: Subheading (next spiral curve) */}
            <div style={parallaxStyle(0.06)} className="mb-8">
              <p
                className="text-sp-muted leading-relaxed max-w-[520px]"
                style={{
                  fontFamily: 'DM Sans',
                  fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
                  fontWeight: 400,
                }}
              >
                Expert guidance in insurance, wealth creation &amp; financial planning.
                Personalized strategies tailored for every stage of life — from your first SIP
                to retirement security.
              </p>
            </div>

            {/* SPIRAL STEP 4: CTA (end of spiral, high conversion point) */}
            <div style={parallaxStyle(0.04)} className="flex flex-wrap gap-4 mb-10">
              <a
                href="#contact"
                className="btn-primary px-8 py-4 text-[15px] flex items-center gap-2"
                style={{ cursor: 'none' }}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Icon name="CalendarDaysIcon" size={18} variant="solid" />
                Get Free Consultation
              </a>
              <a
                href="#services"
                className="btn-outline px-8 py-4 text-[15px] flex items-center gap-2"
                style={{ cursor: 'none' }}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore Services
                <Icon name="ArrowRightIcon" size={16} />
              </a>
            </div>

            {/* SPIRAL STEP 5: Quick service highlights (end of spiral flow) */}
            <div style={parallaxStyle(0.03)}>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: 'ShieldCheckIcon', label: 'Life Insurance' },
                  { icon: 'ChartBarIcon', label: 'Mutual Funds' },
                  { icon: 'HeartIcon', label: 'Mediclaim' },
                  { icon: 'ArrowTrendingUpIcon', label: 'SIP Plans' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl text-[13px] font-semibold glass-card"
                    style={{ fontFamily: 'DM Sans', color: '#27187E' }}
                  >
                    <Icon name={item.icon as never} size={16} variant="solid" className="text-sp-primary" />
                    {item.label}
                  </div>
                ))}
              </div>
            </div>

            {/* Trust stats row */}
            <div className="flex gap-8 mt-8 pt-8 border-t border-sp-primary/10">
              {[
                { num: '30+', label: 'Years Experience' },
                { num: '5000+', label: 'Happy Families' },
                { num: '₹500Cr+', label: 'Assets Managed' },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-display font-900 text-sp-primary text-2xl" style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 900 }}>
                    {s.num}
                  </p>
                  <p className="text-[12px] text-sp-muted font-body mt-0.5" style={{ fontFamily: 'DM Sans' }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — 3D Financial Object at spiral center */}
          <div className="relative flex items-center justify-center" style={parallaxStyle(0.12)}>
            {/* Outer glow ring */}
            <div
              style={{
                position: 'absolute',
                width: '420px',
                height: '420px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(39,24,126,0.1) 0%, transparent 70%)',
                filter: 'blur(30px)',
              }}
            />
            {/* Fibonacci arc decorations */}
            {[380, 260, 160, 100].map((size, i) => (
              <div
                key={size}
                style={{
                  position: 'absolute',
                  width: `${size}px`,
                  height: `${size}px`,
                  borderRadius: '50%',
                  border: `1px solid rgba(39,24,126,${0.05 + i * 0.03})`,
                  animation: `spiral-pulse ${5 + i}s ease-in-out infinite`,
                  animationDelay: `${i * 0.5}s`,
                }}
              />
            ))}

            {/* 3D Financial Object — Glass card with floating elements */}
            <div
              ref={objectRef}
              className="float-3d relative z-10"
              style={{ width: '340px', height: '340px' }}
            >
              {/* Main card */}
              <div
                className="glass-card w-full h-full flex flex-col items-center justify-center relative overflow-hidden"
                style={{
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(174,184,254,0.3) 50%, rgba(39,24,126,0.08) 100%)',
                  boxShadow: '0 20px 80px rgba(39,24,126,0.18), 0 0 0 1px rgba(255,255,255,0.7), inset 0 1px 0 rgba(255,255,255,0.9)',
                }}
              >
                {/* Inner glow */}
                <div
                  style={{
                    position: 'absolute',
                    inset: '20px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle at 40% 35%, rgba(255,255,255,0.9) 0%, transparent 60%)',
                  }}
                />

                {/* SVG Wealth Graph */}
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <svg width="160" height="100" viewBox="0 0 160 100" fill="none">
                    {/* Grid lines */}
                    {[20, 40, 60, 80].map((y) => (
                      <line key={y} x1="0" y1={y} x2="160" y2={y} stroke="rgba(39,24,126,0.08)" strokeWidth="1" />
                    ))}
                    {/* Area fill */}
                    <defs>
                      <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#27187E" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#27187E" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,85 C20,75 35,70 50,58 C65,46 75,40 90,28 C105,16 120,12 140,8 L160,5 L160,100 L0,100 Z"
                      fill="url(#areaGrad)"
                    />
                    {/* Main line */}
                    <polyline
                      className="graph-line"
                      points="0,85 25,72 50,58 75,42 100,28 130,14 160,5"
                      stroke="#27187E"
                      strokeWidth="2.5"
                      fill="none"
                      strokeLinecap="round"
                    />
                    {/* Dots */}
                    {[[0,85],[50,58],[100,28],[160,5]].map(([cx,cy]) => (
                      <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="4" fill="#27187E" />
                    ))}
                    {/* Accent line */}
                    <polyline
                      className="graph-line"
                      points="0,92 25,84 50,72 75,60 100,48 130,36 160,25"
                      stroke="#758BFD"
                      strokeWidth="1.5"
                      fill="none"
                      strokeLinecap="round"
                      style={{ animationDelay: '0.3s' }}
                    />
                  </svg>

                  <div className="text-center">
                    <p className="font-display font-900 text-sp-primary text-2xl" style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 900 }}>
                      Wealth Growth
                    </p>
                    <p className="text-[12px] text-sp-muted mt-1" style={{ fontFamily: 'DM Sans' }}>
                      Smart Planning → Real Returns
                    </p>
                  </div>

                  {/* Shield badge */}
                  <div
                    className="flex items-center gap-2 px-4 py-2 rounded-full text-white text-[12px] font-semibold"
                    style={{
                      background: 'linear-gradient(135deg, #27187E, #758BFD)',
                      fontFamily: 'DM Sans',
                      boxShadow: '0 4px 15px rgba(39,24,126,0.3)',
                    }}
                  >
                    <Icon name="ShieldCheckIcon" size={14} variant="solid" />
                    Protected &amp; Insured
                  </div>
                </div>
              </div>

              {/* Floating coin 1 */}
              <div
                className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl flex items-center justify-center text-2xl"
                style={{
                  background: 'linear-gradient(135deg, #f7c948, #e6a817)',
                  boxShadow: '0 8px 24px rgba(246,196,67,0.4)',
                  animation: 'float3d 4s ease-in-out infinite',
                  animationDelay: '1s',
                }}
              >
                💰
              </div>

              {/* Floating shield */}
              <div
                className="absolute -bottom-4 -left-4 w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #27187E, #3d2baa)',
                  boxShadow: '0 8px 24px rgba(39,24,126,0.35)',
                  animation: 'float3d 5.5s ease-in-out infinite',
                  animationDelay: '0.5s',
                }}
              >
                <Icon name="ShieldCheckIcon" size={24} variant="solid" className="text-white" />
              </div>

              {/* Floating chart */}
              <div
                className="absolute top-8 -left-8 w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, rgba(117,139,253,0.9), rgba(174,184,254,0.9))',
                  boxShadow: '0 8px 24px rgba(117,139,253,0.3)',
                  animation: 'float3d 6s ease-in-out infinite',
                  animationDelay: '1.5s',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <Icon name="ChartBarSquareIcon" size={24} variant="solid" className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}