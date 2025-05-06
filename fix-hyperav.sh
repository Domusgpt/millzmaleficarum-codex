#!/bin/bash
# Script to fix HyperAV issues by copying GeometryManager.js to static-demo directory

echo "Fixing HyperAV dependencies..."

# Ensure static-demo/hyperav/core directory exists
mkdir -p public/hyperav-demo/hyperav/core

# Copy GeometryManager.js to static-demo/hyperav/core
cp public/hyperav/core/GeometryManager.js public/hyperav-demo/hyperav/core/

# Copy other required core files
cp public/hyperav/core/ShaderManager.js public/hyperav-demo/hyperav/core/ 2>/dev/null || echo "ShaderManager.js not found"
cp public/hyperav/core/HypercubeCore.js public/hyperav-demo/hyperav/core/ 2>/dev/null || echo "HypercubeCore.js not found"
cp public/hyperav/core/ProjectionManager.js public/hyperav-demo/hyperav/core/ 2>/dev/null || echo "ProjectionManager.js not found"

# Make sure script is executable
chmod +x public/hyperav-demo/hyperav/core/*.js

echo "Fix completed! Please refresh the page to see if the issues are resolved."
echo "If there are still issues, please check the browser's console for more details."