---
name: Webpage Guidelines
lede: Photoshop-style rulers and guide lines on any live web page, with distances measured as you drag.
cardSummary: Photoshop-style rulers and guides on any live page.
order: 3
icon: guides
version: '0.1'
shortcut: None (panel)
install: https://raw.githubusercontent.com/cubik73/Tampermonkey-Scripts/main/guidelines.user.js
screenshot:
  alt: Guide lines and pixel distances drawn over a page layout
  placeholder: '[Screenshot: guides and distances over a layout]'
check:
  heading: Making sure elements line up
  body: Design tools have guides; browsers don't. To check a build against its design, I wanted to drag guides onto the real page instead of eyeballing it or pasting screenshots into Photoshop.
features:
  - { title: Drag from the rulers, text: 'Pull guides from the top or left bar, like in Figma or Photoshop.' }
  - { title: Live distances, text: Pixel gaps between guides and to the page edges. }
  - { title: Move or remove, text: 'Drag a guide to move it, right-click to delete it.' }
  - { title: Save guide sets, text: 'For one page, a whole site, or everywhere.' }
  - { title: Auto-load, text: Saved guides reappear when you come back. }
  - { title: Tidy panel, text: 'Draggable and collapsible, and it remembers where you left it.' }
steps:
  - Install Tampermonkey, then the script.
  - Drag from the top bar for a horizontal guide, or the left bar for a vertical one.
  - Read the distances between guides as you move them.
  - Pick a scope and save, to reuse the guides next time.
hood: "Guides are positioned against the whole document, so they stay in place as you scroll and stretch as content loads. The control panel sits in a closed Shadow DOM, away from the page's own code."
tags: [Layout, Design QA, JavaScript, Shadow DOM]
---
