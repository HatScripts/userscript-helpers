# Userscript helpers
Some helper functions for userscripts, including:
* [`applyCss()`](#applyCss) - Applies a string of CSS to the document
* More to come...

## `applyCss()`
> Applies a string of CSS to the document

This function is intended to be a more robust alternative to [GM_addStyle](https://wiki.greasespot.net/GM_addStyle).

To use it in your userscript, add this line to the [metadata block](https://wiki.greasespot.net/Metadata_Block):
```js
// @require https://rawgit.com/HatScripts/UserscriptHelpers/master/applyCss.min.js
```
And then call it like so:
```js
applyCss('body { color: white; background-color: black; } img { border: 0; }');
```
Or with a multi-line string ([ES6+](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Multi-line_strings)):
```js
applyCss(`
body {
  color: white;
  background-color: black;
}
img {
  border: 0;
}
`);
```
