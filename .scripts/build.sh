#!/bin/bash
set -e

#workaround. bash profile is not loaded; see https://github.com/appleboy/ssh-action/issues/21
export NVM_DIR=~/.nvm
source ~/.nvm/nvm.sh

git pull origin main
npm install
npm run build