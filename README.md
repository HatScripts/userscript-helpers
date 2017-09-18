# Usage examples

Add to your userscript's [metadata block](https://wiki.greasespot.net/Metadata_Block):
`// @require https://cdn.rawgit.com/HatScripts/79806c517950a0b11c3248749ebc7a5e/raw/d27bcb67f7f017be0034d7cd0044fb3abab82c63/applyCss.min.js`

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