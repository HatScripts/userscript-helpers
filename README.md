# Userscript helpers
Some helper functions for userscripts, including:
* applyCss - A more robust alternative to [GM_addStyle](https://wiki.greasespot.net/GM_addStyle)
* More to come...

### Usage examples
Add to your userscript's [metadata block](https://wiki.greasespot.net/Metadata_Block):
```javascript
// @require https://cdn.rawgit.com/HatScripts/UserscriptHelpers/3c55360a/applyCss.min.js
```
And then call it like so:
```javascript
applyCss('body { color: white; background-color: black; } img { border: 0; }');
```
Or with a multi-line string ([ES6+](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Multi-line_strings)):
```javascript
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
