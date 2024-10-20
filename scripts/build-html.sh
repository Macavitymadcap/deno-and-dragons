#!/bin/bash

cp src/ui/index.html build

directories=("atoms" "molecules" "organisms" "templates" "pages")

for dir in "${directories[@]}"; do
    if [ -d "src/ui/$dir" ]; then
        build_path="build/$dir"
        mkdir "$build_path"
        for file in src/ui/$dir/*.html; do
            cp "$file" "$build_path"
        done
    fi
done

echo "HTML compilation complete."