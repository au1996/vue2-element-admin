#!/usr/bin/env sh

# 发生任何错误时终止
set -e

git add .
git commit -m 'chore: update axios version'
git push origin master

cd -
