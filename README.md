# frontend-app

Demo repository for **GHAS Campaigns + Copilot Autofix** video script.

## ⚠️ Warning

This repository contains **intentionally vulnerable code** with Cross-Site Scripting (XSS) vulnerabilities for demonstration purposes.

**DO NOT use this code in production!**

## Purpose

This repo is used in Demo 4 of the video script to demonstrate:
- XSS vulnerabilities detected by CodeQL
- Copilot Autofix automatically generating secure fixes
- Simple innerHTML → textContent replacements

## Files

- `src/message-display.js` - Contains multiple XSS vulnerabilities
- `.github/workflows/codeql.yml` - CodeQL scanning configuration
- `package.json` - Minimal package configuration

## Setup Instructions

1. Enable GitHub Advanced Security for this repository
2. Enable Code scanning (CodeQL is configured via the workflow file)
3. Enable Copilot Autofix in organization settings
4. Push code to trigger CodeQL scan
5. Wait for alerts to appear in Security tab
6. Create a Security Campaign targeting XSS alerts (CWE-79)

## Expected Alerts

The code should trigger multiple XSS alerts:
- `displayMessage()` - innerHTML with user input
- `showNotification()` - createElement + innerHTML
- `renderComment()` - Template string with innerHTML
- `displaySearchResults()` - Multiple innerHTML assignments
- `displayWelcomeMessage()` - URL parameter injection

All alerts should have Copilot Autofix suggestions available (typically replacing `innerHTML` with `textContent`).
