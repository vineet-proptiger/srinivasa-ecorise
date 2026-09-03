#!/bin/bash
find components app -type f \( -name "*.jsx" -o -name "*.js" \) -exec perl -pi -e 's/#000242/#1A2024/g' {} +
find components app -type f \( -name "*.jsx" -o -name "*.js" \) -exec perl -pi -e 's/#d3be8a/#F7A800/g' {} +
find components app -type f \( -name "*.jsx" -o -name "*.js" \) -exec perl -pi -e 's/#dfb557/#F7A800/g' {} +
find components app -type f \( -name "*.jsx" -o -name "*.js" \) -exec perl -pi -e 's/#7d9b93/#0075B3/g' {} +
find components app -type f \( -name "*.jsx" -o -name "*.js" \) -exec perl -pi -e 's/#D5C2A8/#FFC34D/g' {} +
find components app -type f \( -name "*.jsx" -o -name "*.js" \) -exec perl -pi -e 's/#d5bd7e/#F7A800/g' {} +
find components app -type f \( -name "*.jsx" -o -name "*.js" \) -exec perl -pi -e 's/#ffd700/#F7A800/g' {} +
