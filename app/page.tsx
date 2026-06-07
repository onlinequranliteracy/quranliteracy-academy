import Nav from './components/Nav'
import { client } from '../sanity/lib/client'
import { testimonialsQuery } from '../sanity/lib/queries'
import QuranSection from './components/QuranSection'
import Footer from './components/Footer'

interface Testimonial {
  _id: string
  quote: string
  name: string
  role: string
}

export default async function Home() {
  const testimonials: Testimonial[] = await client.fetch(testimonialsQuery)

  const fallbackTestimonials = [
    { _id: '1', quote: 'Her teacher has been incredibly patient. She has memorized Surahs we never thought she could learn. Alhamdulillah.', name: 'Amina K.', role: 'Mother of student' },
    { _id: '2', quote: 'As a working professional, I memorized 2 juz in 6 months. The flexible scheduling made all the difference.', name: 'Mohammed T.', role: 'Adult student' },
    { _id: '3', quote: 'My son looks forward to every session. In 3 months his recitation improved dramatically.', name: 'Fatima S.', role: 'Parent of 7-year-old' },
  ]

  const displayTestimonials = testimonials.length > 0 ? testimonials : fallbackTestimonials

  return (
    <main>
      <Nav />

      {/* HERO */}
      <section style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(/teacher.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          zIndex: 0,
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, rgba(15,35,24,0.97) 45%, rgba(15,35,24,0.55) 100%)',
          zIndex: 1,
        }} />
        <div style={{ position: 'relative', zIndex: 2, padding: '5rem 1.5rem 4rem', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <p style={{ fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#D4A93A', marginBottom: '1.25rem' }}>
                Personalized Qur'anic Education
              </p>
              <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(32px, 5vw, 52px)', lineHeight: 1.1, fontWeight: 600, color: '#F5EDD8', marginBottom: '1.5rem' }}>
                Lighting the path to <span style={{ color: '#D4A93A' }}>Qur'anic</span> excellence
              </h1>
              <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'rgba(245,237,216,0.7)', marginBottom: '2rem' }}>
                One-on-one Qur'an memorization and Tajweed for children and adults worldwide — delivered live via WhatsApp and Zoom by certified teachers.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="/booking" style={{ background: '#D4A93A', color: '#0F2318', padding: '14px 28px', borderRadius: '4px', fontWeight: 500, fontSize: '14px' }}>Book a Free Trial</a>
                <a href="/programs" style={{ background: 'transparent', border: '0.5px solid rgba(245,237,216,0.35)', color: '#F5EDD8', padding: '14px 28px', borderRadius: '4px', fontSize: '14px' }}>Explore Programs</a>
              </div>
              <div style={{ marginTop: '1.25rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '12px', color: 'rgba(245,237,216,0.4)' }}>or</span>
                <a href="https://wa.me/233243083957?text=As-salamu alaykum! I'd like to book a free trial lesson." target="_blank" rel="noopener noreferrer"
                  style={{ fontSize: '13px', color: '#25D366', borderBottom: '0.5px solid rgba(37,211,102,0.3)', textDecoration: 'none' }}>
                  message us on WhatsApp →
                </a>
              </div>
            </div>

            <div style={{ background: 'rgba(245,237,216,0.05)', border: '0.5px solid rgba(245,237,216,0.1)', borderRadius: '12px', padding: '2rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                {[
                  { num: '45+', label: 'Students taught' },
                  { num: '🌍', label: 'International reach', isEmoji: true },
                ].map((s) => (
                  <div key={s.label} style={{ textAlign: 'center' }}>
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: s.isEmoji ? '40px' : '36px', fontWeight: 600, color: '#D4A93A', lineHeight: 1 }}>{s.num}</div>
                    <div style={{ fontSize: '12px', color: 'rgba(245,237,216,0.55)', marginTop: '4px' }}>{s.label}</div>
                  </div>
                ))}
              </div>
              <div style={{ borderTop: '0.5px solid rgba(245,237,216,0.1)', paddingTop: '1.25rem', display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '12px', color: 'rgba(245,237,216,0.45)' }}>Available on</span>
                {[{ label: 'WhatsApp', color: '#25D366' }, { label: 'Zoom', color: '#2D8CFF' }].map((p) => (
                  <div key={p.label} style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(245,237,216,0.07)', border: '0.5px solid rgba(245,237,216,0.12)', borderRadius: '20px', padding: '6px 14px', fontSize: '12px', color: 'rgba(245,237,216,0.7)' }}>
                    <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: p.color }}></div>
                    {p.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0 1.5rem', opacity: 0.2 }}>
        <div style={{ flex: 1, height: '0.5px', background: '#F5EDD8' }}></div>
        <div style={{ fontSize: '18px', color: '#D4A93A', opacity: 1 }}>✦</div>
        <div style={{ flex: 1, height: '0.5px', background: '#F5EDD8' }}></div>
      </div>

      {/* PROGRAMS */}
      <section style={{ padding: '4rem 1.5rem' }}>
        <div className="section-max">
          <p style={{ fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#D4A93A', marginBottom: '0.75rem' }}>What we offer</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 600, color: '#F5EDD8', marginBottom: '3rem', lineHeight: 1.2 }}>
            Programs for every student, every stage
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
            {[
              { icon: '📖', name: "Qur'an Memorization", desc: 'Step-by-step Hifz with revision tracking and regular assessments for long-term retention.' },
              { icon: '🎙️', name: 'Tajweed & Recitation', desc: 'Master pronunciation and recitation with personalized feedback from certified Qaris.' },
              { icon: '🤲', name: 'Special Needs', desc: 'Gentle, consistent sessions designed for children with speech delays and learning differences.' },
              { icon: '🌿', name: "Du'a Memorization", desc: "Essential daily and sunnah du'as with proper pronunciation, meaning, and context." },
              { icon: '⭐', name: 'Stories of the Prophets', desc: 'Interactive storytelling to build faith and connect students to Islamic history.' },
              { icon: '☀️', name: 'Sunnah Practices', desc: 'Bite-sized daily habits and teachings from the Prophet ﷺ integrated into daily life.' },
            ].map((p) => (
              <a href="/programs" key={p.name} style={{ background: 'rgba(245,237,216,0.04)', border: '0.5px solid rgba(245,237,216,0.1)', borderRadius: '10px', padding: '1.5rem', display: 'block' }}>
                <div style={{ fontSize: '24px', marginBottom: '1rem' }}>{p.icon}</div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '18px', fontWeight: 600, color: '#F5EDD8', marginBottom: '0.5rem' }}>{p.name}</div>
                <div style={{ fontSize: '13px', color: 'rgba(245,237,216,0.55)', lineHeight: 1.6 }}>{p.desc}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0 1.5rem', opacity: 0.2 }}>
        <div style={{ flex: 1, height: '0.5px', background: '#F5EDD8' }}></div>
        <div style={{ fontSize: '18px', color: '#D4A93A', opacity: 1 }}>✦</div>
        <div style={{ flex: 1, height: '0.5px', background: '#F5EDD8' }}></div>
      </div>

      {/* QURAN SECTION */}
      <QuranSection />

      {/* WHY CHOOSE US */}
      <section style={{ padding: '4rem 1.5rem' }}>
        <div className="section-max">
          <p style={{ fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#D4A93A', marginBottom: '0.75rem' }}>Why Online Quran Literacy</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 600, color: '#F5EDD8', marginBottom: '3rem', lineHeight: 1.2 }}>
            Learning that fits your life
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {[
              { icon: '🕐', title: 'Flexible Scheduling', desc: 'Sessions available 7 days a week, morning to evening, around your timezone and routine.' },
              { icon: '👤', title: 'One-on-One Attention', desc: 'Every student gets dedicated time with a teacher — no classes, no distractions.' },
              { icon: '📜', title: 'Certified Teachers', desc: 'Our tutors hold Ijazah and are trained in teaching both children and adults.' },
              { icon: '🌐', title: 'Learn From Anywhere', desc: 'All you need is a phone or laptop. We teach via WhatsApp and Zoom worldwide.' },
            ].map((f) => (
              <div key={f.title} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ fontSize: '22px', marginTop: '2px', flexShrink: 0 }}>{f.icon}</div>
                <div>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '17px', fontWeight: 600, color: '#F5EDD8', marginBottom: '0.4rem' }}>{f.title}</div>
                  <div style={{ fontSize: '13px', color: 'rgba(245,237,216,0.55)', lineHeight: 1.6 }}>{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: '4rem 1.5rem', background: 'rgba(212,169,58,0.04)', borderTop: '0.5px solid rgba(212,169,58,0.1)', borderBottom: '0.5px solid rgba(212,169,58,0.1)' }}>
        <div className="section-max">
          <p style={{ fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#D4A93A', marginBottom: '0.75rem' }}>Getting started</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 600, color: '#F5EDD8', marginBottom: '3rem', lineHeight: 1.2 }}>
            Simple steps to begin
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
            {[
              { step: '01', title: 'Book a free trial', desc: 'Choose a time that works for you and meet your teacher with no obligation.' },
              { step: '02', title: 'Get assessed', desc: 'Your teacher will understand your level and set a personalized learning plan.' },
              { step: '03', title: 'Start learning', desc: 'Begin consistent, focused sessions via WhatsApp or Zoom at your own pace.' },
              { step: '04', title: 'Track progress', desc: 'Regular check-ins, revision reviews, and certificates as you hit milestones.' },
            ].map((s) => (
              <div key={s.step}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '42px', fontWeight: 600, color: 'rgba(212,169,58,0.25)', lineHeight: 1, marginBottom: '0.75rem' }}>{s.step}</div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '17px', fontWeight: 600, color: '#F5EDD8', marginBottom: '0.4rem' }}>{s.title}</div>
                <div style={{ fontSize: '13px', color: 'rgba(245,237,216,0.55)', lineHeight: 1.6 }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: '4rem 1.5rem', background: 'rgba(212,169,58,0.05)', borderTop: '0.5px solid rgba(212,169,58,0.15)', borderBottom: '0.5px solid rgba(212,169,58,0.15)' }}>
        <div className="section-max">
          <p style={{ fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#D4A93A', marginBottom: '0.75rem' }}>Student stories</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 600, color: '#F5EDD8', marginBottom: '2.5rem' }}>What our community says</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
            {displayTestimonials.map((t) => (
              <div key={t._id} style={{ background: 'rgba(245,237,216,0.04)', border: '0.5px solid rgba(245,237,216,0.08)', borderRadius: '10px', padding: '1.5rem' }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '28px', color: '#D4A93A', lineHeight: 1, marginBottom: '0.75rem' }}>"</div>
                <p style={{ fontSize: '13px', color: 'rgba(245,237,216,0.65)', lineHeight: 1.7, marginBottom: '1rem' }}>{t.quote}</p>
                <div style={{ fontSize: '13px', fontWeight: 500, color: '#F5EDD8' }}>{t.name}</div>
                <div style={{ fontSize: '12px', color: 'rgba(245,237,216,0.4)' }}>{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 1.5rem', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 600, color: '#F5EDD8', marginBottom: '1rem', lineHeight: 1.15 }}>
          Begin your <span style={{ color: '#D4A93A' }}>Qur'anic</span> journey today
        </h2>
        <p style={{ fontSize: '15px', color: 'rgba(245,237,216,0.6)', marginBottom: '2rem' }}>Book a free trial lesson — no commitment, just connection.</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/booking" style={{ background: '#D4A93A', color: '#0F2318', padding: '14px 28px', borderRadius: '4px', fontWeight: 500, fontSize: '14px' }}>Book a Free Trial</a>
          <a href="/pricing" style={{ background: 'transparent', border: '0.5px solid rgba(245,237,216,0.35)', color: '#F5EDD8', padding: '14px 28px', borderRadius: '4px', fontSize: '14px' }}>View Pricing</a>
          <a href="/register" style={{ background: 'transparent', border: '0.5px solid rgba(245,237,216,0.35)', color: '#F5EDD8', padding: '14px 28px', borderRadius: '4px', fontSize: '14px' }}>Register now</a>
        </div>
      </section>

      <Footer />
    </main>
  )
}