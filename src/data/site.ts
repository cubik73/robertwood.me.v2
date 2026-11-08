/**
 * Global settings: the "Global settings" group on the CMS board.
 * Edit once, used in the header, hero, contact section and footer.
 */
export const site = {
  name: 'Robert Wood',
  domain: 'robertwood.me',
  role: 'Senior Front-End Developer',
  location: 'York, UK',
  description:
    'Robert Wood, Senior Front-End Developer in York, UK. I make e-commerce sites faster, more accessible and easier to run, with React, TypeScript and Magento 2.',
  email: 'hello@robertwood.me',
  linkedin: 'https://www.linkedin.com/in/robwood/',
  github: 'https://github.com/cubik73',
  /** Place the PDF in /public; the button hides itself if this is empty. */
  cv: '/robert-wood-cv.pdf',
  availability: {
    open: true,
    text: 'Open to contract, hybrid & remote roles',
  },
  nav: [
    { label: 'Work', href: '/#work' },
    { label: 'Tools', href: '/#tools' },
    { label: 'Experience', href: '/#experience' },
    { label: 'About', href: '/#about' },
    { label: 'Contact', href: '/#contact' },
  ],
} as const;

/** Homepage headline figures. */
export const stats = [
  { value: '~80%', caption: 'smaller image files on PerfectDraft' },
  { value: '9 stores', caption: 'migrated to Magento 2, in 7 languages' },
  { value: '100%', caption: "retention across every team I've led" },
  { value: '30 yrs', caption: 'building for the web, since FrontPage' },
];

/** Grouped skills: no percentage bars. */
export const skills = [
  {
    title: 'Front-end',
    items: ['React', 'Next.js', 'Astro', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'React Native'],
  },
  {
    title: 'E-commerce & performance',
    items: ['Magento 2', 'Web performance', 'Technical SEO', 'CRO', 'WCAG', 'Cloudflare'],
  },
  {
    title: 'Design',
    items: ['Figma', 'Photoshop', 'Illustrator', 'InDesign'],
  },
  {
    title: 'Leadership & delivery',
    items: ['Team lead', 'Product owner', 'Scrum master', 'Mentoring', 'Jira / Linear'],
  },
];
