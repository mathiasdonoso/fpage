const router = require('express').Router()
const { process } = require('./process')

router.use('/process', process)

module.exports = router
