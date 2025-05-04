# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Status
- **Current Version: 0.2** (Check DEV-TRACK.md for latest updates)
- Recent updates include HyperAV integration, advanced CSS effects, and enriched JSON structure
- The project is evolving from a basic magazine to a rich interactive digital publication

## Development Goals
- Transform into a full-featured digital magazine with advanced navigation
- Implement multi-column layouts, pagination, and section linking
- Enhance visual appeal with 3D effects, animations, and depth
- Maintain JSON-driven content updates while expanding schema capabilities
- Implement interactive elements (hover effects, reveals, audio)

## Commands
- Run locally: `./run-local.sh` or `npm start`
- Deploy to Fly.io: `./fly-deploy.sh`
- Sync HyperAV components: `./hyperav-sync.sh`
- Lint shell scripts: `shellcheck filename.sh`

## Code Style Guidelines
- **JavaScript**:
  - Use ES6+ features (arrow functions, template literals, etc.)
  - Prefer functional patterns for data transformation
  - Add JSDoc comments for function documentation
  - Structure frontend code into clear component functions

- **CSS**:
  - Use CSS variables for consistent theming
  - Implement responsive design with mobile-first approach
  - Keep 3D transformations and animations organized
  - Namespace classes based on functional areas

- **JSON Schema**:
  - Maintain backward compatibility with legacy format
  - Use nested objects for structured content
  - Include metadata for rendering instructions

## Environment
- Termux on Android with Ubuntu PRoot environment
- Shared storage mounted at /mnt/shared
- Fly.io for deployment with persistent storage

## Contact Information
- Email: phillips.paul.email@gmail.com
- GitHub: DomusGPT
- Repository: https://github.com/DomusGPT/millzmaleficarum-codex

## Important Files
- `server.js`: Express server with API endpoints
- `public/script.js`: Frontend rendering logic
- `public/style.css`: Styling with vaporwave aesthetic
- `millz-magazine-issue*.json`: Example magazine content files