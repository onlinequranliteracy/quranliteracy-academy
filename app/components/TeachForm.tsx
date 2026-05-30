'use client'
import { useState } from 'react'

export default function TeachForm() {
  const [form, setForm] = useState({
    name: '', email: '', whatsapp: '', country: '',
    qualifications: '', experience: '', programs: '', availability: '', introduction: ''
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const update = (key: string, val: string) => setForm(prev => ({ ...prev, [key]: val }))

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.introduction) return
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'teaching', data: form })
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

  if (status === 'sent') {
    return (
      <div style={{ background: 'rgba(245,237,216,0.04)', border: '0.5px solid rgba(245,237,216,0.1)', borderRadius: '12px', padding: '3rem', textAlign: 'center' }}>
        <div style={{ fontSize: '48px', marginBottom: '1rem' }}>✅</div>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '26px', color: '#F5EDD8', marginBottom: '0.75rem' }}>Application received!</h2>
        <p style={{ fontSize: '14px', color: 'rgba(245,237,216,0.55)', lineHeight: 1.7 }}>JazakAllahu Khayran. We will review your application and be in touch within 3–5 business days.</p>
      </div>
    )
  }

  return (
    <div style={{ background: 'rgba(245,237,216,0.03)', border: '0.5px solid rgba(245,237,216,0.1)', borderRadius: '12px', padding: '2rem' }}>
      <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '26px', fontWeight: 600, color: '#F5EDD8', marginBottom: '0.5rem' }}>Apply to teach</h2>
      <p style={{ fontSize: '13px', color: 'rgba(245,237,216,0.5)', marginBottom: '1.5rem' }}>Fill in this form and we'll be in touch within 3–5 business days.</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px' }}>
          <div>
            <label style={labelStyle}>Full name *</label>
            <input placeholder="Your full name" value={form.name} onChange={e => update('name', e.target.value)} style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Email *</label>
            <input type="email" placeholder="you@example.com" value={form.email} onChange={e => update('email', e.target.value)} style={inputStyle} />
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px' }}>
          <div>
            <label style={labelStyle}>WhatsApp number</label>
            <input placeholder="+233 xx xxx xxxx" value={form.whatsapp} onChange={e => update('whatsapp', e.target.value)} style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Country</label>
            <input placeholder="e.g. Ghana" value={form.country} onChange={e => update('country', e.target.value)} style={inputStyle} />
          </div>
        </div>
        <div>
          <label style={labelStyle}>Qualifications (ijazah, certifications)</label>
          <input placeholder="e.g. Ijazah in Hafs an Asim, Al-Azhar certified" value={form.qualifications} onChange={e => update('qualifications', e.target.value)} style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Years of teaching experience</label>
          <select value={form.experience} onChange={e => update('experience', e.target.value)} style={{ ...inputStyle, appearance: 'none' as any }}>
            <option value="">Select</option>
            <option>Less than 1 year</option>
            <option>1–2 years</option>
            <option>3–5 years</option>
            <option>5–10 years</option>
            <option>10+ years</option>
          </select>
        </div>
        <div>
          <label style={labelStyle}>Programs you can teach</label>
          <input placeholder="e.g. Hifz, Tajweed, Special Needs" value={form.programs} onChange={e => update('programs', e.target.value)} style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Your availability</label>
          <input placeholder="e.g. Weekday evenings GMT, Weekend mornings" value={form.availability} onChange={e => update('availability', e.target.value)} style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Brief introduction *</label>
          <textarea placeholder="Tell us about yourself, your teaching style, and why you want to join Online Quran Literacy" value={form.introduction} onChange={e => update('introduction', e.target.value)} rows={5} style={{ ...inputStyle, resize: 'vertical' }} />
        </div>
        {status === 'error' && (
          <p style={{ fontSize: '13px', color: '#E07BB5' }}>Something went wrong. Please email us at onlinequranliteracy@outlook.com</p>
        )}
        <button onClick={handleSubmit} disabled={status === 'sending'} style={{
          background: '#D4A93A', color: '#0F2318', padding: '13px',
          borderRadius: '6px', fontSize: '14px', fontWeight: 500,
          border: 'none', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
          opacity: status === 'sending' ? 0.7 : 1
        }}>
          {status === 'sending' ? 'Submitting...' : 'Submit application'}
        </button>
      </div>
    </div>
  )
}