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
  .post((req, res, next) => {
    try {
      console.log('[post][/login]') // * error log
      return res.send('post login')
    } catch (error) {
      console.log('[error][post][/login]') // * error log
      next(error)
    }
  })

module.exports = router
