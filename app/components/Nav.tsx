'use client'
import { useState } from 'react'
import Image from 'next/image'

export default function Nav() {
  const [open, setOpen] = useState(false)

  const socials = [
    {
      label: 'Instagram',
      href: 'https://instagram.com/onlinequranliteracy',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/>
          <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
        </svg>
      )
    },
    {
      label: 'Facebook',
      href: 'https://facebook.com/onlinequranliteracy',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
        </svg>
      )
    },
    {
      label: 'TikTok',
      href: 'https://tiktok.com/@onlinequranliteracy',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
        </svg>
      )
    },
  ]

  const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/programs', label: 'Programs' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/resources', label: 'Resources' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' },
    { href: '/register', label: 'Register' },
  ]

  return (
    <nav style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0.75rem 1.5rem',
      borderBottom: '0.5px solid rgba(245,237,216,0.12)',
      position: 'relative', zIndex: 100
    }}>

      {/* LOGO */}
      <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
        <Image
          src="/logo.png"
          alt="Online Quran Literacy"
          width={44}
          height={44}
          style={{ borderRadius: '6px' }}
        />
        <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '17px', fontWeight: 600, color: '#D4A93A', lineHeight: 1.2 }}>
          Online Quran<br />Literacy
        </span>
      </a>

      {/* DESKTOP NAV */}
      <div className="desktop-nav" style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
        {navLinks.map(link => (
          <a key={link.href} href={link.href} style={{ fontSize: '13px', color: 'rgba(245,237,216,0.65)' }}>{link.label}</a>
        ))}
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', borderLeft: '0.5px solid rgba(245,237,216,0.12)', paddingLeft: '1rem' }}>
          {socials.map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
              aria-label={s.label}
              style={{ color: 'rgba(245,237,216,0.45)', display: 'flex', alignItems: 'center' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#D4A93A')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,237,216,0.45)')}
            >{s.icon}</a>
          ))}
        </div>
        <a href="/booking" style={{
          background: '#D4A93A', color: '#0F2318',
          padding: '9px 18px', borderRadius: '4px',
          fontWeight: 500, fontSize: '13px', whiteSpace: 'nowrap'
        }}>Book Free Trial</a>
      </div>

      {/* HAMBURGER */}
      <button onClick={() => setOpen(!open)} className="hamburger" aria-label="Toggle menu" style={{
        display: 'none', flexDirection: 'column', gap: '5px',
        background: 'transparent', border: 'none', cursor: 'pointer', padding: '4px'
      }}>
        <span style={{ width: '22px', height: '1.5px', background: '#F5EDD8', display: 'block', transition: 'all 0.2s', transform: open ? 'rotate(45deg) translate(4px, 4px)' : 'none' }} />
        <span style={{ width: '22px', height: '1.5px', background: '#F5EDD8', display: 'block', opacity: open ? 0 : 1 }} />
        <span style={{ width: '22px', height: '1.5px', background: '#F5EDD8', display: 'block', transition: 'all 0.2s', transform: open ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }} />
      </button>

      {/* MOBILE MENU */}
      {open && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0,
          background: '#0F2318', borderBottom: '0.5px solid rgba(245,237,216,0.12)',
          padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', zIndex: 99
        }}>
          {navLinks.map(link => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)} style={{
              fontSize: '15px', color: 'rgba(245,237,216,0.75)',
              padding: '0.5rem 0', borderBottom: '0.5px solid rgba(245,237,216,0.08)'
            }}>{link.label}</a>
          ))}
          <a href="/booking" onClick={() => setOpen(false)} style={{
            background: '#D4A93A', color: '#0F2318', padding: '12px 18px',
            borderRadius: '4px', fontWeight: 500, fontSize: '14px', textAlign: 'center', marginTop: '0.5rem'
          }}>Book a Free Trial</a>
          <div style={{ display: 'flex', gap: '1.5rem', paddingTop: '0.5rem' }}>
            {socials.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'rgba(245,237,216,0.5)' }}>
                {s.icon}{s.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}