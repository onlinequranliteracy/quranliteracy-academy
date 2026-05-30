import Nav from '../components/Nav'

export const metadata = {
  title: 'Contact',
  description: 'Get in touch with Online Quran Literacy — we are based in Ghana and serve students in Ghana, the UK, and the US.',
}

export default function Contact() {
  return (
    <main style={{ minHeight: '100vh' }}>
      <Nav />
      <div style={{ padding: '3rem 1.5rem' }}>

        {/* HEADER */}
        <div style={{ maxWidth: '900px', margin: '0 auto 4rem' }}>
          <p style={{ fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#D4A93A', marginBottom: '0.75rem' }}>Get in touch</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 600, color: '#F5EDD8', marginBottom: '1rem', lineHeight: 1.1 }}>
            We'd love to hear from you
          </h1>
          <p style={{ fontSize: '15px', color: 'rgba(245,237,216,0.6)', maxWidth: '520px', lineHeight: 1.7 }}>
            Whether you have a question about programs, pricing, or anything else — our team is ready to answer.
          </p>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>

          {/* CONTACT DETAILS */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

            {[
              {
                icon: '✉️',
                title: 'Email us',
                lines: ['onlinequranliteracy@outlook.com', 'quranliteracyacademy@outlook.com'],
                link: 'mailto:onlinequranliteracy@outlook.com',
                linkLabel: 'Send an email',
              },
              {
                icon: '📱',
                title: 'WhatsApp',
                lines: ['+233 24 308 3957', 'Available Sat–Thu, 8am–8pm GMT'],
                link: 'https://wa.me/233243083957',
                linkLabel: 'Message us on WhatsApp',
              },
              {
                icon: '🌍',
                title: 'We serve',
                lines: ['Ghana · United Kingdom · United States', 'Online via WhatsApp & Zoom'],
                link: null,
                linkLabel: null,
              },
              {
                icon: '🕐',
                title: 'Response time',
                lines: ['We typically respond within a few hours', 'during business hours (GMT)'],
                link: null,
                linkLabel: null,
              },
            ].map((item) => (
              <div key={item.title} style={{ background: 'rgba(245,237,216,0.03)', border: '0.5px solid rgba(245,237,216,0.1)', borderRadius: '10px', padding: '1.5rem' }}>
                <div style={{ fontSize: '24px', marginBottom: '0.75rem' }}>{item.icon}</div>
                <div style={{ fontSize: '14px', fontWeight: 500, color: '#F5EDD8', marginBottom: '0.5rem' }}>{item.title}</div>
                {item.lines.map((line, i) => (
                  <div key={i} style={{ fontSize: '13px', color: 'rgba(245,237,216,0.55)', lineHeight: 1.6 }}>{line}</div>
                ))}
                {item.link && (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginTop: '0.75rem', fontSize: '13px', color: '#D4A93A', borderBottom: '0.5px solid rgba(212,169,58,0.3)' }}>
                    {item.linkLabel} →
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* QUICK LINKS */}
          <div>
            <div style={{ background: 'rgba(212,169,58,0.05)', border: '0.5px solid rgba(212,169,58,0.15)', borderRadius: '12px', padding: '2rem', marginBottom: '1.5rem' }}>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '22px', fontWeight: 600, color: '#F5EDD8', marginBottom: '0.5rem' }}>
                Ready to start?
              </h2>
              <p style={{ fontSize: '13px', color: 'rgba(245,237,216,0.55)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Book a free 30-minute trial lesson and experience our teaching first-hand. No payment required.
              </p>
              <a href="/booking" style={{ display: 'block', textAlign: 'center', background: '#D4A93A', color: '#0F2318', padding: '13px', borderRadius: '6px', fontSize: '14px', fontWeight: 500 }}>
                Book a Free Trial
              </a>
            </div>

            <div style={{ background: 'rgba(245,237,216,0.03)', border: '0.5px solid rgba(245,237,216,0.1)', borderRadius: '12px', padding: '2rem' }}>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '22px', fontWeight: 600, color: '#F5EDD8', marginBottom: '1rem' }}>
                Quick links
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  { label: 'Browse our programs', href: '/programs' },
                  { label: 'View pricing plans', href: '/pricing' },
                  { label: 'Read our FAQ', href: '/faq' },
                  { label: 'Read our resources', href: '/resources' },
                  { label: 'About us', href: '/about' },
                ].map((link) => (
                  <a key={link.href} href={link.href} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '0.5px solid rgba(245,237,216,0.07)', fontSize: '14px', color: 'rgba(245,237,216,0.65)' }}>
                    {link.label}
                    <span style={{ color: '#D4A93A' }}>→</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer style={{ padding: '2rem 1.5rem', borderTop: '0.5px solid rgba(245,237,216,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginTop: '4rem' }}>
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '15px', color: '#D4A93A' }}>Online Quran Literacy</div>
        <div style={{ fontSize: '12px', color: 'rgba(245,237,216,0.35)' }}>© 2026 Online Quran Literacy · Ghana</div>
      </footer>
    </main>
  )
}