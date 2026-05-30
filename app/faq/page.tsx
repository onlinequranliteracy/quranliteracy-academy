import Nav from '../components/Nav'

export const metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about Online Quran Literacy — lessons, scheduling, pricing, and more.',
}

const faqs = [
  {
    category: 'Getting Started',
    questions: [
      {
        q: 'How does the free trial work?',
        a: 'Your free trial is a full 30-minute one-on-one session with a certified teacher. There is no payment required, no commitment, and no pressure. It is simply a chance for you and your child to experience our teaching style and ask any questions.',
      },
      {
        q: 'How do I know which program is right for us?',
        a: "During your free trial, your teacher will assess your child's current level, learning style, and goals — then recommend the most suitable program. You are never locked in and can switch programs at any time.",
      },
      {
        q: 'What age groups do you teach?',
        a: "We teach students from age 5 all the way through to adults. Our oldest active student is in their 40s. Every lesson is one-on-one, so the pace and style adapts completely to the individual regardless of age.",
      },
      {
        q: 'Do you teach complete beginners?',
        a: 'Absolutely. Many of our students start with zero knowledge of Arabic or Qur\'anic recitation. Our teachers are experienced in building from the very foundation.',
      },
    ],
  },
  {
    category: 'Lessons & Scheduling',
    questions: [
      {
        q: 'How are lessons delivered?',
        a: 'All lessons are delivered live via WhatsApp video call or Zoom — whichever you prefer. You will receive a link or call before each session. No special software or equipment is needed beyond a smartphone or computer.',
      },
      {
        q: 'What timezone are your teachers in?',
        a: 'Our teachers are based in Ghana (GMT) but we currently serve students in Ghana, the United Kingdom, and the United States. We accommodate scheduling across all these timezones — morning, afternoon, and evening slots are available.',
      },
      {
        q: 'Can I reschedule a lesson?',
        a: 'Yes. We ask for at least 24 hours notice to reschedule. We understand that family life is unpredictable and we always try to find a solution that works for you.',
      },
      {
        q: 'How long is each session?',
        a: 'Standard sessions are 30 minutes. Family plan sessions can run up to 45 minutes depending on the student\'s needs and focus level.',
      },
    ],
  },
  {
    category: 'Teachers & Quality',
    questions: [
      {
        q: 'Are your teachers certified?',
        a: "Yes. All our teachers hold ijazah — a formal chain of certification in Qur'anic recitation traced back to the Prophet ﷺ. They have a combined teaching experience of over 10 years and are carefully selected for both their knowledge and their patience.",
      },
      {
        q: 'Will my child always have the same teacher?',
        a: 'Yes. We believe consistency is key to progress. Your child will be assigned a dedicated teacher from the first lesson. Changes are only made in exceptional circumstances and always with full communication.',
      },
      {
        q: 'How do you handle children with special needs?',
        a: 'We have dedicated experience teaching children with autism, ADHD, speech delays, and Down syndrome. Our Special Needs program uses slower pacing, more repetition, and positive reinforcement. Parents are updated after every session.',
      },
      {
        q: 'How will I know my child is progressing?',
        a: 'All plans include progress tracking. Growth and Family plan students receive detailed written progress reports. Family plan parents also receive a weekly progress call. You can ask your teacher for an update at any time.',
      },
    ],
  },
  {
    category: 'Payments & Plans',
    questions: [
      {
        q: 'What payment methods do you accept?',
        a: 'We accept card payments, mobile money (MTN MoMo, Vodafone Cash), and bank transfers via Paystack. International students can pay by card. All payments are processed securely.',
      },
      {
        q: 'Can I cancel my subscription?',
        a: 'Yes, you can cancel at any time. We do not lock you into long contracts. If you cancel, your access continues until the end of your current billing period.',
      },
      {
        q: 'Do you offer discounts?',
        a: 'Yes — our yearly plans save you 20% compared to monthly billing. We also occasionally offer discounts during Ramadan and other Islamic occasions. Follow our social media or subscribe to our newsletter to stay updated.',
      },
      {
        q: 'Is the Family plan really unlimited sessions?',
        a: 'Yes. The Family plan includes unlimited sessions for up to 3 students. In practice, we recommend a maximum of 2 sessions per day per student for effective retention, but there is no hard cap.',
      },
    ],
  },
]

export default function FAQ() {
  return (
    <main style={{ minHeight: '100vh' }}>
      <Nav />
      <div style={{ padding: '3rem 1.5rem' }}>

        {/* HEADER */}
        <div style={{ maxWidth: '800px', margin: '0 auto 4rem' }}>
          <p style={{ fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#D4A93A', marginBottom: '0.75rem' }}>Got questions?</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 600, color: '#F5EDD8', marginBottom: '1rem', lineHeight: 1.1 }}>
            Frequently asked questions
          </h1>
          <p style={{ fontSize: '15px', color: 'rgba(245,237,216,0.6)', lineHeight: 1.7 }}>
            Can't find what you're looking for? Email us at{' '}
            <a href="mailto:onlinequranliteracy@outlook.com" style={{ color: '#D4A93A' }}>onlinequranliteracy@outlook.com</a>
          </p>
        </div>

        {/* FAQS */}
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {faqs.map((section) => (
            <div key={section.category}>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '24px', fontWeight: 600, color: '#D4A93A', marginBottom: '1.5rem', paddingBottom: '0.75rem', borderBottom: '0.5px solid rgba(212,169,58,0.2)' }}>
                {section.category}
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {section.questions.map((item, i) => (
                  <div key={i} style={{ background: 'rgba(245,237,216,0.03)', border: '0.5px solid rgba(245,237,216,0.1)', borderRadius: '10px', padding: '1.5rem' }}>
                    <h3 style={{ fontSize: '15px', fontWeight: 500, color: '#F5EDD8', marginBottom: '0.75rem', lineHeight: 1.4 }}>{item.q}</h3>
                    <p style={{ fontSize: '14px', color: 'rgba(245,237,216,0.6)', lineHeight: 1.7 }}>{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div style={{ maxWidth: '800px', margin: '4rem auto 2rem', background: 'rgba(212,169,58,0.05)', border: '0.5px solid rgba(212,169,58,0.15)', borderRadius: '12px', padding: '2.5rem', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '28px', fontWeight: 600, color: '#F5EDD8', marginBottom: '0.75rem' }}>Still have questions?</h2>
          <p style={{ fontSize: '14px', color: 'rgba(245,237,216,0.55)', marginBottom: '1.5rem' }}>We typically respond within a few hours during business hours.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:onlinequranliteracy@outlook.com" style={{ background: '#D4A93A', color: '#0F2318', padding: '12px 24px', borderRadius: '4px', fontSize: '14px', fontWeight: 500 }}>Email us</a>
            <a href="/booking" style={{ background: 'transparent', border: '0.5px solid rgba(245,237,216,0.2)', color: '#F5EDD8', padding: '12px 24px', borderRadius: '4px', fontSize: '14px' }}>Book a free trial</a>
          </div>
        </div>
      </div>

      <footer style={{ padding: '2rem 1.5rem', borderTop: '0.5px solid rgba(245,237,216,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '15px', color: '#D4A93A' }}>Online Quran Literacy</div>
        <div style={{ fontSize: '12px', color: 'rgba(245,237,216,0.35)' }}>© 2026 Online Quran Literacy · Ghana</div>
      </footer>
    </main>
  )
}