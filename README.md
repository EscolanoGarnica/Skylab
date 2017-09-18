
Skylab Bootcamp 2017
====================
# BASIC TOOLS

## CONSOLE

### Useful commands

How to see path to working directory:

```bash
$ pwd
```

How to list files in directory:

```bash
$ ls
```

How to change directory:

```bash
$ cd
```

How to create a directory:

```bash
$ mkdir
```

How to create an empty file:

```bash
$ touch <file>
```

How to create a file with content in one command:

```bash
$ echo "<content with spaces>" > helloworld.txt
```

How to see the content of a text file:

```bash
$ cat <file>
```

or with less:

```bash
$ less <file>
```

How to remove a file:

```bash
$ rm
```

How to copy a file:

```bash
$ cp <from-file> <to-file>
```

How to copy a directory:

```bash
$ cp -r <from-file> <to-file>
```

How to move or rename a file or directory(only rename):

```bash
$ mv <from-file-or-directory> <to-file-or-directory>
```

How to move a directory with content:
```bash
$ mv -r <from-directory> <to-directory>
```

## MARKDOWN

### Links:
[Google](http://www.google.com)

[Google](http://www.google.com "google!")

### References:

This is [an example][id] reference-style link
[id]: http://example.com/

### Tables:

<table>
    <tr>
        <td>Hello</td><td>World</td>
    </tr>
</table>

### Code block:

<code>This is a code block</code>

### Lists:


1. Bird
2. McHale
3. Parish

* One
* Two
* Three

- A
- B
- C

### Emphasizes:

*Italic*
_Italic_

**Bold**
__Bold__

### Blockquotes:

Use ">" for quote and ">>" for two quotes:

>First Line
>> Second line

## GIT

### Useful commands

How to initialize a Git repository:

```bash
$ git init <repository-name>
```

How to check repositoty status:

```bash
$ git status
```

How to add changes to staging area:

```bash
$ git add <file>
```

How to add changes from staging area to my local repository:

```bash
$ git commit -m "Add a comment changes"
```

How to see a commit's log:

```bash
$ git log
```

How to uptdates changes to master branch:

```bash
$ git push
```

How to update my local repository from master branch:

```bash
$ git pull
```
