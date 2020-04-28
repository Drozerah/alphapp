const express = require('express')
const router = express.Router()
const json = require('../package.json')

router.get('/', (req, res, next) => {
  try {
    return res.render('home_view', // view file
      {
        css: req.app.locals.defaultCss, // css file
        title: 'αlphαpp',
        version: json.version
      }
    )
  } catch (error) {
    console.log('[error][get][/]') // * error log
    next(error)
  }
})

module.exports = router
