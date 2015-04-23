---
layout: post
title:  "Learning React & Flux - Consideration for Project Size"
date:   2015-02-09 16:09:15
categories: jekyll update
---
Over the past week, I decided to pick up React and build out the front end for a web application that allows users to search and manage their files on Dropbox and Google Drive. Wanting to learn about Flux, which I'd heard about so much, I pieced together all the files I thought I'd need. 

The React components provide the views to the application in JSX, which is awesome. The setup is intuitive and cohesive. Any time variables inside a component change, whether state variable or property variables passed to the component, the view re-renders. Listeners for any changes elsewhere in the data are easy to add and remove into any component using the built-in `componentDidMount()` and `componentWillUnmount()` methods. You maintain state in as few components as possible, and you just keep those stated up-to-date with your source of truth, using these listeners. From the components holding state variables, the data shoots down into the rest of the components, which just access the data in the `this.props` attribute of each component.

Flux is an ingenious setup, but, in retrospect, a lower-overhead, custom model and controller would have made more sense for an application as small as this one was. Because I wanted to mingle the handling of all of the files from both Dropbox and Google Drive, I only used one store in the Flux setup. With only one store and one actions file, the dispatcher doesn't turn out to add much value. The constants file is amazingly useful, but its value correlates with the number of variables you're having to keep up with. Disengaging the application from the Flux architecture only requires a handful of changes in references to the Actions file and the Store. 

I'm planning either to refactor this project into a more streamlined approach or to try my hand at a couple more projects, where I can try a more stripped-down approach.

On the other hand, I worked with a couple friends in the last few days to refactor an Angular project to incorporate React, using the ngReact library. This library is great and well-documented. I'll have to see if this hybrid setup makes sense in the near future. After a few projects in Angular, it was refreshing in React to have a greater sense of visibility into what the code was doing. 

If you get the chance, I would certainly give React a try. Here are some great starting places:

* [Egghead - React Tutorial Videos & Examples](https://egghead.io/lessons/react-development-environment-setup)
These videos are great primers, but keep in mind there are a few minor practices that they use that are being deprecated. For example, they use the method renderComponent instead of render, which causes a warning, but still works. For the most up-to-date practices (but, frankly, not as good of a walkthrough), look to the other sources below.

* [Facebook Example Code for Simple Apps](https://github.com/facebook/flux/tree/master/examples)
Learn by going to the source. Use their code as a model. The architecture is based straight off of these example projects.

* [React Docs](http://facebook.github.io/react/) and [Flux Docs](https://facebook.github.io/flux/)
Again, the source. Good as gold with these prior examples.

Remember, React is a view renderer. That is all. Flux is a methodology/architecture for manipulating and storing the information that you're rendering. Basically, Flux is one way to build the "MC" of your MVC (with React being your "V"). Here are some other materials to bring you up to speed on React and Flux:



