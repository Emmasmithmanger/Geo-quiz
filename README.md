# World Geography Quiz

## Files
- `index.html` → upload this to your GitHub Pages repo
- `Code.gs` → paste this into Google Apps Script and deploy as a Web App

## Setup
1. Create a new public GitHub repo.
2. Upload `index.html`.
3. Enable **Settings → Pages** and deploy from the main branch.
4. Create a Google Sheet.
5. Open **Extensions → Apps Script** in that sheet.
6. Paste `Code.gs`.
7. Replace `PASTE_YOUR_GOOGLE_SHEET_ID_HERE`.
8. Deploy Apps Script as **Web app** with access set to **Anyone**.
9. Copy the Web App URL.
10. Replace `PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE` in `index.html`.
11. Commit again to GitHub.

## Notes
- GitHub Pages uses HTTPS, which is required for geolocation in browsers.
- The site blocks the quiz until the user enters an email and grants location permission.
- Browser geolocation accuracy varies by device, GPS signal, Wi‑Fi, and browser permissions.
