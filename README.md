# Getting Started with Create React App

##Example data
`all fields not required`   
```
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
```
## Available Scripts
In the project directory, you can run:
### `yarn start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
