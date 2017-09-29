# Userscript helpers
Some helper functions for userscripts, including:
* [`ready()`](#ready) - Specify a function to execute when the DOM is fully loaded.
* [`applyCss()`](#applycss) - Applies a string of CSS to the document.
* More to come...

## `ready()`
> Specify a function to execute when the DOM is fully loaded.

This function is a vanilla JavaScript equivalent to [jQuery](https://jquery.com/)'s [.ready()](https://api.jquery.com/ready/).

This function is useful if you want a part of your code to execute only after the DOM has loaded. If you want your entire script to run after the DOM has loaded, then you should instead use [`@run-at document-start`](https://wiki.greasespot.net/Metadata_Block#.40run-at) in your metadata block.

To use it in your userscript, add this line to the [metadata block](https://wiki.greasespot.net/Metadata_Block):
```js
// @require https://rawgit.com/HatScripts/UserscriptHelpers/master/ready.min.js
```
And then call it like so:
```js
ready(function() {
  console.log('DOM is ready');
});
```

## `applyCss()`
> Applies a string of CSS to the document.

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
