// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'isabellaelisa', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {  
  github: {
      display: true, // Display GitHub publications?
      header: 'Github Publications',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 2, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['isabellaelisa/Genome-Assembly-Isabella', 'isabellaelisa/MicroBiomeTutorial'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Giardia lamblia',
          description:
            'Understanding the pathogenicity and transmission of the single celled parasite Giardia lamblia.',
          imageUrl:
            'https://github.com/isabellaelisa/isabellaelisa.github.io/raw/main/giardia_pres.png',
          link: 'https://github.com/isabellaelisa/isabellaelisa.github.io/blob/main/Giardia%20lamblia%20Seminar.pdf',
        },
        {
          title: 'Sonic Hedgehog Gene',
          description:
            'The Shh gene explained and its effects on the digits of embryonic mice.',
          imageUrl:
            'https://github.com/isabellaelisa/isabellaelisa.github.io/raw/main/shh_pres.png',
          link: 'https://github.com/isabellaelisa/isabellaelisa.github.io/raw/main/Shh%20Gene%20(1).pdf',
        },
      ],
    },
  },
  seo: {
    title: 'Isabella Elisa Website',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: '',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://isabellaelisa.github.io/',
    phone: '',
    email: 'ialvarado2@csustan.edu',
  },
  resume: {
    fileUrl:
      'https://github.com/isabellaelisa/isabellaelisa.github.io/raw/main/IsabellaFregosoCV.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Bilingual',
    'Bioinformatics',
    'Medical Terminology',
    'Excel',
  ],
  experiences: [
    {
      company: 'Kaiser Permanente',
      position: 'Patient Care Technician',
      from: 'June 2023',
      to: 'Present',
      companyLink: '',
    },
    {
      company: 'Oak Valley Hospital Districs',
      position: 'Medical Assistant',
      from: 'May 2022',
      to: 'August 2023',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: 'Medical Assistant Certification',
      body: '',
      year: '2021',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'California State University Stanislaus',
      degree: 'B.S in Biological Sciences',
      from: '2021',
      to: '2025',
    },
  ],
  publications: [
    {
      title: 'Chryseobacterium treverense Analysis',
      conferenceName: '',
      journalName: 'Microbiology Resource Announcements',
      authors: '',
      link: 'https://github.com/isabellaelisa/isabellaelisa.github.io/raw/main/C.treverense%20Final%20Paper.pdf',
      description:
        'The article is in submission.',
    },
    {
      title: '',
      conferenceName: '',
      journalName: '',
      authors: '',
      link: '',
      description:
        '.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'valentine',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
