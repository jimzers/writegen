# Project Workflow

Having an organized project workflow is important for keeping the project somewhat organized. Here's a workflow to follow:

##### Important rule of thumb: Don't rewrite the history!!! That means NO `git push -f`

## When you have a feature / bug fix you need to work on:

1. Create your own branch
2. Write the code
3. Make a pull request for your branch
4. Get pull request reviewed
5. Merge into master branch

## Creating your own branch

```shell script
# update master branch locally
git checkout master
git fetch
git rebase origin/master

# create branch
git checkout -b branch-name

# change your files, drink some coffee, spill coffee on keyboard... do whatever

# add any specific files if not committing everything:
git add file/path/here

# commit (add -a for all changed files, --verbose for an overview of changes made)
git commit -m "commit message here"

# push to github, only need to do '--set-upstream' once. also replaceable with -u
git push --set-upstream origin branch-name
```

## Pulling the latest master changes to your branch

Note: do this before sending a pull request into master!

```shell script
# make sure code is up to date:
git fetch
git checkout branch-name
git rebase origin/branch-name

# merge in the latest master code
git merge origin/master

# resolve any merge conflict here

# should say that you're ahead of origin now
git status

git push
```

Good luck gitting!
