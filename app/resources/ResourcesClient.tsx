'use client'
import { useState } from 'react'
import NewsletterForm from '../components/NewsletterForm'

interface Post {
  _id: string
  title: string
  slug: { current: string }
  category: string
  excerpt: string
  publishedAt: string
  readTime: string
}

const categoryColors: Record<string, { bg: string; text: string }> = {
  'Tajweed':        { bg: 'rgba(45,140,255,0.15)',  text: '#2D8CFF' },
  'Memorization':   { bg: 'rgba(212,169,58,0.15)',  text: '#D4A93A' },
  'Parenting':      { bg: 'rgba(37,211,102,0.15)',  text: '#25D366' },
  'Special Needs':  { bg: 'rgba(224,123,181,0.15)', text: '#E07BB5' },
  "Du'a & Dhikr":   { bg: 'rgba(167,139,250,0.15)', text: '#A78BFA' },
  'Learning Tips':  { bg: 'rgba(249,115,22,0.15)',  text: '#F97316' },
}

const categories = ['All', 'Tajweed', 'Memorization', 'Parenting', 'Special Needs', "Du'a & Dhikr", 'Learning Tips']

const categoryIcons: Record<string, string> = {
  'Tajweed': '🎙️', 'Memorization': '📖', 'Parenting': '🤲',
  'Special Needs': '💛', "Du'a & Dhikr": '🌿', 'Learning Tips': '☀️',
}

function formatDate(dateStr: string) {
  if (!dateStr) return ''
  try {
    return new Date(dateStr).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
  } catch { return dateStr }
}

