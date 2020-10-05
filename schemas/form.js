export default {
  name: 'form',
  title: 'Lead',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required().max(60)
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required().max(150)
    },
    {
      name: 'message',
      title: 'Message',
      type: 'text',
      rows: 6
    }
  ]
}