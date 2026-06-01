import { groq } from 'next-sanity'

// sanity/lib/queries.ts
export const testimonialsQuery = groq`
  *[_type == "testimonial"] | order(_updatedAt desc) [0...6] {
    _id,
    quote,
    name,
    role
  }
`

export const programsQuery = groq`
  *[_type == "program"] | order(order asc) {
    _id,
    name,
    tagline,
    icon,
    description,
    highlights,
    forWho
  }
`

export const postsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    category,
    excerpt,
    publishedAt,
    readTime
  }
`
export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    category,
    excerpt,
    body,
    publishedAt,
    readTime
  }
`