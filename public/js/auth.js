(() => {
  /**
   * Remove lang parameters from URL when the page is loaded
   * and without refreshing it
   * @link https://stackoverflow.com/a/35515584
   */
  // get the string following the ?
  const query = window.location.search.substring(1)
  // check search params exist and includes string
  if (query.length && query.includes('lang')) {
    // are the new history methods available ?
    if (window.history !== undefined && window.history.pushState !== undefined) {
      // if pushstate exists, add a new state to the history,
      // this changes the url without reloading the page
      window.history.pushState({}, document.title, window.location.pathname)
    }
  }
  /**
   * Select language Event
   */
  const selectLang = document.querySelector('#changeLanguage')
  selectLang.onchange = (e) => {
    e.preventDefault()
    location = e.target.value
  }
})()
