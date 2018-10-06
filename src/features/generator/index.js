const fs = require('fs')

const createHtml = (template = 'default') => {
  const htmlTemplate = `${__dirname}/../content/${template}/index.html`
  const outputFolder = `${__dirname}/../output`
  const outputFile = `${outputFolder}/index.html`

  fs.readFile(htmlTemplate, 'utf8', (err, data) => {
    if (err) console.error(err)

    if (!fs.stat(outputFolder, (err) => console.error(err))) {
      fs.mkdir(outputFolder, (err) => console.error(err))
    }

    fs.writeFile(outputFile, data, (err) => {
      if (err) console.error(err)
    })
  })
}

module.exports = {
  createHtml
}
