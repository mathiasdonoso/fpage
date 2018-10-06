const passport = require('passport')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const morgan = require('morgan')
const compression = require('compression')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const uuid = require('uuid/v4')

const config = require('./../../config/app')

const middlewares = app => {
  app.use(helmet())
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())
  app.use(morgan('dev'))
  app.use(compression())
  require('./passport')
  app.use(session({
    genid: (req) => uuid(),
    store: new FileStore(),
    secret: config.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
  }))
  app.use(passport.initialize())
  app.use(passport.session())
}

module.exports = middlewares
