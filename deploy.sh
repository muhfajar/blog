#!/bin/sh
set -e

printf "\033[0;32mGenerating static page...\033[0m\n"

hugo --minify --cleanDestinationDir --gc

printf "\033[0;32mDeploying updates to GitHub...\033[0m\n"

cd public

find . -name .DS_Store -print0 | xargs -0 git rm -f --ignore-unmatch

echo "muhfajar.blog\c" > CNAME
echo .DS_Store >> .gitignore

git add .

msg="[BOT] Rebuilding site $(date)"
if [ -n "$*" ]; then
	msg="$*"
fi

git commit -m "$msg"

git push origin master
