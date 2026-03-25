'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const stats = [
{ num: '30+', label: 'Years of Experience', icon: 'ClockIcon' },
{ num: '5,000+', label: 'Families Secured', icon: 'UsersIcon' },
{ num: '34+', label: 'Insurance Products', icon: 'DocumentCheckIcon' },
{ num: '₹500Cr+', label: 'Assets Under Advisory', icon: 'CurrencyRupeeIcon' }];


const values = [
{ icon: 'CheckBadgeIcon', text: 'Certified Life Insurance Advisor (IRDA Licensed)' },
{ icon: 'CheckBadgeIcon', text: 'AMFI Registered Mutual Fund Distributor' },
{ icon: 'CheckBadgeIcon', text: 'Comprehensive financial planning since 1990' },
{ icon: 'CheckBadgeIcon', text: 'Personalized advisory for every life stage' }];


export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal-hidden').forEach((el, i) => {
              setTimeout(() => el.classList.add('revealed'), i * 120);
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
      {/* Background gradient */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(180deg, #F7F7FF 0%, rgba(174,184,254,0.12) 50%, #F7F7FF 100%)',
          pointerEvents: 'none'
        }} />
      

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Label */}
        <div className="text-center mb-16 reveal-hidden">
          <span className="section-label">About Krupesh Nayee</span>
          <h2
            className="font-display mt-3 tracking-tight"
            style={{
              fontFamily: 'Plus Jakarta Sans',
              fontWeight: 800,
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              color: '#1a1a2e'
            }}>
            
            Three Decades of{' '}
            <span className="gradient-text">Trusted Financial Guidance</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Interactive Info Card */}
          <div className="reveal-hidden relative h-full flex flex-col items-center justify-center min-h-[420px] md:min-h-[520px] rounded-3xl overflow-hidden p-8 lg:p-12 shadow-sp-lg"
            style={{
              background: 'linear-gradient(135deg, #1a1a2e 0%, #27187E 100%)',
              position: 'relative'
            }}>
            {/* Background design */}
            <div className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.8) 1px, transparent 0)',
                backgroundSize: '32px 32px'
              }}
            />
            {/* Gradient Orb */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#758BFD] rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#AEB8FE] rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>
            
            <div className="relative z-10 flex flex-col gap-6 w-full">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
                style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
                <Icon name="SparklesIcon" size={32} className="text-[#AEB8FE]" />
              </div>
              
              <h3 className="text-3xl md:text-4xl text-white font-display leading-tight" style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800 }}>
                Building Wealth,<br />
                <span className="text-[#758BFD]">Securing Futures.</span>
              </h3>
              
              <p className="text-[#AEB8FE] text-lg leading-relaxed mt-2" style={{ fontFamily: 'DM Sans' }}>
                A legacy of over 3 decades in personalized financial planning, helping you navigate every life stage with confidence and clarity.
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-3 rounded-xl border border-white/20">
                  <Icon name="ShieldCheckIcon" size={24} className="text-[#758BFD]" variant="solid" />
                  <div>
                    <p className="text-white font-semibold text-sm">IRDA Certified</p>
                    <p className="text-white/60 text-xs text-left">Licensed Advisor</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-3 rounded-xl border border-white/20">
                  <Icon name="StarIcon" size={24} className="text-[#758BFD]" variant="solid" />
                  <div>
                    <p className="text-white font-semibold text-sm">Since 1990</p>
                    <p className="text-white/60 text-xs text-left">Trusted Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col gap-6">
            <div className="reveal-hidden">
              <h3
                className="font-display mb-4"
                style={{
                  fontFamily: 'Plus Jakarta Sans',
                  fontWeight: 800,
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                  color: '#1a1a2e'
                }}>
                
                Krupesh Ashokbhai Nayee
              </h3>
              <p
                className="text-[13px] font-semibold uppercase tracking-widest mb-4"
                style={{ color: '#758BFD', fontFamily: 'DM Mono' }}>
                
                Senior Investment &amp; Insurance Advisor · Shree Pragya Insurance
              </p>
              <p
                className="text-sp-muted leading-relaxed mb-4"
                style={{ fontFamily: 'DM Sans', fontSize: '1.05rem' }}>
                
                With over 30 years of experience in the financial services industry, Krupesh Nayee
                has helped thousands of Indian families build financial security through carefully
                crafted insurance and investment strategies.
              </p>
              <p
                className="text-sp-muted leading-relaxed"
                style={{ fontFamily: 'DM Sans', fontSize: '1.05rem' }}>
                
                Founded on the principles of integrity, transparency, and long-term thinking,
                Shree Pragya Insurance has become a trusted name for comprehensive financial
                planning across Gujarat and beyond.
              </p>
            </div>

            {/* Credentials */}
            <div className="flex flex-col gap-3 reveal-hidden">
              {values.map((v) =>
              <div key={v.text} className="flex items-start gap-3">
                  <div
                  className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: 'rgba(39,24,126,0.1)' }}>
                  
                    <Icon name={v.icon as never} size={14} variant="solid" className="text-sp-primary" />
                  </div>
                  <p className="text-[14px] text-sp-text" style={{ fontFamily: 'DM Sans' }}>
                    {v.text}
                  </p>
                </div>
              )}
            </div>

            {/* CTA */}
            <div className="reveal-hidden">
              <a
                href="#contact"
                className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-[15px]"
                style={{ cursor: 'none' }}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}>
                
                <Icon name="PhoneIcon" size={16} variant="solid" />
                Schedule a Meeting
              </a>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20">
          {stats.map((s, i) =>
          <div
            key={s.label}
            className="stat-card p-6 text-center reveal-hidden"
            style={{ transitionDelay: `${i * 80}ms` }}>
            
              <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-3"
              style={{ background: 'linear-gradient(135deg, rgba(39,24,126,0.1), rgba(117,139,253,0.15))' }}>
              
                <Icon name={s.icon as never} size={22} variant="solid" className="text-sp-primary" />
              </div>
              <p className="font-display font-900 text-sp-primary text-2xl mb-1" style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 900 }}>
                {s.num}
              </p>
              <p className="text-[12px] text-sp-muted" style={{ fontFamily: 'DM Sans' }}>
                {s.label}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>);

}