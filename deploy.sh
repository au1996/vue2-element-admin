#!/usr/bin/env sh

# 发生任何错误时终止
set -e

git add .
git commit -m 'feat: add jsconfig.json'
git push origin master

cd -