export default function ResourcesClient({ posts }: { posts: Post[] }) {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? posts : posts.filter(p => p.category === active)
  const featured = filtered[0]
  const rest = filtered.slice(1)

  return (
    <div style={{ padding: '3rem 1.5rem' }}>

      {/* PAGE HEADER */}
      <div style={{ maxWidth: '1100px', margin: '0 auto 3rem' }}>
        <p style={{ fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#D4A93A', marginBottom: '0.75rem' }}>
          Resources & guides
        </p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 600, color: '#F5EDD8', marginBottom: '1rem', lineHeight: 1.1 }}>
          Practical knowledge for<br />every Qur'anic learner
        </h1>
        <p style={{ fontSize: '15px', color: 'rgba(245,237,216,0.6)', maxWidth: '520px', lineHeight: 1.7 }}>
          Guides, tips, and reflections for students, parents, and anyone on a Qur'anic journey.
        </p>
      </div>

      {/* CATEGORY FILTERS */}
      <div style={{ maxWidth: '1100px', margin: '0 auto 2.5rem', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {categories.map((cat) => {
          const isActive = active === cat
          const color = cat === 'All' ? { bg: '#D4A93A', text: '#0F2318' } : categoryColors[cat]
          return (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              style={{
                padding: '8px 18px',
                borderRadius: '20px',
                fontSize: '12px',
                cursor: 'pointer',
                border: 'none',
                fontFamily: 'inherit',
                fontWeight: isActive ? 600 : 400,
                transition: 'all 0.18s ease',
                background: isActive
                  ? (cat === 'All' ? '#D4A93A' : color?.bg)
                  : 'rgba(245,237,216,0.06)',
                color: isActive
                  ? (cat === 'All' ? '#0F2318' : color?.text)
                  : 'rgba(245,237,216,0.55)',
                outline: isActive && cat !== 'All'
                  ? `1px solid ${color?.text}55`
                  : '0.5px solid rgba(245,237,216,0.12)',
              }}
            >
              {cat}
            </button>
          )
        })}
      </div>

      {/* POST COUNT */}
      <div style={{ maxWidth: '1100px', margin: '0 auto 1.5rem' }}>
        <p style={{ fontSize: '12px', color: 'rgba(245,237,216,0.3)' }}>
          {filtered.length} article{filtered.length !== 1 ? 's' : ''}{active !== 'All' ? ` in ${active}` : ''}
        </p>
      </div>

      {!featured && (
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center', padding: '4rem 0', color: 'rgba(245,237,216,0.35)', fontSize: '14px' }}>
          No articles in this category yet.
        </div>
      )}

      {/* FEATURED */}
      {featured && (
        <div style={{ maxWidth: '1100px', margin: '0 auto 1.5rem' }}>
          <a href={`/resources/${featured.slug?.current}`} style={{ textDecoration: 'none', display: 'block' }}>
            <div style={{
              background: 'rgba(212,169,58,0.06)',
              border: '0.5px solid rgba(212,169,58,0.2)',
              borderRadius: '14px',
              padding: '2.5rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '2rem',
              alignItems: 'center',
              transition: 'border-color 0.2s',
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
                  <span style={{ background: 'rgba(212,169,58,0.15)', color: '#D4A93A', fontSize: '11px', padding: '3px 10px', borderRadius: '20px', fontWeight: 500 }}>
                    ✦ Featured
                  </span>
                  {featured.category && (
                    <span style={{
                      background: categoryColors[featured.category]?.bg || 'rgba(212,169,58,0.15)',
                      color: categoryColors[featured.category]?.text || '#D4A93A',
                      fontSize: '11px', padding: '3px 10px', borderRadius: '20px'
                    }}>
                      {featured.category}
                    </span>
                  )}
                </div>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 600, color: '#F5EDD8', marginBottom: '1rem', lineHeight: 1.2 }}>
                  {featured.title}
                </h2>
                <p style={{ fontSize: '14px', color: 'rgba(245,237,216,0.6)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  {featured.excerpt}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <span style={{ fontSize: '12px', color: 'rgba(245,237,216,0.35)' }}>{formatDate(featured.publishedAt)}</span>
                  {featured.readTime && <span style={{ fontSize: '12px', color: 'rgba(245,237,216,0.35)' }}>· {featured.readTime}</span>}
                  <span style={{ fontSize: '13px', color: '#D4A93A', marginLeft: 'auto' }}>Read article →</span>
                </div>
              </div>
              <div style={{
                background: 'rgba(245,237,216,0.04)',
                border: '0.5px solid rgba(245,237,216,0.08)',
                borderRadius: '10px',
                height: '180px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '56px',
              }}>
                {categoryIcons[featured.category] || '📖'}
              </div>
            </div>
          </a>
        </div>
      )}

      {/* ARTICLE GRID */}
      {rest.length > 0 && (
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
          {rest.map(post => {
            const color = categoryColors[post.category]
            return (
              <a key={post._id} href={`/resources/${post.slug?.current}`} style={{ textDecoration: 'none' }}>
                <div style={{
                  background: 'rgba(245,237,216,0.03)',
                  border: '0.5px solid rgba(245,237,216,0.1)',
                  borderRadius: '12px',
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.85rem',
                  height: '100%',
                  boxSizing: 'border-box',
                  transition: 'border-color 0.2s, background 0.2s',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{
                      background: color?.bg || 'rgba(212,169,58,0.15)',
                      color: color?.text || '#D4A93A',
                      fontSize: '11px', padding: '3px 10px', borderRadius: '20px'
                    }}>
                      {post.category}
                    </span>
                    <span style={{ fontSize: '20px' }}>{categoryIcons[post.category] || '📄'}</span>
                  </div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '20px', fontWeight: 600, color: '#F5EDD8', lineHeight: 1.3, margin: 0 }}>
                    {post.title}
                  </h3>
                  <p style={{ fontSize: '13px', color: 'rgba(245,237,216,0.55)', lineHeight: 1.7, flex: 1, margin: 0 }}>
                    {post.excerpt}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '0.75rem', borderTop: '0.5px solid rgba(245,237,216,0.07)' }}>
                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: '11px', color: 'rgba(245,237,216,0.3)' }}>{formatDate(post.publishedAt)}</span>
                      {post.readTime && <span style={{ fontSize: '11px', color: 'rgba(245,237,216,0.3)' }}>· {post.readTime}</span>}
                    </div>
                    <span style={{ fontSize: '13px', color: '#D4A93A', flexShrink: 0 }}>Read →</span>
                  </div>
                </div>
              </a>
            )
          })}
        </div>
      )}

      {/* NEWSLETTER */}
      <div style={{ maxWidth: '1100px', margin: '4rem auto 2rem', background: 'rgba(245,237,216,0.04)', border: '0.5px solid rgba(245,237,216,0.1)', borderRadius: '14px', padding: '3rem', textAlign: 'center' }}>
        <p style={{ fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#D4A93A', marginBottom: '0.75rem' }}>Stay updated</p>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: 600, color: '#F5EDD8', marginBottom: '0.75rem' }}>
          Get new articles in your inbox
        </h2>
        <p style={{ fontSize: '14px', color: 'rgba(245,237,216,0.5)', marginBottom: '1.75rem' }}>
          No spam. Just practical guides for Qur'anic learners and parents, a few times a month.
        </p>
        <NewsletterForm />
      </div>
    </div>
  )
}