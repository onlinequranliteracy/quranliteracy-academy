import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{
      padding: '3rem 1.5rem 2rem',
      borderTop: '0.5px solid rgba(245,237,216,0.1)',
      marginTop: '4rem',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* TOP ROW */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '2.5rem' }}>

          {/* BRAND */}
          <div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '20px', color: '#D4A93A', marginBottom: '0.75rem' }}>
              Online Quran Literacy
            </div>
            <p style={{ fontSize: '13px', color: 'rgba(245,237,216,0.45)', lineHeight: 1.7, maxWidth: '220px' }}>
              Lighting the path to Qur'anic excellence — one student at a time.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <div style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(245,237,216,0.35)', marginBottom: '1rem' }}>Pages</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                { href: '/about', label: 'About' },
                { href: '/programs', label: 'Programs' },
                { href: '/pricing', label: 'Pricing' },
                { href: '/resources', label: 'Resources' },
                { href: '/faq', label: 'FAQ' },
                { href: '/contact', label: 'Contact' },
              ].map(link => (
                <a key={link.href} href={link.href} style={{ fontSize: '13px', color: 'rgba(245,237,216,0.5)' }}>{link.label}</a>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <div style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(245,237,216,0.35)', marginBottom: '1rem' }}>Contact</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <a href="https://wa.me/233243083957" target="_blank" rel="noopener noreferrer"
                style={{ fontSize: '13px', color: 'rgba(245,237,216,0.5)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ color: '#25D366' }}>●</span> WhatsApp us
              </a>
              <a href="mailto:onlinequranliteracy@outlook.com"
                style={{ fontSize: '13px', color: 'rgba(245,237,216,0.5)' }}>
                ✉️ Email us
              </a>
              <a href="/booking"
                style={{ fontSize: '13px', color: '#D4A93A' }}>
                📅 Book a free trial
              </a>
            </div>
          </div>

          {/* SOCIALS */}
          <div>
            <div style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(245,237,216,0.35)', marginBottom: '1rem' }}>Follow us</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '1.25rem' }}>
              {[
                { label: 'Instagram', handle: '@onlinequranliteracy', href: 'https://instagram.com/onlinequranliteracy', color: '#E1306C' },
                { label: 'Facebook', handle: "Online Qur'an Literacy", href: 'https://facebook.com/onlinequranliteracy', color: '#1877F2' },
                { label: 'TikTok', handle: '@onlinequranliteracy', href: 'https://tiktok.com/@onlinequranliteracy', color: '#F5EDD8' },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'rgba(245,237,216,0.5)', textDecoration: 'none' }}>
                  <span style={{ color: s.color, fontSize: '10px' }}>●</span>
                  <span>{s.label}</span>
                  <span style={{ color: 'rgba(245,237,216,0.25)', fontSize: '12px' }}>{s.handle}</span>
                </a>
              ))}
            </div>

            {/* SOCIAL ICON ROW */}
            <div style={{ display: 'flex', gap: '10px' }}>
              {/* Instagram */}
              <a href="https://instagram.com/onlinequranliteracy" target="_blank" rel="noopener noreferrer"
                style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(245,237,216,0.06)', border: '0.5px solid rgba(245,237,216,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(245,237,216,0.5)', textDecoration: 'none' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              {/* Facebook */}
              <a href="https://facebook.com/onlinequranliteracy" target="_blank" rel="noopener noreferrer"
                style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(245,237,216,0.06)', border: '0.5px solid rgba(245,237,216,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(245,237,216,0.5)', textDecoration: 'none' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              {/* TikTok */}
              <a href="https://tiktok.com/@onlinequranliteracy" target="_blank" rel="noopener noreferrer"
                style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(245,237,216,0.06)', border: '0.5px solid rgba(245,237,216,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(245,237,216,0.5)', textDecoration: 'none' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div style={{ borderTop: '0.5px solid rgba(245,237,216,0.08)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ fontSize: '12px', color: 'rgba(245,237,216,0.25)' }}>© 2026 Online Quran Literacy · Ghana</div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="/booking" style={{ fontSize: '12px', color: 'rgba(245,237,216,0.35)', textDecoration: 'none' }}>Book Free Trial</a>
            <a href="/contact" style={{ fontSize: '12px', color: 'rgba(245,237,216,0.35)', textDecoration: 'none' }}>Contact</a>
            <a href="/faq" style={{ fontSize: '12px', color: 'rgba(245,237,216,0.35)', textDecoration: 'none' }}>FAQ</a>
          </div>
        </div>

      </div>
    </footer>
  )
}