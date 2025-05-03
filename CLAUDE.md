# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

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

## Code Style Guidelines
- Shell scripts:
  - Use 2-space indentation
  - Comment complex operations
  - Use lowercase for variable names
  - Prefer double quotes for variables: "$variable"
  - Include shebang line: #!/bin/bash or #!/bin/sh
  
## Android Development
- Build APKs with Gradle: `./gradlew assembleDebug`
- Android SDK path should be configured in local.properties
- Prefer AndroidX libraries over legacy support libraries
- Follow Material Design guidelines for UI components

## Repository Structure
- Each project should have its own separate repository
- Keep project-specific CLAUDE.md files in each project root
- Use /storage/emulated/0/Claude Code for your main projects directory
- Access shared Android storage via /mnt/shared when in Ubuntu environment

## GitHub Repository
- GitHub Username: DomusGPT
- Primary Email: phillips.paul.email@gmail.com
- Preferred License: ISC
- Default Branch: main
- CI/CD: GitHub Actions preferred