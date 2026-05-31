import Nav from '../../components/Nav'
import { client } from '../../../sanity/lib/client'
import { postBySlugQuery } from '../../../sanity/lib/queries'
import { PortableText } from '@portabletext/react'

interface Post {
  _id: string
  title: string
  slug: { current: string }
  category: string
  excerpt: string
  body: any[]
  publishedAt: string
  readTime: string
}

const categoryColors: Record<string, string> = {
  'Tajweed': '#2D8CFF', 'Memorization': '#D4A93A', 'Parenting': '#25D366',
  'Special Needs': '#E07BB5', "Du'a & Dhikr": '#A78BFA', 'Learning Tips': '#F97316',
}

function formatDate(dateStr: string) {
  if (!dateStr) return ''
  try {
    return new Date(dateStr).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
  } catch { return dateStr }
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post: Post = await client.fetch(postBySlugQuery, { slug })

  if (!post) {
    return (
      <main style={{ minHeight: '100vh' }}>
        <Nav />
        <div style={{ padding: '6rem 1.5rem', textAlign: 'center' }}>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '36px', color: '#F5EDD8', marginBottom: '1rem' }}>Post not found</h1>
          <a href="/resources" style={{ color: '#D4A93A', fontSize: '14px' }}>← Back to resources</a>
        </div>
      </main>
    )
  }

  return (
    <main style={{ minHeight: '100vh' }}>
      <Nav />
      <div style={{ padding: '3rem 1.5rem' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>

          <a href="/resources" style={{ fontSize: '13px', color: 'rgba(245,237,216,0.5)', display: 'block', marginBottom: '2rem' }}>← Back to resources</a>

          <div style={{ display: 'flex', gap: '10px', marginBottom: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <span style={{ background: `${categoryColors[post.category] || '#D4A93A'}22`, color: categoryColors[post.category] || '#D4A93A', fontSize: '11px', padding: '3px 10px', borderRadius: '20px' }}>{post.category}</span>
            <span style={{ fontSize: '12px', color: 'rgba(245,237,216,0.35)' }}>{formatDate(post.publishedAt)}</span>
            <span style={{ fontSize: '12px', color: 'rgba(245,237,216,0.35)' }}>· {post.readTime}</span>
          </div>

          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(28px, 5vw, 46px)', fontWeight: 600, color: '#F5EDD8', lineHeight: 1.15, marginBottom: '1.5rem' }}>
            {post.title}
          </h1>

          <p style={{ fontSize: '16px', color: 'rgba(245,237,216,0.6)', lineHeight: 1.7, marginBottom: '3rem', borderBottom: '0.5px solid rgba(245,237,216,0.1)', paddingBottom: '2rem' }}>
            {post.excerpt}
          </p>

          {post.body && (
            <div style={{ fontSize: '16px', lineHeight: 1.85, color: 'rgba(245,237,216,0.75)' }}>
              <PortableText
                value={post.body}
                components={{
                  block: {
                    normal: ({ children }) => <p style={{ marginBottom: '1.5rem' }}>{children}</p>,
                    h2: ({ children }) => <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '28px', fontWeight: 600, color: '#F5EDD8', margin: '2.5rem 0 1rem' }}>{children}</h2>,
                    h3: ({ children }) => <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '22px', fontWeight: 600, color: '#F5EDD8', margin: '2rem 0 0.75rem' }}>{children}</h3>,
                    blockquote: ({ children }) => <blockquote style={{ borderLeft: '3px solid #D4A93A', paddingLeft: '1.5rem', margin: '2rem 0', color: 'rgba(245,237,216,0.6)', fontStyle: 'italic' }}>{children}</blockquote>,
                  },
                  list: {
                    bullet: ({ children }) => <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>{children}</ul>,
                    number: ({ children }) => <ol style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>{children}</ol>,
                  },
                  listItem: {
                    bullet: ({ children }) => <li style={{ color: 'rgba(245,237,216,0.7)', paddingLeft: '0.5rem' }}>{children}</li>,
                    number: ({ children }) => <li style={{ color: 'rgba(245,237,216,0.7)', paddingLeft: '0.5rem' }}>{children}</li>,
                  },
                  marks: {
                    strong: ({ children }) => <strong style={{ color: '#F5EDD8', fontWeight: 600 }}>{children}</strong>,
                    em: ({ children }) => <em style={{ color: 'rgba(245,237,216,0.8)' }}>{children}</em>,
                    link: ({ children, value }) => <a href={value?.href} target="_blank" rel="noopener noreferrer" style={{ color: '#D4A93A', borderBottom: '0.5px solid rgba(212,169,58,0.3)' }}>{children}</a>,
                  },
                }}
              />
            </div>
          )}

          <div style={{ marginTop: '4rem', padding: '2rem', background: 'rgba(212,169,58,0.05)', border: '0.5px solid rgba(212,169,58,0.15)', borderRadius: '12px', textAlign: 'center' }}>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '24px', color: '#F5EDD8', marginBottom: '0.75rem' }}>Ready to start learning?</h3>
            <p style={{ fontSize: '14px', color: 'rgba(245,237,216,0.55)', marginBottom: '1.5rem' }}>Book a free trial lesson with one of our certified teachers.</p>
            <a href="/booking" style={{ background: '#D4A93A', color: '#0F2318', padding: '12px 28px', borderRadius: '4px', fontSize: '14px', fontWeight: 500, display: 'inline-block' }}>Book a Free Trial</a>
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