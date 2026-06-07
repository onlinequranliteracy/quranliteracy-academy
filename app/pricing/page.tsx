'use client'
import { useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const plans = [
  {
    id: 'starter',
    name: 'Starter',
    desc: "Perfect for beginners or those exploring Qur'anic education",
    monthly: 20, yearly: 15,
    sessions: '4 sessions / month',
    featured: false,
    features: [
      { text: '4 sessions / month (30 min each)', included: true },
      { text: '1 program of your choice', included: true },
      { text: 'WhatsApp support', included: true },
      { text: 'Progress tracking', included: true },
      { text: 'Priority scheduling', included: false },
      { text: 'Multiple programs', included: false },
    ]
  },
  {
    id: 'growth',
    name: 'Growth',
    desc: 'Ideal for students who want steady, consistent weekly progress',
    monthly: 40, yearly: 35,
    sessions: '8 sessions / month',
    featured: true,
    features: [
      { text: '8 sessions / month (30 min each)', included: true },
      { text: 'Up to 2 programs', included: true },
      { text: 'WhatsApp + Zoom sessions', included: true },
      { text: 'Detailed progress reports', included: true },
      { text: 'Priority scheduling', included: true },
      { text: 'Multiple programs', included: true },
    ]
  },
  {
    id: 'family',
    name: 'Family',
    desc: 'For households with multiple students or intensive learning goals',
    monthly: 80, yearly: 70,
    sessions: 'Unlimited sessions',
    featured: false,
    features: [
      { text: 'Unlimited sessions', included: true },
      { text: 'Up to 3 students', included: true },
      { text: 'All 6 programs included', included: true },
      { text: 'Weekly parent progress call', included: true },
      { text: 'Priority scheduling', included: true },
      { text: 'Dedicated teacher assignment', included: true },
    ]
  }
]

export default function Pricing() {
  const [yearly, setYearly] = useState(false)

  return (
    <main style={{ minHeight: '100vh' }}>
      <Nav />
      <div style={{ padding: '3rem 2rem' }}>

        {/* HEADER */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <p style={{ fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#D4A93A', marginBottom: '0.5rem' }}>
            Simple, transparent pricing
          </p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '38px', fontWeight: 600, color: '#F5EDD8', marginBottom: '0.75rem' }}>
            Choose your learning plan
          </h1>
          <p style={{ fontSize: '14px', color: 'rgba(245,237,216,0.5)' }}>All plans include a free trial lesson. No hidden fees.</p>
        </div>

        {/* BILLING TOGGLE */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '3rem' }}>
          <span style={{ fontSize: '13px', fontWeight: yearly ? 400 : 500, color: yearly ? 'rgba(245,237,216,0.5)' : '#F5EDD8' }}>Monthly</span>
          <div onClick={() => setYearly(!yearly)} style={{
            width: '44px', height: '24px',
            background: 'rgba(212,169,58,0.25)',
            border: '0.5px solid rgba(212,169,58,0.4)',
            borderRadius: '12px', position: 'relative', cursor: 'pointer'
          }}>
            <div style={{
              width: '18px', height: '18px', background: '#D4A93A',
              borderRadius: '50%', position: 'absolute', top: '2px',
              left: yearly ? '23px' : '3px', transition: 'left 0.2s'
            }} />
          </div>
          <span style={{ fontSize: '13px', fontWeight: yearly ? 500 : 400, color: yearly ? '#F5EDD8' : 'rgba(245,237,216,0.5)' }}>Yearly</span>
          <span style={{ background: 'rgba(212,169,58,0.15)', color: '#D4A93A', fontSize: '11px', padding: '3px 10px', borderRadius: '20px' }}>Save 20%</span>
        </div>

        {/* PLANS */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', maxWidth: '1000px', margin: '0 auto 4rem' }}>
          {plans.map(plan => (
            <div key={plan.id} style={{
              background: 'rgba(245,237,216,0.04)',
              border: plan.featured ? '2px solid #D4A93A' : '0.5px solid rgba(245,237,216,0.1)',
              borderRadius: '12px', padding: '1.75rem',
              display: 'flex', flexDirection: 'column',
              position: 'relative'
            }}>
              {plan.featured && (
                <div style={{
                  position: 'absolute', top: '-13px', left: '50%', transform: 'translateX(-50%)',
                  background: '#D4A93A', color: '#0F2318',
                  fontSize: '11px', fontWeight: 500, padding: '4px 14px',
                  borderRadius: '20px', whiteSpace: 'nowrap'
                }}>Most popular</div>
              )}

              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '22px', fontWeight: 600, color: '#F5EDD8', marginBottom: '0.35rem' }}>{plan.name}</div>
              <div style={{ fontSize: '12px', color: 'rgba(245,237,216,0.45)', marginBottom: '1.5rem', lineHeight: 1.5 }}>{plan.desc}</div>

              <div style={{ marginBottom: '1.5rem' }}>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '14px', color: '#D4A93A', verticalAlign: 'top', marginTop: '8px', display: 'inline-block' }}>$</span>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '42px', fontWeight: 600, color: '#D4A93A', lineHeight: 1 }}>
                  {yearly ? plan.yearly : plan.monthly}
                </span>
                <div style={{ fontSize: '12px', color: 'rgba(245,237,216,0.4)', marginTop: '4px' }}>
                  {yearly ? 'per month, billed yearly' : 'per month'} · {plan.sessions}
                </div>
              </div>

              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '1.5rem' }}>
                {plan.features.map((f, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: f.included ? 'rgba(245,237,216,0.7)' : 'rgba(245,237,216,0.25)' }}>
                    <span style={{ color: f.included ? '#D4A93A' : 'rgba(245,237,216,0.2)', fontSize: '15px', marginTop: '1px', flexShrink: 0 }}>
                      {f.included ? '✓' : '✕'}
                    </span>
                    {f.text}
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <a href="/booking" style={{
                  display: 'block', textAlign: 'center', padding: '11px',
                  borderRadius: '6px', fontSize: '14px', fontWeight: 500,
                  background: plan.featured ? '#D4A93A' : 'transparent',
                  color: plan.featured ? '#0F2318' : '#F5EDD8',
                  border: plan.featured ? 'none' : '0.5px solid rgba(245,237,216,0.2)',
                  textDecoration: 'none',
                }}>
                  Book free trial
                </a>
                <a href="/subscribe" style={{
                  display: 'block', textAlign: 'center', padding: '11px',
                  borderRadius: '6px', fontSize: '14px',
                  background: 'transparent',
                  color: 'rgba(245,237,216,0.5)',
                  border: '0.5px solid rgba(245,237,216,0.1)',
                  textDecoration: 'none',
                }}>
                  Subscribe →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* COMPARISON TABLE */}
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '26px', fontWeight: 500, color: '#F5EDD8', textAlign: 'center', marginBottom: '1.5rem' }}>
            What's included in each plan
          </h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
            <thead>
              <tr>
                {['Feature', 'Starter', 'Growth', 'Family'].map((h, i) => (
                  <th key={h} style={{
                    padding: '12px 16px', textAlign: i === 0 ? 'left' : 'center',
                    fontWeight: 500, fontSize: '12px', letterSpacing: '0.04em',
                    color: i === 2 ? '#D4A93A' : 'rgba(245,237,216,0.5)',
                    borderBottom: '0.5px solid rgba(245,237,216,0.1)'
                  }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['Sessions per month', '4', '8', 'Unlimited'],
                ['Session length', '30 min', '30 min', '30–45 min'],
                ['Programs available', '1', '2', 'All 6'],
                ['Number of students', '1', '1', 'Up to 3'],
                ['WhatsApp support', '✓', '✓', '✓'],
                ['Zoom sessions', '—', '✓', '✓'],
                ['Progress reports', 'Basic', 'Detailed', 'Detailed + call'],
                ['Priority scheduling', '—', '✓', '✓'],
                ['Special needs support', '✓', '✓', '✓'],
                ['Free trial lesson', '✓', '✓', '✓'],
              ].map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j} style={{
                      padding: '12px 16px',
                      textAlign: j === 0 ? 'left' : 'center',
                      borderBottom: '0.5px solid rgba(245,237,216,0.05)',
                      color: j === 0 ? 'rgba(245,237,216,0.5)' : cell === '✓' ? '#D4A93A' : cell === '—' ? 'rgba(245,237,216,0.2)' : 'rgba(245,237,216,0.65)'
                    }}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>

      {/* FOOTER */}
      <Footer />
    </main>
  )
}