#!/bin/bash
# MillzMaleficarum Codex v0.1 Setup Script
echo "Setting up MillzMaleficarum Codex v0.1..."

# Install dependencies
echo "Installing dependencies..."
npm install

# Make sure the data directory exists
echo "Ensuring data directory exists..."
mkdir -p data

# Create default data file if it doesn't exist
if [ ! -f "data/current_magazine_data.json" ]; then
  echo "Creating default magazine data..."
  echo '{
  "title": "MillzMaleficarum Codex",
  "issue": "v0.1",
  "theme": "vaporwave",
  "sections": [
    {
      "title": "Welcome to the Codex",
      "content": "Welcome to the MillzMaleficarum Codex, a hyperbolic info hagiography about GEN-R-L MiLLz. This digital artifact preserves the sacred wisdom of computational enchantment and digital mysticism.",
      "style": "centered"
    },
    {
      "title": "The Digital Scriptorium",
      "content": "In the vast digital wasteland, the Codex serves as a beacon of hyperreality - a place where information transcends mere data to become divine revelation. Navigate these virtual pages with reverence for the encoded mysteries within.",
      "style": "glitched"
    }
  ]
}' > data/current_magazine_data.json
fi

# Make the script executable
chmod +x setup.sh

echo "Setup complete!"
echo "To start the server, run: npm start"
echo "The magazine will be available at: http://localhost:3000"
echo "The dashboard will be available at: http://localhost:3000/dashboard"
