import Nav from '../components/Nav'

export const metadata = {
  title: 'Teach With Us',
  description: 'Join the Online Quran Literacy team as a certified Qur\'an teacher. We are growing and looking for passionate, qualified tutors.',
}

export default function Teach() {
  return (
    <main style={{ minHeight: '100vh' }}>
      <Nav />
      <div style={{ padding: '3rem 1.5rem' }}>

        {/* HEADER */}
        <div style={{ maxWidth: '800px', margin: '0 auto 4rem' }}>
          <p style={{ fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#D4A93A', marginBottom: '0.75rem' }}>Join our team</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 600, color: '#F5EDD8', marginBottom: '1rem', lineHeight: 1.1 }}>
            Teach with Online<br />Quran Literacy
          </h1>
          <p style={{ fontSize: '16px', color: 'rgba(245,237,216,0.7)', lineHeight: 1.8, maxWidth: '560px' }}>
            We are growing. As we expand our reach across Africa, the UK, and North America, we are looking for certified, passionate Qur'an teachers to join our team and teach students online.
          </p>
        </div>

        {/* WHY JOIN */}
        <div style={{ maxWidth: '800px', margin: '0 auto 4rem' }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '28px', fontWeight: 600, color: '#F5EDD8', marginBottom: '2rem' }}>Why teach with us</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            {[
              { icon: '🏠', title: 'Teach from anywhere', desc: 'All sessions are online. Teach from the comfort of your home on your own schedule.' },
              { icon: '📅', title: 'Flexible hours', desc: 'You choose your availability. We match you with students in timezones that work for you.' },
              { icon: '💰', title: 'Competitive pay', desc: 'We offer fair, transparent compensation for every session delivered.' },
              { icon: '🌍', title: 'Global impact', desc: 'Teach students in Ghana, the UK, the US, and beyond — all from one place.' },
              { icon: '👨‍👩‍👧', title: 'Supportive team', desc: 'You are never alone. Our small, close-knit team provides full onboarding and ongoing support.' },
              { icon: '📈', title: 'Grow with us', desc: 'As we scale, so do opportunities. Early teachers become senior team members.' },
            ].map((item) => (
              <div key={item.title} style={{ background: 'rgba(245,237,216,0.03)', border: '0.5px solid rgba(245,237,216,0.1)', borderRadius: '10px', padding: '1.5rem' }}>
                <div style={{ fontSize: '28px', marginBottom: '0.75rem' }}>{item.icon}</div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '17px', fontWeight: 600, color: '#F5EDD8', marginBottom: '0.5rem' }}>{item.title}</div>
                <div style={{ fontSize: '13px', color: 'rgba(245,237,216,0.55)', lineHeight: 1.6 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* REQUIREMENTS */}
        <div style={{ maxWidth: '800px', margin: '0 auto 4rem', background: 'rgba(212,169,58,0.05)', border: '0.5px solid rgba(212,169,58,0.15)', borderRadius: '12px', padding: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '26px', fontWeight: 600, color: '#F5EDD8', marginBottom: '1.5rem' }}>What we look for</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            <div>
              <p style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#D4A93A', marginBottom: '1rem' }}>Required</p>
              {[
                'Ijazah in Qur\'anic recitation',
                'Strong Tajweed knowledge',
                'At least 2 years teaching experience',
                'Reliable internet connection',
                'A smartphone or computer with camera',
                'Good communication in English',
              ].map((req, i) => (
                <div key={i} style={{ display: 'flex', gap: '8px', fontSize: '13px', color: 'rgba(245,237,216,0.7)', marginBottom: '8px' }}>
                  <span style={{ color: '#D4A93A', flexShrink: 0 }}>✓</span>{req}
                </div>
              ))}
            </div>
            <div>
              <p style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#D4A93A', marginBottom: '1rem' }}>Preferred</p>
              {[
                'Experience with children',
                'Special needs teaching experience',
                'Arabic language proficiency',
                'Availability across multiple timezones',
                'Experience with online teaching tools',
              ].map((pref, i) => (
                <div key={i} style={{ display: 'flex', gap: '8px', fontSize: '13px', color: 'rgba(245,237,216,0.55)', marginBottom: '8px' }}>
                  <span style={{ color: 'rgba(212,169,58,0.5)', flexShrink: 0 }}>+</span>{pref}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* APPLY CTA */}
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '32px', fontWeight: 600, color: '#F5EDD8', marginBottom: '1rem' }}>
            Ready to apply?
          </h2>
          <p style={{ fontSize: '15px', color: 'rgba(245,237,216,0.55)', marginBottom: '2rem', lineHeight: 1.7 }}>
            Send your CV and a brief introduction to us. Tell us about your qualifications, your teaching experience, and your availability.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:onlinequranliteracy@outlook.com?subject=Teaching Application - Online Quran Literacy" style={{ background: '#D4A93A', color: '#0F2318', padding: '14px 32px', borderRadius: '4px', fontSize: '14px', fontWeight: 500, display: 'inline-block' }}>
              Apply by email
            </a>
            <a href="https://wa.me/233243083957?text=Assalamu%20Alaikum%2C%20I%20would%20like%20to%20apply%20to%20teach%20with%20Online%20Quran%20Literacy." target="_blank" rel="noopener noreferrer" style={{ background: 'transparent', border: '0.5px solid rgba(245,237,216,0.2)', color: '#F5EDD8', padding: '14px 32px', borderRadius: '4px', fontSize: '14px', display: 'inline-block' }}>
              Apply via WhatsApp
            </a>
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