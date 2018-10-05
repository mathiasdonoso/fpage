const fs = require('fs')

const createHtml = (template = 'default') => {
  fs.readFile(`${__dirname}/../content/${template}/index.html`, 'utf8', (err, data) => {
    if (err) console.error(err)

    fs.writeFile(`${__dirname}/../output/index.html`, data, (err) => {
      if (err) console.error(err)
    })
  })
}

module.exports = {
  createHtml
}
