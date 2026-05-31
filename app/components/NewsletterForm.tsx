'use client'
import { useState } from 'react'

export default function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async () => {
    if (!email) return
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'newsletter', data: { email } })
      })
      if (res.ok) setStatus('sent')
      else setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <p style={{ fontSize: '15px', color: '#D4A93A', textAlign: 'center' }}>
        ✓ You're subscribed! JazakAllahu Khayran.
      </p>
    )
  }

  return (
    <div style={{ display: 'flex', gap: '10px', maxWidth: '420px', margin: '0 auto', flexWrap: 'wrap' }}>
      <input
        type="email"
        placeholder="your@email.com"
        value={email}
        onChange={e => setEmail(e.target.value)}
        style={{
          flex: 1, minWidth: '200px',
          background: 'rgba(245,237,216,0.06)',
          border: '0.5px solid rgba(245,237,216,0.15)',
          borderRadius: '6px', padding: '11px 16px',
          fontSize: '14px', color: '#F5EDD8',
          fontFamily: "'DM Sans', sans-serif", outline: 'none'
        }}
      />
      <button
        onClick={handleSubmit}
        disabled={status === 'sending'}
        style={{
          background: '#D4A93A', color: '#0F2318',
          padding: '11px 22px', borderRadius: '6px',
          fontSize: '14px', fontWeight: 500,
          border: 'none', cursor: 'pointer',
          fontFamily: "'DM Sans', sans-serif",
          whiteSpace: 'nowrap',
          opacity: status === 'sending' ? 0.7 : 1
        }}
      >
        {status === 'sending' ? 'Subscribing...' : 'Subscribe'}
      </button>
      {status === 'error' && (
        <p style={{ fontSize: '13px', color: '#E07BB5', width: '100%' }}>
          Something went wrong. Please try again.
        </p>
      )}
    </div>
  )
}