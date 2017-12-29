/**
 * Toggles a string of CSS within the document.
 * If the specified CSS has not been applied to the page, it will be, else it will be removed.
 * @param {String} css - A string of CSS.
 * @returns {boolean} Whether the CSS was added (true) or removed (false).
 * @see https://stackoverflow.com/a/34842797/2203482
 */
function toggleCss(css) {
    // Get hash of the CSS string to use as the id.
    var id = '' + css.split('').reduce(function (prevHash, currVal) {
        return ((prevHash << 5) - prevHash) + currVal.charCodeAt(0)
    }, 0);
    var style = document.getElementById(id);
    if (style) {
        // The CSS was found on the page; remove it and return false.
        style.parentNode.removeChild(style);
        return false;
    } else {
        // The CSS was not found on the page; add it and return true.
        style = document.createElement('style');
        style.id = id;
        style.appendChild(document.createTextNode(css));
        var parent = document.querySelector('head') || document.body || document.documentElement;
        parent.appendChild(style);
        return true;
    }
}
