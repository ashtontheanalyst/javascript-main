# Personal Java Script Library
Holds all files for later reference with Java Script and HTML/CSS.

![Alt Text](./logo.png)

## Fundementals Video:
Following [THIS](https://www.youtube.com/watch?v=lfmg-EJ8gm4) fundementals
video from Bro Code as always. Very in-depth series with a lot of hand
built projects showing off the skills and techniques learned.  
**TIME:** 1:31:57

## Alias for Making Folder and Files:
I got tired of having to click through and make a folder, then make each
individual file so I put this in `~/.bashrc`:
```sh
# This is for making a folder for JS with associated files
mjs() {
  if [ -z "$1" ]; then
          echo "Usage (Makes JS folder and files): mjs <name>"
    return 1
  fi
  mkdir "$1" && cd "$1" && touch "index.html" && touch "index.js" && touch "style.css"
}
```

## Notes:
- Anything labeled with **P-** then the name, is a project. Meaning
that it has more than just lessons, it's an actual thing to look at.