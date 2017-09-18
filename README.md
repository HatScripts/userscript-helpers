# Usage examples

Add to your userscript's (metadata block)[https://wiki.greasespot.net/Metadata_Block]:
`// @require https://gist.github.com/HatScripts/.../applyCss.min.js`

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