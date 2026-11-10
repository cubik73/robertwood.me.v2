---
title: 'Wex-Work: matching people with work experience'
category: Case study · Self-initiated · Product build
lede: A two-sided matching service for work experience placements, designed and built end to end. It grew out of a job I'd seen done by hand.
order: 5
card:
  summary: A work-experience matching prototype, built from sign-up to database.
  meta: React · TypeScript · PostgreSQL
  tag: Product build
  image:
    alt: The wex-work prototype
    placeholder: '[wex-work.com]'
facts:
  - { label: Role, value: 'Designer, developer & product owner' }
  - { label: Type, value: Self-initiated product }
  - { label: Status, value: Prototype }
  - { label: Stack, value: React 18 · TypeScript · MUI · Express · PostgreSQL }
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
  - type: cards
    label: Why it matters
    heading: What this project shows
    cards:
      - { title: End-to-end delivery, text: 'Idea, design, front end, API, database and deployment, all built by me.' }
      - { title: Product thinking, text: "It started from a real person's problem, the way I worked as a Product Owner." }
      - { title: Current skills, text: 'React, TypeScript, Node and Postgres, not just the tools of past roles.' }
  - type: text
    label: Lessons
    heading: What I learned
    subsections:
      - heading: A platform needs more than code
        body: ["Wex-Work's foundations work, but a two-sided platform only launches with committed partners on both sides. Next time I'd secure that commitment before building. Even so, as a pet project it taught me a great deal: auth, a Node API and a Postgres data model, all built from scratch."]
    tags: [Product design, Full-stack build, Security]
cta:
  heading: Got an idea that needs building?
---
