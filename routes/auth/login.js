const express = require('express')
const router = express.Router()

router.get('/login', (req, res, next) => {
  try {
    const config = {
      css: req.app.locals.css // CSS file
    }
    return res.render('auth/login', {
      config,
      title: 'Login view'
    })
  } catch (error) {
    console.log('[error][get][/login]') // * error log
    next(error)
  }
})

module.exports = router
