#!/usr/bin/env sh

# 发生任何错误时终止
set -e

git add .
git commit -m 'feat: :zap: add workflows'
git push origin master

cd -
