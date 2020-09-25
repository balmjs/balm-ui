#!/bin/bash

npm run docs
cd dist
git init
git add -A
git commit -m 'update official site'
git push -f git@github.com:balmjs/next.material.balmjs.com.git master:gh-pages
