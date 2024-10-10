#!/user/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m "New Deplotment"
git push -f git@github.com:tuanpham0012/admin-shop-app.git main:gh-pages

cd -
