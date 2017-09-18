# Userscript helpers
Some helper functions for userscripts.

### Usage examples
Add to your userscript's [metadata block](https://wiki.greasespot.net/Metadata_Block):
`// @require https://cdn.rawgit.com/HatScripts/UserscriptHelpers/3c55360a/applyCss.min.js`

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
