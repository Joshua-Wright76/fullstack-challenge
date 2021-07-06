#!/bin/sh

REPO_ROOT=$(pwd)
FRONTEND_DIR="$REPO_ROOT"/frontend
BACKEND_DIR="$REPO_ROOT"/backend

echo "ensuring frontend dependencies..."
cd "$FRONTEND_DIR" || exit
npm install

echo "ensuring backend dependencies..."
cd "$BACKEND_DIR" || exit
npm install

echo "starting development servers..."
(cd "$BACKEND_DIR" && npm start) & (cd "$FRONTEND_DIR" && FORCE_COLOR=true npm start | cat) && fg
