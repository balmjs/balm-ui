#!/bin/bash

npm run docs
cd dist
git init
git add -A
git commit -m 'update official site for balm-ui@8'
git push -f git@github.com:balmjs/v8.material.balmjs.com.git master:gh-pages
