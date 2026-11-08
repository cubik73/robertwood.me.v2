---
name: Responsive Viewport Overlay
lede: A floating panel that shows the live viewport size, and reopens any page at a device size in one click.
cardSummary: The live viewport size, and any page at a device size in one click.
order: 1
icon: viewport
version: 1.8.4.3
shortcut: Alt+Shift+O
install: https://raw.githubusercontent.com/cubik73/Tampermonkey-Scripts/main/responsive-viewport-overlay.user.js
screenshot:
  alt: The viewport overlay panel floating over a web page
  placeholder: '[Screenshot: the overlay panel on a live page]'
check:
  heading: Checking pages at specific screen sizes
  body: Device modes are tucked away in developer tools and don't show the real window. I wanted the viewport size on screen at all times, and one click to see any page at the sizes I test every day.
features:
  - { title: Live viewport size, text: 'Width × height, updating as you resize.' }
  - { title: One-click device sizes, text: 'Reopens the page in a new window, from 320×568 up to 2560×900.' }
  - { title: Custom sizes, text: 'Type any width, with an optional height.' }
  - { title: Your own presets, text: 'Edit and save them, and export or import them as a settings file.' }
  - { title: Touch mode, text: Hides the scrollbars to mimic a phone or tablet. }
  - { title: Stays out of the way, text: 'Drag it, snap it to an edge or collapse it. It remembers each site.' }
steps:
  - Install Tampermonkey, then the script.
  - 'Open any page: the panel appears top right.'
  - Click a size to open the page at that size, or type your own.
  - Press Alt+Shift+O to hide or show the panel.
hood: "The panel lives in Shadow DOM, so its styles and the page's styles never clash. Settings are saved per domain in localStorage, and it skips iframes so it only ever appears once."
tags: [Responsive design, Testing, JavaScript, Shadow DOM]
---
