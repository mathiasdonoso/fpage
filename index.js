const express = require('express')

const app = express()
const port = 3000 || process.env.PORT

require('./src/common/middlewares')(app)

app.use(require('./src/features'))
app.use(require('./src/common/handleError'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
