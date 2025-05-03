# Claude Code Instructions: MillzMaleficarum_Codex_v0.1

## Project Goal & Context
This project, `MillzMaleficarum_Codex_v0.1`, is a rebuild of a concept for a dynamic, AI-driven digital magazine focusing on "hyperbolic info hagiography" about GEN-R-L MiLLz.
- **Aesthetic:** Vaporwave/Cryptic/Sacred Tech.
- **Core Function:** Node.js backend serves dynamic content (layout, text, style) defined in a JSON file (`data/current_magazine_data.json`). Updates happen via file upload through a simple dashboard (`/dashboard`).
- **Build Approach:** Use an incremental approach. Avoid large, monolithic setup scripts initially. Create files step-by-step or use standard tooling (`npm init`, etc.).

## Technical Stack & Structure
- **Backend:** Node.js, Express.js
- **Frontend:** Vanilla JS, HTML, CSS
- **Middleware:** `cors`, `multer`
- **Data:** JSON (`data/current_magazine_data.json`)
- **Deployment Target:** Azure App Service (Linux, Node.js), Azure Files (for `/data`), GitHub Actions (CI/CD).
- **Key Files/Dirs:**
    - `server.js` (Main backend logic)
    - `package.json` (Dependencies)
    - `public/` (Static frontend assets: `index.html`, `style.css`, `script.js`, `dashboard.html`, `dashboard.js`)
    - `data/` (Runtime data: `current_magazine_data.json` - mounted in Azure)
    - `.github/workflows/` (CI/CD pipeline)
    - `.gitignore`
    - `README.md`

## Standard Procedures
- **Dependency Checks:** Always confirm `node`, `npm`, and project-specific npm packages (`npm list`) before running/building. Provide `npm install` commands if needed.
- **Environment:** Assume Termux `proot-distro ubuntu`. Use `apt` for system packages if required.
- **Code Style:** Generate clear, commented Node.js/JS/HTML/CSS code.
- **Confirmation:** Ask for confirmation before executing potentially destructive actions or major build steps.