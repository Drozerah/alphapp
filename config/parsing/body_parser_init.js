/**
 * Express body-parser initialization
 *
 * @doc https://github.com/expressjs/body-parser
 */
module.exports = (app, express) => {
  // parse application/json
  app.use(express.json())
  // parse application/x-www-form-urlencoded
  app.use(express.urlencoded({ extended: true }))
}
