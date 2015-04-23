---
layout: post
title:  "Sniping Commits in your Git History"
date:   2015-03-15 16:09:15
categories: jekyll update
---
Checkout. Cherry-pick. Maybe revert, instead.

For some people, a clean Git history isn't necessary. But for those who want to use a linear rebasing Git workflow (like the one below), it's all about keeping things tidy.
{<1>}![clean-git-hist](/content/images/2015/03/clean-git-hist.png)

## Visualizing your history
First, it's easier to keep track of your history if you know how you want it to look in the first place. It's also important to have a method in place for visualizing your history. Here's a way to create a bash command for a nice presentation of your history, like the one above: 
`log --pretty=format:"%h %ad | %s%d [%an]" --graph --date=short`.
I'd recommend creating an alias for  this command along the lines of `git hist`. 

With this bash command in hand, you can always keep track of where your commits are and when your commit history may have gone off the rails.

## `git revert`
If you just want to undo the effects of one or a couple commits, using `git revert <COMMIT_HASH>` might be sufficient (where <COMMIT_HASH> is the identifier for the culprit commit). 

## `git cherry-pick` for complete removal
But if you want to remove one or a set of commits from your history completely (or just attach/squash them onto another branch of your history, you can follow this process:

1. Find the cleanest branch that runs as far in time as possible and make a new branch from it. If you've kept your work on feature branches and have been doing decent code review on pull requests, your master branch is a strong candidate. Check it out (`git checkout master`), and then create a new branch to isolate what your about to do just to be safe (`git checkout -b <NEW_BRANCH>`).

2. Use the bash command in the earlier section to identify the candidates for removal. You might need to check out the commits (`git checkout <COMMIT_HASH>`) to determine the most recent commit that has all of the history you want and check that out.

3. Now, use `git reset --hard <COMMIT_HASH>` to navigate to the LAST COMMIT BEFORE THE COMMITS THAT YOU WANT TO REMOVE, AND move the branches HEAD to this location with you.

4. Find all of the commits that you want to tag onto your project history and cherry-pick them. These are most likely several subsequent commits. You can cherry-pick one commit at a time with `git cherry-pick <COMMIT_HASH>` or add on a range of consecutive commits with `git cherry-pick <START_HASH>..<END_HASH>`.

### Cherry-Picking Merge Commits 
However, if there are any merge commits in your history that you need to add on with `git cherry-pick`, you have to handle these slightly differently. You need to tell the cherry-picking process which side of the merge is the mainline of your git history using the `-m` or `--mainline` flag with a number (1 or 2). Note: using `git merge` could also be an option, which I'll talk about later.

First, use `git log <MERGE_COMMIT_HASH>` to figure out which branch of the merge you want to have as your base, or mainline. You'll get an output that looks like this: 
{<2>}![git log readout](/content/images/2015/03/Screen-Shot-2015-03-15-at-11-11-24-AM.png)

There are two hash values indicated, "Merge: cfa8235 a64e7a6"
The second one of these hashes is what matches my git history, so I want to specify "2" as my mainline for the cherry-pick command:
`git cherry-pick -m 2 e245e34`

### `git merge` might be better
Recently, I've read that using `git merge`, instead of `git cherry-pick -m`, is generally advisable. Cherry-picking a merge commit may collapse all the changes made in the non-mainline parent into that one commit. You lose all of its history, and glom together all their diffs. My steps going forward will be to test out the use of `git merge` in this situation.
