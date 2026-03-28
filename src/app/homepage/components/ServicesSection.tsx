'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Service {
  id: number;
  label: string;
  icon: string;
  description: string;
  details: string[];
  emoji: string;
}

const services: Service[] = [
  {
    id: 0,
    label: 'Life Insurance',
    icon: 'HeartIcon',
    emoji: '❤️',
    description: 'Protect your family\'s financial future with comprehensive life coverage tailored to your needs.',
    details: ['Term Plans', 'Whole Life', 'Endowment Plans', 'ULIP'],
  },
  {
    id: 1,
    label: 'General Insurance',
    icon: 'ShieldCheckIcon',
    emoji: '🛡️',
    description: 'Coverage for your assets and liabilities — home, travel, and more.',
    details: ['Home Insurance', 'Travel Insurance', 'Fire Insurance', 'Marine Policy'],
  },
  {
    id: 2,
    label: 'Mutual Funds',
    icon: 'ChartBarIcon',
    emoji: '📈',
    description: 'Grow your wealth through professionally managed, diversified mutual fund portfolios.',
    details: ['Equity Funds', 'Debt Funds', 'Balanced Funds', 'ELSS Tax Saving'],
  },
  {
    id: 3,
    label: 'Pension Plans',
    icon: 'HomeModernIcon',
    emoji: '🏡',
    description: 'Build a secure retirement corpus with systematic pension and annuity plans.',
    details: ['NPS', 'Annuity Plans', 'Retirement Funds', 'Pension Insurance'],
  },
  {
    id: 4,
    label: 'Child Plans',
    icon: 'AcademicCapIcon',
    emoji: '🎓',
    description: 'Secure your child\'s education and marriage goals with dedicated savings plans.',
    details: ['Education Plans', 'Marriage Plans', 'Child ULIP', 'Savings Plans'],
  },
  {
    id: 5,
    label: 'Saving Plans',
    icon: 'BanknotesIcon',
    emoji: '💵',
    description: 'Systematic savings plans that guarantee returns and build your financial cushion.',
    details: ['Endowment Plans', 'Money Back', 'Fixed Deposits', 'RD Plans'],
  },
  {
    id: 6,
    label: 'Wealth Creation',
    icon: 'CurrencyRupeeIcon',
    emoji: '💎',
    description: 'Long-term wealth creation strategies combining equity, debt, and insurance products.',
    details: ['Portfolio Management', 'Asset Allocation', 'Goal Planning', 'Tax Optimization'],
  },
  {
    id: 7,
    label: 'Term Plan',
    icon: 'DocumentCheckIcon',
    emoji: '📋',
    description: 'Pure life protection at affordable premiums — maximum cover, minimal cost.',
    details: ['Pure Term', 'Return of Premium', 'Critical Illness Rider', 'Accidental Rider'],
  },
  {
    id: 8,
    label: 'Mediclaim',
    icon: 'BuildingOffice2Icon',
    emoji: '🏥',
    description: 'Comprehensive health insurance covering hospitalization, surgeries, and critical care.',
    details: ['Individual Plans', 'Family Floater', 'Senior Citizen', 'Critical Illness'],
  },
  {
    id: 9,
    label: 'Car Insurance',
    icon: 'TruckIcon',
    emoji: '🚗',
    description: 'Comprehensive and third-party vehicle insurance for complete road protection.',
    details: ['Comprehensive', 'Third Party', 'Zero Depreciation', 'Engine Protection'],
  },
  {
    id: 10,
    label: 'PA Policy',
    icon: 'UserCircleIcon',
    emoji: '👤',
    description: 'Personal accident coverage providing financial security against unexpected accidents.',
    details: ['Death Benefit', 'Permanent Disability', 'Medical Expenses', 'Weekly Benefit'],
  },
  {
    id: 11,
    label: 'SIP / SWP / STP',
    icon: 'ArrowPathIcon',
    emoji: '🔄',
    description: 'Systematic investment, withdrawal, and transfer plans for disciplined wealth building.',
    details: ['SIP', 'Lumpsum', 'SWP', 'STP'],
  },
];

