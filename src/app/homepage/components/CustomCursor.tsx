'use client';

import React, { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: 0, y: 0 });
  const ringPosRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      const cursor = cursorRef.current;
      const ring = ringRef.current;
      if (cursor && ring) {
        cursor.style.left = `${posRef.current.x}px`;
        cursor.style.top = `${posRef.current.y}px`;

        // Ring follows with lag
        ringPosRef.current.x += (posRef.current.x - ringPosRef.current.x) * 0.12;
        ringPosRef.current.y += (posRef.current.y - ringPosRef.current.y) * 0.12;
        ring.style.left = `${ringPosRef.current.x}px`;
        ring.style.top = `${ringPosRef.current.y}px`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    rafRef.current = requestAnimationFrame(animate);

    // Hover effects
    const addHover = () => {
      cursorRef.current?.classList.add('cursor-hover');
      ringRef.current?.classList.add('cursor-hover');
    };
    const removeHover = () => {
      cursorRef.current?.classList.remove('cursor-hover');
      ringRef.current?.classList.remove('cursor-hover');
    };

    const interactiveEls = document.querySelectorAll(
      'a, button, [role="button"], input, textarea, select, .orbit-item'
    );
    interactiveEls.forEach((el) => {
      el.addEventListener('mouseenter', addHover);
      el.addEventListener('mouseleave', removeHover);
    });

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafRef.current);
      interactiveEls.forEach((el) => {
        el.removeEventListener('mouseenter', addHover);
        el.removeEventListener('mouseleave', removeHover);
      });
    };
  }, []);

  return (
    <>
      <div id="sp-cursor" ref={cursorRef} />
      <div id="sp-cursor-ring" ref={ringRef} />
    </>
  );
}