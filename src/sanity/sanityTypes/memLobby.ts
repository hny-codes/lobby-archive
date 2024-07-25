import { defineField, defineType } from 'sanity';

export const memLobby = defineType({
  name: 'memorial-lobby',
  title: 'Memorial Lobby',
  type: 'document',
  fields: [
    defineField({
      name: 'studentName',
      title: 'Student Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'studentName' },
      validation: (rule) => rule.required().error('Slug is required!'),
      hidden: ({ document }) => !document?.studentName,
    }),
    defineField({
      name: 'date',
      type: 'datetime',
      validation: (rule) => rule.required().error('A date is needed!'),
    }),
    defineField({
      name: 'image',
      type: 'image',
      description: 'Screenshot of Memorial Lobby',
      validation: (rule) => rule.required().error('An image is needed!'),
    }),
    defineField({
      name: 'ytLink',
      title: 'YouTube Link',
      type: 'string',
      description:
        'Source: https://steamcommunity.com/workshop/filedetails/?id=2434025795',
      validation: (rule) => rule.required().error('A youtube link is needed!'),
    }),
    defineField({
      name: 'video',
      title: 'Video File',
      type: 'file'
    }),
    defineField({
      name: 'relationship',
      title: 'Relationship Level Required',
      type: 'number',
      description:
        'Minimum relationship level required to unlock the memorial lobby | Source: https://bluearchive.wiki/wiki/Memorial_Lobby',
      validation: (rule) =>
        rule.required().error('A relationship level is needed!'),
    }),
  ],
});
