/**
 * MillzMaleficarum_Codex_v0.1
 * Main server file for the dynamic magazine application
 */

const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Configure middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, 'data'));
  },
  filename: (req, file, cb) => {
    // Always save as current_magazine_data.json
    cb(null, 'current_magazine_data.json');
  }
});

const upload = multer({ 
  storage: storage,
  fileFilter: (req, file, cb) => {
    // Only accept JSON files
    if (path.extname(file.originalname).toLowerCase() !== '.json') {
      return cb(new Error('Only JSON files are allowed'));
    }
    cb(null, true);
  }
});

// Ensure data directory exists
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
  console.log('Creating data directory at:', dataDir);
  fs.mkdirSync(dataDir, { recursive: true });
}

// Create default magazine data if it doesn't exist
const defaultData = {
  title: "MillzMaleficarum Codex",
  issue: "v0.1",
  theme: "vaporwave",
  sections: [
    {
      title: "Welcome",
      content: "Welcome to the MillzMaleficarum Codex, a hyperbolic info hagiography about GEN-R-L MiLLz.",
      style: "centered"
    }
  ]
};

const dataPath = path.join(__dirname, 'data', 'current_magazine_data.json');
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, JSON.stringify(defaultData, null, 2));
  console.log('Created default magazine data file');
}

// Routes
// Serve main magazine page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Serve dashboard
app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

// API endpoint to get current magazine data
app.get('/api/magazine-data', (req, res) => {
  try {
    const data = fs.readFileSync(dataPath, 'utf8');
    res.json(JSON.parse(data));
  } catch (error) {
    console.error('Error reading magazine data:', error);
    res.status(500).json({ error: 'Failed to read magazine data' });
  }
});

// API endpoint to upload new magazine data
app.post('/api/upload-magazine-data', upload.single('magazineData'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }
    
    // Validate JSON format and structure
    const data = fs.readFileSync(dataPath, 'utf8');
    const jsonData = JSON.parse(data); // Will throw if invalid JSON
    
    // Validate required structure
    if (!jsonData.title || !jsonData.sections || !Array.isArray(jsonData.sections)) {
      // Invalid structure, restore default data
      fs.writeFileSync(dataPath, JSON.stringify(defaultData, null, 2));
      return res.status(400).json({ error: 'Invalid JSON structure. The file must contain "title" and "sections" array. Restored defaults.' });
    }
    
    console.log('Magazine data updated successfully');
    res.json({ success: true, message: 'Magazine data updated successfully' });
  } catch (error) {
    console.error('Error processing upload:', error);
    // If upload fails, restore default data
    fs.writeFileSync(dataPath, JSON.stringify(defaultData, null, 2));
    res.status(500).json({ error: 'Failed to process magazine data. Restored defaults.' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`MillzMaleficarum Codex server running on port ${PORT}`);
  console.log(`Dashboard available at http://localhost:${PORT}/dashboard`);
  console.log(`Magazine available at http://localhost:${PORT}/`);
});