const yaml = require('js-yaml')
const fs = require('fs')
const path = require('path')
const config = path.resolve(__dirname, 'static/admin/config.yml')

try {
    const doc = yaml.load(fs.readFileSync('./static/admin/config.yml', 'utf8'))
    const collections = doc.collections

    const links = collections.filter(c => c.name === 'links')[0]
    const typeField = links.fields.filter(f => f.name === 'type')[0]
    typeField.options = [...typeField.options, 'Amazing']

    console.log(doc)

    fs.writeFile('./ha.yaml', yaml.dump(doc), err => {
        if (err) {
            console.log('shit', err)
        }
    })
} catch (e) {
    console.log(e)
}
