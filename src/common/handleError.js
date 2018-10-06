const handleError = (err, req, res, next) => {
  console.error(err.stack)
  next()
}

module.exports = handleError
