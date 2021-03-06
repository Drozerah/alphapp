const express = require('express')
const router = express.Router()

// middleware that is specific to this router
// router.use(function timeLog (req, res, next) {
//   console.log('register call') // !DEBUG
//   next()
// })
/**
 * Register Route Handle
 */
router.route('/')
  // GET
  // Template engine
  // [x] add layout
  // [x] add view
  // [x] add form css
  .get((req, res, next) => {
    try {
      return res.render('auth/register_view', // view file
        {
          layout: 'layouts/auth_layout', // layout file
          css: req.app.locals.authCss, // CSS file
          pageTitle: 'Register Page',
          formTitle: 'Create your account'
        }
      )
    } catch (error) {
      console.log('[error][get][/register]') // * error log
      next(error)
    }
  })
  // POST
  // TODO
  // [ ] remove redirection on POST action
  .post((req, res, next) => {
    console.log('[post][/register]') // * error log
    try {
      console.log(req.body) // !DEBUG
      return res.redirect('./register?posted=true')
    } catch (error) {
      console.log('[error][post][/register]') // * error log
      next(error)
    }
  })

module.exports = router
