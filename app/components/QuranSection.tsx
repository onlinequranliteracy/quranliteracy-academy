'use client'
import { useState } from 'react'

const topics = [
  {
    id: 'why-read',
    icon: '📖',
    title: "Why Read the Qur'an?",
    color: '#D4A93A',
    summary: "The Qur'an is the direct word of Allah — reading it is an act of worship, guidance, and connection.",
    points: [
      { heading: 'Every letter is a reward', body: 'The Prophet ﷺ said: "Whoever reads a letter of the Book of Allah will have a reward, and that reward will be multiplied by ten." The act of reading itself is worship.' },
      { heading: 'Guidance for every situation', body: "The Qur'an addresses grief, joy, fear, family, justice, money, love, and death. When you read it regularly, you find answers to questions you didn't even know you had." },
      { heading: 'Intercession on the Day of Judgement', body: 'The Prophet ﷺ said: "Read the Qur\'an, for it will come as an intercessor for its companions on the Day of Resurrection."' },
      { heading: 'The best of people', body: '"The best of you are those who learn the Qur\'an and teach it." (Bukhari). Reading the Qur\'an elevates your rank among believers.' },
    ]
  },
  {
    id: 'why-understand',
    icon: '💡',
    title: "Why Understand the Qur'an?",
    color: '#2D8CFF',
    summary: "Reading is powerful. But understanding transforms your life — turning words into wisdom you can act on.",
    points: [
      { heading: 'Allah sent it to be understood', body: '"We have sent it down as an Arabic Qur\'an so that you may understand." (12:2). It was revealed to be comprehended, reflected upon, and lived.' },
      { heading: 'Your prayer becomes alive', body: "When you understand what you're reciting in Salah, every prayer changes. You're no longer repeating words — you're having a real conversation with Allah." },
      { heading: "Answers to life's hardest questions", body: "Why does suffering exist? What happens after death? How should I treat my parents, my spouse, my enemies? The Qur'an answers all of these." },
      { heading: 'Protection from misguidance', body: "When you understand the Qur'an yourself, you can't be easily deceived by those who misquote or misinterpret it." },
    ]
  },
  {
    id: 'why-ponder',
    icon: '🌙',
    title: "Why Ponder the Qur'an?",
    color: '#A78BFA',
    summary: "Tadabbur — deep reflection — is what transforms a reader into a believer with unshakeable faith.",
    points: [
      { heading: 'Allah commands us to ponder', body: '"Do they not ponder the Qur\'an?" (4:82). Pondering is not optional — it is a direct Quranic instruction to every believer.' },
      { heading: 'One Ayah can change your life', body: "Many of the greatest scholars had a single Ayah that completely transformed them. When you sit with a verse and ask what Allah means — it speaks directly to your heart." },
      { heading: 'It cures spiritual diseases', body: "Arrogance, envy, anxiety, hopelessness — the Qur'an is a cure for all of these. Pondering slowly is how it heals the heart." },
      { heading: 'The method of the Companions', body: "Ibn Masood said the Companions would not move to the next 10 verses until they had understood and acted on the previous 10. They became the greatest generation." },
    ]
  },
  {
    id: 'how-easy',
    icon: '✨',
    title: "How is the Qur'an Easy to Learn?",
    color: '#25D366',
    summary: "Allah Himself made the Qur'an easy to remember. Science and history both confirm this extraordinary promise.",
    points: [
      { heading: "Allah's own promise", body: '"We have certainly made the Qur\'an easy to remember. So is there anyone who will remember?" (54:17). This verse is repeated four times — a divine guarantee.' },
      { heading: 'Children memorize it fastest', body: "There are 9-year-olds who have memorized all 604 pages — in a language they don't even speak. No other book has been memorized by so many people across so many centuries." },
      { heading: 'Repetition is built into it', body: "The Qur'an repeats key themes and phrases intentionally. Repetition is the most powerful memorization tool, and Allah built it directly into the text." },
      { heading: 'Anyone can start — at any age', body: "We have students who started at 5 and students who started at 60. With the right teacher and consistent practice, progress is inevitable." },
    ]
  },
  {
    id: 'for-children',
    icon: '🏫',
    title: "Qur'an for Children",
    color: '#F97316',
    summary: "Introducing children to the Qur'an early builds faith, focus, and moral character that lasts a lifetime.",
    points: [
      { heading: 'The best gift you can give', body: "Teaching your child the Qur'an is an investment that pays in both worlds. A righteous child who prays for their parents is one of only three deeds that continue after death." },
      { heading: 'Improves memory and focus', body: "Children who memorize the Qur'an develop stronger working memory, better concentration, and higher academic performance overall." },
      { heading: 'Builds moral character naturally', body: "A child who grows up reciting verses about honesty, kindness, and patience internalizes these values without being lectured." },
      { heading: 'Our approach', body: "Our teachers use short engaging sessions designed for young minds — adapting to each child's learning style, including children with special needs, ADHD, and speech delays." },
    ]
  },
  {
    id: 'miracles',
    icon: '🌟',
    title: "Miracles of the Qur'an",
    color: '#E07BB5',
    summary: "The Qur'an contains knowledge that was scientifically unverifiable at revelation — and has since been confirmed.",
    points: [
      { heading: 'The expanding universe', body: '"And the heaven We constructed with strength, and indeed, We are its expander." (51:47). The expansion of the universe was not discovered by science until 1929 — 1,300 years after this verse.' },
      { heading: 'The barrier between two seas', body: '"He released the two seas, meeting — between them is a barrier so neither of them transgresses." (55:19-20). Modern oceanography confirms that seas of different salinity meet but do not mix.' },
      { heading: 'Human embryonic development', body: '"We created man from an extract of clay, then a drop of fluid, then a clinging clot..." (23:12-14). This precise sequence of embryonic stages was only confirmed by science in the 20th century.' },
      { heading: 'Preserved for 1,400 years', body: "The Qur'an is the only book in history memorized word-for-word by millions of people across 1,400 years, in its original language, without a single letter changing." },
    ]
  },
]

