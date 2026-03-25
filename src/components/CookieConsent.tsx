'use client';

import React, { useEffect, useState } from 'react';
import { useVisitorTracking } from '@/hooks/useVisitorTracking';

const CONSENT_KEY = 'sp_cookie_consent';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) {
      // Slight delay so it doesn't flash on load
      const t = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(t);
    }
    if (stored === 'accepted') {
      setConsented(true);
    }
  }, []);

  // Fire tracking hook — only runs when consented = true
  useVisitorTracking(consented);

  function handleAccept() {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    setConsented(true);
    setVisible(false);
  }

  function handleDecline() {
    localStorage.setItem(CONSENT_KEY, 'declined');
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <>
      {/* Backdrop blur */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(39,24,126,0.08)',
          backdropFilter: 'blur(2px)',
          zIndex: 9990,
          animation: 'cookieFadeIn 0.4s ease forwards',
        }}
        aria-hidden="true"
      />

      {/* Banner */}
      <div
        role="dialog"
        aria-label="Cookie consent"
        style={{
          position: 'fixed',
          bottom: '24px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'min(600px, calc(100vw - 32px))',
          zIndex: 9999,
          background: 'rgba(255,255,255,0.88)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          border: '1px solid rgba(117,139,253,0.25)',
          borderRadius: '20px',
          boxShadow: '0 20px 60px rgba(39,24,126,0.18)',
          padding: '24px 28px',
          animation: 'cookieSlideUp 0.45s cubic-bezier(0.23,1,0.32,1) forwards',
        }}
      >
        {/* Top row */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', marginBottom: '18px' }}>
          {/* Cookie icon */}
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg,#27187E,#758BFD)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <span style={{ fontSize: '20px' }}>🍪</span>
          </div>

          <div>
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: '15px',
                color: '#27187E',
                marginBottom: '5px',
              }}
            >
              We use cookies
            </p>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '13.5px',
                color: '#6b7280',
                lineHeight: '1.55',
                margin: 0,
              }}
            >
              We use cookies and basic tracking technologies to improve user experience and analyze
              website traffic.{' '}
              <a
                href="/privacy-policy"
                style={{ color: '#758BFD', textDecoration: 'underline', cursor: 'pointer' }}
              >
                Privacy Policy
              </a>
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
          <button
            onClick={handleDecline}
            id="cookie-decline-btn"
            style={{
              padding: '9px 22px',
              borderRadius: '50px',
              border: '1.5px solid rgba(39,24,126,0.2)',
              background: 'transparent',
              color: '#6b7280',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 600,
              fontSize: '13px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={e => {
              (e.target as HTMLButtonElement).style.borderColor = '#27187E';
              (e.target as HTMLButtonElement).style.color = '#27187E';
            }}
            onMouseLeave={e => {
              (e.target as HTMLButtonElement).style.borderColor = 'rgba(39,24,126,0.2)';
              (e.target as HTMLButtonElement).style.color = '#6b7280';
            }}
          >
            Decline
          </button>

          <button
            onClick={handleAccept}
            id="cookie-accept-btn"
            style={{
              padding: '9px 24px',
              borderRadius: '50px',
              border: 'none',
              background: 'linear-gradient(135deg,#27187E,#758BFD)',
              color: 'white',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: '13px',
              cursor: 'pointer',
              boxShadow: '0 4px 16px rgba(39,24,126,0.3)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={e => {
              (e.target as HTMLButtonElement).style.transform = 'translateY(-1px)';
              (e.target as HTMLButtonElement).style.boxShadow = '0 8px 24px rgba(39,24,126,0.45)';
            }}
            onMouseLeave={e => {
              (e.target as HTMLButtonElement).style.transform = 'translateY(0)';
              (e.target as HTMLButtonElement).style.boxShadow = '0 4px 16px rgba(39,24,126,0.3)';
            }}
          >
            Accept
          </button>
        </div>
      </div>

      <style>{`
        @keyframes cookieFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes cookieSlideUp {
          from { opacity: 0; transform: translateX(-50%) translateY(24px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
      `}</style>
    </>
  );
}
