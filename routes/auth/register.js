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
  .get((req, res, next) => {
    try {
      const config = {
        css: req.app.locals.css // CSS file
      }
      return res.render('auth/register', {
        config,
        title: 'Create your account'
      })
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
