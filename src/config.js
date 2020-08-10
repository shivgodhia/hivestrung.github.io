module.exports = {
  siteTitle: 'Shiv Godhia | Computer Scientist',
  siteDescription:
    'Shiv Godhia is a software engineer based in Cambridge, UK who specializes in building (and occasionally designing) exceptional websites, applications, and everything in between.',
  siteKeywords: 'Shiv, Godhia, hivestrung, software engineer, SWE, SDE, Amazon, cambridge, compsci',
  siteUrl: 'https://www.shivgodhia.tech/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Shiv Godhia',
  location: 'Cambridge, UK',
  email: 'shivgodhia@gmail.com',
  github: 'https://github.com/hivestrung',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/hivestrung',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/shivgodhia',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/hivestrung',
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/hivestrung',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#fcbf49', // accet colour
    navy: '#001724', // bg
    darkNavy: '#000A0F', // loading bg
    lightNavy: '#001E2E', // project cards
    lightestNavy: '#303C55', // random lines
    slate: '#8892b0', // i build things
    lightSlate: '#a8b2d1', // side stuff
    lightestSlate: '#ccd6f6', // title of featured proj, job position
    white: '#e6f1ff',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
