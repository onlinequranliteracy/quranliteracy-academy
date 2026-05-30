import Nav from '../components/Nav'
import NewsletterForm from '../components/NewsletterForm'
const posts = [
  { id: 'tajweed-beginners', category: 'Tajweed', title: 'Tajweed for Beginners: Where to Start', excerpt: 'Many students feel overwhelmed when they first encounter Tajweed rules. Here is a simple, practical breakdown of where every beginner should start and why getting the foundations right matters more than speed.', date: 'May 12, 2026', readTime: '5 min read' },
  { id: 'hifz-tips', category: 'Memorization', title: '7 Habits That Make Hifz Stick', excerpt: 'Memorization is not just about repetition — it is about the conditions around the repetition. These seven habits, practiced consistently, are what separate students who retain what they memorize from those who forget.', date: 'April 28, 2026', readTime: '6 min read' },
  { id: 'children-quran', category: 'Parenting', title: "The Right Age to Start Your Child on Qur'an", excerpt: 'Parents often ask: when is the right time? The answer is nuanced — it depends less on age and more on readiness. Here is what to look for and how to make the first experience a positive one.', date: 'April 10, 2026', readTime: '4 min read' },
  { id: 'special-needs-quran', category: 'Special Needs', title: "Teaching Qur'an to Children With Learning Differences", excerpt: 'Children with autism, ADHD, or speech delays can absolutely learn the Qur\'an — they just need a different approach. This post outlines the principles our teachers use to make every session productive and joyful.', date: 'March 22, 2026', readTime: '7 min read' },
  { id: 'morning-adhkar', category: "Du'a & Dhikr", title: 'Building a Morning Adhkar Habit From Scratch', excerpt: 'The morning adhkar are among the most rewarding Sunnah practices — yet most Muslims have never made them a daily habit. Here is a simple system for memorizing and actually maintaining them.', date: 'March 5, 2026', readTime: '5 min read' },
  { id: 'online-quran-tips', category: 'Learning Tips', title: "How to Get the Most Out of Online Qur'an Sessions", excerpt: 'Online learning works brilliantly when the student is set up for success. These practical tips — environment, tools, mindset — will help you or your child get maximum benefit from every session.', date: 'February 18, 2026', readTime: '4 min read' },
]

const categories = ['All', 'Tajweed', 'Memorization', 'Parenting', 'Special Needs', "Du'a & Dhikr", 'Learning Tips']

