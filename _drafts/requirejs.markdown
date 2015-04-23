---
layout: post
title:  "RequireJS"
date:   
categories: jekyll update
---
Everyone who has used Node.js loves the way that this platform allows you to load libraries and set their names to anything using `require`
For example, 
```var http = require('http');
var express = require('express');
```

From here, if you're using libraries available in npm, all you have to do is npm install them. To do this, you simply create a package.json file in your project directory and enter `npm install --save http express` into your terminal within that directory).

However, it's not nearly so easy to use and manage libraries between files on the front end, or whenever you're not using Node. You could simply load all of your libraries onto the global scope of the browser window, but that can create a lot of clutter in the global namespace.

Enter RequireJS, the JavaScript module loader.



