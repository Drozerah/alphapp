const i18n = require('i18n-express')
const path = require('path')
/**
 * Express i18n-express initialization
 *
 * @doc https://www.npmjs.com/package/i18n-express
 */
module.exports = (app) => {
  app.use(i18n({
    translationsPath: path.join(__dirname, './i18n_lang'), // Translations files path.
    browserEnable: false, // Try to get user lang from browser headers.
    paramLangName: 'lang', // Get url param to change user lang.
    defaultLang: 'en', //  If all others methods fail, use this lang.
    siteLangs: ['en', 'fr'], // Array of supported langs.
    textsVarName: 'translation' // Name of variable which holds the loaded translations.
  }))
}
