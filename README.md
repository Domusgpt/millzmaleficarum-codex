# MillzMaleficarum Codex v0.1

A dynamic, JSON-driven digital magazine focused on "hyperbolic info hagiography" about GEN-R-L MiLLz with a Vaporwave/Cryptic/Sacred Tech aesthetic.

## Project Overview

MillzMaleficarum Codex is a Node.js-powered web application that serves dynamic content defined in a JSON configuration file. The application features a public-facing magazine view and an admin dashboard for content updates.

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
2. Run the setup script:
   ```
   ./setup.sh
   ```
   This will:
   - Install all dependencies
   - Create the data directory if it doesn't exist
   - Create a default magazine data file if one doesn't exist
   
3. Start the development server:
   ```
   ./start.sh
   ```
   Or use npm directly:
   ```
   npm start
   ```
   
4. Access the application:
   - Magazine: http://localhost:3000/
   - Dashboard: http://localhost:3000/dashboard
   
## Updating Magazine Content

1. Navigate to the dashboard (http://localhost:3000/dashboard)
2. Upload a valid JSON file with the following structure:
   ```json
   {
     "title": "Your Magazine Title",
     "issue": "v0.1",
     "theme": "vaporwave",
     "sections": [
       {
         "title": "Section Title",
         "content": "Section content goes here.",
         "style": "centered"
       },
       {
         "title": "Another Section",
         "content": "More content here.",
         "style": "glitched"
       }
     ]
   }
   ```
3. Click "Upload & Update" to refresh the magazine content
4. Visit the main page to see your changes

### Example JSON File

An example JSON file is provided in the project root as `example_magazine_data.json`. You can use this as a template for creating your own magazine content. The file includes examples of different section styles and content types.

## Key Features

- **Dynamic Content**: All magazine content is driven by a JSON configuration file
- **Content Management**: Simple dashboard for uploading new magazine content
- **Vaporwave Aesthetic**: Stylized design with glitch effects and retro-futuristic elements
- **Responsive Design**: Works across various device sizes

## Deployment

The application is designed to be deployed to Azure App Service with the `/data` directory mounted to Azure Files for persistent storage.

## Development Notes

- The JSON configuration file (`data/current_magazine_data.json`) should maintain its structure with `title`, `issue`, `theme`, and `sections` array.
- Each section in the `sections` array should have `title`, `content`, and optional `style` properties.
- Available section styles: `"centered"`, `"glitched"`, or `""` (default).

## License

ISC