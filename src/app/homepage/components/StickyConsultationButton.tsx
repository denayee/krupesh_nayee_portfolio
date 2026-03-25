'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

export default function StickyConsultationButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="sticky-cta">
      <button
        className="btn-primary px-6 py-4 text-[13px] flex items-center gap-2 shadow-sp-lg"
        style={{ cursor: 'none' }}
        onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <Icon name="CalendarDaysIcon" size={16} variant="solid" />
        <span className="hidden sm:inline">Book Consultation</span>
        <span className="sm:hidden">Consult</span>
      </button>
    </div>
  );
}