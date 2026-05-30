'use client'
import { useState } from 'react'

const plans = [
  { id: 'starter', name: 'Starter', usd: 45, ghs: 675, sessions: '4 sessions / month', description: 'Perfect for beginners' },
  { id: 'growth', name: 'Growth', usd: 80, ghs: 1200, sessions: '8 sessions / month', description: 'Most popular plan' },
  { id: 'family', name: 'Family', usd: 200, ghs: 3000, sessions: 'Unlimited sessions', description: 'For the whole household' },
]

export default function Subscribe() {
  const [selectedPlan, setSelectedPlan] = useState<typeof plans[0]>(plans[1])
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)
  const [paid, setPaid] = useState(false)

  const handlePayment = () => {
    if (!email || !name) {
      alert('Please enter your name and email first.')
      return
    }

    setLoading(true)

    const PaystackPop = (window as any).PaystackPop

    if (!PaystackPop) {
      alert('Payment system not loaded. Please refresh and try again.')
      setLoading(false)
      return
    }

    const handler = PaystackPop.setup({
      key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
      email,
      amount: selectedPlan.ghs * 100,
      currency: 'GHS',
      ref: `OQL-${Date.now()}`,
      metadata: {
        custom_fields: [
          { display_name: 'Name', variable_name: 'name', value: name },
          { display_name: 'Plan', variable_name: 'plan', value: selectedPlan.name },
          { display_name: 'USD Amount', variable_name: 'usd_amount', value: `$${selectedPlan.usd}` },
        ]
      },
      callback: () => {
        setLoading(false)
        setPaid(true)
      },
      onClose: () => {
        setLoading(false)
      }
    })

    handler.openIframe()
  }

  return (
    <>
      <script src="https://js.paystack.co/v1/inline.js" async />
      <main style={{ minHeight: '100vh', padding: '3rem 2rem' }}>

        <a href="/pricing" style={{ fontSize: '13px', color: 'rgba(245,237,216,0.5)', display: 'block', maxWidth: '560px', margin: '0 auto 2rem' }}>
          ← Back to pricing
        </a>

        {paid ? (
          <div style={{
            maxWidth: '560px', margin: '0 auto', textAlign: 'center',
            background: 'rgba(245,237,216,0.04)', border: '0.5px solid rgba(245,237,216,0.1)',
            borderRadius: '12px', padding: '3rem 2rem'
          }}>
            <div style={{ fontSize: '48px', marginBottom: '1rem' }}>✅</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '28px', color: '#F5EDD8', marginBottom: '0.75rem' }}>
              Welcome to Online Quran Literacy!
            </h2>
            <p style={{ fontSize: '14px', color: 'rgba(245,237,216,0.55)', lineHeight: 1.7, marginBottom: '0.75rem' }}>
              Your {selectedPlan.name} plan is now active. A teacher will reach out on WhatsApp within 24 hours to schedule your first session.
            </p>
            <p style={{ fontSize: '13px', color: 'rgba(245,237,216,0.35)', marginBottom: '2rem' }}>
              Confirmation sent to {email}
            </p>
            <a href="/" style={{
              background: '#D4A93A', color: '#0F2318',
              padding: '12px 28px', borderRadius: '4px',
              fontSize: '14px', fontWeight: 500,
              display: 'inline-block'
            }}>Back to home</a>
          </div>
        ) : (
          <div style={{ maxWidth: '560px', margin: '0 auto' }}>

            {/* HEADER */}
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <p style={{ fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#D4A93A', marginBottom: '0.5rem' }}>
                Secure payment via Paystack
              </p>
              <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '34px', fontWeight: 600, color: '#F5EDD8' }}>
                Choose your plan
              </h1>
            </div>

            {/* PLAN SELECTOR */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '2rem' }}>
              {plans.map(plan => (
                <div key={plan.id} onClick={() => setSelectedPlan(plan)} style={{
                  border: selectedPlan.id === plan.id ? '0.5px solid #D4A93A' : '0.5px solid rgba(245,237,216,0.12)',
                  background: selectedPlan.id === plan.id ? 'rgba(212,169,58,0.08)' : 'transparent',
                  borderRadius: '10px', padding: '1.25rem 1.5rem',
                  cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center'
                }}>
                  <div>
                    <div style={{ fontSize: '15px', fontWeight: 500, color: '#F5EDD8', marginBottom: '3px' }}>{plan.name}</div>
                    <div style={{ fontSize: '12px', color: 'rgba(245,237,216,0.45)' }}>{plan.sessions} · {plan.description}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '24px', fontWeight: 600, color: '#D4A93A' }}>${plan.usd}</div>
                    <div style={{ fontSize: '11px', color: 'rgba(245,237,216,0.35)' }}>per month</div>
                  </div>
                </div>
              ))}
            </div>

            {/* FORM */}
            <div style={{
              background: 'rgba(245,237,216,0.04)',
              border: '0.5px solid rgba(245,237,216,0.1)',
              borderRadius: '12px', padding: '1.75rem',
              marginBottom: '1.5rem'
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div>
                  <label style={{ fontSize: '12px', color: 'rgba(245,237,216,0.55)', display: 'block', marginBottom: '6px' }}>Full name</label>
                  <input
                    type="text" placeholder="e.g. Fatima Al-Hassan"
                    value={name} onChange={e => setName(e.target.value)}
                    style={{
                      width: '100%', background: 'rgba(245,237,216,0.06)',
                      border: '0.5px solid rgba(245,237,216,0.15)',
                      borderRadius: '6px', padding: '10px 14px',
                      fontSize: '14px', color: '#F5EDD8',
                      fontFamily: "'DM Sans', sans-serif", outline: 'none'
                    }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '12px', color: 'rgba(245,237,216,0.55)', display: 'block', marginBottom: '6px' }}>Email address</label>
                  <input
                    type="email" placeholder="you@example.com"
                    value={email} onChange={e => setEmail(e.target.value)}
                    style={{
                      width: '100%', background: 'rgba(245,237,216,0.06)',
                      border: '0.5px solid rgba(245,237,216,0.15)',
                      borderRadius: '6px', padding: '10px 14px',
                      fontSize: '14px', color: '#F5EDD8',
                      fontFamily: "'DM Sans', sans-serif", outline: 'none'
                    }}
                  />
                </div>
              </div>
            </div>

            {/* SUMMARY */}
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '1rem 1.5rem', marginBottom: '1rem',
              background: 'rgba(212,169,58,0.06)',
              border: '0.5px solid rgba(212,169,58,0.2)',
              borderRadius: '8px'
            }}>
              <div>
                <div style={{ fontSize: '14px', color: 'rgba(245,237,216,0.7)' }}>{selectedPlan.name} plan · monthly</div>
                <div style={{ fontSize: '11px', color: 'rgba(245,237,216,0.35)', marginTop: '2px' }}>
                          Charged as GH₵{selectedPlan.ghs?.toLocaleString() ?? ''}
              </div>     
               </div>
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '22px', fontWeight: 600, color: '#D4A93A' }}>${selectedPlan.usd}</span>
            </div>

            <button onClick={handlePayment} disabled={loading} style={{
              width: '100%', background: '#D4A93A', color: '#0F2318',
              padding: '14px', borderRadius: '6px',
              fontSize: '15px', fontWeight: 500, border: 'none',
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.7 : 1,
              fontFamily: "'DM Sans', sans-serif"
            }}>
              {loading ? 'Processing...' : `Pay $${selectedPlan.usd} · GH₵${selectedPlan.ghs?.toLocaleString()} with Paystack`}
            </button>

            <p style={{ fontSize: '12px', color: 'rgba(245,237,216,0.3)', textAlign: 'center', marginTop: '1rem' }}>
              Secured by Paystack · Card, Mobile Money & Bank Transfer accepted
            </p>

          </div>
        )}
      </main>
    </>
  )
}