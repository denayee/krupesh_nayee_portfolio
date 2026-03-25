/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'sp-bg': '#F7F7FF',
        'sp-primary': '#27187E',
        'sp-primary-light': '#3d2baa',
        'sp-accent': '#758BFD',
        'sp-accent2': '#AEB8FE',
        'sp-text': '#1a1a2e',
        'sp-muted': '#6b7280',
      },
      fontFamily: {
        display: ['Plus Jakarta Sans', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
      borderRadius: {
        '2xl': '20px',
        '3xl': '28px',
      },
      boxShadow: {
        'sp': '0 8px 40px rgba(39,24,126,0.10)',
        'sp-lg': '0 20px 60px rgba(39,24,126,0.16)',
        'sp-glow': '0 0 30px rgba(39,24,126,0.25)',
      },
      animation: {
        'float': 'float3d 5s ease-in-out infinite',
        'orbit': 'orbit-rotate 28s linear infinite',
        'counter-orbit': 'orbit-counter 28s linear infinite',
        'sticky-bounce': 'sticky-bounce 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};