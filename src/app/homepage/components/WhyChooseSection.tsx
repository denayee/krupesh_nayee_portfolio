'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

const pillars = [
  {
    icon: 'ClockIcon',
    title: '30+ Years of Legacy',
    description:
      'Since 1990, Krupesh Nayee has been helping Indian families navigate insurance and investments with proven expertise that only comes from decades of real-world advisory.',
    stat: '1990',
    statLabel: 'Established',
    color: '#27187E',
  },
  {
    icon: 'UserGroupIcon',
    title: 'Personalized Advisory',
    description:
      'No cookie-cutter plans. Every family gets a customized financial strategy based on their income, goals, risk appetite, and life stage — from first job to retirement.',
    stat: '5,000+',
    statLabel: 'Clients Served',
    color: '#3d2baa',
  },
  {
    icon: 'ChartBarIcon',
    title: 'Long-Term Wealth Focus',
    description:
      "We don't chase short-term gains. Our philosophy is building lasting wealth through disciplined SIPs, smart insurance coverage, and tax-efficient investment strategies.",
    stat: '₹500Cr+',
    statLabel: 'Under Advisory',
    color: '#758BFD',
  },
  {
    icon: 'ShieldCheckIcon',
    title: 'Complete Coverage',
    description:
      'From life insurance to car insurance, mutual funds to mediclaim — one advisor for all your financial protection needs, simplifying your financial life completely.',
    stat: '12+',
    statLabel: 'Product Categories',
    color: '#27187E',
  },
  {
    icon: 'DocumentCheckIcon',
    title: 'IRDA & AMFI Licensed',
    description:
      'Fully licensed and regulated by IRDA for insurance and AMFI for mutual funds. Every recommendation is compliant, transparent, and in your best interest.',
    stat: '100%',
    statLabel: 'Compliance',
    color: '#3d2baa',
  },
  {
    icon: 'PhoneIcon',
    title: 'Always Accessible',
    description:
      'A trusted advisor should be reachable when you need them most. Krupesh Nayee offers responsive, personal support — not a call center, but a direct relationship.',
    stat: '24/7',
    statLabel: 'Support',
    color: '#758BFD',
  },
];

export default function WhyChooseSection() {
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section id="why-us" ref={sectionRef} className="py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
      {/* Background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(39,24,126,0.04) 0%, #F7F7FF 40%, rgba(174,184,254,0.12) 100%)',
          pointerEvents: 'none',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 reveal-hidden">
          <span className="section-label">Why Choose Us</span>
          <h2
            className="font-display mt-3 tracking-tight"
            style={{
              fontFamily: 'Plus Jakarta Sans',
              fontWeight: 800,
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              color: '#1a1a2e',
            }}
          >
            What Sets{' '}
            <span className="gradient-text">Shree Pragya Insurance</span>
            {' '}Apart
          </h2>
          <p className="text-sp-muted mt-3 max-w-xl mx-auto" style={{ fontFamily: 'DM Sans' }}>
            Choosing a financial advisor is a long-term decision. Here is why thousands of families
            have trusted Krupesh Nayee for over three decades.
          </p>
        </div>

        {/* Bento-style grid — varied sizes, not uniform */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className={`why-card p-8 reveal-hidden ${i === 0 ? 'md:col-span-2 xl:col-span-1' : ''}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-5">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${pillar.color}18, ${pillar.color}28)`,
                  }}
                >
                  <Icon
                    name={pillar.icon as never}
                    size={24}
                    variant="solid"
                    style={{ color: pillar.color }}
                  />
                </div>
                <div className="text-right">
                  <p
                    className="font-display font-900 text-2xl"
                    style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 900, color: pillar.color }}
                  >
                    {pillar.stat}
                  </p>
                  <p className="text-[11px] text-sp-muted" style={{ fontFamily: 'DM Mono' }}>
                    {pillar.statLabel}
                  </p>
                </div>
              </div>

              <h3
                className="font-display mb-3"
                style={{
                  fontFamily: 'Plus Jakarta Sans',
                  fontWeight: 700,
                  fontSize: '1.15rem',
                  color: '#1a1a2e',
                }}
              >
                {pillar.title}
              </h3>
              <p className="text-sp-muted text-[14px] leading-relaxed" style={{ fontFamily: 'DM Sans' }}>
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA bar */}
        <div
          className="mt-12 glass-card p-8 flex flex-col md:flex-row items-center justify-between gap-6 reveal-hidden"
        >
          <div>
            <h3
              className="font-display mb-1"
              style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 700, fontSize: '1.25rem', color: '#1a1a2e' }}
            >
              Ready to secure your family&apos;s financial future?
            </h3>
            <p className="text-sp-muted text-[14px]" style={{ fontFamily: 'DM Sans' }}>
              Get a free, no-obligation consultation with Krupesh Nayee today.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <a
              href="#contact"
              className="btn-primary px-8 py-4 text-[14px] flex items-center gap-2"
              style={{ cursor: 'none' }}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Icon name="CalendarDaysIcon" size={16} variant="solid" />
              Book Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}