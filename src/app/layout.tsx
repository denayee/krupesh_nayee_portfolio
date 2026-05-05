import React from 'react';
import type { Metadata, Viewport } from 'next';
import '../styles/tailwind.css';
import CookieConsent from '@/components/CookieConsent';
import CustomCursor from '@/app/homepage/components/CustomCursor';
import Preloader from '@/components/Preloader';
import SmoothScroll from '@/components/SmoothScroll';
import { Analytics } from '@vercel/analytics/next';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'Shree Pragya Insurance — Trusted Insurance & Investment Advisor',
  description: 'Krupesh Nayee, trusted insurance and investment advisor since 1990. Expert in life insurance, mutual funds, SIP, and wealth creation at Shree Pragya Insurance.',
  icons: {
    icon: [
      { url: '/assets/images/app_logo.ico', type: 'image/x-icon' }
    ],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <SmoothScroll>
          <Preloader />
          <CustomCursor />
          {children}
          <CookieConsent />
          <Analytics />
        </SmoothScroll>
      </body>
    </html>
  );
}