const express = require('express')
const passport = require('passport')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const morgan = require('morgan')
const compression = require('compression')

const app = express()
const port = 3000 || process.env.PORT

/** Middleware section */
app.use(helmet())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(compression())
app.use(passport.initialize())
app.use(passport.session())

/** Passport configruation (facebook auth) */
require('./config/passport')

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/auth/facebook', passport.authenticate('facebook', {
  scope: ['email', 'pages_show_list']
}))

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: '/',
    failureRedirect: '/login'
  }))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
