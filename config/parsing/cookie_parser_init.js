const cookieParser = require('cookie-parser')
/**
 * Express cookie-parser initialization
 *
 * @doc https://www.npmjs.com/package/cookie-parser
 */
module.exports = (app) => {
  // parse application/json
  app.use(cookieParser())
}
