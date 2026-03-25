'use client';

import React, { useState, useRef, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '', service: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    let { name, value } = e.target;
    // Front-end validation rules for real-time formatting
    if (name === 'phone') {
      value = value.replace(/\D/g, '').slice(0, 10); // only numbers, max 10
    }
    if (name === 'name') {
      value = value.replace(/[^A-Za-z\s]/g, ''); // only letters and spaces
    }
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    
    // Final frontend validation
    if (form.phone.length !== 10) {
      setErrorMsg('Phone number must be exactly 10 digits.');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit the form.');
      }
      
      setSubmitted(true);
      setForm({ name: '', phone: '', email: '', message: '', service: '' });
    } catch (err: any) {
      setErrorMsg(err.message || 'An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  const contactItems = [
    {
      icon: 'PhoneIcon',
      label: 'Call Us',
      value: '+91 9426851470',
      sub: 'Mon–Sat, 9am–7pm IST',
      href: 'tel:+919426851470'
    },
    {
      icon: 'EnvelopeIcon',
      label: 'Email',
      value: 'krupesh.lic@gmail.com',
      sub: 'Response within 24 hours',
      href: 'mailto:krupesh.lic@gmail.com'
    },
    {
      icon: 'MapPinIcon',
      label: 'Office',
      value: 'Shree Pragya Insurance',
      sub: 'Golbabazar, Near Mahendra Plastic, Bhavnagar, Gujarat - 364001',
      href: 'https://maps.google.com/?q=Golbabazar,+Near+Mahendra+Plastic,+Bhavnagar,+Gujarat+-+364001'
    },
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
      {/* Background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(39,24,126,0.05) 0%, #F7F7FF 50%, rgba(174,184,254,0.1) 100%)',
          pointerEvents: 'none',
        }}
      />
      <div className="grid-pattern absolute inset-0 opacity-30" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 reveal-hidden">
          <span className="section-label">Get In Touch</span>
          <h2
            className="font-display mt-3 tracking-tight"
            style={{
              fontFamily: 'Plus Jakarta Sans',
              fontWeight: 800,
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              color: '#1a1a2e',
            }}
          >
            Start Your{' '}
            <span className="gradient-text">Financial Journey</span>
            {' '}Today
          </h2>
          <p className="text-sp-muted mt-3 max-w-xl mx-auto" style={{ fontFamily: 'DM Sans' }}>
            Free consultation. No commitment. Just honest financial guidance from a trusted advisor.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 xl:gap-20">
          {/* Left: Contact info + WhatsApp */}
          <div className="flex flex-col gap-6">
            {/* Contact items */}
            {contactItems.map((item, i) => (
              <a
                key={item.label}
                href={item.href}
                target={item.icon === 'MapPinIcon' ? '_blank' : undefined}
                rel={item.icon === 'MapPinIcon' ? 'noopener noreferrer' : undefined}
                className="glass-card p-6 flex items-center gap-5 reveal-hidden hover:scale-[1.02] hover:shadow-sp transition-all duration-300 group"
                style={{ transitionDelay: `${i * 80}ms`, cursor: 'pointer' }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: 'linear-gradient(135deg, rgba(39,24,126,0.1), rgba(117,139,253,0.15))' }}
                >
                  <Icon name={item.icon as never} size={22} variant="solid" className="text-sp-primary group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <p className="text-[12px] text-sp-muted mb-0.5" style={{ fontFamily: 'DM Mono', letterSpacing: '0.1em' }}>
                    {item.label}
                  </p>
                  <p className="font-semibold text-sp-text text-[15px] group-hover:text-sp-primary transition-colors" style={{ fontFamily: 'DM Sans' }}>
                    {item.value}
                  </p>
                  <p className="text-[12px] text-sp-muted" style={{ fontFamily: 'DM Sans' }}>
                    {item.sub}
                  </p>
                </div>
              </a>
            ))}

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919426851470?text=Hello%20I%20am%20interested%20in%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-4 px-4 rounded-xl border border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-300 shadow-sm reveal-hidden text-[15px] group"
              style={{ cursor: 'pointer', fontFamily: 'Plus Jakarta Sans', fontWeight: 600 }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>

            {/* Social Media Links */}
            <div className="flex gap-4 reveal-hidden w-full">
              <a
                href="https://www.linkedin.com/company/shree-pragya-insurance/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-4 px-4 rounded-xl border border-sp-primary/20 text-sp-primary hover:bg-sp-primary hover:text-white transition-all duration-300 shadow-sm"
                style={{ cursor: 'pointer', fontFamily: 'Plus Jakarta Sans', fontWeight: 600 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/shree_pragya_insurance?igsh=NDlseHVzZTJiOWdp&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-4 px-4 rounded-xl border border-[#E1306C]/30 text-[#E1306C] hover:bg-[#E1306C] hover:text-white transition-all duration-300 shadow-sm"
                style={{ cursor: 'pointer', fontFamily: 'Plus Jakarta Sans', fontWeight: 600 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                Instagram
              </a>
            </div>

            {/* Trust note */}
            <div
              className="glass-card p-5 flex items-start gap-3 reveal-hidden"
            >
              <Icon name="LockClosedIcon" size={18} variant="solid" className="text-sp-primary flex-shrink-0 mt-0.5" />
              <p className="text-[13px] text-sp-muted leading-relaxed" style={{ fontFamily: 'DM Sans' }}>
                Your information is completely confidential and will never be shared with third parties.
                This is a free, no-obligation consultation.
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="glass-card p-8 md:p-10 reveal-hidden">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full gap-6 py-12 text-center">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #27187E, #758BFD)' }}
                >
                  <Icon name="CheckIcon" size={36} variant="solid" className="text-white" />
                </div>
                <h3
                  className="font-display text-2xl"
                  style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, color: '#27187E' }}
                >
                  Request Received!
                </h3>
                <p className="text-sp-muted max-w-sm" style={{ fontFamily: 'DM Sans' }}>
                  Thank you for reaching out. Krupesh Nayee will personally contact you within
                  24 hours to schedule your free consultation.
                </p>
                <button
                  className="btn-outline px-8 py-3 text-[14px]"
                  style={{ cursor: 'none' }}
                  onClick={() => setSubmitted(false)}
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <>
                <h3
                  className="font-display mb-2"
                  style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 700, fontSize: '1.4rem', color: '#1a1a2e' }}
                >
                  Book Free Consultation
                </h3>
                <p className="text-sp-muted text-[14px] mb-7" style={{ fontFamily: 'DM Sans' }}>
                  Fill in your details and Krupesh sir will reach out to you personally.
                </p>

                {errorMsg && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 rounded-xl text-[14px] font-medium flex items-center gap-2" style={{ fontFamily: 'DM Sans' }}>
                    <Icon name="ExclamationTriangleIcon" size={20} variant="solid" />
                    {errorMsg}
                  </div>
                )}

                {/* Form connected to Nodemailer backend */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[13px] font-semibold text-sp-text mb-1.5" style={{ fontFamily: 'DM Sans' }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Ramesh Patel"
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label className="block text-[13px] font-semibold text-sp-text mb-1.5" style={{ fontFamily: 'DM Sans' }}>
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[13px] font-semibold text-sp-text mb-1.5" style={{ fontFamily: 'DM Sans' }}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="ramesh@email.com"
                      className="form-input"
                    />
                  </div>

                  <div className="w-full overflow-hidden">
                    <label className="block text-[13px] font-semibold text-sp-text mb-1.5" style={{ fontFamily: 'DM Sans' }}>
                      Interested In
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="form-input w-full max-w-full truncate"
                      style={{ cursor: 'none' }}
                    >
                      <option value="">Select a service</option>
                      <option>Life Insurance</option>
                      <option>Mediclaim / Health Insurance</option>
                      <option>Mutual Funds / SIP</option>
                      <option>Term Plan</option>
                      <option>Pension / Retirement Plan</option>
                      <option>Child Education Plan</option>
                      <option>Car Insurance</option>
                      <option>Wealth Creation</option>
                      <option>General Financial Planning</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[13px] font-semibold text-sp-text mb-1.5" style={{ fontFamily: 'DM Sans' }}>
                      Message (Optional)
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Tell us about your financial goals or any specific questions..."
                      className="form-input resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary py-4 text-[15px] flex items-center justify-center gap-2 mt-2"
                    style={{ cursor: 'none' }}
                  >
                    {loading ? (
                      <>
                        <div
                          className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Icon name="PaperAirplaneIcon" size={18} variant="solid" />
                        Request Free Consultation
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}