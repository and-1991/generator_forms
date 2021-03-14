# generator_forms

const mockData = {
  title: 'Generator result',
  items: [
    {
      type: 'checkbox',
      label: 'count',
    },
    {
      type: 'textarea',
      label: 'text',
    },
    {
      type: 'radio',
      items: [
        {
          type: 'radio',
          label: 'test'
        },
        {
          type: 'radio',
          label: 'test'
        },    {
          type: 'radio',
          label: 'test'
        }
      ],
    },
    {
      type: 'radio',
      label: '123'
    }
  ],
  actions: [
    {
      type: 'button',
      text: 'Ok',
    },
    {
      type: 'button',
      text: 'Cancel',
    },
    {
      type: 'submit',
      text: 'Apply',
    }
  ]
}
