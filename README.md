# MillzMaleficarum Codex v0.1

A dynamic, JSON-driven digital magazine focused on "hyperbolic info hagiography" about GEN-R-L MiLLz with a Vaporwave/Cryptic/Sacred Tech aesthetic. Now enhanced with rich format support for The GEN-R-L MiLLz Manifesto.

## Project Overview

MillzMaleficarum Codex is a Node.js-powered web application that serves dynamic content defined in a JSON configuration file. The application features a public-facing magazine view and an admin dashboard for content updates. It supports both legacy format and the new rich format for The GEN-R-L MiLLz Manifesto, with specialized rendering for each section type.

## Technical Stack

- **Backend**: Node.js with Express.js
- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **Data Storage**: JSON file system
- **File Upload**: Multer middleware
- **Cross-Origin**: CORS middleware
- **Deployment Target**: Azure App Service (Linux, Node.js)

## Project Structure

```
MillzMaleficarum_Codex_v0.1/
├── .github/
│   └── workflows/         # CI/CD pipeline config (future)
├── data/
│   └── current_magazine_data.json  # Magazine content configuration
├── node_modules/          # Node.js dependencies
├── public/                # Static frontend assets
│   ├── dashboard.html     # Admin dashboard page
│   ├── dashboard.js       # Dashboard functionality
│   ├── index.html         # Main magazine page
│   ├── script.js          # Magazine functionality
│   └── style.css          # Styles for both pages
├── .gitignore             # Git ignore configuration
├── CLAUDE.md              # Project instructions for Claude
├── package-lock.json      # Lock file for npm dependencies
├── package.json           # Project configuration and dependencies
├── README.md              # Project documentation
└── server.js              # Main application server code
```

## Setup & Installation

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   node server.js
   ```
4. Access the application:
   - Magazine: http://localhost:3000/
   - Dashboard: http://localhost:3000/dashboard

## Key Features

- **Dynamic Content**: All magazine content is driven by a JSON configuration file
- **Rich Format Support**: Enhanced support for The GEN-R-L MiLLz Manifesto with specialized sections
- **Content Management**: Simple dashboard for uploading new magazine content
- **Format Toggle**: Switch between legacy and rich display modes
- **Vaporwave Aesthetic**: Stylized design with glitch effects and retro-futuristic elements
- **Responsive Design**: Works across various device sizes
- **Sigil Markers**: Support for special formatting with sigil symbols
- **Visual Prompts**: Section for image generation prompts

## Deployment

### Azure (Original Target)
The application is designed to be deployed to Azure App Service with the `/data` directory mounted to Azure Files for persistent storage.

### Replit (Quick Demo)
1. Create a new Node.js Replit project
2. Import all project files
3. The included `.replit` file will configure the environment
4. Click "Run" to start the server
5. Access your application via the provided Replit URL

### Glitch (Alternative)
1. Create a new Glitch project
2. Import all project files
3. The application will automatically start
4. Access your project via the provided Glitch URL

### Render or Heroku (Production)
1. Connect to your repository
2. Set build command to `npm install`
3. Set start command to `npm start`
4. Ensure the `/data` directory is in a writable location

## Development Notes

### Legacy Format
- The legacy JSON format (`data/current_magazine_data.json`) uses the structure with `title`, `issue`, `theme`, and `sections` array.
- Each section in the `sections` array should have `title`, `content`, and optional `style` properties.
- Available section styles: `"centered"`, `"glitched"`, or `""` (default).

### Rich Format
- The rich format JSON structure uses `issue_number`, `date`, and a structured `sections` object.
- The `sections` object must contain the following keys: `cover`, `editorial`, `culture`, `tech`, `interview`, `ads`, `lore_serial`, and optional `visual_prompts`.
- Each section type has its own specific structure and styling.
- Sigil markers can be included using the syntax `<sigil-Ξ>` or `<sigil-Ω>`.

### API Usage
- To request the rich format data, use `/api/magazine-data?format=rich`
- To request the legacy format data, use `/api/magazine-data`
- To access visual prompts, use `/api/visual-prompts`

## License

ISC