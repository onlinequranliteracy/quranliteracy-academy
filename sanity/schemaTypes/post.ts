export const post = {
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Tajweed', value: 'Tajweed' },
          { title: 'Memorization', value: 'Memorization' },
          { title: 'Parenting', value: 'Parenting' },
          { title: 'Special Needs', value: 'Special Needs' },
          { title: "Du'a & Dhikr", value: "Du'a & Dhikr" },
          { title: 'Learning Tips', value: 'Learning Tips' },
        ]
      }
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{ type: 'block' }]
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    },
    {
      name: 'readTime',
      title: 'Read Time (e.g. 5 min read)',
      type: 'string',
    },
  ]
}