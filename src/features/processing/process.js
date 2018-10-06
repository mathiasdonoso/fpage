const process = (req, res, next) => {
  const id = req.session.passport.user.id

  res.status(200).json(id)
}

module.exports = {
  process
}
