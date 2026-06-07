'use client'
import { useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const programs = [
  { id: 'hifz', icon: '📖', name: "Qur'an Memorization", tag: 'Hifz · All ages' },
  { id: 'tajweed', icon: '🎙️', name: 'Tajweed & Recitation', tag: 'Pronunciation · All levels' },
  { id: 'special', icon: '🤲', name: 'Special Needs', tag: 'Speech delays · Learning diff.' },
  { id: 'dua', icon: '🌿', name: "Du'a Memorization", tag: 'Daily supplications' },
  { id: 'prophets', icon: '⭐', name: 'Stories of the Prophets', tag: 'Kids · Faith building' },
  { id: 'sunnah', icon: '☀️', name: 'Sunnah Practices', tag: 'Daily habits · All ages' },
]

const slots = [
  { time: '8:00 AM', avail: true }, { time: '9:00 AM', avail: true },
  { time: '10:00 AM', avail: false }, { time: '11:00 AM', avail: true },
  { time: '1:00 PM', avail: true }, { time: '2:00 PM', avail: true },
  { time: '4:00 PM', avail: false }, { time: '6:00 PM', avail: true },
]

const timezones = ['GMT (Ghana)', 'GMT+1 (WAT)', 'GMT+2 (CAT)', 'GMT+3 (EAT)', 'GMT-5 (EST)', 'GMT-8 (PST)', 'GMT+5 (PKT)', 'GMT+8 (GST)']

export default function Booking() {
  const [step, setStep] = useState(1)
  const [selected, setSelected] = useState({ program: '', name: '', email: '', phone: '', age: '', timezone: '', slot: -1 })

  const update = (key: string, val: string | number) => setSelected(prev => ({ ...prev, [key]: val }))

  const card: React.CSSProperties = {
    background: 'rgba(245,237,216,0.04)', border: '0.5px solid rgba(245,237,216,0.1)',
    borderRadius: '12px', padding: '2rem', maxWidth: '600px', margin: '0 auto'
  }

  const btnPrimary: React.CSSProperties = {
    background: '#D4A93A', color: '#0F2318', padding: '11px 28px', borderRadius: '4px',
    fontSize: '14px', fontWeight: 500, border: 'none', cursor: 'pointer',
    fontFamily: "'DM Sans', sans-serif", display: 'inline-block'
  }

  const btnGhost: React.CSSProperties = {
    background: 'transparent', border: '0.5px solid rgba(245,237,216,0.2)',
    color: 'rgba(245,237,216,0.6)', padding: '11px 24px', borderRadius: '4px',
    fontSize: '14px', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif"
  }

  const inputStyle: React.CSSProperties = {
    background: 'rgba(245,237,216,0.06)', border: '0.5px solid rgba(245,237,216,0.15)',
    borderRadius: '6px', padding: '10px 14px', fontSize: '14px', color: '#F5EDD8',
    fontFamily: "'DM Sans', sans-serif", outline: 'none', width: '100%'
  }

  const stepDot = (n: number): React.CSSProperties => ({
    width: '28px', height: '28px', borderRadius: '50%',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: '12px', fontWeight: 500,
    background: step === n ? '#D4A93A' : step > n ? 'rgba(212,169,58,0.2)' : 'transparent',
    color: step === n ? '#0F2318' : step > n ? '#D4A93A' : 'rgba(245,237,216,0.35)',
    border: step >= n ? '0.5px solid #D4A93A' : '0.5px solid rgba(245,237,216,0.2)',
  })

  function handleConfirm() {
    const programName = programs.find(p => p.id === selected.program)?.name || selected.program
    const slotTime = slots[selected.slot]?.time || ''
    const msg = encodeURIComponent(
      `As-salamu alaykum! I'd like to book a free trial lesson.\n\n` +
      `Name: ${selected.name}\n` +
      `Program: ${programName}\n` +
      `Preferred time: Tomorrow · ${slotTime} (${selected.timezone || 'GMT'})\n` +
      `Age: ${selected.age || 'Not specified'}\n` +
      `Email: ${selected.email}`
    )
    window.open(`https://wa.me/233243083957?text=${msg}`, '_blank')
    setStep(5)
  }

  return (
    <main style={{ minHeight: '100vh' }}>
      <Nav />
      <div style={{ padding: '3rem 1.5rem' }}>

        {/* WHATSAPP SHORTCUT BANNER */}
        <div style={{ maxWidth: '600px', margin: '0 auto 2rem', background: 'rgba(37,211,102,0.08)', border: '0.5px solid rgba(37,211,102,0.25)', borderRadius: '10px', padding: '1rem 1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
          <div>
            <div style={{ fontSize: '13px', fontWeight: 500, color: '#F5EDD8', marginBottom: '2px' }}>Prefer to message us directly?</div>
            <div style={{ fontSize: '12px', color: 'rgba(245,237,216,0.5)' }}>Skip the form — tap to chat on WhatsApp and we'll book your trial together.</div>
          </div>
          <div
            onClick={() => window.open('https://wa.me/233243083957?text=' + encodeURIComponent("As-salamu alaykum! I'd like to book a free trial lesson. Could you help me get started?"), '_blank')}
            style={{ background: '#25D366', color: 'white', padding: '9px 18px', borderRadius: '4px', fontSize: '13px', fontWeight: 500, cursor: 'pointer', whiteSpace: 'nowrap', flexShrink: 0 }}
          >
            Chat on WhatsApp →
          </div>
        </div>

        {/* URGENCY NOTE */}
        <div style={{ maxWidth: '600px', margin: '0 auto 2rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#D4A93A', flexShrink: 0 }} />
          <span style={{ fontSize: '12px', color: 'rgba(245,237,216,0.45)' }}>Limited trial slots available this week — a few spots remaining</span>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <p style={{ fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#D4A93A', marginBottom: '0.5rem' }}>No commitment required</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(26px, 4vw, 34px)', fontWeight: 600, color: '#F5EDD8' }}>Book your free trial lesson</h1>
        </div>

        {/* STEPS BAR */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '4px' }}>
          {['Program', 'Your details', 'Pick a time', 'Confirm'].map((label, i) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={stepDot(i + 1)}>{step > i + 1 ? '✓' : i + 1}</div>
                <span style={{ fontSize: '12px', color: step === i + 1 ? '#F5EDD8' : 'rgba(245,237,216,0.4)' }}>{label}</span>
              </div>
              {i < 3 && <div style={{ width: '30px', height: '0.5px', background: 'rgba(245,237,216,0.1)', margin: '0 8px' }} />}
            </div>
          ))}
        </div>

        {/* STEP 1 */}
        {step === 1 && (
          <div style={card}>
            <p style={{ fontSize: '13px', color: 'rgba(245,237,216,0.5)', marginBottom: '1.25rem' }}>Which program is this trial for?</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '10px', marginBottom: '1.75rem' }}>
              {programs.map(p => (
                <div key={p.id} onClick={() => update('program', p.id)} style={{
                  border: selected.program === p.id ? '0.5px solid #D4A93A' : '0.5px solid rgba(245,237,216,0.12)',
                  background: selected.program === p.id ? 'rgba(212,169,58,0.08)' : 'transparent',
                  borderRadius: '8px', padding: '14px 16px', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', gap: '12px'
                }}>
                  <span style={{ fontSize: '20px' }}>{p.icon}</span>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 500, color: '#F5EDD8' }}>{p.name}</div>
                    <div style={{ fontSize: '11px', color: 'rgba(245,237,216,0.45)', marginTop: '2px' }}>{p.tag}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button style={{ ...btnPrimary, opacity: selected.program ? 1 : 0.4 }} onClick={() => selected.program && setStep(2)}>Next →</button>
            </div>
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div style={card}>
            <p style={{ fontSize: '13px', color: 'rgba(245,237,216,0.5)', marginBottom: '1.5rem' }}>Tell us a bit about yourself</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px', marginBottom: '1.75rem' }}>
              {[
                { key: 'name', label: 'Full name', placeholder: 'e.g. Fatima Al-Hassan', type: 'text' },
                { key: 'email', label: 'Email address', placeholder: 'you@example.com', type: 'email' },
                { key: 'phone', label: 'WhatsApp number', placeholder: '+233 xx xxx xxxx', type: 'text' },
                { key: 'age', label: 'Student age', placeholder: 'e.g. 8 or Adult', type: 'text' },
              ].map(f => (
                <div key={f.key}>
                  <label style={{ fontSize: '12px', color: 'rgba(245,237,216,0.55)', display: 'block', marginBottom: '6px' }}>{f.label}</label>
                  <input type={f.type} placeholder={f.placeholder} value={(selected as any)[f.key]} onChange={e => update(f.key, e.target.value)} style={inputStyle} />
                </div>
              ))}
              <div style={{ gridColumn: '1 / -1' }}>
                <label style={{ fontSize: '12px', color: 'rgba(245,237,216,0.55)', display: 'block', marginBottom: '6px' }}>Timezone</label>
                <select value={selected.timezone} onChange={e => update('timezone', e.target.value)} style={{ ...inputStyle, appearance: 'none' as any }}>
                  <option value="">Select timezone</option>
                  {timezones.map(t => <option key={t} value={t} style={{ background: '#0F2318' }}>{t}</option>)}
                </select>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button style={btnGhost} onClick={() => setStep(1)}>← Back</button>
              <button style={{ ...btnPrimary, opacity: selected.name && selected.email ? 1 : 0.4 }} onClick={() => selected.name && selected.email && setStep(3)}>Next →</button>
            </div>
          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div style={card}>
            <p style={{ fontSize: '13px', color: 'rgba(245,237,216,0.5)', marginBottom: '1.5rem' }}>Pick a time — sessions are 30 minutes</p>
            <p style={{ fontSize: '12px', color: 'rgba(245,237,216,0.45)', textTransform: 'uppercase', letterSpacing: '0.03em', marginBottom: '10px' }}>Available times · Tomorrow</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', marginBottom: '1.75rem' }}>
              {slots.map((s, i) => (
                <div key={i} onClick={() => s.avail && update('slot', i)} style={{
                  border: selected.slot === i ? '0.5px solid #D4A93A' : '0.5px solid rgba(245,237,216,0.12)',
                  background: selected.slot === i ? 'rgba(212,169,58,0.08)' : 'transparent',
                  borderRadius: '6px', padding: '10px 8px', textAlign: 'center',
                  cursor: s.avail ? 'pointer' : 'not-allowed', opacity: s.avail ? 1 : 0.25,
                  fontSize: '13px', color: selected.slot === i ? '#D4A93A' : 'rgba(245,237,216,0.6)'
                }}>{s.time}</div>
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button style={btnGhost} onClick={() => setStep(2)}>← Back</button>
              <button style={{ ...btnPrimary, opacity: selected.slot >= 0 ? 1 : 0.4 }} onClick={() => selected.slot >= 0 && setStep(4)}>Next →</button>
            </div>
          </div>
        )}

        {/* STEP 4 */}
        {step === 4 && (
          <div style={card}>
            <p style={{ fontSize: '13px', color: 'rgba(245,237,216,0.5)', marginBottom: '1.5rem' }}>Review your booking before confirming</p>
            {[
              { key: 'Program', val: programs.find(p => p.id === selected.program)?.name || '' },
              { key: 'Student', val: selected.name },
              { key: 'Contact', val: selected.email },
              { key: 'WhatsApp', val: selected.phone || 'Not provided' },
              { key: 'Time', val: `Tomorrow · ${slots[selected.slot]?.time}` },
              { key: 'Session', val: '30 min · via WhatsApp or Zoom' },
            ].map(r => (
              <div key={r.key} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '0.5px solid rgba(245,237,216,0.08)' }}>
                <span style={{ fontSize: '13px', color: 'rgba(245,237,216,0.45)' }}>{r.key}</span>
                <span style={{ fontSize: '13px', fontWeight: 500, color: '#F5EDD8' }}>{r.val}</span>
              </div>
            ))}
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0' }}>
              <span style={{ fontSize: '13px', color: 'rgba(245,237,216,0.45)' }}>Cost</span>
              <span style={{ background: 'rgba(212,169,58,0.15)', color: '#D4A93A', fontSize: '11px', padding: '3px 10px', borderRadius: '20px' }}>FREE TRIAL</span>
            </div>
            <p style={{ fontSize: '12px', color: 'rgba(245,237,216,0.35)', marginTop: '1rem', lineHeight: 1.6 }}>
              Clicking "Confirm booking" will open WhatsApp with your details pre-filled so our teacher can confirm your slot directly.
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1.5rem' }}>
              <button style={btnGhost} onClick={() => setStep(3)}>← Back</button>
              <button style={{ ...btnPrimary }} onClick={handleConfirm}>Confirm booking →</button>
            </div>
          </div>
        )}

        {/* STEP 5 — SUCCESS */}
        {step === 5 && (
          <div style={{ ...card, textAlign: 'center', padding: '3rem 2rem' }}>
            <div style={{ fontSize: '48px', marginBottom: '1rem' }}>✅</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '28px', color: '#F5EDD8', marginBottom: '0.75rem' }}>
              You're booked, {selected.name.split(' ')[0]}!
            </h2>
            <p style={{ fontSize: '14px', color: 'rgba(245,237,216,0.55)', lineHeight: 1.7, marginBottom: '0.75rem' }}>
              Your WhatsApp should have opened with your booking details. Our teacher will confirm your slot and send the session link.
            </p>
            <p style={{ fontSize: '13px', color: 'rgba(245,237,216,0.35)', marginBottom: '1.5rem' }}>
              Didn't open? <span onClick={() => window.open('https://wa.me/233243083957', '_blank')} style={{ color: '#25D366', cursor: 'pointer', borderBottom: '0.5px solid rgba(37,211,102,0.4)' }}>Tap here to open WhatsApp directly.</span>
            </p>
            <a href="/" style={{ display: 'inline-block', background: '#D4A93A', color: '#0F2318', padding: '12px 28px', borderRadius: '4px', fontSize: '14px', fontWeight: 500 }}>
              Back to home
            </a>
          </div>
        )}
      </div>

      <Footer />
    </main>
  )
}