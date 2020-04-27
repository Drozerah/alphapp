const express = require('express')
const router = express.Router()
const { middleware, visualizer } = require('express-routes-visualizer')
/**
 * Express Routes Visualier Middleware
 * https://github.com/fdesjardins/express-routes-visualizer
 */
router.get('/', middleware({
  httpMethods: true
}), visualizer({ theme: 'plain' }))

module.exports = router
