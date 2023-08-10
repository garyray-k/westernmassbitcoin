#!/bin/bash
git checkout --orphan gh-pages
npm run build
cat westermassbitcoin.com > dist/CNAME
echo 'westermassbitcoin.com' > dist/CNAME
git --work-tree dist add --all
git --work-tree dist commit -m 'gh-pages deploy'
git push origin HEAD:gh-pages --force 
rm -rf dist/
git checkout -f main
git branch -D gh-pages 
echo "completed deploying."