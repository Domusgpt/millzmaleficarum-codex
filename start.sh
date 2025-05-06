#!/bin/bash
# MillzMaleficarum Codex v0.1 Start Script

echo "Starting MillzMaleficarum Codex v0.1..."

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
  echo "Dependencies not installed. Running setup first..."
  ./setup.sh
else
  # Start the server
  echo "Starting the server..."
  npm start
fi

# The server is now running in the foreground