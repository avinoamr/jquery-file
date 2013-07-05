jquery-file
===========

jQuery library for converting simple buttons and elements into file selection boxes

Usage
=====

Download the add the `jquery-file.js` file to your HTML document:

```html
<script src="http://code.jquery.com/jquery-1.10.2.min.js" type="text/javascript"></script>
<script src="jquery-file.js" type="text/javascript"></script>
```

Note the dependency on jQuery.

Next, create the DOM element you wish to use as the trigger button of the file selection:

```html
<button>Click me to choose a file</button>
```

And finally, call jQuery's `.file()` method on this element in order to turn it on:

```javascript
$( "button" ).file();
```

That's it. Clicking the button will cause it to open the file selection dialog.
