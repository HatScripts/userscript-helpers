/**
 * Hashes a string.
 * @param {String} str - The string to hash.
 * @returns {number} The generated hash code.
 * @see https://stackoverflow.com/a/34842797/2203482
 */
function hashCode(str) {
    return str.split('').reduce((prevHash, currVal) =>
        ((prevHash << 5) - prevHash) + currVal.charCodeAt(0), 0);
}

/**
 * Toggles a string of CSS within the document.
 * If the specified CSS has not been applied to the page, it will be, else it will be removed.
 * @param {String} css - A string of CSS.
 * @returns {boolean} Whether the CSS was enabled or disabled.
 */
function toggleCss(css) {
    var id = '' + hashCode(css);
    var style = document.getElementById(id);
    if (style) {
        style.parentNode.removeChild(style);
        return false;
    } else {
        style = document.createElement('style');
        style.id = id;
        style.appendChild(document.createTextNode(css));
        var parent = document.querySelector('head') || document.body || document.documentElement;
        parent.appendChild(style);
        return true;
    }
}
