'use client'
import { useState } from 'react'
import Nav from '../components/Nav'

const programs = ["Qur'an Memorization", 'Tajweed & Recitation', 'Special Needs', "Du'a Memorization", 'Stories of the Prophets', 'Sunnah Practices']
const levels = ['Complete beginner', 'Knows Arabic alphabet', 'Can read Arabic slowly', 'Reads Arabic fluently', 'Has memorized some Surahs']
const timezones = ['GMT (Ghana)', 'GMT+1 (WAT)', 'GMT+2 (CAT)', 'GMT+3 (EAT)', 'GMT-5 (EST)', 'GMT-8 (PST)', 'GMT+5 (PKT)', 'GMT+8 (GST)']
const schedules = ['Weekday mornings', 'Weekday afternoons', 'Weekday evenings', 'Weekend mornings', 'Weekend afternoons', 'Flexible / any time']
const referrals = ['Google search', 'Social media', 'Friend or family', 'WhatsApp', 'Other']

export default function Register() {
  const [step, setStep] = useState(1)
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [form, setForm] = useState({
    studentName: '', age: '', gender: '', program: '', level: '', specialNeeds: '',
    parentName: '', email: '', whatsapp: '', country: '', timezone: '', schedule: '',
    referral: '', notes: ''
  })

  const update = (key: string, val: string) => setForm(prev => ({ ...prev, [key]: val }))

  const handleSubmit = async () => {
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'registration', data: form })
      })
      if (res.ok) { setStatus('sent'); setStep(4) }
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

  const card: React.CSSProperties = {
    background: 'rgba(245,237,216,0.04)',
    border: '0.5px solid rgba(245,237,216,0.1)',
    borderRadius: '12px', padding: '2rem',
    maxWidth: '640px', margin: '0 auto'
  }

  const btnPrimary: React.CSSProperties = {
    background: '#D4A93A', color: '#0F2318', padding: '12px 28px',
    borderRadius: '4px', fontSize: '14px', fontWeight: 500,
    border: 'none', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif"
  }

  const btnGhost: React.CSSProperties = {
    background: 'transparent', border: '0.5px solid rgba(245,237,216,0.2)',
    color: 'rgba(245,237,216,0.6)', padding: '12px 24px',
    borderRadius: '4px', fontSize: '14px', cursor: 'pointer',
    fontFamily: "'DM Sans', sans-serif"
  }

  const stepDot = (n: number): React.CSSProperties => ({
    width: '28px', height: '28px', borderRadius: '50%',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: '12px', fontWeight: 500,
    background: step === n ? '#D4A93A' : step > n ? 'rgba(212,169,58,0.2)' : 'transparent',
    color: step === n ? '#0F2318' : step > n ? '#D4A93A' : 'rgba(245,237,216,0.35)',
    border: step >= n ? '0.5px solid #D4A93A' : '0.5px solid rgba(245,237,216,0.2)',
  })

  return (
    <main style={{ minHeight: '100vh' }}>
      <Nav />
      <div style={{ padding: '3rem 1.5rem' }}>

        {/* HEADER */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <p style={{ fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#D4A93A', marginBottom: '0.5rem' }}>Join us</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(28px, 4vw, 38px)', fontWeight: 600, color: '#F5EDD8' }}>New Student Registration</h1>
          <p style={{ fontSize: '14px', color: 'rgba(245,237,216,0.5)', marginTop: '0.5rem' }}>Complete this form and we'll be in touch within 24 hours to schedule your first session.</p>
        </div>

        {/* STEPS */}
        {step < 4 && (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '4px' }}>
            {['Student info', 'Contact details', 'Preferences'].map((label, i) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={stepDot(i + 1)}>{step > i + 1 ? '✓' : i + 1}</div>
                  <span style={{ fontSize: '12px', color: step === i + 1 ? '#F5EDD8' : 'rgba(245,237,216,0.4)' }}>{label}</span>
                </div>
                {i < 2 && <div style={{ width: '30px', height: '0.5px', background: 'rgba(245,237,216,0.1)', margin: '0 8px' }} />}
              </div>
            ))}
          </div>
        )}

        {/* STEP 1 — STUDENT INFO */}
        {step === 1 && (
          <div style={card}>
            <p style={{ fontSize: '13px', color: 'rgba(245,237,216,0.5)', marginBottom: '1.5rem' }}>Tell us about the student</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '1.75rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div>
                  <label style={labelStyle}>Student's full name *</label>
                  <input placeholder="e.g. Aisha Mohammed" value={form.studentName} onChange={e => update('studentName', e.target.value)} style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Age *</label>
                  <input placeholder="e.g. 7 or Adult" value={form.age} onChange={e => update('age', e.target.value)} style={inputStyle} />
                </div>
              </div>
              <div>
                <label style={labelStyle}>Gender</label>
                <select value={form.gender} onChange={e => update('gender', e.target.value)} style={{ ...inputStyle, appearance: 'none' as any }}>
                  <option value="">Select</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Prefer not to say</option>
                </select>
              </div>
              <div>
                <label style={labelStyle}>Program of interest *</label>
                <select value={form.program} onChange={e => update('program', e.target.value)} style={{ ...inputStyle, appearance: 'none' as any }}>
                  <option value="">Select a program</option>
                  {programs.map(p => <option key={p}>{p}</option>)}
                </select>
              </div>
              <div>
                <label style={labelStyle}>Current Qur'anic level *</label>
                <select value={form.level} onChange={e => update('level', e.target.value)} style={{ ...inputStyle, appearance: 'none' as any }}>
                  <option value="">Select level</option>
                  {levels.map(l => <option key={l}>{l}</option>)}
                </select>
              </div>
              <div>
                <label style={labelStyle}>Any special needs or learning differences?</label>
                <textarea placeholder="e.g. ADHD, speech delay, autism — or leave blank if none" value={form.specialNeeds} onChange={e => update('specialNeeds', e.target.value)} rows={3} style={{ ...inputStyle, resize: 'vertical' }} />
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button style={{ ...btnPrimary, opacity: form.studentName && form.age && form.program && form.level ? 1 : 0.4 }}
                onClick={() => form.studentName && form.age && form.program && form.level && setStep(2)}>
                Next →
              </button>
            </div>
          </div>
        )}

        {/* STEP 2 — CONTACT DETAILS */}
        {step === 2 && (
          <div style={card}>
            <p style={{ fontSize: '13px', color: 'rgba(245,237,216,0.5)', marginBottom: '1.5rem' }}>Parent or guardian contact details</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '1.75rem' }}>
              <div>
                <label style={labelStyle}>Your full name *</label>
                <input placeholder="Parent / guardian name" value={form.parentName} onChange={e => update('parentName', e.target.value)} style={inputStyle} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div>
                  <label style={labelStyle}>Email address *</label>
                  <input type="email" placeholder="you@example.com" value={form.email} onChange={e => update('email', e.target.value)} style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>WhatsApp number *</label>
                  <input placeholder="+233 xx xxx xxxx" value={form.whatsapp} onChange={e => update('whatsapp', e.target.value)} style={inputStyle} />
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div>
                  <label style={labelStyle}>Country *</label>
                  <select value={form.country} onChange={e => update('country', e.target.value)} style={{ ...inputStyle, appearance: 'none' as any }}>
                    <option value="">Select country</option>
                    <option>Ghana</option>
                    <option>United Kingdom</option>
                    <option>United States</option>
                    <option>Nigeria</option>
                    <option>Canada</option>
                    <option>Saudi Arabia</option>
                    <option>UAE</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Timezone *</label>
                  <select value={form.timezone} onChange={e => update('timezone', e.target.value)} style={{ ...inputStyle, appearance: 'none' as any }}>
                    <option value="">Select timezone</option>
                    {timezones.map(t => <option key={t}>{t}</option>)}
                  </select>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button style={btnGhost} onClick={() => setStep(1)}>← Back</button>
              <button style={{ ...btnPrimary, opacity: form.parentName && form.email && form.whatsapp && form.country && form.timezone ? 1 : 0.4 }}
                onClick={() => form.parentName && form.email && form.whatsapp && form.country && form.timezone && setStep(3)}>
                Next →
              </button>
            </div>
          </div>
        )}

        {/* STEP 3 — PREFERENCES */}
        {step === 3 && (
          <div style={card}>
            <p style={{ fontSize: '13px', color: 'rgba(245,237,216,0.5)', marginBottom: '1.5rem' }}>Almost done — a few last details</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '1.75rem' }}>
              <div>
                <label style={labelStyle}>Preferred schedule *</label>
                <select value={form.schedule} onChange={e => update('schedule', e.target.value)} style={{ ...inputStyle, appearance: 'none' as any }}>
                  <option value="">Select preferred time</option>
                  {schedules.map(s => <option key={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label style={labelStyle}>How did you hear about us?</label>
                <select value={form.referral} onChange={e => update('referral', e.target.value)} style={{ ...inputStyle, appearance: 'none' as any }}>
                  <option value="">Select</option>
                  {referrals.map(r => <option key={r}>{r}</option>)}
                </select>
              </div>
              <div>
                <label style={labelStyle}>Anything else we should know?</label>
                <textarea placeholder="Goals, concerns, questions — anything that helps us prepare for your first session" value={form.notes} onChange={e => update('notes', e.target.value)} rows={4} style={{ ...inputStyle, resize: 'vertical' }} />
              </div>
              {status === 'error' && (
                <p style={{ fontSize: '13px', color: '#E07BB5' }}>Something went wrong. Please email us at onlinequranliteracy@outlook.com</p>
              )}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button style={btnGhost} onClick={() => setStep(2)}>← Back</button>
              <button style={{ ...btnPrimary, opacity: form.schedule && status !== 'sending' ? 1 : 0.4 }}
                onClick={() => form.schedule && handleSubmit()}>
                {status === 'sending' ? 'Submitting...' : 'Submit registration'}
              </button>
            </div>
          </div>
        )}

        {/* STEP 4 — SUCCESS */}
        {step === 4 && (
          <div style={{ ...card, textAlign: 'center', padding: '3rem 2rem' }}>
            <div style={{ fontSize: '48px', marginBottom: '1rem' }}>🎉</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '28px', color: '#F5EDD8', marginBottom: '0.75rem' }}>
              Registration received!
            </h2>
            <p style={{ fontSize: '14px', color: 'rgba(245,237,216,0.6)', lineHeight: 1.7, marginBottom: '0.75rem' }}>
              JazakAllahu Khayran, {form.parentName.split(' ')[0]}. We have received {form.studentName}'s registration and will be in touch within 24 hours via WhatsApp or email to schedule the first session.
            </p>
            <p style={{ fontSize: '13px', color: 'rgba(245,237,216,0.35)', marginBottom: '2rem' }}>
              Confirmation sent to {form.email}
            </p>
            <a href="/" style={{ display: 'inline-block', background: '#D4A93A', color: '#0F2318', padding: '12px 28px', borderRadius: '4px', fontSize: '14px', fontWeight: 500 }}>
              Back to home
            </a>
          </div>
        )}
      </div>

      <footer style={{ padding: '2rem 1.5rem', borderTop: '0.5px solid rgba(245,237,216,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginTop: '4rem' }}>
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '15px', color: '#D4A93A' }}>Online Quran Literacy</div>
        <div style={{ fontSize: '12px', color: 'rgba(245,237,216,0.35)' }}>© 2026 Online Quran Literacy · Ghana</div>
      </footer>
    </main>
  )
}