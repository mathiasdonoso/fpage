const router = require('express').Router()

router.use(require('./login/routes'))
router.use(require('./processing/routes'))

module.exports = router
