set -e

if [ "$(git branch --show-current)" != "main" ]; then
    echo "You must be on main branch with no diffs to deploy"
    exit 1
fi
if [ $(git diff --name-only) ]; then
    echo "You must be on main branch with no diffs to deploy"
    exit 1
fi

cd $(git rev-parse --show-toplevel)

npm run build

git add dist -f
git commit -m "Build site"
git subtree push --prefix dist origin gh-pages

cd -
