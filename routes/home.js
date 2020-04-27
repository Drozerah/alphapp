const express = require('express')
const router = express.Router()
const json = require('../package.json')

console.log(json.version) // !DEBUG

router.get('/', (req, res, next) => {
  try {
    const config = {
      css: req.app.locals.css // CSS file
    }
    return res.render('home', {
      config,
      title: 'αlphαpp',
      version: json.version
    })
  } catch (error) {
    console.log('[error][get][/]') // * error log
    next(error)
  }
})

module.exports = router
