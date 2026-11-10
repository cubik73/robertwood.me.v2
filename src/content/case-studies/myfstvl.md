---
title: 'myfstvl: a festival planner that catches clashes'
category: Case study · Mobile app · Side project
lede: A fan-made iOS and Android app that works with no signal at all. It turns a festival's PDF timetable into your own schedule, and warns you when the bands you want to see clash.
order: 1
date: 2025-08-01 # Built just before Leeds Festival 2025 (month approximate)
card:
  summary: A fan-made, fully offline iOS and Android app, field-tested at Leeds Festival and Shiiine On Weekender.
  meta: React Native · Expo · Side project
  tag: Mobile app
  tagTone: m
  image:
    alt: myfstvl showing a festival timetable grid on a phone
    placeholder: '[myfstvl app screen]'
facts:
  - { label: Role, value: Design & development }
  - { label: Concept, value: Andrew Holloway }
  - { label: Platforms, value: iOS & Android }
  - { label: Status, value: Private beta }
footnote: myfstvl is an independent fan project. It isn't affiliated with or endorsed by Shiiine On Weekender.
blocks:
  - type: media
    frame: phone
    items:
      - { alt: Timetable grid with every stage side by side and a line at the current time, placeholder: '[Timetable grid]', caption: 'Timetable grid, with a line at the current time' }
      - { alt: My schedule with two overlapping sets flagged as a clash, placeholder: '[My schedule]', caption: 'My schedule, with clashes flagged' }
      - { alt: Artist index in dark mode, placeholder: '[Artist index]', caption: 'Artist index, in dark mode' }
  - type: text
    label: The problem
    heading: Too many stages, one blurry PDF
    body:
      - Shiiine On Weekender runs several stages at once, so bands I wanted to see often clashed. The only timetable was a PDF or a low-resolution image, which meant a lot of zooming and panning, and the festival has no app of its own. On top of that, wifi and phone signal at sites like Skegness, Minehead and Leeds Festival's Bramham Park are unreliable at best.
      - I've been going since the first one in 2015. My friend and fellow Shiiiner Andrew Holloway came up with the idea for an app; I designed and built it in my spare time.
  - type: cards
    label: What it does
    heading: Pick your bands, see your clashes
    surface: true
    cards:
      - { title: Clash detection, text: 'Save the sets you want to see, and the app flags any that overlap. Everything else is built around this.', highlight: true }
      - { title: Works fully offline, text: 'No wifi or signal needed: the whole line-up lives on the phone, for festival sites where coverage is patchy at best.', highlight: true }
      - { title: Timetable grid, text: 'Every stage side by side, with a line at the current time that scrolls to now.' }
      - { title: Built for late nights, text: 'Sets after midnight stay with the night they belong to: 1am on Saturday is still Friday night.' }
      - { title: Artist index, text: 'Search and sort every act on the line-up.' }
      - { title: Accessible by design, text: "Follows the phone's dark mode, with high contrast, 12 or 24-hour times, and a choice of toolbar position." }
  - type: steps
    label: How I built it
    heading: AI as a pair programmer
    steps:
      - { title: Scaffolded with Claude, text: 'Used Claude to set up the React Native and Expo app, and to weigh up the best route to market.' }
      - { title: Field-tested at Leeds Festival, text: 'Used an early version for two days at Leeds Festival 2025, then fixed the issues it showed up.' }
      - { title: Paired on the hard logic, text: 'Worked through tricky problems, like set times that run past midnight, with Claude as a pair programmer.' }
      - { title: Tested and released properly, text: 'Playwright end-to-end tests, with Claude helping to find and fix bugs. GitHub Actions bumps the version on every release, and Expo&apos;s EAS builds the apps.' }
  - type: stats
    label: Where it's at
    heading: Tested where it matters
    items:
      - { value: '3', caption: 'festivals used in the field: Leeds Festival and SHIIINE ON Skegness & Minehead 2025' }
      - { value: '187', caption: 'sets loaded across two Shiiine On weekends' }
      - { value: '16', caption: 'automated end-to-end tests' }
      - { value: '100%', caption: 'offline: no wifi, signal or accounts needed' }
    note: Picking the bands you want to see, then having the clashes flagged for you, turned out to be the biggest benefit. Exactly what I set out to build.
  - type: text
    label: What I learned
    heading: Lessons from the field
    subsections:
      - { heading: Test where it will be used, body: ['Two days at Leeds showed up problems no desk test would have found.'] }
      - { heading: The data is the product, body: ["At Skegness I'd missed one band when entering the timings. The app is only as good as its line-up, so the data needs the same care as the code."] }
      - { heading: AI speeds you up; you still steer, body: ['Claude made scaffolding, testing and bug-fixing faster, while the design and product decisions stayed mine.'] }
  - type: text
    label: What's next
    heading: Any festival, for anyone
    body:
      - The goal is for myfstvl to cover any festival I can get the timings for, and to open it up to other festival-goers once the test group has shaped it.
    subsections:
      - heading: Planned
        list:
          - Download new line-ups, for more festivals and several at once
          - Website, social and streaming links for each band
          - '"Next act" notifications, driven by your own schedule'
      - heading: Exploring
        list:
          - Location features to find your way around, and each other
          - Emergency alerts to friends or the festival organisers
    tags: [React Native, Expo, Mobile, Accessibility, Playwright, GitHub Actions, AI-assisted development]
cta:
  heading: Got an app idea?
---
