const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy

const { FACEBOOK_APP_ID, FACEBOOK_APP_SECRET } = require('./auth')

passport.use(new FacebookStrategy({
  clientID: FACEBOOK_APP_ID,
  clientSecret: FACEBOOK_APP_SECRET,
  callbackURL: 'http://localhost:3000/auth/facebook/callback'
}, (accessToken, refreshToken, profile, done) => {
  done(null, profile)
}))

passport.serializeUser(function (user, done) {
  done(null, user)
})

passport.deserializeUser(function (user, done) {
  done(null, user)
})
