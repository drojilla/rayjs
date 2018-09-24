#!/usr/bin/env bash
echo
echo "****************** INIT *******************"

echo "Step 1: Concatenating rayNS source files into a single file into /dist/rayNS.js..."
cat src/RayNS/*.js >dist/rayNS.js

echo "Step 2: Concatenating main and RayNS source files into a single file into /dist/ray.js..."
cat dist/RayNS.js src/main.js >dist/ray.js

echo "Step 3: Minifying ray file into /dist/ray-min.js..."
uglifyjs dist/ray.js --compress --mangle --output dist/ray-min.js

echo "Step 4: Concatenating Ray source files and RaySim source files into a single file into /dist/raySim.js..."
cat dist/RayNS.js src/RaySimNS/*.js >dist/raySim.js

echo "****************** DONE *******************"