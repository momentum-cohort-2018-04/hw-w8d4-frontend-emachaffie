const usersdb = require('./users.js')
var passport = require('passport')
var Strategy = require('passport-http').BasicStrategy

// Configure the Basic strategy for use by Passport.

passport.use(new Strategy(
  function (username, password, cb) {
    const user = usersdb.findByUsername(username)
    if (!user) { return cb(null, false) }
    if (user.password !== password) { return cb(null, false) }
    return cb(null, user)
  }
))

module.exports = passport.authenticate('basic', { session: false })
