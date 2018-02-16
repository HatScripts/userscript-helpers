# Userscript helpers
General helper functions for use in userscripts, bookmarklets, or wherever else you need them.

* [`ready()`](#ready) - Specify a function to execute when the DOM is fully loaded.
* [`applyCss()`](#applycss) - Applies a string of CSS to the document.
* [`toggleCss()`](#togglecss) - Toggles a string of CSS within the document.
* More to come. Feel free to request a function to be added.

## `ready()`
> Specify a function to execute when the [DOM][dom] is fully loaded.

This function is a vanilla JavaScript equivalent to [jQuery][jq]'s [.ready()][jq-ready].

This function is useful if you want a part of your code to execute only after the DOM has loaded. If you want your entire script to run after the DOM has loaded, then you should instead use [`@run-at document-start`][gs-run-at] in your metadata block.

To use it in your userscript, add this line to the [metadata block][gs-meta]:
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

This function is intended to be a more robust alternative to [GM_addStyle][gs-add-style].

To use it in your userscript, add this line to the [metadata block][gs-meta]:
```js
// @require https://rawgit.com/HatScripts/UserscriptHelpers/master/applyCss.min.js
```
And then call it like so:
```js
applyCss('body { color: white; background-color: black; } img { border: 0; }');
```
Or with a multi-line string ([ES6+][multi-line]):
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

## `toggleCss()`
> Toggles a string of CSS within the document.
> If the specified CSS has not been applied to the page, it will be, else it will be removed.

To use it in your userscript, add this line to the [metadata block][gs-meta]:
```js
// @require https://rawgit.com/HatScripts/UserscriptHelpers/master/toggleCss.min.js
```
And then call it like so:
```js
toggleCss('body { color: white; background-color: black; } img { border: 0; }');
```
Or with a multi-line string ([ES6+][multi-line]):
```js
toggleCss(`
body {
  color: white;
  background-color: black;
}
img {
  border: 0;
}
`);
```

[dom]: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction "Document Object Model"
[multi-line]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Multi-line_strings
[jq]: https://jquery.com/ "jQuery is a cross-platform JavaScript library designed to simplify the client-side scripting of HTML."
[jq-ready]: https://api.jquery.com/ready/ "The .ready() method offers a way to run JavaScript code as soon as the page's Document Object Model (DOM) becomes safe to manipulate."
[gs-meta]: https://wiki.greasespot.net/Metadata_Block "The metadata block is a section of a userscript that contains information about the script, such as the script name, namespace, description, and include and exclude rules."
[gs-run-at]: https://wiki.greasespot.net/Metadata_Block#.40run-at
[gs-add-style]: https://wiki.greasespot.net/GM_addStyle "The GM_addStyle method adds a string of CSS to the document."
