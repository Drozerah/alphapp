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
  .post((req, res, next) => {
    try {
      console.log('[post][/register]') // * error log
      return res.send('post register')
    } catch (error) {
      console.log('[error][post][/register]') // * error log
      next(error)
    }
  })

module.exports = router
