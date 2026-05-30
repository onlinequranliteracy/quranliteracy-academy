import Nav from './components/Nav'

export default function NotFound() {
  return (
    <main style={{ minHeight: '100vh' }}>
      <Nav />
      <div style={{ padding: '6rem 1.5rem', textAlign: 'center' }}>
        <p style={{ fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#D4A93A', marginBottom: '0.75rem' }}>Page not found</p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(48px, 8vw, 96px)', fontWeight: 600, color: '#F5EDD8', marginBottom: '1rem', lineHeight: 1 }}>404</h1>
        <p style={{ fontSize: '15px', color: 'rgba(245,237,216,0.55)', marginBottom: '2.5rem', lineHeight: 1.7 }}>
          The page you are looking for doesn't exist or has been moved.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/" style={{ background: '#D4A93A', color: '#0F2318', padding: '13px 28px', borderRadius: '4px', fontSize: '14px', fontWeight: 500 }}>Back to home</a>
          <a href="/contact" style={{ background: 'transparent', border: '0.5px solid rgba(245,237,216,0.2)', color: '#F5EDD8', padding: '13px 28px', borderRadius: '4px', fontSize: '14px' }}>Contact us</a>
        </div>
      </div>
    </main>
  )
}