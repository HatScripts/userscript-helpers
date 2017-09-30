/**
 * Specify a function to execute when the DOM is fully loaded.
 * @param {function} fn - A function to execute after the DOM is ready.
 * @see https://learn.jquery.com/using-jquery-core/document-ready/
 * @see http://youmightnotneedjquery.com/#ready
 * @see https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
 * @see https://caniuse.com/#feat=domcontentloaded
 */
function ready(fn) {
    if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}
