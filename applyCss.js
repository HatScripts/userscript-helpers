/**
 * Applies a string of CSS to the document. It creates a new <style>
 * element, adds the given CSS to it, and inserts it into the <head>.
 * @param {string} css - A string of CSS.
 * @param {boolean} minify - Whether to apply simple regex-based minification to the CSS string.
 */
function applyCss (css, minify = true) {
  if (minify) {
    css = css.replace(/\s|\/\*.*?\*\//gs, '')
  }
  const style = document.createElement('style')
  style.appendChild(document.createTextNode(css))
  const parent = document.head || document.body || document.documentElement
  parent.appendChild(style)
}
