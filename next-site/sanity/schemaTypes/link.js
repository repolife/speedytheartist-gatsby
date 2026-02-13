export default {
    name: 'link',
    title: 'Link',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'url',
            title: 'URL',
            type: 'url',
        },
        {
            name: 'type',
            title: 'Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Social', value: 'Social' },
                    { title: 'Music', value: 'Music' },
                    { title: 'Support', value: 'Support' },
                    { title: 'Tour', value: 'Tour' },
                    { title: 'Video', value: 'Video' },
                ],
            },
        },
    ],
}
