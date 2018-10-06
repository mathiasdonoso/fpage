const router = require('express').Router()
const passport = require('passport')
const axios = require('axios')

const api = require('./../../../config/api').facebook

router.get('/auth/facebook', passport.authenticate('facebook', {
  scope: ['email', 'pages_show_list']
}))

router.get('/auth/facebook/callback', passport.authenticate('facebook', {
  successRedirect: '/page',
  failureRedirect: '/'
}))

router.get('/page', (req, res, next) => {
  const token = req.session.passport.user.accessToken
  axios.get(`${api.url}/me/accounts`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(response => response.data)
    .then(accounts => {
      res.status(200).json(accounts)
    })
    .catch(err => next(err))
})

module.exports = router
