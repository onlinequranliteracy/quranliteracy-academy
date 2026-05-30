import Nav from '../components/Nav'
export const metadata = {
  title: 'About',
  description: 'Learn about Online Quran Literacy — our story, our teachers, and our mission to make Qur\'anic education accessible worldwide.',
}
export default function About() {
  return (
    <main style={{ minHeight: '100vh' }}>
      <Nav />

      {/* HERO */}
      <section style={{ padding: '5rem 1.5rem 3rem', maxWidth: '800px', margin: '0 auto' }}>
        <p style={{ fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#D4A93A', marginBottom: '0.75rem' }}>Our story</p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 600, color: '#F5EDD8', lineHeight: 1.1, marginBottom: '1.5rem' }}>
          Built on a love for the <span style={{ color: '#D4A93A' }}>Qur'an</span>
        </h1>
        <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'rgba(245,237,216,0.7)', marginBottom: '1.5rem' }}>
          Online Quran Literacy was founded with a single belief: that every Muslim — child or adult, anywhere in the world — deserves access to quality, personalized Qur'anic education. Not group classes. Not pre-recorded videos. Real, one-on-one learning with a teacher who knows your name, your pace, and your goals.
        </p>
        <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'rgba(245,237,216,0.7)', marginBottom: '1.5rem' }}>
          We started small — a few students, a WhatsApp number, and certified teachers with a passion for teaching. Today we serve students across multiple countries and timezones, offering six distinct programs for learners of all ages and backgrounds, including children with special needs.
        </p>
        <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'rgba(245,237,216,0.7)' }}>
          Our teachers hold ijazah — a chain of certification traced back to the Prophet ﷺ — and bring more than 10 years of combined teaching experience. Every session is conducted live, every student gets a personalized plan, and every family gets regular progress updates.
        </p>
      </section>

      {/* VALUES */}
      <section style={{ padding: '3rem 1.5rem', background: 'rgba(212,169,58,0.05)', borderTop: '0.5px solid rgba(212,169,58,0.15)', borderBottom: '0.5px solid rgba(212,169,58,0.15)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p style={{ fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#D4A93A', marginBottom: '0.75rem' }}>What we believe</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(24px, 4vw, 34px)', fontWeight: 600, color: '#F5EDD8', marginBottom: '2.5rem' }}>Our values</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {[
              { icon: '🤝', title: 'Every student is different', desc: 'We never use a one-size-fits-all approach. Every student gets a plan built around their pace, level, and goals.' },
              { icon: '📿', title: 'Authenticity matters', desc: 'Our teachers hold ijazah — a direct chain of certification — ensuring every lesson is rooted in proper tradition.' },
              { icon: '🌍', title: 'Access for all', desc: 'Geography should never be a barrier to Qur\'anic education. We serve students across Africa, Europe, North America, and beyond.' },
              { icon: '💛', title: 'Patience above speed', desc: 'We never rush. Whether a student needs 5 sessions or 50 to master a surah, we are there every step of the way.' },
            ].map((v) => (
              <div key={v.title} style={{ background: 'rgba(245,237,216,0.04)', border: '0.5px solid rgba(245,237,216,0.08)', borderRadius: '10px', padding: '1.5rem' }}>
                <div style={{ fontSize: '28px', marginBottom: '0.75rem' }}>{v.icon}</div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '18px', fontWeight: 600, color: '#F5EDD8', marginBottom: '0.5rem' }}>{v.title}</div>
                <div style={{ fontSize: '13px', color: 'rgba(245,237,216,0.55)', lineHeight: 1.6 }}>{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEACHERS */}
      <section style={{ padding: '4rem 1.5rem', maxWidth: '800px', margin: '0 auto' }}>
        <p style={{ fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#D4A93A', marginBottom: '0.75rem' }}>Who teaches</p>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(24px, 4vw, 34px)', fontWeight: 600, color: '#F5EDD8', marginBottom: '1rem' }}>Certified. Experienced. Dedicated.</h2>
        <p style={{ fontSize: '15px', lineHeight: 1.8, color: 'rgba(245,237,216,0.65)', marginBottom: '2rem' }}>
          All our teachers are certified Qaris and Hafiz with ijazah in Qur'anic recitation. They are selected not only for their knowledge but for their patience, communication, and ability to connect with students of all ages — including children with learning differences.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
          {[
            { stat: 'Ijazah', label: 'certified teachers' },
            { stat: '10+', label: 'years combined experience' },
            { stat: '6', label: 'programs offered' },
            { stat: '1:1', label: 'every single session' },
          ].map((s) => (
            <div key={s.label} style={{ background: 'rgba(245,237,216,0.04)', border: '0.5px solid rgba(245,237,216,0.1)', borderRadius: '10px', padding: '1.5rem', textAlign: 'center' }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '28px', fontWeight: 600, color: '#D4A93A', marginBottom: '4px' }}>{s.stat}</div>
              <div style={{ fontSize: '12px', color: 'rgba(245,237,216,0.5)' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '4rem 1.5rem', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 600, color: '#F5EDD8', marginBottom: '1rem' }}>
          Ready to start your journey?
        </h2>
        <p style={{ fontSize: '15px', color: 'rgba(245,237,216,0.55)', marginBottom: '2rem' }}>
          Book a free trial lesson — no commitment required.
        </p>
        <a href="/booking" style={{ background: '#D4A93A', color: '#0F2318', padding: '14px 32px', borderRadius: '4px', fontSize: '14px', fontWeight: 500, display: 'inline-block' }}>
          Book a Free Trial
        </a>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: '2rem 1.5rem', borderTop: '0.5px solid rgba(245,237,216,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '15px', color: '#D4A93A' }}>Online Quran Literacy</div>
        <div style={{ fontSize: '12px', color: 'rgba(245,237,216,0.35)' }}>© 2026 Online Quran Literacy · Ghana</div>
      </footer>
    </main>
  )
}