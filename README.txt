cat-ching PWA update

Upload these files to the ROOT of your GitHub repository (the same folder as index.html):
- index.html (replace the old one)
- manifest.json (new)
- sw.js (new)
- icons/icon-192.png (new)
- icons/icon-512.png (new)

Then wait for GitHub Pages to redeploy and open:
https://yingying1712.github.io/SmartExpense-Automated-Tracking-Daily-Budget-Advisor/

The files use repository-relative paths (./manifest.json, ./sw.js, ./icons/...).
The service worker is intentionally minimal; full offline caching is not configured.
