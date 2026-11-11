---
title: Cutting the image footprint by ~80%
category: Case study · Web performance · Process
lede: "How I took Beer Hawk's (now PerfectDraft's) Magento 2 store from print-resolution uploads to automatically optimised WebP images, starting with fixes by hand and ending fully automated."
order: 3
date: 2018-11-01 # Issue spotted around June 2018; resolved before Black Friday 2018
card:
  summary: From fixing print-size uploads by hand to automatic optimisation and WebP delivery.
  meta: Web performance · Process
  tag: Performance
  image:
    alt: Page weight before and after optimisation
    placeholder: '[Page weight: before / after]'
facts:
  - { label: Role, value: Senior Front-End Developer & team lead }
  - { label: Company, value: PerfectDraft · AB InBev }
  - { label: Timeline, value: 2018 onwards }
  - { label: Tools, value: Magento 2 · TinyPNG · TinyCDN · WebP }
blocks:
  - type: bars
    caption: Average image file size
    headline: −80%
    bars:
      - { label: Before, note: print-ready originals, percent: 100 }
      - { label: After, note: optimised WebP, percent: 20 }
  - type: text
    label: The problem
    heading: Print files on a web store
    body:
      - "Product and marketing images came from high-resolution artwork used across print and other media: 300dpi originals, tens of thousands of pixels wide, saved as PNG, JPG or TIFF. Marketing and Design were used to designing for print, not the web, so new images usually arrived far too big and in the wrong format."
      - I spotted the problem a couple of months after joining Beer Hawk, usually when a new product upload made a page slow to load, and kept pushing until it was fixed properly.
  - type: steps
    label: What I did
    heading: From manual fixes to automatic
    surface: true
    steps:
      - { title: Fixed images by hand, text: 'Whenever a slow page turned up, I resized the image, changed its format and compressed it with TinyPNG.' }
      - { title: Taught the design team, text: 'Showed Marketing and Design how to create web images at the right size and resolution, and which format suits which purpose.' }
      - { title: Automated it with TinyCDN, text: 'Moved images onto TinyCDN, which hosts and optimises them in one step, so nobody had to fix uploads by hand any more.' }
      - { title: Switched delivery to WebP, text: 'Converted every image on the site to WebP for delivery, for smaller files at the same visual quality.' }
  - type: images
    items:
      - { alt: PageSpeed results before and after, placeholder: '[PageSpeed before → after]', caption: '[Caption: the same page, before and after.]' }
      - { alt: The image guide used by the design team, placeholder: '[The image guide for the design team]', caption: '[Caption: what the design team worked from.]' }
  - type: stats
    label: Outcome
    heading: What changed
    items:
      - { value: '~80%', caption: 'smaller image files, on average' }
      - { value: Faster, caption: 'pages, and noticeably so' }
      - { value: Higher, caption: SEO rankings and PageSpeed scores }
      - { value: Lasting, caption: 'habits: the design team kept to the rules, and asked when unsure' }
  - type: text
    label: The trade-off
    heading: Worth the cost
    body:
      - 'The CDN added a running cost. It was easily covered by the time saved: nobody was spending hours checking and fixing images by hand any more.'
    tags: [Web performance, WebP, CDN, Technical SEO, Training, Magento 2]
cta:
  heading: Is your site slower than it should be?
---
