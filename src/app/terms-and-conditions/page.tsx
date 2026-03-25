import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms & Conditions — ShreyPragya',
  description: 'Terms and conditions for using the ShreyPragya website.',
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

export default function TermsAndConditionsPage() {
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
          Terms &amp; Conditions
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

        <Section title="Acceptance of Terms">
          <p>
            By accessing or using the Shree Pragya Insurance website (&quot;Site&quot;), you agree to be bound by these Terms
            &amp; Conditions. If you do not agree to these terms, please do not use the Site.
          </p>
        </Section>

        <Section title="Information Accuracy">
          <p>
            The information provided on this Site — including details about insurance products, investment
            options, and financial services — is for general informational purposes only. While we strive to
            keep information current and accurate, we make no representations or warranties of any kind,
            express or implied, about the completeness, accuracy, or suitability of the information.
          </p>
          <p style={{ marginTop: '10px' }}>
            Information on this Site may change at any time without prior notice. We are not responsible for
            any outdated or inaccurate content displayed at any given time.
          </p>
        </Section>

        <Section title="Limitation of Liability">
          <p>
            Shree Pragya Insurance and Krupesh Ashokbhai Nayee shall not be held liable for any decisions made by visitors based
            on the information displayed on this Site. The content on this Site does not constitute
            professional financial, legal, or investment advice. Always consult a qualified professional
            before making financial decisions.
          </p>
        </Section>

        <Section title="Visitor Tracking">
          <p>
            This Site uses basic tracking technologies to collect anonymized visitor data (IP address, visit
            timestamp, and page URL) for the purpose of analytics and website improvement. Such tracking is
            activated only upon your explicit consent via the cookie consent banner.
          </p>
          <p style={{ marginTop: '10px' }}>
            By accepting the cookie consent banner, you agree to this tracking as described in our{' '}
            <Link href="/privacy-policy" style={{ color: '#758BFD', textDecoration: 'underline' }}>
              Privacy Policy
            </Link>
            . If you decline, no tracking will occur.
          </p>
        </Section>

        <Section title="Agreement to Basic Tracking">
          <p>
            By continuing to use this Site after dismissing the cookie consent banner — whether by accepting
            or declining — you acknowledge that you have read and understood our tracking practices as
            described in the{' '}
            <Link href="/privacy-policy" style={{ color: '#758BFD', textDecoration: 'underline' }}>
              Privacy Policy
            </Link>
            .
          </p>
        </Section>

        <Section title="Intellectual Property">
          <p>
            All content on this Site, including text, images, logos, and design elements, is the property of
            Shree Pragya Insurance and is protected by applicable intellectual property laws.
            Unauthorized reproduction or use of any content is strictly prohibited.
          </p>
        </Section>

        <Section title="External Links">
          <p>
            This Site may contain links to third-party websites. We have no control over the content or
            privacy practices of those sites and accept no responsibility for them. Accessing any linked
            third-party site is at your own risk.
          </p>
        </Section>

        <Section title="Changes to These Terms">
          <p>
            We reserve the right to update or modify these Terms &amp; Conditions at any time without prior
            notice. Changes are effective immediately upon posting to the Site. Continued use of the Site
            after any changes constitutes your acceptance of the revised terms.
          </p>
          <p style={{ marginTop: '10px' }}>
            We recommend reviewing this page periodically to stay informed of any updates.
          </p>
        </Section>

        <Section title="Governing Law">
          <p>
            These Terms &amp; Conditions are governed by and construed in accordance with the laws of India.
            Any disputes arising from the use of this Site shall be subject to the exclusive jurisdiction of
            the courts of Gujarat, India.
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
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
