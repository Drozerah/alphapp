'use strict'
require('dotenv').config()
const session = require('express-session')
/**
 * Express Session Initialization
 */
module.exports = (app) => {
  app.use(session({
    secret: process.env.SESSION_SECRET, // .env file value
    saveUninitialized: true,
    resave: true
  }))
}
