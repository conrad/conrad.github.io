---
layout: post
title:  "Setting up Sublime Text 3 as your Git Editor"
date:   2015-02-04 16:09:15
categories: jekyll update
---
If you want Sublime Text 3 to pop up as your editor whenever you execute `git commit`, `git rebase -i HASH`, or the like, it may take a relatively simple bash (or zsh) command. But there are one or two pitfalls to watch out for. I just spent a few minutes teaching myself a bit about bin folder maintenance, setting one's bashrc/zshrc PATH, and editing one's `.gitconfig` file in order to get this editor set as Git's default on my machine.

## tl;dr

If your Sublime Text 3 and bin folder are already configured perfectly, this terminal command should do the trick:
  `git config --global core.editor "subl -n --wait"`

If this doesn't work, make sure that your Sublime Text alias is set up in the proper bin directory.

## Setting up your Sublime Alias in bin

On my machine, I have a long list of aliases defined in a .bash_profile file. These aliases create custom terminal commands that you can execute manually. However, processes calling the bash commands require a binary command file to exist in a directory accessible by a PATH, defined either your machine's $PATH or extended in a .bashrc (or .zshrc) file. 

This might be done with a line like so: `export PATH="$PATH:$HOME/bin"`. 
In your .bashrc file, this line of code should add the ~/bin folder as a potential location for binary commands. Learning about these settings has been fascinating so far. If you're interested in learning more [here](http://www.linfo.org/bin.html) is a good place to start.

In order for these sorts of paths to find `subl` as a command, you need to a have a file one of the appropriate bin folders. With Sublime Text 3 (not 2), you can accomplish this with the following command in the terminal:
`ln -s "/Application/Sublime Text/.app/Contents/SharedSupport/bin/subl" /usr/local/bin/subl`

This command will add the file to directory in the path at its end: `/usr/local/bin/subl`. This directory is one of many, technically including any of the locations listed when you enter `$PATH` in the command line--each possible path is separated by colons ":").  This path is probably the best option, or maybe `~/bin/subl`. 

By the way, make sure that these directories exist on your machine. Otherwise, you'll be set with an alias binary command to Sublime Text 3.

## Editing .gitconfig

Now, to have Git use Sublime Text 3 as its editor when you `git commit` or `git rebase -i...`, you must edit your .gitconfig file in your HOME folder (~). You can edit it directly, or you can do it in the terminal command line. Unfortunately, pretty much all of the information on this out there is for Sublime Text 2, and Sublime Text 3 requires a slight change for the .gitconfig file to work with the editor properly. 

Instead of using a lowercase `-w` to tell the terminal to wait to continue until the editor has been closed, you have to use `--wait`. The documentation for Sublime Text 3 says that an uppercase `-W` should work, but unfortunately that's wasn't true for me in this case. I'd love some feedback if you have a different experience. 

This text required in .gitconfig can go at the end of the file:
`editor = subl -n --wait`

The following terminal command will enter this text into the file:
`git config --global core.editor "subl -n --wait"`

There you go.




