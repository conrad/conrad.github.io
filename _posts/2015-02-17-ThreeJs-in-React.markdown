---
layout: post
title:  "Implementing 3D Rendering Libraries Inside React.js"
date:   2015-02-17 16:09:15
categories: jekyll update
---
If you're into putting 3D graphics in your web applications (or you want to be), you might like to try out Three.js and/or Famo.us. Both of these libraries are pretty amazing with what they can do in the browser. If you want to build an application that's not entirely in 3D, however, it can be a bit of a beast to integrate these 3D scenes inside elements of another framework.

I'm working in a group that has started an application with a React/Flux framework. I've been working on a creating a potential visualization within React components using both Famo.us and Three.js, so I've just gone through this process with Famo.us, and I'm in the middle of making the integration happen with Three.js. Here's the easiest process I've found (some sample code provided below):

(1) Place all of your Famo.us or Three.js code inside a method;<br>
(2) **Browserify** your files so that you can use `require` to pull in all of your dependencies (to see how to do this, just check out the Gulpfile code in my prior post);<br>
(3) Export your object with the desire method using `module.exports`, which is also enabled by **browserify**;<br>
(4) Create a `<div>` with a custom ID that you also set inside Famo.us/Three.js as as the element where the scene will render;<br>
(5) Require the desired Famo.us/Three.js object in the React component that has the specified `<div>` and invoke the appropriate method in the built-in `ComponentDidMount` method for React components.

Now, your 3D scene shows up only when the precise React component has mounted. Initially, I thought that I might have to erase the scene with a method that would be invoked inside the `ComponentWillUnmount`, but so far that hasn't been the case. If anything changes on that front, I'll make sure to update this post.

Here is some sample code demonstrating the steps above:

The React Component: 
```
/**
 * @jsx React.DOM
 */

var React = require('react');
var Famous = require('../famous/famous-scene.js');

module.exports = React.createClass({

  componentDidMount: function() {
    Famous.displayScene(); 
  },

  render: function () {
    return (
      <div id="famous-scene" data={this.props.data} />
    );
  }
});
```
<br>
The Famo.us scene:
```
var Engine = famous.core.Engine; 
var StateModifier = famous.core.Modifier;
var Transform = famous.core.Transform;
var Surface = famous.core.Surface;
// Note: This path syntax is enabled with Famo.us version 0.3.

var Famous = {

  displayScene: function( ) {
    var destElement = document.getElementById('famous-scene');
    var mainContext = Engine.createContext(destElement);

    createSurface();

    function createSurface() {
      var surface = new Surface({
        size: [100, 100],
        content: 'surface',
        properties: {
          color: 'white',
          textAlign: 'center',
          backgroundColor: '#FA5C4F'
        }
      });

      mainContext.add(surface);
    }
  }
};

module.exports = Famous;
```

Once you've implemented the scene in this way, your scene should have its dimensions automatically set to those of its parent element. In Famo.us, the positioning is set to be "absolute", so you'll probably need to play with the CSS in order to make sure that the boundaries of the parent element don't collapse.

While Famo.us appears to be incredibly fast, it doesn't pop out the same way that our Three.js renderings have. Famo.us has a 3D layout engine, but it renders primarily 2-dimensional objects. So despite having worked on this integration, I'm planning to focus on our work in Three.js.

It would be a fascinating analysis to understand whether using React and Famo.us effectively leverages the strengths of these two technologies--each touted as being incredibly fast on its own. The intriguing piece to this analysis is that Famo.us renders incredibly quickly specifically because it seems to create and work with a flattened version of the DOM tree. On the other hand, React works well specifically by nesting one component after the other and passing along updates quickly down the tree, rendering only the differences in the data. This setup couches two different paradigms together.