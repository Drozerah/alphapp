const hbs = require('hbs')
const path = require('path')
/**
* View Engine settings
*/
module.exports = (app) => {
  // specify view engine
  app.set('view engine', 'hbs')
  // specify views path
  app.set('views', path.join(process.cwd(), 'views'))
  // specify entire application default layout
  app.set('view options', { layout: 'layouts/default-layout' })
  // specify/register path to partials
  hbs.registerPartials(path.join(process.cwd(), '/views/partials'))
}
