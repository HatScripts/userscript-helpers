/**
 * Toggles a string of CSS within the document.
 * If the specified CSS has not been applied to the page, it will be, else it will be removed.
 * @param {String} css - A string of CSS.
 * @param {boolean} state - (Optional) Whether to enable (true) or disable (false) the CSS.
 * @returns {boolean} Whether the CSS was enabled (true) or disabled (false).
 * @see https://stackoverflow.com/a/34842797/2203482
 */
function toggleCss (css, state) {
  // Get hash of the CSS string to use as the id.
  const id = '' + css.split('').reduce((prevHash, currVal) => {
    return ((prevHash << 5) - prevHash) + currVal.charCodeAt(0)
  }, 0)
  let style = document.getElementById(id)
  if (style) {
    if (state === undefined || state === false) {
      // The CSS was found on the page; remove it and return false.
      style.parentNode.removeChild(style)
      return false
    } else {
      return true
    }
  } else {
    if (state === undefined || state === true) {
      // The CSS was not found on the page; add it and return true.
      style = document.createElement('style')
      style.id = id
      style.appendChild(document.createTextNode(css))
      const parent = document.head || document.body || document.documentElement
      parent.appendChild(style)
      return true
    } else {
      return false
    }
  }
}
