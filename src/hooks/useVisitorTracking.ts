'use client';

import { useEffect } from 'react';

export function useVisitorTracking(consented: boolean) {
  useEffect(() => {
    if (!consented) return;

    async function track() {
      try {
        // Fetch visitor IP
        const ipRes = await fetch('https://api.ipify.org?format=json');
        const { ip } = await ipRes.json();

        const payload = {
          ip,
          timestamp: new Date().toISOString(),
          page: window.location.href,
        };

        await fetch('/api/track', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      } catch (err) {
        // Fail silently — tracking should never break UX
        console.warn('[VisitorTracking] Failed:', err);
      }
    }

    track();
  }, [consented]);
}
