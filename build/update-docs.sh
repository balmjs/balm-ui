npm run docs
cd dist
git init
git add -A
git commit -m 'update official site'
git push -f git@github.com:balmjs/ui-vue.git master:gh-pages