export default function ServicesSection() {
  const [activeService, setActiveService] = useState<Service>(services[0]);
  const [isPaused, setIsPaused] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [radius, setRadius] = useState(220); // Default server radius
  const [containerSize, setContainerSize] = useState(560); // Default server size

  const animFrameRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);
  const rotRef = useRef(0);
  const sectionRef = useRef<HTMLElement>(null);

  // Handle client-side resizing safely to avoid hydration mismatch
  useEffect(() => {
    setIsMounted(true);
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 768) {
        setRadius(130);
        setContainerSize(320);
      } else if (w < 1024) {
        setRadius(170);
        setContainerSize(440);
      } else {
        setRadius(220);
        setContainerSize(560);
      }
    };
    
    // Set initial size
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Animate rotation
  useEffect(() => {
    if (!isMounted) return;
    
    const animate = (time: number) => {
      if (!isPaused) {
        const delta = lastTimeRef.current ? time - lastTimeRef.current : 0;
        rotRef.current = (rotRef.current + delta * 0.012) % 360;
        setRotation(rotRef.current);
      }
      lastTimeRef.current = time;
      animFrameRef.current = requestAnimationFrame(animate);
    };
    animFrameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, [isPaused, isMounted]);

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal-hidden').forEach((el, i) => {
              setTimeout(() => el.classList.add('revealed'), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleServiceClick = useCallback((service: Service) => {
    setActiveService(service);
  }, []);

  const count = services.length;

  return (
    <section id="services" ref={sectionRef} className="py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
      {/* Background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, #F7F7FF 0%, rgba(39,24,126,0.04) 50%, #F7F7FF 100%)',
          pointerEvents: 'none',
        }}
      />
      <div className="grid-pattern absolute inset-0 opacity-40" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20 reveal-hidden">
          <span className="section-label">What We Offer</span>
          <h2
            className="font-display mt-3 tracking-tight"
            style={{
              fontFamily: 'Plus Jakarta Sans',
              fontWeight: 800,
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              color: '#1a1a2e',
            }}
          >
            Complete{' '}
            <span className="gradient-text">Financial Protection</span>
            {' '}Suite
          </h2>
          <p className="text-sp-muted mt-3 max-w-xl mx-auto" style={{ fontFamily: 'DM Sans' }}>
            Tap any service to explore. Hover to pause the orbit.
          </p>
        </div>

        <div className="flex flex-col xl:flex-row items-center gap-16 xl:gap-24">
          {/* Orbit Spinner */}
          <div
            className="orbit-container flex-shrink-0 reveal-hidden transition-all duration-500 ease-out"
            style={{
              width: `${containerSize}px`,
              height: `${containerSize}px`,
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Dashed orbit ring */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '50%',
                border: '1px dashed rgba(39,24,126,0.12)',
              }}
            />
            {/* Inner ring */}
            <div
              style={{
                position: 'absolute',
                inset: '70px',
                borderRadius: '50%',
                border: '1px dashed rgba(117,139,253,0.1)',
              }}
            />

            {/* Center card */}
            <div className="orbit-center">
              <div className="text-3xl mb-3">{activeService.emoji}</div>
              <p className="font-display font-800 text-white text-center leading-tight mb-2 text-[15px]" style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800 }}>
                {activeService.label}
              </p>
              <p className="text-white/70 text-[11px] text-center leading-snug mb-4" style={{ fontFamily: 'DM Sans' }}>
                {activeService.description.slice(0, 80)}...
              </p>
              <button
                className="px-5 py-2 rounded-full text-sp-primary font-semibold text-[12px] transition-all hover:bg-sp-primary/10"
                style={{
                  background: 'rgba(255,255,255,0.9)',
                  fontFamily: 'DM Sans',
                  cursor: 'none',
                }}
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Enquire Now
              </button>
            </div>

            {/* Orbit items */}
            {services.map((service, index) => {
              const angle = ((index / count) * 360 + rotation) * (Math.PI / 180);
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              const isActive = activeService.id === service.id;

              return (
                <div
                  key={service.id}
                  onClick={() => handleServiceClick(service)}
                  style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    width: '64px',
                    height: '64px',
                    transform: `translate(-50%, -50%) translate(${x.toFixed(3)}px, ${y.toFixed(3)}px)`,
                    transition: isPaused ? 'transform 0.3s ease' : 'none',
                    borderRadius: '50%',
                    background: isActive
                      ? 'linear-gradient(135deg, #27187E, #758BFD)'
                      : 'rgba(255,255,255,0.75)',
                    backdropFilter: 'blur(12px)',
                    border: isActive
                      ? '2px solid rgba(255,255,255,0.4)'
                      : '1px solid rgba(255,255,255,0.8)',
                    boxShadow: isActive
                      ? '0 0 24px rgba(39,24,126,0.4), 0 4px 20px rgba(39,24,126,0.25)'
                      : '0 4px 16px rgba(39,24,126,0.08)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'none',
                    zIndex: isActive ? 10 : 3,
                    scale: isActive ? '1.15' : '1',
                    transitionProperty: 'background, box-shadow, scale, border',
                    transitionDuration: '0.4s',
                  }}
                  title={service.label}
                >
                  <span style={{ fontSize: '18px', lineHeight: 1 }}>{service.emoji}</span>
                  <span
                    style={{
                      fontSize: '7px',
                      fontWeight: 600,
                      color: isActive ? 'rgba(255,255,255,0.9)' : '#6b7280',
                      textAlign: 'center',
                      marginTop: '2px',
                      lineHeight: 1.2,
                      maxWidth: '52px',
                      fontFamily: 'DM Sans',
                    }}
                  >
                    {service.label.split(' ')[0]}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Service Details Panel */}
          <div className="flex-1 max-w-lg reveal-hidden">
            <div
              className="glass-card p-8 md:p-10"
              style={{ minHeight: '360px' }}
              key={activeService.id}
            >
              {/* Icon + Label */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, rgba(39,24,126,0.08), rgba(117,139,253,0.15))' }}
                >
                  {activeService.emoji}
                </div>
                <div>
                  <p className="section-label mb-1">Selected Service</p>
                  <h3
                    className="font-display"
                    style={{
                      fontFamily: 'Plus Jakarta Sans',
                      fontWeight: 800,
                      fontSize: '1.6rem',
                      color: '#27187E',
                    }}
                  >
                    {activeService.label}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p
                className="text-sp-muted leading-relaxed mb-6"
                style={{ fontFamily: 'DM Sans', fontSize: '1rem' }}
              >
                {activeService.description}
              </p>

              {/* Details grid */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {activeService.details.map((d) => (
                  <div
                    key={d}
                    className="flex items-center gap-2 px-4 py-3 rounded-xl text-[13px] font-semibold"
                    style={{
                      background: 'rgba(39,24,126,0.06)',
                      color: '#27187E',
                      fontFamily: 'DM Sans',
                    }}
                  >
                    <Icon name="CheckCircleIcon" size={14} variant="solid" className="text-sp-primary flex-shrink-0" />
                    {d}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button
                className="btn-primary w-full py-4 text-[15px] flex items-center justify-center gap-2"
                style={{ cursor: 'none' }}
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Icon name="ArrowRightCircleIcon" size={18} variant="solid" />
                Get {activeService.label} Quote
              </button>
            </div>

            {/* Service count */}
            <div className="flex items-center gap-2 mt-4 px-2">
              <Icon name="InformationCircleIcon" size={14} className="text-sp-muted" />
              <p className="text-[12px] text-sp-muted" style={{ fontFamily: 'DM Sans' }}>
                Click any orbit item to explore · {services.length} services available
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}