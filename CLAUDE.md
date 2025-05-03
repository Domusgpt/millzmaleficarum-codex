# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## IMPORTANT: READ FIRST
- **ALWAYS CHECK DEV-TRACKING.md** before making any changes to ensure you're aware of the current development status
- Update DEV-TRACKING.md each time you modify files in this project with detailed notes

## Contact Information
- Email: phillips.paul.email@gmail.com
- GitHub: DomusGPT

## Environment
- Termux on Android
- Ubuntu PRoot environment (accessed via ubuntu-login.sh)
- Shared storage mounted at /mnt/shared

## Commands
- To enter Ubuntu environment: `./ubuntu-login.sh`
- For shell scripts: `shellcheck filename.sh` for linting
- Android SDK commands should use the path to Android SDK in Termux

## Fly.io Deployment
- Fly.io CLI installed at `/root/.fly/bin/flyctl`
- Add to PATH: `export FLYCTL_INSTALL='/root/.fly'`
- Add to PATH: `export PATH="$FLYCTL_INSTALL/bin:$PATH"`
- Run `fly auth signup` to create account
- Run `fly launch` in project directory to start deployment

## Code Style Guidelines
- Shell scripts:
  - Use 2-space indentation
  - Comment complex operations
  - Use lowercase for variable names
  - Prefer double quotes for variables: "$variable"
  - Include shebang line: #!/bin/bash or #!/bin/sh
  
## Repository Structure
- Each project should have its own separate repository
- Keep project-specific CLAUDE.md files in each project root
- Use /storage/emulated/0/Claude Code for your main projects directory
- Access shared Android storage via /mnt/shared when in Ubuntu environment

## GitHub Repository
- GitHub Username: DomusGPT
- Primary Email: phillips.paul.email@gmail.com
- Repository: https://github.com/Domusgpt/millzmaleficarum-codex
- GitHub Pages: https://domusgpt.github.io/millzmaleficarum-codex/
- Default Branch: master
- CI/CD: GitHub Actions configured