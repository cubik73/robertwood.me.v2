---
title: 'Recent builds: wex-work.com & an AI CV tool'
category: Case study · Self-initiated · Product builds
lede: Two products I designed and built end to end. One grew out of a job I'd seen done by hand; the other started as a tool for my own applications and is now live for anyone to use.
order: 4
card:
  summary: A work-experience matching prototype, and a live AI CV tool with a built-in fact check.
  meta: React · TypeScript
  tag: Product builds
  image:
    alt: The wex-work prototype
    placeholder: '[wex-work.com]'
facts:
  - { label: Role, value: 'Designer, developer & product owner' }
  - { label: Type, value: Self-initiated products }
  - { label: Status, value: 'One prototype, one live' }
  - { label: Shared stack, value: React 18 · TypeScript · MUI · Node/Express }
blocks:
  - type: feature
    label: Wex-Work
    status: prototype
    heading: Matching people with work experience
    sections:
      - heading: The problem
        body: ['College work experience coordinators find placements and match them with students by hand. I saw the process first-hand and wanted to semi-automate it.']
      - heading: The idea
        body: ['A two-sided matching service, a bit like a dating app for placements:']
        list:
          - "Students and employers sign up and get matched, and it's open to anyone looking for work experience, Duke of Edinburgh participants included"
          - Employers upload liability insurance (ELI) and health and safety documents up front
          - Colleges and schools get a portal to manage their students and matches
      - heading: What I built
        body: ["The platform's foundations: secure sign-up and login with email verification and password reset, separate account types, and student and employer profiles including insurance details. Matching and the education portal were next, but taking it to release needed a commitment that never came, so it remains a prototype."]
    tech: React 18 · TypeScript · Material UI · Express · PostgreSQL · JWT · bcrypt
    link: { label: Screenshots and a code walkthrough on request →, href: 'mailto:hello@robertwood.me?subject=Wex-Work%20walkthrough' }
    media: { alt: The wex-work prototype sign-up screen, placeholder: '[Prototype screenshot: sign-up or employer profile]', address: wex-work · prototype }
  - type: feature
    label: cv-gen
    status: live
    heading: Tailored applications that stay honest
    surface: true
    mediaSide: right
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
    label: Why they matter
    heading: What these projects show
    cards:
      - { title: End-to-end delivery, text: 'Idea, design, front end, API, database and deployment, all built by me.' }
      - { title: Product thinking, text: "Both started from a real person's problem, the way I worked as a Product Owner." }
      - { title: Current skills, text: 'React, TypeScript, Node and CI/CD, not just the tools of past roles.' }
      - { title: Responsible AI, text: 'Grounding, injection protection and an automatic fact check, not just a prompt.' }
  - type: text
    label: Lessons
    heading: What I learned
    subsections:
      - heading: Public AI tools need protecting
        body: ["Once cv-gen was public, people abused it, so I pulled the API key. It's now back with rate limiting on the server, and the key never reaches the browser."]
      - heading: A platform needs more than code
        body: ["Wex-Work's foundations work, but a two-sided platform only launches with committed partners on both sides. Next time I'd secure that commitment before building. Even so, as a pet project it taught me a great deal: auth, a Node API and a Postgres data model, all built from scratch."]
    tags: [Product design, Full-stack build, AI integration, Security, CI/CD]
cta:
  heading: Got an idea that needs building?
---
