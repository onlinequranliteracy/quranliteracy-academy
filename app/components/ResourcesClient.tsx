'use client'
import { useState } from 'react'

interface Post {
  _id: string
  title: string
  slug: { current: string }
  category: string
  excerpt: string
  publishedAt: string
  readTime: string
}

const categoryColors: Record<string, string> = {
  'Tajweed': '#2D8CFF', 'Memorization': '#D4A93A', 'Parenting': '#25D366',
  'Special Needs': '#E07BB5', "Du'a & Dhikr": '#A78BFA', 'Learning Tips': '#F97316',
}

const categories = ['All', 'Tajweed', 'Memorization', 'Parenting', 'Special Needs', "Du'a & Dhikr", 'Learning Tips']

function formatDate(dateStr: string) {
  if (!dateStr) return ''
  try {
    return new Date(dateStr).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
  } catch { return dateStr }
}

export default function ResourcesClient({ posts }: { posts: Post[] }) {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All' ? posts : posts.filter(p => p.category === activeCategory)
  const featured = filtered[0]
  const rest = filtered.slice(1)

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

      {/* CATEGORIES */}
      <div style={{ marginBottom: '2.5rem', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {categories.map(cat => (
          <button key={cat} onClick={() => setActiveCategory(cat)} style={{
            padding: '7px 16px', borderRadius: '20px', fontSize: '12px',
            cursor: 'pointer',
            background: activeCategory === cat ? '#D4A93A' : 'rgba(245,237,216,0.06)',
            color: activeCategory === cat ? '#0F2318' : 'rgba(245,237,216,0.6)',
            border: activeCategory === cat ? 'none' : '0.5px solid rgba(245,237,216,0.12)',
            fontWeight: activeCategory === cat ? 500 : 400,
            fontFamily: "'DM Sans', sans-serif",
            transition: 'all 0.15s'
          }}>{cat}</button>
        ))}
      </div>

      {/* FEATURED */}
      {featured && (
        <div style={{ marginBottom: '2rem' }}>
          <a href={`/resources/${featured.slug?.current}`} style={{ textDecoration: 'none', display: 'block' }}>
            <div style={{ background: 'rgba(212,169,58,0.06)', border: '0.5px solid rgba(212,169,58,0.2)', borderRadius: '14px', padding: '2.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem', alignItems: 'center' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
                  <span style={{ background: 'rgba(212,169,58,0.15)', color: '#D4A93A', fontSize: '11px', padding: '3px 10px', borderRadius: '20px' }}>Featured</span>
                  <span style={{ background: `${categoryColors[featured.category] || '#D4A93A'}22`, color: categoryColors[featured.category] || '#D4A93A', fontSize: '11px', padding: '3px 10px', borderRadius: '20px' }}>{featured.category}</span>
                </div>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 600, color: '#F5EDD8', marginBottom: '1rem', lineHeight: 1.2 }}>{featured.title}</h2>
                <p style={{ fontSize: '14px', color: 'rgba(245,237,216,0.6)', lineHeight: 1.7, marginBottom: '1.5rem' }}>{featured.excerpt}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <span style={{ fontSize: '12px', color: 'rgba(245,237,216,0.35)' }}>{formatDate(featured.publishedAt)}</span>
                  <span style={{ fontSize: '12px', color: 'rgba(245,237,216,0.35)' }}>· {featured.readTime}</span>
                </div>
              </div>
              <div style={{ background: 'rgba(245,237,216,0.04)', border: '0.5px solid rgba(245,237,216,0.08)', borderRadius: '10px', height: '180px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '56px' }}>📖</div>
            </div>
          </a>
        </div>
      )}

      {/* GRID */}
      {rest.length > 0 && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
          {rest.map(post => (
            <a key={post._id} href={`/resources/${post.slug?.current}`} style={{ textDecoration: 'none' }}>
              <div style={{ background: 'rgba(245,237,216,0.03)', border: '0.5px solid rgba(245,237,216,0.1)', borderRadius: '12px', padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1rem', cursor: 'pointer', height: '100%' }}>
                <div>
                  <span style={{ background: `${categoryColors[post.category] || '#D4A93A'}22`, color: categoryColors[post.category] || '#D4A93A', fontSize: '11px', padding: '3px 10px', borderRadius: '20px' }}>{post.category}</span>
                </div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '20px', fontWeight: 600, color: '#F5EDD8', lineHeight: 1.3 }}>{post.title}</h3>
                <p style={{ fontSize: '13px', color: 'rgba(245,237,216,0.55)', lineHeight: 1.7, flex: 1 }}>{post.excerpt}</p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '0.75rem', borderTop: '0.5px solid rgba(245,237,216,0.07)' }}>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <span style={{ fontSize: '12px', color: 'rgba(245,237,216,0.3)' }}>{formatDate(post.publishedAt)}</span>
                    <span style={{ fontSize: '12px', color: 'rgba(245,237,216,0.3)' }}>{post.readTime}</span>
                  </div>
                  <span style={{ fontSize: '13px', color: '#D4A93A' }}>Read →</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      )}

      {/* EMPTY STATE */}
      {filtered.length === 0 && (
        <div style={{ textAlign: 'center', padding: '4rem 0' }}>
          <p style={{ fontSize: '15px', color: 'rgba(245,237,216,0.4)' }}>No posts in this category yet. Check back soon!</p>
        </div>
      )}
    </div>
  )
}