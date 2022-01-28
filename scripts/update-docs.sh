#!/bin/bash

npm run docs
cd dist
git init
git add -A
git commit -m 'update official site for balm-ui'
git push -f git@github.com:balmjs/material.balmjs.com.git master:gh-pages
