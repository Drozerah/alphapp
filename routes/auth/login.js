const express = require('express')
const router = express.Router()
/**
 * Login Route Handler
 */
router.route('/')
  // GET
  .get((req, res, next) => {
    try {
      const config = {
        css: req.app.locals.css // CSS file
      }
      return res.render('auth/login', {
        config,
        title: 'Log in to your account'
      })
    } catch (error) {
      console.log('[error][get][/login]') // * error log
      next(error)
    }
  })
  // POST
  // TODO
  // [ ] remove redirection on POST action
  .post((req, res, next) => {
    console.log('[post][/login]') // * error log
    try {
      console.log(req.body) // !DEBUG
      return res.redirect('./login?posted=true')
    } catch (error) {
      console.log('[error][post][/login]') // * error log
      next(error)
    }
  })

module.exports = router
