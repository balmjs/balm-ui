#!/bin/bash

DistTags=$(npm view balm-ui dist-tags --json)
LatestVersion=$(echo "$DistTags" | jq --raw-output '.latest')

npm run docs
cd dist
git init
git add -A
git commit -m "update official site for balm-ui@$LatestVersion"
git push -f git@github.com:balmjs/material.balmjs.com.git master:gh-pages