const categoryColors: Record<string, string> = {
  'Tajweed': '#2D8CFF', 'Memorization': '#D4A93A', 'Parenting': '#25D366',
  'Special Needs': '#E07BB5', "Du'a & Dhikr": '#A78BFA', 'Learning Tips': '#F97316',
}
export const metadata = {
  title: 'Resources',
  description: 'Practical guides, tips, and articles for Qur\'anic learners, parents, and anyone on an Islamic education journey.',
}
export default function Resources() {
  return (
    <main style={{ minHeight: '100vh' }}>
      <Nav />
      <div style={{ padding: '3rem 1.5rem' }}>

        <div style={{ maxWidth: '1100px', margin: '0 auto 3.5rem' }}>
          <p style={{ fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#D4A93A', marginBottom: '0.75rem' }}>Resources & guides</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 600, color: '#F5EDD8', marginBottom: '1rem', lineHeight: 1.1 }}>
            Practical knowledge for<br />every Qur'anic learner
          </h1>
          <p style={{ fontSize: '15px', color: 'rgba(245,237,216,0.6)', maxWidth: '520px', lineHeight: 1.7 }}>
            Guides, tips, and reflections for students, parents, and anyone on a Qur'anic journey.
          </p>
        </div>

        {/* CATEGORIES */}
        <div style={{ maxWidth: '1100px', margin: '0 auto 2.5rem', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {categories.map((cat, i) => (
            <div key={cat} style={{ padding: '7px 16px', borderRadius: '20px', fontSize: '12px', cursor: 'pointer', background: i === 0 ? '#D4A93A' : 'rgba(245,237,216,0.06)', color: i === 0 ? '#0F2318' : 'rgba(245,237,216,0.6)', border: i === 0 ? 'none' : '0.5px solid rgba(245,237,216,0.12)', fontWeight: i === 0 ? 500 : 400 }}>{cat}</div>
          ))}
        </div>

        {/* FEATURED */}
        <div style={{ maxWidth: '1100px', margin: '0 auto 2rem' }}>
          <div style={{ background: 'rgba(212,169,58,0.06)', border: '0.5px solid rgba(212,169,58,0.2)', borderRadius: '14px', padding: '2.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
                <span style={{ background: 'rgba(212,169,58,0.15)', color: '#D4A93A', fontSize: '11px', padding: '3px 10px', borderRadius: '20px' }}>Featured</span>
                <span style={{ background: `${categoryColors[posts[0].category]}22`, color: categoryColors[posts[0].category], fontSize: '11px', padding: '3px 10px', borderRadius: '20px' }}>{posts[0].category}</span>
              </div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 600, color: '#F5EDD8', marginBottom: '1rem', lineHeight: 1.2 }}>{posts[0].title}</h2>
              <p style={{ fontSize: '14px', color: 'rgba(245,237,216,0.6)', lineHeight: 1.7, marginBottom: '1.5rem' }}>{posts[0].excerpt}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <span style={{ fontSize: '12px', color: 'rgba(245,237,216,0.35)' }}>{posts[0].date}</span>
                <span style={{ fontSize: '12px', color: 'rgba(245,237,216,0.35)' }}>·</span>
                <span style={{ fontSize: '12px', color: 'rgba(245,237,216,0.35)' }}>{posts[0].readTime}</span>
              </div>
            </div>
            <div style={{ background: 'rgba(245,237,216,0.04)', border: '0.5px solid rgba(245,237,216,0.08)', borderRadius: '10px', height: '180px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '56px' }}>📖</div>
          </div>
        </div>

        {/* GRID */}
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
          {posts.slice(1).map(post => (
            <div key={post.id} style={{ background: 'rgba(245,237,216,0.03)', border: '0.5px solid rgba(245,237,216,0.1)', borderRadius: '12px', padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1rem', cursor: 'pointer' }}>
              <div>
                <span style={{ background: `${categoryColors[post.category]}22`, color: categoryColors[post.category], fontSize: '11px', padding: '3px 10px', borderRadius: '20px' }}>{post.category}</span>
              </div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '20px', fontWeight: 600, color: '#F5EDD8', lineHeight: 1.3 }}>{post.title}</h3>
              <p style={{ fontSize: '13px', color: 'rgba(245,237,216,0.55)', lineHeight: 1.7, flex: 1 }}>{post.excerpt}</p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '0.75rem', borderTop: '0.5px solid rgba(245,237,216,0.07)' }}>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <span style={{ fontSize: '12px', color: 'rgba(245,237,216,0.3)' }}>{post.date}</span>
                  <span style={{ fontSize: '12px', color: 'rgba(245,237,216,0.3)' }}>{post.readTime}</span>
                </div>
                <span style={{ fontSize: '13px', color: '#D4A93A' }}>Read →</span>
              </div>
            </div>
          ))}
        </div>

        {/* NEWSLETTER */}
        <div style={{ maxWidth: '1100px', margin: '4rem auto 2rem', background: 'rgba(245,237,216,0.04)', border: '0.5px solid rgba(245,237,216,0.1)', borderRadius: '14px', padding: '3rem', textAlign: 'center' }}>
          <p style={{ fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#D4A93A', marginBottom: '0.75rem' }}>Stay updated</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: 600, color: '#F5EDD8', marginBottom: '0.75rem' }}>Get new articles in your inbox</h2>
          <p style={{ fontSize: '14px', color: 'rgba(245,237,216,0.5)', marginBottom: '1.75rem' }}>No spam. Just practical guides for Qur'anic learners and parents, a few times a month.</p>
          <div style={{ display: 'flex', gap: '10px', maxWidth: '420px', margin: '0 auto', flexWrap: 'wrap' }}>
            <input type="email" placeholder="your@email.com" style={{ flex: 1, minWidth: '200px', background: 'rgba(245,237,216,0.06)', border: '0.5px solid rgba(245,237,216,0.15)', borderRadius: '6px', padding: '11px 16px', fontSize: '14px', color: '#F5EDD8', fontFamily: "'DM Sans', sans-serif", outline: 'none' }} />
            <NewsletterForm />
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