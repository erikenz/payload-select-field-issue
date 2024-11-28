import { CollectionConfig } from 'payload'

export const TestCollection: CollectionConfig = {
  access: {
    create: () => true,
    delete: () => true,
    read: () => true,
    update: () => true,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      required: true,
      type: 'text',
    },
    {
      name: 'productType',
      options: [
        {
          label: 'Racket',
          value: 'racket',
        },
        {
          label: 'Ball',
          value: 'ball',
        },
        {
          label: 'Accessory',
          value: 'accessory',
        },
      ],
      required: true,
      type: 'select',
    },
    {
      name: 'productTypeRadio',
      options: [
        {
          label: 'Racket',
          value: 'racket',
        },
        {
          label: 'Ball',
          value: 'ball',
        },
        {
          label: 'Accessory',
          value: 'accessory',
        },
      ],
      required: true,
      type: 'radio',
    },
  ],
  slug: 'test',
  versions: {
    drafts: {
      autosave: true,
    },
    maxPerDoc: 10,
  },
}
