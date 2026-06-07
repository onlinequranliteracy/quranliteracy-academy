import Nav from '../components/Nav'
import { client } from '../../sanity/lib/client'
import { postsQuery } from '../../sanity/lib/queries'
import NewsletterForm from '../components/NewsletterForm'
import ResourcesClient from '../components/ResourcesClient'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Resources',
  description: "Practical guides, tips, and articles for Qur'anic learners, parents, and anyone on an Islamic education journey.",
}

interface Post {
  _id: string
  title: string
  slug: { current: string }
  category: string
  excerpt: string
  publishedAt: string
  readTime: string
}

const fallbackPosts = [
  { _id: '1', title: 'Tajweed for Beginners: Where to Start', slug: { current: 'tajweed-beginners' }, category: 'Tajweed', excerpt: 'Many students feel overwhelmed when they first encounter Tajweed rules. Here is a simple, practical breakdown of where every beginner should start.', publishedAt: '2026-05-12', readTime: '5 min read' },
  { _id: '2', title: '7 Habits That Make Hifz Stick', slug: { current: 'hifz-tips' }, category: 'Memorization', excerpt: 'Memorization is not just about repetition — it is about the conditions around the repetition. These seven habits are what separate students who retain from those who forget.', publishedAt: '2026-04-28', readTime: '6 min read' },
  { _id: '3', title: "The Right Age to Start Your Child on Qur'an", slug: { current: 'children-quran' }, category: 'Parenting', excerpt: 'Parents often ask: when is the right time? The answer depends less on age and more on readiness.', publishedAt: '2026-04-10', readTime: '4 min read' },
  { _id: '4', title: "Teaching Qur'an to Children With Learning Differences", slug: { current: 'special-needs-quran' }, category: 'Special Needs', excerpt: "Children with autism, ADHD, or speech delays can absolutely learn the Qur'an — they just need a different approach.", publishedAt: '2026-03-22', readTime: '7 min read' },
  { _id: '5', title: 'Building a Morning Adhkar Habit From Scratch', slug: { current: 'morning-adhkar' }, category: "Du'a & Dhikr", excerpt: 'The morning adhkar are among the most rewarding Sunnah practices — yet most Muslims have never made them a daily habit.', publishedAt: '2026-03-05', readTime: '5 min read' },
  { _id: '6', title: "How to Get the Most Out of Online Qur'an Sessions", slug: { current: 'online-quran-tips' }, category: 'Learning Tips', excerpt: 'Online learning works brilliantly when the student is set up for success. These practical tips will help you get maximum benefit.', publishedAt: '2026-02-18', readTime: '4 min read' },
]

export default async function Resources() {
  let posts: Post[] = []
  try {
    posts = await client.fetch(postsQuery)
  } catch {
    posts = []
  }

  const displayPosts = posts.length > 0 ? posts : fallbackPosts

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

        <ResourcesClient posts={displayPosts} />

        {/* NEWSLETTER */}
        <div style={{ maxWidth: '1100px', margin: '4rem auto 2rem', background: 'rgba(245,237,216,0.04)', border: '0.5px solid rgba(245,237,216,0.1)', borderRadius: '14px', padding: '3rem', textAlign: 'center' }}>
          <p style={{ fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#D4A93A', marginBottom: '0.75rem' }}>Stay updated</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: 600, color: '#F5EDD8', marginBottom: '0.75rem' }}>Get new articles in your inbox</h2>
          <p style={{ fontSize: '14px', color: 'rgba(245,237,216,0.5)', marginBottom: '1.75rem' }}>No spam. Just practical guides for Qur'anic learners and parents, a few times a month.</p>
          <NewsletterForm />
        </div>
      </div>

      <footer style={{ padding: '2rem 1.5rem', borderTop: '0.5px solid rgba(245,237,216,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '15px', color: '#D4A93A' }}>Online Quran Literacy</div>
        <div style={{ fontSize: '12px', color: 'rgba(245,237,216,0.35)' }}>© 2026 Online Quran Literacy · Ghana</div>
      </footer>
    </main>
  )
}