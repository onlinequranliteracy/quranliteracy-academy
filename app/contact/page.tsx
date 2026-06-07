'use client'
import { useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const update = (key: string, val: string) => setForm(prev => ({ ...prev, [key]: val }))

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'contact', data: form })
      })
      if (res.ok) setStatus('sent')
      else setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%', background: 'rgba(245,237,216,0.06)',
    border: '0.5px solid rgba(245,237,216,0.15)',
    borderRadius: '6px', padding: '10px 14px',
    fontSize: '14px', color: '#F5EDD8',
    fontFamily: "'DM Sans', sans-serif", outline: 'none'
  }

  const labelStyle: React.CSSProperties = {
    fontSize: '12px', color: 'rgba(245,237,216,0.55)',
    display: 'block', marginBottom: '6px'
  }

  return (
    <main style={{ minHeight: '100vh' }}>
      <Nav />
      <div style={{ padding: '3rem 1.5rem' }}>

        <div style={{ maxWidth: '900px', margin: '0 auto 4rem' }}>
          <p style={{ fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#D4A93A', marginBottom: '0.75rem' }}>Get in touch</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 600, color: '#F5EDD8', marginBottom: '1rem', lineHeight: 1.1 }}>
            We'd love to hear from you
          </h1>
          <p style={{ fontSize: '15px', color: 'rgba(245,237,216,0.6)', maxWidth: '520px', lineHeight: 1.7 }}>
            Whether you have a question about programs, pricing, or anything else — our team is ready to answer. WhatsApp is the fastest way to reach us.
          </p>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>

          {/* CONTACT DETAILS */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

            {/* WHATSAPP — most prominent */}
            <div
              onClick={() => window.open('https://wa.me/233243083957?text=' + encodeURIComponent("As-salamu alaykum! I have a question about Online Quran Literacy."), '_blank')}
              style={{ background: 'rgba(37,211,102,0.08)', border: '0.5px solid rgba(37,211,102,0.3)', borderRadius: '10px', padding: '1.5rem', cursor: 'pointer' }}
            >
              <div style={{ fontSize: '24px', marginBottom: '0.75rem' }}>📱</div>
              <div style={{ fontSize: '14px', fontWeight: 600, color: '#F5EDD8', marginBottom: '4px' }}>WhatsApp — fastest response</div>
              <div style={{ fontSize: '13px', color: 'rgba(245,237,216,0.55)', marginBottom: '4px' }}>+233 24 308 3957</div>
              <div style={{ fontSize: '12px', color: 'rgba(245,237,216,0.4)', marginBottom: '1rem' }}>Sat–Thu, 8am–8pm GMT · Usually replies within the hour</div>
              <div style={{ background: '#25D366', color: 'white', padding: '9px 16px', borderRadius: '4px', fontSize: '13px', fontWeight: 500, display: 'inline-block' }}>
                Message us on WhatsApp →
              </div>
            </div>

            {[
              {
                icon: '✉️', title: 'Email us',
                lines: ['hello@onlinequranliteracy.com', 'We respond within a few hours during business hours'],
                link: 'mailto:onlinequranliteracy@outlook.com', linkLabel: 'Send an email'
              },
              {
                icon: '💰', title: 'Pricing in your currency',
                lines: ['USD · GBP · GHS all accepted', 'Ghana students: prices available in cedis — just ask us on WhatsApp'],
                link: '/pricing', linkLabel: 'View pricing plans'
              },
              {
                icon: '🌍', title: 'We serve',
                lines: ['Ghana · United Kingdom · United States', 'Online via WhatsApp & Zoom'],
                link: null, linkLabel: null
              },
            ].map((item) => (
              <div key={item.title} style={{ background: 'rgba(245,237,216,0.03)', border: '0.5px solid rgba(245,237,216,0.1)', borderRadius: '10px', padding: '1.5rem' }}>
                <div style={{ fontSize: '22px', marginBottom: '0.75rem' }}>{item.icon}</div>
                <div style={{ fontSize: '14px', fontWeight: 500, color: '#F5EDD8', marginBottom: '0.5rem' }}>{item.title}</div>
                {item.lines.map((line, i) => (
                  <div key={i} style={{ fontSize: '13px', color: 'rgba(245,237,216,0.55)', lineHeight: 1.6 }}>{line}</div>
                ))}
                {item.link && (
                  <a href={item.link} target={item.link.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" style={{ display: 'inline-block', marginTop: '0.75rem', fontSize: '13px', color: '#D4A93A', borderBottom: '0.5px solid rgba(212,169,58,0.3)' }}>
                    {item.linkLabel} →
                  </a>
                )}
              </div>
            ))}

            {/* SOCIAL LINKS */}
            <div style={{ background: 'rgba(245,237,216,0.03)', border: '0.5px solid rgba(245,237,216,0.1)', borderRadius: '10px', padding: '1.5rem' }}>
              <div style={{ fontSize: '14px', fontWeight: 500, color: '#F5EDD8', marginBottom: '1rem' }}>Follow us</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  { label: 'Instagram', handle: '@onlinequranliteracy', href: 'https://instagram.com/onlinequranliteracy' },
                  { label: 'Facebook', handle: 'Online Qur\'an Literacy', href: 'https://facebook.com/onlinequranliteracy' },
                  { label: 'TikTok', handle: '@onlinequranliteracy', href: 'https://tiktok.com/@onlinequranliteracy' },
                ].map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '13px', color: 'rgba(245,237,216,0.55)' }}>
                    <span>{s.label}</span>
                    <span style={{ color: '#D4A93A', fontSize: '12px' }}>{s.handle} →</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div>
            {status === 'sent' ? (
              <div style={{ background: 'rgba(245,237,216,0.04)', border: '0.5px solid rgba(245,237,216,0.1)', borderRadius: '12px', padding: '3rem', textAlign: 'center' }}>
                <div style={{ fontSize: '48px', marginBottom: '1rem' }}>✅</div>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '24px', color: '#F5EDD8', marginBottom: '0.75rem' }}>Message sent!</h2>
                <p style={{ fontSize: '14px', color: 'rgba(245,237,216,0.55)', lineHeight: 1.7 }}>We'll get back to you within a few hours. JazakAllahu Khayran.</p>
              </div>
            ) : (
              <div style={{ background: 'rgba(245,237,216,0.03)', border: '0.5px solid rgba(245,237,216,0.1)', borderRadius: '12px', padding: '2rem' }}>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '22px', fontWeight: 600, color: '#F5EDD8', marginBottom: '0.5rem' }}>Send us a message</h2>
                <p style={{ fontSize: '12px', color: 'rgba(245,237,216,0.4)', marginBottom: '1.5rem' }}>Prefer a faster reply? Message us on WhatsApp above.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                    <div>
                      <label style={labelStyle}>Full name *</label>
                      <input placeholder="Your name" value={form.name} onChange={e => update('name', e.target.value)} style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>Email *</label>
                      <input type="email" placeholder="you@example.com" value={form.email} onChange={e => update('email', e.target.value)} style={inputStyle} />
                    </div>
                  </div>
                  <div>
                    <label style={labelStyle}>Phone / WhatsApp</label>
                    <input placeholder="+233 xx xxx xxxx" value={form.phone} onChange={e => update('phone', e.target.value)} style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Subject</label>
                    <select value={form.subject} onChange={e => update('subject', e.target.value)} style={{ ...inputStyle, appearance: 'none' as any }}>
                      <option value="">Select a subject</option>
                      <option>Question about programs</option>
                      <option>Pricing enquiry</option>
                      <option>Special needs support</option>
                      <option>Technical issue</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Message *</label>
                    <textarea placeholder="How can we help you?" value={form.message} onChange={e => update('message', e.target.value)} rows={5} style={{ ...inputStyle, resize: 'vertical' }} />
                  </div>
                  {status === 'error' && (
                    <p style={{ fontSize: '13px', color: '#E07BB5' }}>Something went wrong. Please message us directly on WhatsApp or email onlinequranliteracy@outlook.com</p>
                  )}
                  <button onClick={handleSubmit} disabled={status === 'sending'} style={{
                    background: '#D4A93A', color: '#0F2318', padding: '13px',
                    borderRadius: '6px', fontSize: '14px', fontWeight: 500,
                    border: 'none', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
                    opacity: status === 'sending' ? 0.7 : 1
                  }}>
                    {status === 'sending' ? 'Sending...' : 'Send message'}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}