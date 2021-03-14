export const CONFIG = 'config'
export const RESULT = 'result'
export const ACTIVE = 'active'
export const TITLE = 'title'
export const ITEMS = 'items'
export const ACTIONS = 'actions'
export const TEXTAREA = 'textarea'
export const CHECKBOX = 'checkbox'
export const RADIO_BUTTONS = 'radio buttons'
export const RADIO = 'radio'


export const startValue = '{\n' +
        '  title: \'Generator result\',\n' +
        '  items: [\n' +
        '    {\n' +
        '      type: \'checkbox\',\n' +
        '      label: \'count\',\n' +
        '    },\n' +
        '    {\n' +
        '      type: \'textarea\',\n' +
        '      label: \'text\',\n' +
        '    },\n' +
        '    {\n' +
        '      type: \'radio\',\n' +
        '      items: [\n' +
        '        {\n' +
        '          type: \'radio\',\n' +
        '          label: \'test\'\n' +
        '        },\n' +
        '        {\n' +
        '          type: \'radio\',\n' +
        '          label: \'test\'\n' +
        '        },    {\n' +
        '          type: \'radio\',\n' +
        '          label: \'test\'\n' +
        '        }\n' +
        '      ],\n' +
        '    },\n' +
        '    {\n' +
        '      type: \'radio\',\n' +
        '      label: \'123\'\n' +
        '    }\n' +
        '  ],\n' +
        '  actions: [\n' +
        '    {\n' +
        '      type: \'button\',\n' +
        '      text: \'Ok\',\n' +
        '    },\n' +
        '    {\n' +
        '      type: \'button\',\n' +
        '      text: \'Cancel\',\n' +
        '    },\n' +
        '    {\n' +
        '      type: \'submit\',\n' +
        '      text: \'Apply\',\n' +
        '    }\n' +
        '  ]\n' +
        '}'
