export const program = {
  name: 'program',
  title: 'Program',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Program Name',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'tagline',
      title: 'Tagline (e.g. Hifz · All ages)',
      type: 'string',
    },
    {
      name: 'icon',
      title: 'Icon (emoji)',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    },
    {
      name: 'highlights',
      title: 'Highlights',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'forWho',
      title: 'Who it\'s for',
      type: 'text',
      rows: 2,
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
    },
  ]
}