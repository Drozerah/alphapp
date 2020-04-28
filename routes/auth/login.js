const express = require('express')
const router = express.Router()
/**
 * Login Route Handler
 */
router.route('/')
  // GET
  // Template engine
  // [x] add layout
  // [x] add view
  // [x] add form css
  .get((req, res, next) => {
    try {
      return res.render('auth/login_view', // view file
        {
          layout: 'layouts/auth_layout', // layout file
          css: req.app.locals.authCss, // CSS file
          pageTitle: 'Login Page',
          formTitle: 'Log in to your account'
        }
      )
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
