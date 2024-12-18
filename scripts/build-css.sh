#!/bin/bash

output_css_file="build/static/styles.css"

mkdir -p "$(dirname "$output_css_file")"

# Clear the output file if it already exists
> "$output_css_file"

append_file() {
    if [ -f "$1" ]; then
        cat "$1" >> "$output_css_file"
        echo "" >> "$output_css_file"  # Add a newline for separation
    fi
}

append_file "src/ui/atoms/properties.css"

directories=("atoms" "molecules" "organisms" "pages")

for dir in "${directories[@]}"; do
    if [ -d "src/ui/$dir" ]; then
        for file in src/ui/$dir/*.css; do
            # Skip properties.css and media.css in the atoms directory
            if [[ "$dir" == "atoms" && ("$file" == *"properties.css" || "$file" == *"media.css") ]]; then
                continue
            fi
            append_file "$file"
        done
    fi
done

for file in src/ui/organisms/*/*.css; do
    append_file "$file"
done

append_file "src/atoms/media.css"

echo "CSS compilation complete."

echo "Copying images to build directory..."
cp -r src/ui/images/ build/images
echo "Image copying complete."