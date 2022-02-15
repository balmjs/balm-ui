#!/bin/bash

DistTags=$(npm view balm-ui dist-tags --json)
LegacyVersion=$(echo "$DistTags" | jq --raw-output '.legacy')

npm run docs
cd dist
git init
git add -A
git commit -m "update official site for balm-ui@$LegacyVersion"
git push -f git@github.com:balmjs/v8.material.balmjs.com.git master:gh-pages
