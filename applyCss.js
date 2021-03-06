/**
 * Applies a string of CSS to the document. It creates a new <style>
 * element, adds the given CSS to it, and inserts it into the <head>.
 * @param {string} css - A string of CSS.
 */
function applyCss (css) {
  const style = document.createElement('style')
  style.appendChild(document.createTextNode(css))
  const parent = document.head || document.body || document.documentElement
  parent.appendChild(style)
}
