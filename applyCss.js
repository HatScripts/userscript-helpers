/**
 * Applies a string of CSS to the document. It creates a new <style>
 * element, adds the given CSS to it, and inserts it into the <head>.
 * @param {String} css - A string of CSS.
 */
function applyCss(css) {
    var style = document.createElement('style');
    style.appendChild(document.createTextNode(css));
    var parent = document.querySelector('head') || document.body || document.documentElement;
    parent.appendChild(style);
}