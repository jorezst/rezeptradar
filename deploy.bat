cd .\dist\

git init
git add -A
git commit -m "new Deployment"
git push -f git@github.com:jorezst/rezeptradar.git master:gh-pages

cd ..