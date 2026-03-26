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
          {/* Left: Premium Bento Grid Visual */}
          <div className="reveal-hidden relative h-full min-h-[420px] md:min-h-[520px] w-full grid grid-cols-2 grid-rows-[auto_1fr_auto] gap-4 p-4 lg:p-6 bg-[#f8f9ff]/80 backdrop-blur-2xl border border-[#758BFD]/10 rounded-[2.5rem] shadow-[0_20px_40px_rgba(39,24,126,0.05)] overflow-hidden group">
            
            {/* Ambient Background Glow inside the bento wrapper */}
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#758BFD] rounded-full mix-blend-multiply filter blur-[100px] opacity-40 pointer-events-none transition-transform duration-1000 group-hover:scale-110 group-hover:-translate-x-10 group-hover:translate-y-10"></div>
            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#27187E] rounded-full mix-blend-multiply filter blur-[100px] opacity-30 pointer-events-none transition-transform duration-1000 group-hover:scale-110 group-hover:translate-x-10 group-hover:-translate-y-10"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(117,139,253,0.1)_0%,transparent_60%)] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000 mix-blend-overlay"></div>

            {/* Bento Box 1: 30+ Years (Spans Top row) */}
            <div className="col-span-2 relative bg-gradient-to-br from-[#1a1a2e] to-[#27187E] rounded-[2rem] p-6 lg:p-8 overflow-hidden border border-[#758BFD]/20 flex items-center justify-between hover:border-[#758BFD]/50 transition-colors duration-500 shadow-xl group/hero">
               <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,1) 1px, transparent 0)', backgroundSize: '16px 16px' }} />
               <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-[#758BFD] opacity-20 blur-3xl rounded-full group-hover/hero:opacity-40 transition-opacity duration-500"></div>
               <div className="relative z-10 w-full flex items-center justify-between">
                 <div>
                   <p className="text-[#AEB8FE] font-bold text-xs lg:text-sm tracking-[0.2em] uppercase mb-2">A Legacy Of Trust</p>
                   <div className="flex items-end gap-2 text-white">
                     <h3 className="font-display text-5xl lg:text-7xl font-black tracking-tighter shadow-sm" style={{ fontFamily: 'Plus Jakarta Sans' }}>30+</h3>
                     <span className="text-[#758BFD] font-bold mb-2 lg:mb-3 text-lg lg:text-xl">Years</span>
                   </div>
                 </div>
                 <div className="relative z-10 w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-white/10 backdrop-blur-md flex flex-shrink-0 items-center justify-center border border-white/20 shadow-[0_0_30px_rgba(117,139,253,0.3)] transform group-hover/hero:scale-105 transition-transform duration-500">
                   <Icon name="BriefcaseIcon" size={32} className="text-white" variant="outline" />
                 </div>
               </div>
            </div>

            {/* Bento Box 2: IRDA (Middle Left) */}
            <div className="col-span-1 bg-white/80 backdrop-blur-md rounded-[2rem] p-6 flex flex-col justify-center items-center text-center border border-sp-primary/10 hover:bg-white hover:border-[#758BFD]/30 transition-all duration-300 relative overflow-hidden group/box shadow-sm">
              <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-gradient-to-br from-[#758BFD]/10 to-[#27187E]/10 flex items-center justify-center mb-4 group-hover/box:-translate-y-1 transition-transform duration-300">
                <Icon name="ShieldCheckIcon" size={26} className="text-[#758BFD]" variant="solid" />
              </div>
              <p className="text-[#1a1a2e] font-extrabold text-[#1a1a2e] text-lg lg:text-xl mb-1" style={{ fontFamily: 'Plus Jakarta Sans' }}>IRDA</p>
              <p className="text-[#758BFD] text-[10px] lg:text-[11px] font-bold uppercase tracking-widest block">Certified Advisor</p>
            </div>

            {/* Bento Box 3: AMFI (Middle Right) */}
            <div className="col-span-1 bg-gradient-to-tr from-[#758BFD]/5 to-[#27187E]/5 backdrop-blur-md rounded-[2rem] p-6 flex flex-col justify-center items-center text-center border border-[#758BFD]/10 hover:bg-[#758BFD]/10 hover:border-[#758BFD]/30 transition-all duration-300 relative overflow-hidden group/box shadow-sm">
              <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white flex items-center justify-center shadow-[0_8px_16px_rgba(39,24,126,0.06)] mb-4 group-hover/box:-translate-y-1 transition-transform duration-300">
                <Icon name="BuildingLibraryIcon" size={26} className="text-[#27187E]" variant="solid" />
              </div>
              <p className="font-extrabold text-[#1a1a2e] text-lg lg:text-xl mb-1" style={{ fontFamily: 'Plus Jakarta Sans' }}>AMFI</p>
              <p className="text-[#27187E] opacity-80 text-[10px] lg:text-[11px] font-bold uppercase tracking-widest block">Registered</p>
            </div>

            {/* Bento Box 4: Quote/Philosophy (Bottom spans 2 cols) */}
            <div className="col-span-2 relative bg-gradient-to-r from-[#27187E] to-[#758BFD] rounded-[2rem] p-6 lg:p-8 flex items-center justify-between border border-[#758BFD]/50 overflow-hidden group/quote shadow-xl">
               <div className="absolute right-[-10%] top-[-50%] text-white/10 transform rotate-12 group-hover/quote:scale-110 group-hover/quote:rotate-[15deg] transition-all duration-700 pointer-events-none">
                 <Icon name="StarIcon" size={160} variant="solid" />
               </div>
               <div className="relative z-10 w-full flex gap-4 lg:gap-6 items-start">
                 <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center flex-shrink-0 mt-1 border border-white/20">
                   <Icon name="ChatBubbleBottomCenterTextIcon" size={24} className="text-white" variant="solid" />
                 </div>
                 <div>
                   <p className="text-white font-medium text-[16px] lg:text-[18px] leading-relaxed italic" style={{ fontFamily: 'DM Sans' }}>
                     "Building wealth is a science. <br className="hidden md:block"/> Protecting it is an art we've perfected."
                   </p>
                   <div className="flex items-center gap-3 mt-4 text-white text-xs font-bold uppercase tracking-[0.2em] opacity-80">
                     <span>Since 1990</span>
                     <div className="w-12 h-px bg-white/30"></div>
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