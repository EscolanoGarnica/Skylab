## GIT

### Useful commands

How to initialize a local Git repository:

```bash
$ git init <repository-name>
```

How to init a bare repository:

```bash
$ git init --bare
```

How to clone a repository, from remote repo to local repo:

```bash
$ git clone <url>
```

How to check repositoty status:

```bash
$ git status
```

How to add changes to staging area:

```bash
$ git add <file-or-directory>
```

How to remove changes from staging area:

```bash
git rm --cached <file-or-dorectory>
```

How to add changes from staging area to my local repository:

```bash
$ git commit -m "Add a comment to describe commit"
```

How to see a commit's log:

```bash
$ git log
```

How to uptdates changes to remote repository:

```bash
$ git push
```

How to update my local repository from remote repository:

```bash
$ git pull
```

How to return to a before version:

```bash
$ git chekcout <commit-code>
```

How to create a new branch:

```bash
$ git branch <name-new-branch>
```

How to create and change a new branch:

```bash
$ git checkout -b <name-new-branch>
```

How to see the branch working:

```bash
$ git branch
```

How to change branch:

```bash
$ git branch <name-branch>
```

How to merge my branch with another branch:

```bash
$ git merge <name-branch> 
```

How to delete branch:

```bash
$ git branch -d <name-branch>
```
