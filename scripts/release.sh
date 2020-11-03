#!/bin/bash

npm run prod

LatestTag=$(git describe --tags `git rev-list --tags --max-count=1`)
echo -e "Latest version: ${LatestTag}"

echo -e "Input new release version: (e.g. v1.0.0)"
read tagName

git tag ${tagName}
git push origin ${tagName}

npm publish --tag next
