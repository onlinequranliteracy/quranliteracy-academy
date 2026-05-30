'use client'
import { useState } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '1.25rem 1.5rem',
      borderBottom: '0.5px solid rgba(245,237,216,0.12)',
      position: 'relative', zIndex: 100
    }}>
      <a href="/" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '18px', fontWeight: 600, color: '#D4A93A' }}>
        Online Quran Literacy
      </a>

      <div className="desktop-nav" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
        <a href="/about" style={{ fontSize: '13px', color: 'rgba(245,237,216,0.65)' }}>About</a>
<a href="/programs" style={{ fontSize: '13px', color: 'rgba(245,237,216,0.65)' }}>Programs</a>
<a href="/pricing" style={{ fontSize: '13px', color: 'rgba(245,237,216,0.65)' }}>Pricing</a>
<a href="/resources" style={{ fontSize: '13px', color: 'rgba(245,237,216,0.65)' }}>Resources</a>
<a href="/faq" style={{ fontSize: '13px', color: 'rgba(245,237,216,0.65)' }}>FAQ</a>
<a href="/contact" style={{ fontSize: '13px', color: 'rgba(245,237,216,0.65)' }}>Contact</a>

      </div>

      <button onClick={() => setOpen(!open)} className="hamburger" aria-label="Toggle menu" style={{
        display: 'none', flexDirection: 'column', gap: '5px',
        background: 'transparent', border: 'none', cursor: 'pointer', padding: '4px'
      }}>
        <span style={{ width: '22px', height: '1.5px', background: '#F5EDD8', display: 'block', transition: 'all 0.2s', transform: open ? 'rotate(45deg) translate(4px, 4px)' : 'none' }} />
        <span style={{ width: '22px', height: '1.5px', background: '#F5EDD8', display: 'block', opacity: open ? 0 : 1, transition: 'opacity 0.2s' }} />
        <span style={{ width: '22px', height: '1.5px', background: '#F5EDD8', display: 'block', transition: 'all 0.2s', transform: open ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }} />
      </button>

      {open && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0,
          background: '#0F2318',
          borderBottom: '0.5px solid rgba(245,237,216,0.12)',
          padding: '1.5rem',
          display: 'flex', flexDirection: 'column', gap: '1rem',
          zIndex: 99
        }}>
          {[
            { href: '/about', label: 'About' },
{ href: '/programs', label: 'Programs' },
{ href: '/pricing', label: 'Pricing' },
{ href: '/resources', label: 'Resources' },
{ href: '/faq', label: 'FAQ' },
{ href: '/contact', label: 'Contact' },
{ href: '/register', label: 'Register' },
          ].map(link => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)} style={{
              fontSize: '15px', color: 'rgba(245,237,216,0.75)',
              padding: '0.5rem 0', borderBottom: '0.5px solid rgba(245,237,216,0.08)'
            }}>{link.label}</a>
          ))}
          <a href="/booking" onClick={() => setOpen(false)} style={{
            background: '#D4A93A', color: '#0F2318',
            padding: '12px 18px', borderRadius: '4px',
            fontWeight: 500, fontSize: '14px', textAlign: 'center', marginTop: '0.5rem'
          }}>Book a Free Trial</a>
        </div>
      )}
    </nav>
  )
}