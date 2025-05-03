# Development Tracking

This file tracks all development changes to the MillzMaleficarum Codex project.

## Latest Status

- **Current Version**: v0.2
- **Latest Feature**: HyperAV integration with micro-animations and hyperdimensional effects
- **Static Demo Available**: https://domusgpt.github.io/millzmaleficarum-codex/
- **Server Version**: Configured for Fly.io deployment
- **Last Updated**: May 3, 2025
- **Fly.io CLI**: Installed at `/root/.fly/bin/flyctl`
- **HyperAV Integration**: Implemented in static demo with simplified visualization engine

## Development Timeline

### May 3, 2025

#### HyperAV Integration (v0.2)
- Implemented 4D visualization as background layer
- Added micro-animations and glitchy effects for UI elements
- Created false sense of hyperdimensional holographic depth
- Added randomized background visualization parameters
- Synchronized HyperAV files from local storage
- Created simplified version of HyperAV for background effects
- Enhanced content elements with dynamic effects
- Files modified:
  - `static-demo/index.html` - Added HyperAV container div
  - `static-demo/style.css` - Added new animations and effects 
  - `static-demo/script.js` - Added HyperAV initialization and depth effects
  - Created `static-demo/hyperav/` directory with simplified engine

#### Fly.io Deployment Configuration
- Added `Dockerfile` for containerization
- Created `fly.toml` configuration file
- Added `.dockerignore` for build optimization
- Created deployment guides: `FLY-IO-DEPLOY.md` and `FLY-IO-QUICKSTART.md`
- Updated `CLAUDE.md` with Fly.io CLI instructions
- Fly.io CLI installed at `/root/.fly/bin/flyctl`

#### GitHub Pages Deployment (Static Demo)
- Successfully pushed to GitHub repository: [DomusGPT/millzmaleficarum-codex](https://github.com/Domusgpt/millzmaleficarum-codex)
- Configured GitHub Pages to serve from `/static-demo` directory
- Static demo accessible at: https://domusgpt.github.io/millzmaleficarum-codex/
- Static version features embedded data for client-side operation
- Current `static-demo` contents:
  - `index.html` - Main interface
  - `magazine-data.js` - Contains embedded JSON data
  - `script.js` - Client-side rendering logic
  - `style.css` - Styling

### Previous Development

#### Rich JSON Format Implementation
- Enhanced the magazine structure to use a more sophisticated JSON format
- Added support for both rich and legacy format
- Created adapter function to maintain backward compatibility
- Implemented sections: cover, editorial, culture, tech, interview, ads, lore_serial
- Added visual_prompts section for future image generation features

#### Core Functionality
- Express.js server setup with API endpoints
- Dashboard for content management
- JSON file upload capability
- Persistent storage via file system
- Validation for both rich and legacy formats

## Current Architecture

- **Frontend**: HTML, CSS, JavaScript (vanilla)
- **Backend**: Node.js with Express
- **Data Storage**: JSON files (filesystem-based)
- **API Endpoints**:
  - `/api/magazine-data` - GET endpoint for magazine data
  - `/api/upload-magazine-data` - POST endpoint for JSON uploads
  - `/api/visual-prompts` - GET endpoint for visual prompts

## Deployment Options

1. **GitHub Pages** (Static Demo)
   - Deployed at https://domusgpt.github.io/millzmaleficarum-codex/
   - Uses embedded data in magazine-data.js
   - No server-side functionality or content uploads

2. **Fly.io** (Full Server Version)
   - Configuration ready
   - Supports content uploads via dashboard
   - Persistent storage with volumes
   - Free tier available (3 shared-CPU VMs, 3GB storage)
   - Deployment instructions in FLY-IO-DEPLOY.md

## Planned Features

1. Image generation based on visual_prompts
2. Enhanced dashboard with live preview
3. User authentication for dashboard access
4. Multiple magazine issues management
5. Customizable themes and layouts

## Known Issues

- None reported

## Notes for Next Development Session

- Complete Fly.io deployment
- Test content upload functionality on deployed server
- Consider adding authentication to dashboard
- Enhance HyperAV integration with additional features:
  - Add direct audio reactivity for immersive experience
  - Implement more pronounced reality distortion effects
  - Create interactive elements that respond to user actions
  - Add custom shaders for improved visual quality