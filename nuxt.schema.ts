import { field, group } from '@nuxthq/studio/theme';

export default defineNuxtSchema({
    appConfig: {
        ui: group({
            title: 'UI',
            description: 'Configure different UI features',
            fields: {
                text: field({
                    title: 'Text',
                    description: 'Configure the text to be displayed in the banner',
                    type: 'string',
                    default: ''
                }),
                color: field({
                    title: 'Color',
                    description: 'Configure the color of the banner',
                    type: 'string',
                    default: 'red',
                    required: [
                        'red',
                        'yellow',
                        'blue'
                    ]
                }),
                enabled: field({
                    title: 'Enabled',
                    description: 'Show the banner',
                    type: 'boolean',
                    default: false
                })
            }
        })
    }
})