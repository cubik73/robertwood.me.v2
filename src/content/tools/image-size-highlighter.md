---
name: Image Size Highlighter
lede: Outlines every image on a page by whether its file is the right size for how it's displayed.
cardSummary: Flags images that are too big, too small or just right.
order: 2
icon: images
version: 1.6.1
shortcut: Alt+Shift+Y
install: https://raw.githubusercontent.com/cubik73/Tampermonkey-Scripts/main/image-size.user.js
screenshot:
  alt: Images on a page outlined in colour, with size badges
  placeholder: '[Screenshot: outlined images with size badges]'
check:
  heading: Making sure image sizes are optimal
  body: An oversized image wastes bandwidth and an undersized one looks blurry, and neither is obvious by eye. After years of fixing print-sized uploads, I wanted the problem visible the moment a page loads.
features:
  - { title: Colour-coded outlines, text: 'Orange or red if too big, yellow if blurry, green if right.' }
  - { title: Size badges, text: 'Actual, displayed and needed size, and how far off it is.' }
  - { title: High-DPI aware, text: Accounts for retina screens and browser zoom. }
  - { title: Filename labels, text: Shows which file the browser actually chose from srcset or picture. }
  - { title: Summary panel, text: 'Counts of oversized, blurry and well-sized images.' }
  - { title: Copes with real sites, text: Ignores lazy-load placeholders and rechecks as content changes. }
steps:
  - Install Tampermonkey, then the script.
  - 'Load any page: images are outlined straight away.'
  - Click a badge to log full details, including download size, to the console.
  - Ctrl/Cmd+click a filename to open the image. Alt+Shift+Y turns the script on or off.
hood: "Compares each image's natural pixels with its displayed size multiplied by the device pixel ratio. A MutationObserver and a light rescan catch lazy-loaded and swapped images, and every label sits in Shadow DOM so it can't affect the page."
tags: [Web performance, Images, Debugging, JavaScript]
related: image-optimisation
---
