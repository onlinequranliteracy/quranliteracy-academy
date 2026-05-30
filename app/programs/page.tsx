import Link from 'next/link'
import Nav from '../components/Nav'

const programs = [
  {
    id: 'hifz', icon: '📖', name: "Qur'an Memorization", tagline: 'Hifz · All ages',
    color: 'rgba(212,169,58,0.08)',
    description: "Our Hifz program is built around your pace. Whether your child is just starting or you're an adult returning to memorization, every session is one-on-one with a certified teacher who tracks your progress, reviews previous lessons, and adjusts the plan as you grow.",
    highlights: ['Personalized memorization plan from day one', 'Regular revision sessions to lock in retention', 'Progress reports shared with parents', 'Suitable for all ages and starting levels', 'Flexible scheduling across all timezones'],
    forWho: 'Children aged 5 and up, adult learners, students returning to Hifz after a break.',
    duration: '30 minutes per session', platform: 'WhatsApp or Zoom',
  },
  {
    id: 'tajweed', icon: '🎙️', name: 'Tajweed & Recitation', tagline: 'Pronunciation · All levels',
    color: 'rgba(212,169,58,0.05)',
    description: "Tajweed is the science of reciting the Qur'an correctly. Our certified Qaris work with each student individually to identify pronunciation gaps, correct makharij, and build beautiful, confident recitation from the ground up.",
    highlights: ['Taught by certified Qaris with ijazah', 'Focus on makharij, sifaat, and rules of recitation', 'Audio feedback shared after every session', 'Beginner to advanced levels welcome', 'Build towards independent recitation'],
    forWho: 'Beginners with no Tajweed knowledge, students wanting to refine existing recitation, adults preparing for leading prayer.',
    duration: '30 minutes per session', platform: 'WhatsApp or Zoom',
  },
  {
    id: 'special', icon: '🤲', name: 'Special Needs', tagline: 'Speech delays · Learning differences',
    color: 'rgba(212,169,58,0.08)',
    description: "Every child deserves access to Qur'anic education. Our Special Needs program is designed with patience, repetition, and gentle encouragement at its core. Teachers are trained to adapt lessons for children with speech delays, autism, ADHD, and other learning differences.",
    highlights: ['Teachers trained in adaptive learning techniques', 'Slower pace with more repetition by design', 'Close parent communication after every session', 'Positive reinforcement built into every lesson', 'No pressure, no rushing — ever'],
    forWho: 'Children with speech delays, autism spectrum conditions, ADHD, Down syndrome, or any other learning difference.',
    duration: '30 minutes per session', platform: 'WhatsApp or Zoom',
  },
  {
    id: 'dua', icon: '🌿', name: "Du'a Memorization", tagline: 'Daily & Sunnah supplications',
    color: 'rgba(212,169,58,0.05)',
    description: "Du'a is the language of the heart. This program helps students memorize the essential daily and sunnah supplications with correct pronunciation, meaning, and the context to use them confidently.",
    highlights: ['Covers morning/evening adhkar and daily du\'as', 'Pronunciation and meaning taught together', 'Memorization reinforced across multiple sessions', 'Printable revision cards provided', 'Can be combined with other programs'],
    forWho: "Children and adults wanting to build a daily dhikr habit, new Muslims learning foundational supplications.",
    duration: '30 minutes per session', platform: 'WhatsApp or Zoom',
  },
  {
    id: 'prophets', icon: '⭐', name: 'Stories of the Prophets', tagline: 'Faith building · Kids',
    color: 'rgba(212,169,58,0.08)',
    description: "The stories of the Prophets are among the most powerful tools for building a child's connection to Islam. This program brings those stories to life through interactive narration, questions, and reflection.",
    highlights: ['Covers all major Prophets from Adam to Muhammad ﷺ', 'Age-appropriate storytelling and discussion', 'Lessons tied to values and character building', 'Encourages questions and curiosity', 'Builds love for Islamic history from an early age'],
    forWho: 'Children aged 5–14, families wanting to teach Islamic history in an engaging way.',
    duration: '30 minutes per session', platform: 'WhatsApp or Zoom',
  },
  {
    id: 'sunnah', icon: '☀️', name: 'Sunnah Practices', tagline: 'Daily habits · All ages',
    color: 'rgba(212,169,58,0.05)',
    description: "This program focuses on the practical Sunnah — the daily actions and habits of the Prophet ﷺ that every Muslim can incorporate into their life. From the Sunnah of waking up to the etiquette of eating, students learn how to live Islam in small, consistent ways.",
    highlights: ['Covers Sunnah of daily life in a structured sequence', 'Evidence-based teaching from authentic hadith', 'Practical homework to build real habits', 'Suitable for children and adult learners', "Pairs well with Du'a Memorization program"],
    forWho: 'Children, adults, and families wanting to strengthen their daily Islamic practice.',
    duration: '30 minutes per session', platform: 'WhatsApp or Zoom',
  },
]
export const metadata = {
  title: 'Programs',
  description: 'Six personalized Qur\'anic programs including Hifz, Tajweed, Special Needs, Du\'a Memorization, Stories of the Prophets, and Sunnah Practices.',
}
export default function Programs() {
  return (
    <main style={{ minHeight: '100vh' }}>
      <Nav />
      <div style={{ padding: '3rem 1.5rem' }}>

        <div style={{ maxWidth: '1100px', margin: '0 auto 4rem' }}>
          <p style={{ fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#D4A93A', marginBottom: '0.75rem' }}>What we offer</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 600, color: '#F5EDD8', marginBottom: '1rem', lineHeight: 1.1 }}>
            Programs for every student,<br />every stage
          </h1>
          <p style={{ fontSize: '15px', color: 'rgba(245,237,216,0.6)', maxWidth: '560px', lineHeight: 1.7 }}>
            Every program is delivered one-on-one by a certified teacher. No group classes, no rushing — just focused, personalized learning at your pace.
          </p>
        </div>

        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {programs.map((p, i) => (
            <div key={p.id} style={{
              background: 'rgba(245,237,216,0.03)',
              border: '0.5px solid rgba(245,237,216,0.1)',
              borderRadius: '14px', overflow: 'hidden'
            }}>
              {/* PROGRAM HEADER */}
              <div style={{ background: p.color, borderBottom: '0.5px solid rgba(245,237,216,0.08)', padding: '2rem', display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                <div style={{ fontSize: '40px' }}>{p.icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(20px, 3vw, 26px)', fontWeight: 600, color: '#F5EDD8' }}>{p.name}</div>
                  <div style={{ fontSize: '12px', color: 'rgba(245,237,216,0.45)', letterSpacing: '0.04em', marginTop: '4px' }}>{p.tagline}</div>
                </div>
                <Link href="/booking" style={{ background: '#D4A93A', color: '#0F2318', padding: '10px 22px', borderRadius: '4px', fontSize: '13px', fontWeight: 500, whiteSpace: 'nowrap' }}>
                  Book a trial →
                </Link>
              </div>

              {/* PROGRAM CONTENT */}
              <div style={{ padding: '2rem' }}>
                <p style={{ fontSize: '15px', color: 'rgba(245,237,216,0.7)', lineHeight: 1.8, marginBottom: '2rem' }}>{p.description}</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
                  <div>
                    <p style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#D4A93A', marginBottom: '1rem' }}>What's included</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {p.highlights.map((h, j) => (
                        <div key={j} style={{ display: 'flex', gap: '8px', fontSize: '13px', color: 'rgba(245,237,216,0.65)' }}>
                          <span style={{ color: '#D4A93A', flexShrink: 0 }}>✓</span>{h}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <div>
                      <p style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#D4A93A', marginBottom: '0.5rem' }}>Who it's for</p>
                      <p style={{ fontSize: '13px', color: 'rgba(245,237,216,0.6)', lineHeight: 1.6 }}>{p.forWho}</p>
                    </div>
                    <div>
                      <p style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#D4A93A', marginBottom: '0.5rem' }}>Session length</p>
                      <p style={{ fontSize: '13px', color: 'rgba(245,237,216,0.6)' }}>{p.duration}</p>
                    </div>
                    <div>
                      <p style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#D4A93A', marginBottom: '0.5rem' }}>Platform</p>
                      <p style={{ fontSize: '13px', color: 'rgba(245,237,216,0.6)' }}>{p.platform}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', padding: '5rem 1.5rem 2rem' }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 600, color: '#F5EDD8', marginBottom: '1rem' }}>Not sure which program to start with?</h2>
          <p style={{ fontSize: '15px', color: 'rgba(245,237,216,0.55)', marginBottom: '2rem' }}>Book a free trial and your teacher will guide you to the right fit.</p>
          <Link href="/booking" style={{ background: '#D4A93A', color: '#0F2318', padding: '14px 32px', borderRadius: '4px', fontSize: '14px', fontWeight: 500, display: 'inline-block' }}>Book a free trial</Link>
        </div>
      </div>

      <footer style={{ padding: '2rem 1.5rem', borderTop: '0.5px solid rgba(245,237,216,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '15px', color: '#D4A93A' }}>Online Quran Literacy</div>
        <div style={{ fontSize: '12px', color: 'rgba(245,237,216,0.35)' }}>© 2026 Online Quran Literacy · Ghana</div>
      </footer>
    </main>
  )
}