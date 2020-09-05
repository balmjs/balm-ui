#!/bin/bash

npm run docs
cd dist
git init
git add -A
git commit -m 'update official site'
git push -f git@github.com:balmjs/balm-ui.git master:gh-pages
