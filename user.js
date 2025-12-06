// scifox user.js - Firefox Configuration

// === Core userChrome Support ===
// Enable userChrome.css and userContent.css support
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// Enable SVG context properties for custom styling
user_pref("svg.context-properties.content.enabled", true);

// === Performance Optimizations ===
// Force enable hardware acceleration
user_pref("layers.acceleration.force-enabled", true);

// Enable WebRender for all windows
user_pref("gfx.webrender.all", true);

// Disable skeleton UI during Firefox launch for cleaner startup
user_pref("browser.startup.preXulSkeletonUI", false);

// === UI/UX Improvements ===
// Use homepage search bar instead of jumping to URL bar
user_pref("browser.newtabpage.activity-stream.improvesearch.handoffToAwesomebar", false);

// === Notes ===
// After applying this file:
// 1. Install Sidebery addon and import sidebery.json
// 2. Install Adaptive Tab Bar Color addon
// 3. Customize toolbar (remove unnecessary elements)
// 4. In Settings > Search > Search Shortcuts, untick everything
// 5. In homepage settings, disable everything except Shortcuts