export default function QuranSection() {
  const [activeTab, setActiveTab] = useState('why-read')
  const [openPoint, setOpenPoint] = useState<number | null>(0)

  const active = topics.find(t => t.id === activeTab)!

  return (
    <section style={{ padding: '5rem 1.5rem', background: 'rgba(212,169,58,0.03)', borderTop: '0.5px solid rgba(212,169,58,0.1)', borderBottom: '0.5px solid rgba(212,169,58,0.1)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* HEADER */}
        <div style={{ marginBottom: '3rem' }}>
          <p style={{ fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#D4A93A', marginBottom: '0.75rem' }}>Knowledge & Faith</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 600, color: '#F5EDD8', lineHeight: 1.2, marginBottom: '1rem' }}>
            Everything you need to know<br />about the Qur'an
          </h2>
          <p style={{ fontSize: '15px', color: 'rgba(245,237,216,0.55)', maxWidth: '520px', lineHeight: 1.7 }}>
            Whether you're a complete beginner or a lifelong learner — understanding why and how to engage with the Qur'an changes everything.
          </p>
        </div>

        {/* TABS */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
          {topics.map(t => (
            <button
              key={t.id}
              onClick={() => { setActiveTab(t.id); setOpenPoint(0) }}
              style={{
                padding: '8px 16px', borderRadius: '20px', fontSize: '13px',
                cursor: 'pointer', border: 'none', fontFamily: 'inherit',
                transition: 'all 0.2s ease',
                background: activeTab === t.id ? t.color : 'rgba(245,237,216,0.06)',
                color: activeTab === t.id ? '#0F2318' : 'rgba(245,237,216,0.6)',
                fontWeight: activeTab === t.id ? 600 : 400,
                outline: activeTab === t.id ? 'none' : '0.5px solid rgba(245,237,216,0.12)',
              }}
            >
              {t.icon} {t.title}
            </button>
          ))}
        </div>

        {/* CONTENT */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'start' }}>

          {/* LEFT */}
          <div style={{ background: 'rgba(245,237,216,0.04)', border: `0.5px solid ${active.color}33`, borderRadius: '14px', padding: '2rem' }}>
            <div style={{ fontSize: '48px', marginBottom: '1rem' }}>{active.icon}</div>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '26px', fontWeight: 600, color: '#F5EDD8', marginBottom: '1rem', lineHeight: 1.2 }}>
              {active.title}
            </h3>
            <p style={{ fontSize: '15px', color: 'rgba(245,237,216,0.65)', lineHeight: 1.7, marginBottom: '2rem' }}>
              {active.summary}
            </p>
            <div style={{ borderTop: '0.5px solid rgba(245,237,216,0.08)', paddingTop: '1.5rem' }}>
              <p style={{ fontSize: '13px', color: 'rgba(245,237,216,0.4)', marginBottom: '1rem' }}>Ready to start your Qur'anic journey?</p>
              <a href="/booking" style={{
                display: 'inline-block', background: active.color, color: '#0F2318',
                padding: '11px 22px', borderRadius: '4px', fontSize: '13px',
                fontWeight: 600, textDecoration: 'none',
              }}>Book a Free Trial →</a>
            </div>
          </div>

          {/* RIGHT — ACCORDION */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {active.points.map((point, i) => (
              <div key={i} style={{
                background: openPoint === i ? 'rgba(245,237,216,0.06)' : 'rgba(245,237,216,0.03)',
                border: openPoint === i ? `0.5px solid ${active.color}55` : '0.5px solid rgba(245,237,216,0.08)',
                borderRadius: '10px', overflow: 'hidden', transition: 'all 0.2s ease',
              }}>
                <button
                  onClick={() => setOpenPoint(openPoint === i ? null : i)}
                  style={{
                    width: '100%', padding: '1.1rem 1.25rem',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    background: 'transparent', border: 'none', cursor: 'pointer',
                    fontFamily: 'inherit', textAlign: 'left', gap: '12px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      width: '26px', height: '26px', borderRadius: '50%', flexShrink: 0,
                      background: openPoint === i ? active.color : 'rgba(245,237,216,0.08)',
                      color: openPoint === i ? '#0F2318' : 'rgba(245,237,216,0.4)',
                      fontSize: '11px', fontWeight: 700,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      transition: 'all 0.2s',
                    }}>{i + 1}</div>
                    <span style={{ fontSize: '14px', fontWeight: 500, color: '#F5EDD8' }}>{point.heading}</span>
                  </div>
                  <span style={{
                    color: active.color, fontSize: '20px', flexShrink: 0,
                    transform: openPoint === i ? 'rotate(45deg)' : 'none',
                    transition: 'transform 0.2s', display: 'inline-block',
                  }}>+</span>
                </button>
                {openPoint === i && (
                  <div style={{ padding: '0 1.25rem 1.25rem' }}>
                    <div style={{ height: '0.5px', background: 'rgba(245,237,216,0.06)', marginBottom: '1rem' }} />
                    <p style={{ fontSize: '14px', color: 'rgba(245,237,216,0.6)', lineHeight: 1.75, margin: 0 }}>{point.body}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}