import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy — ShreyPragya',
  description: 'How ShreyPragya collects, uses, and protects visitor information.',
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div
      style={{
        background: 'rgba(255,255,255,0.72)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        border: '1px solid rgba(255,255,255,0.8)',
        borderRadius: '20px',
        boxShadow: '0 8px 40px rgba(39,24,126,0.08)',
        padding: '32px 36px',
        marginBottom: '20px',
      }}
    >
      <h2
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 700,
          fontSize: '18px',
          color: '#27187E',
          marginBottom: '14px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <span
          style={{
            width: '6px',
            height: '22px',
            background: 'linear-gradient(180deg,#27187E,#758BFD)',
            borderRadius: '3px',
            flexShrink: 0,
            display: 'inline-block',
          }}
        />
        {title}
      </h2>
      <div
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '15px',
          lineHeight: '1.75',
          color: '#374151',
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <div style={{ background: '#F7F7FF', minHeight: '100vh' }}>
      {/* Header */}
      <div
        style={{
          background: 'linear-gradient(135deg,#27187E 0%,#3d2baa 60%,#758BFD 100%)',
          padding: '80px 24px 64px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* decorative rings */}
        {[260, 380, 500].map(size => (
          <div
            key={size}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%,-50%)',
              width: size,
              height: size,
              borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.08)',
              pointerEvents: 'none',
            }}
          />
        ))}

        <p
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '12px',
            fontWeight: 500,
            letterSpacing: '0.18em',
            color: 'rgba(174,184,254,0.9)',
            textTransform: 'uppercase',
            marginBottom: '12px',
          }}
        >
          Legal
        </p>
        <h1
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(28px,5vw,44px)',
            color: '#ffffff',
            margin: 0,
          }}
        >
          Privacy Policy
        </h1>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '15px',
            color: 'rgba(255,255,255,0.7)',
            marginTop: '10px',
          }}
        >
          Last updated: March 2025
        </p>
      </div>

      {/* Content */}
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '48px 24px 80px' }}>

        <Section title="Introduction">
          <p>
            Shree Pragya Insurance (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy
            Policy explains how we collect and use information when you visit our website.
          </p>
        </Section>

        <Section title="Information We Collect">
          <p>When you visit this website, we automatically collect the following data:</p>
          <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
            <li style={{ marginBottom: '8px' }}>
              <strong>IP Address</strong> — Your device&apos;s internet protocol address, used to understand
              general visitor geography.
            </li>
            <li style={{ marginBottom: '8px' }}>
              <strong>Visit Timestamp</strong> — The date and time of your visit in ISO 8601 format.
            </li>
            <li style={{ marginBottom: '8px' }}>
              <strong>Page URL</strong> — The URL of the page you visited on our website.
            </li>
          </ul>
          <p style={{ marginTop: '12px' }}>
            <strong>We do not collect</strong> personally identifiable information such as your name, email
            address, phone number, or any financial data unless you voluntarily submit it via our contact
            form.
          </p>
        </Section>

        <Section title="How We Use This Information">
          <p>The information collected is used solely for the following purposes:</p>
          <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
            <li style={{ marginBottom: '8px' }}>Website traffic analytics</li>
            <li style={{ marginBottom: '8px' }}>Improving the performance and user experience of our website</li>
            <li style={{ marginBottom: '8px' }}>Diagnosing technical issues</li>
          </ul>
          <p style={{ marginTop: '12px' }}>
            We do <strong>not</strong> use this data for marketing, advertising, or profiling purposes.
          </p>
        </Section>

        <Section title="Cookies & Tracking Technologies">
          <p>
            We use a lightweight tracking mechanism that activates only after you provide explicit consent via
            the cookie banner displayed on your first visit. Your consent preference is stored in your
            browser&apos;s <code style={{ background: '#EEF2FF', padding: '1px 6px', borderRadius: '4px' }}>localStorage</code>.
          </p>
          <p style={{ marginTop: '10px' }}>
            You may withdraw consent at any time by clearing your browser&apos;s local storage or adjusting your
            browser&apos;s cookie/privacy settings. If you decline, no tracking data will be collected during
            your visit.
          </p>
        </Section>

        <Section title="Data Storage & Security">
          <p>
            Visitor data is stored securely on our server infrastructure. We implement reasonable technical
            measures to protect data from unauthorized access, alteration, or disclosure. We do not sell,
            trade, or share your data with third parties except as required by law.
          </p>
        </Section>

        <Section title="Your Rights">
          <p>You have the right to:</p>
          <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
            <li style={{ marginBottom: '8px' }}>Decline tracking via the cookie consent banner</li>
            <li style={{ marginBottom: '8px' }}>Disable cookies and local storage entirely via your browser settings</li>
            <li style={{ marginBottom: '8px' }}>Contact us to request information about data collected</li>
          </ul>
        </Section>

        <Section title="Contact">
          <p>
            For any privacy-related queries, please use the{' '}
            <Link href="/#contact" style={{ color: '#758BFD', textDecoration: 'underline' }}>
              Contact section
            </Link>{' '}
            on our homepage.
          </p>
        </Section>

        {/* Back link */}
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '11px 28px',
              borderRadius: '50px',
              background: 'linear-gradient(135deg,#27187E,#758BFD)',
              color: 'white',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: '14px',
              textDecoration: 'none',
              boxShadow: '0 4px 20px rgba(39,24,126,0.28)',
            }}
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
