---
title: 'cv-gen: tailored applications that stay honest'
category: Case study · Self-initiated · AI tool
lede: An AI tool that tailors a CV, cover letter and interview prep to a job ad, with a built-in fact check. It started as a tool for my own applications and is now live for anyone to use.
order: 4
card:
  summary: A live AI CV tool with a built-in fact check.
  meta: React · TypeScript · Gemini API
  tag: AI tool
  tagTone: m
  image:
    alt: The cv-gen tool
    placeholder: '[cv-gen screenshot]'
facts:
  - { label: Role, value: 'Designer, developer & product owner' }
  - { label: Type, value: Self-initiated product }
  - { label: Status, value: Live }
  - { label: Stack, value: React 18 · TypeScript · MUI 6 · Express · Gemini API }
blocks:
  - type: feature
    label: cv-gen
    status: live
    heading: Tailored applications that stay honest
    sections:
      - heading: Why I built it
        body: ['Thirty years across very different roles makes for a long CV. I built this to tailor mine quickly to each job, then put it on my website so other job seekers could use it too.']
      - heading: What it does
        body: ['Paste your CV and a job ad, and get a tailored CV, a cover letter and an interview prep pack, ready to export to Word.']
      - heading: How it stays accurate
        list:
          - Prompts allow only facts from your CV, and leave placeholders where information is missing
          - "The CV and job ad are labelled as data, so text inside them can't take over the instructions"
          - A low temperature (0.2) keeps output close to the source
          - "A separate fact-check call flags any claim it can't find in your CV"
          - Users confirm the role before generating, and are told to review everything
        note: "In testing it caught every fabricated claim I planted. It's still a model checking a model, so it's a safeguard, not a guarantee, and I never sent a CV without checking it myself."
    tech: React 18 · TypeScript · MUI 6 · Express · Gemini API · docx · GitHub Actions
    link: { label: Try cv-gen →, href: 'https://robertwood.me/cv-gen/' }
    media: { alt: cv-gen turning a CV and job ad into a tailored CV with a fact check, placeholder: '[cv-gen screenshot]', address: robertwood.me/cv-gen }
  - type: cards
    label: Why it matters
    heading: What this project shows
    cards:
      - { title: Product thinking, text: "It started from a real person's problem, the way I worked as a Product Owner." }
      - { title: Current skills, text: 'React, TypeScript, Node and CI/CD, not just the tools of past roles.' }
      - { title: Responsible AI, text: 'Grounding, injection protection and an automatic fact check, not just a prompt.' }
  - type: text
    label: Lessons
    heading: What I learned
    subsections:
      - heading: Public AI tools need protecting
        body: ["Once cv-gen was public, people abused it, so I pulled the API key. It's now back with rate limiting on the server, and the key never reaches the browser."]
    tags: [Product design, AI integration, Security, CI/CD]
cta:
  heading: Got an idea that needs building?
---
