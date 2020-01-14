#!/bin/bash
set -xe
#
if [ $TRAVIS_BRANCH == 'master' ] ; then
  eval "$(ssh-agent -s)"
  ssh-add
  npm run build
  rsync -r --quiet --delete-after $TRAVIS_BUILD_DIR/build $DEPLOY_USER@$DEPLOY_ADDR:$DEPLOY_DIR
else
  echo "Not deploying, since this branch isn't master."
fi
