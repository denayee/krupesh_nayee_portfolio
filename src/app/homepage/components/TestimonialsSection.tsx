'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const testimonials = [
{
  name: 'Rajesh Mehta',
  role: 'Business Owner, Ahmedabad',
  avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
  avatarAlt: 'Rajesh Mehta, middle-aged Indian businessman with short hair and confident expression',
  quote:
  'Krupesh bhai has been managing my family\'s insurance and investments for over 15 years. His advice on SIPs has helped us build a corpus we never thought possible. Truly trustworthy.',
  rating: 5,
  product: 'SIP + Life Insurance',
  years: '15 years'
},
{
  name: 'Priya Desai',
  role: 'School Teacher, Surat',
  avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
  avatarAlt: 'Priya Desai, Indian woman teacher with warm smile and professional appearance',
  quote:
  'When my husband passed away, Shree Pragya Insurance handled all the claim paperwork with such care and efficiency. The term plan Krupesh had recommended was a lifesaver for our family.',
  rating: 5,
  product: 'Term Plan',
  years: '10 years'
},
{
  name: 'Vikram Patel',
  role: 'Software Engineer, Vadodara',
  avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  avatarAlt: 'Vikram Patel, young Indian software professional with glasses and casual shirt',
  quote:
  'As a young professional, I was confused about where to start. Krupesh sir explained everything in simple terms — started my SIP, got mediclaim, and even a term plan. One advisor for everything!',
  rating: 5,
  product: 'SIP + Mediclaim + Term',
  years: '4 years'
},
{
  name: 'Hemlata Joshi',
  role: 'Homemaker, Rajkot',
  avatar: "https://images.unsplash.com/photo-1692075042334-4fec26691eb7",
  avatarAlt: 'Hemlata Joshi, Indian woman in traditional attire with a gentle smile',
  quote:
  'We took a child education plan for our daughter when she was 3. Now she is in medical college and the plan paid for her fees exactly when we needed it. Thank you Krupesh bhai!',
  rating: 5,
  product: 'Child Education Plan',
  years: '18 years'
},
{
  name: 'Suresh Kapoor',
  role: 'Retired Government Officer, Anand',
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
  avatarAlt: 'Suresh Kapoor, senior Indian man with grey hair and dignified expression',
  quote:
  'I was worried about my retirement income. Krupesh explained pension plans so clearly and helped me choose the right annuity. Now I have a steady monthly income without any stress.',
  rating: 5,
  product: 'Pension Plan',
  years: '12 years'
},
{
  name: 'Ananya Shah',
  role: 'Doctor, Gandhinagar',
  avatar: "https://images.unsplash.com/photo-1594824436951-7f12bc4175de",
  avatarAlt: 'Ananya Shah, Indian female doctor in white coat with stethoscope',
  quote:
  'As a doctor, I understand risk. Krupesh sir helped me get comprehensive mediclaim, professional indemnity, and a solid mutual fund portfolio. Complete financial health!',
  rating: 5,
  product: 'Mediclaim + Mutual Funds',
  years: '7 years'
}];


export default function TestimonialsSection() {
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
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section id="testimonials" ref={sectionRef} className="py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
      {/* Background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, #F7F7FF 0%, rgba(117,139,253,0.06) 50%, #F7F7FF 100%)',
          pointerEvents: 'none'
        }} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 reveal-hidden">
          <span className="section-label">Client Stories</span>
          <h2
            className="font-display mt-3 tracking-tight"
            style={{
              fontFamily: 'Plus Jakarta Sans',
              fontWeight: 800,
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              color: '#1a1a2e'
            }}>
            
            Trusted by{' '}
            <span className="gradient-text">Families Across Gujarat</span>
          </h2>
          <p className="text-sp-muted mt-3 max-w-xl mx-auto" style={{ fontFamily: 'DM Sans' }}>
            Real stories from real clients who secured their futures with Shree Pragya Insurance.
          </p>
        </div>

        {/* Bento grid — varied sizes */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {testimonials?.map((t, i) =>
          <div
            key={t?.name}
            className={`testimonial-card p-7 reveal-hidden ${i === 1 ? 'md:row-span-1 xl:row-span-1' : ''}`}
            style={{ transitionDelay: `${i * 90}ms` }}>
            
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(t?.rating)]?.map((_, si) =>
              <Icon key={si} name="StarIcon" size={16} variant="solid" style={{ color: '#f59e0b' }} />
              )}
              </div>

              {/* Quote */}
              <p
              className="text-sp-text leading-relaxed mb-6 text-[14px]"
              style={{ fontFamily: 'DM Sans' }}>
              
                &ldquo;{t?.quote}&rdquo;
              </p>

              {/* Product tag */}
              <div className="mb-5">
                <span
                className="text-[11px] px-3 py-1 rounded-full font-semibold"
                style={{
                  background: 'rgba(39,24,126,0.08)',
                  color: '#27187E',
                  fontFamily: 'DM Sans'
                }}>
                
                  {t?.product}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-sp-primary/8">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <AppImage
                  src={t?.avatar}
                  alt={t?.avatarAlt}
                  width={40}
                  height={40}
                  className="w-full h-full object-cover" />
                
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-sp-text text-[14px]" style={{ fontFamily: 'DM Sans' }}>
                    {t?.name}
                  </p>
                  <p className="text-sp-muted text-[12px]" style={{ fontFamily: 'DM Sans' }}>
                    {t?.role}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[11px] text-sp-muted" style={{ fontFamily: 'DM Mono' }}>
                    Client for {t?.years}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom trust bar */}
        <div className="mt-12 text-center reveal-hidden">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-card">
            <Icon name="ShieldCheckIcon" size={18} variant="solid" className="text-sp-primary" />
            <p className="text-[14px] font-semibold text-sp-text" style={{ fontFamily: 'DM Sans' }}>
              5,000+ families trust Shree Pragya Insurance
            </p>
            <span className="text-sp-muted">·</span>
            <p className="text-[14px] text-sp-muted" style={{ fontFamily: 'DM Sans' }}>
              Since 1990
            </p>
          </div>
        </div>
      </div>
    </section>);

}