/**
 * View engine configuration
 */
module.exports = (app) => {
  // Set up production CSS file
  const defaultCssPrefix = 'styles'
  app.locals.css = process.env.MODE === 'production' ? `${defaultCssPrefix}.min.css` : `${defaultCssPrefix}.css`
  const authCssPrefix = 'auth'
  app.locals.authCss = process.env.MODE === 'production' ? `${authCssPrefix}.min.css` : `${authCssPrefix}.css`
}
