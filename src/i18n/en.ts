import type { Translation } from './types'

export const en: Translation = {
  documentTitle: 'Institut für Data Science - HAW Kiel',
  accessibility: {
    dataVisualizationLabel: 'Data visualisation, decorative',
    skipToMain: 'Skip to content',
  },
  header: {
    brand: {
      mark: 'IDS',
      name: 'Institute for Data Science',
      subline: 'HAW Kiel',
      homeAriaLabel: 'Institute for Data Science, home page',
    },
    navigationAriaLabel: 'Main navigation',
    navigation: [
      { label: 'Institute', to: '/#institut' },
      { label: 'Projects', to: '/#projekte' },
      { label: 'Collaboration', to: '/#zusammenarbeit' },
      { label: 'Contact', to: '/contact', isContact: true },
    ],
    language: {
      label: 'Choose language',
      german: 'DE',
      english: 'EN',
      germanAriaLabel: 'Select German',
      englishAriaLabel: 'Select English',
    },
  },
  footer: {
    copyright: '© 2026 Institute for Data Science · HAW Kiel',
    navigationAriaLabel: 'Legal information',
    links: [
      { label: 'Imprint', to: '/impressum' },
      { label: 'Privacy policy', to: '/privacy' },
    ],
  },
  home: {
    hero: {
      eyebrow: 'Institute for Data Science · HAW Kiel',
      titleStart: 'Turning data',
      titleAccent: 'into knowledge',
      titleEnd: '.',
      titleSeparator: '',
      description: 'Welcome to the Institute for Data Science at Kiel University of Applied Sciences. We connect research and knowledge transfer around data, machine learning and artificial intelligence – with practical relevance for northern Germany.',
      primaryAction: 'Explore project areas',
      secondaryAction: 'Get in touch',
      scrollLabel: 'View projects',
    },
    dataCard: {
      label: 'IDS / Project work',
      status: 'Current',
      metrics: [
        { value: 'Data', label: 'analyse' },
        { value: 'Models', label: 'test' },
        { value: 'Results', label: 'interpret' },
      ],
    },
    institute: {
      label: 'Institute',
      eyebrow: 'Institute for Data Science',
      title: 'Research and knowledge transfer with data.',
      paragraphs: [
        'Researchers at the Institute for Data Science at HAW Kiel work on data-driven questions. The focus is on data analysis, statistical modelling, machine learning and artificial intelligence.',
        'Projects emerge through collaboration with different departments and external partners. We connect methodological research with specific applications.',
      ],
    },
    projects: {
      eyebrow: 'Project work at IDS',
      title: 'Our projects',
      description: 'From the initial idea to practical use: our projects make data science tangible.',
      externalLinkAriaLabelPrefix: 'More information about ',
      externalLinkAriaLabelSuffix: ' (opens in a new tab)',
      items: [
        {
          id: 'reakt',
          code: '01 / REAKT',
          title: 'Rail transport in rural areas',
          description: 'REAKT is a transdisciplinary initiative from Schleswig-Holstein. Partners from research and industry develop solutions in research and development projects to make rail transport more individual, attractive, safe and economically viable.',
          linkLabel: 'More about the project →',
        },
        {
          id: 'dpm',
          code: '02 / DPM',
          title: 'Digitales Besuchermanagement 2.0',
          description: 'DPM is advancing digital visitor management in Schleswig-Holstein. The project develops approaches that make data from sensors, forecasting models and open sources useful for tourism stakeholders.',
          linkLabel: 'More about the project →',
        },
        {
          id: 'kiApplicationCentre',
          code: '03 / AI APPLICATION CENTRE',
          title: 'AI Application Centre',
          description: 'The AI Application Centre is a central point of contact for companies, especially SMEs, in Schleswig-Holstein. It supports AI projects through ideation workshops, prototype development and feasibility studies.',
          linkLabel: 'Learn more about the AI Application Centre →',
        },
      ],
    },
    impact: {
      visualLabel: 'Research × application × collaboration',
      visualStatement: 'Projects emerge through dialogue.',
      eyebrow: 'Collaboration',
      title: 'Academic expertise for shared projects.',
      description: 'We collaborate on projects with companies, public institutions and other academic partners. We bring data-science methods into interdisciplinary teams and develop solutions together with the relevant specialist domains.',
      action: 'Contact our team',
    },
    contact: {
      eyebrow: 'Contact',
      titleStart: 'Questions become',
      titleAccent: 'projects.',
      action: 'Get in touch',
      address: ['Institute for Data Science', 'HAW Kiel – Kiel University of Applied Sciences', 'Grenzstraße 3', '24149 Kiel'],
    },
  },
  projects: {
    eyebrow: 'Project overview',
    title: 'Projects',
    description: 'Project information is being added on an ongoing basis.',
    cards: [
      { code: '01 / PROJECT', title: 'Project title to follow', description: 'A short project description will follow.', slug: 'projekt-platzhalter-1' },
      { code: '02 / PROJECT', title: 'Project title to follow', description: 'A short project description will follow.', slug: 'projekt-platzhalter-2' },
    ],
    detailLinkLabel: 'Open project template →',
  },
  projectDetail: {
    eyebrow: 'Project',
    title: 'Project details to follow',
    introduction: 'An introduction to the project will be added.',
    description: 'A description, project goals and further information will be added.',
    metadataTitle: 'Project information',
    metadata: ['Project duration: to follow', 'Participants: to follow', 'Project status: to follow'],
    relatedTitle: 'Further information',
    relatedDescription: 'Links to materials and an external project page will follow.',
    routeIdentifierLabel: 'Project identifier',
    pendingIdentifier: 'to follow',
    backToOverviewLabel: 'Back to project overview',
  },
  about: {
    eyebrow: 'About us',
    title: 'Institute for Data Science',
    introduction: 'Information about the institute will follow.',
    sections: [
      { title: 'Profile', description: 'A profile of the institute will be added.' },
      { title: 'Team', description: 'Information about the people involved will follow.' },
    ],
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Get in touch',
    introduction: 'Contact information and guidance will be added.',
    formTitle: 'Prepare a message',
    nameLabel: 'Name',
    emailLabel: 'Email address',
    messageLabel: 'Message',
    submissionNote: 'Sending will be added at a later stage.',
    submitLabel: 'Sending to follow',
    detailsTitle: 'Contact information',
    detailsDescription: 'Contact people, address details and further ways to get in touch will follow.',
  },
  legal: {
    impressum: {
      eyebrow: 'Legal information',
      title: 'Imprint',
      introduction: 'The following information must be completed and legally reviewed before publication.',
      sections: [
        {
          title: 'Responsible organisation',
          paragraphs: [
            { before: 'This website is operated by ', placeholder: '[name of the responsible organisation]', after: '.' },
            { before: 'Represented by ', placeholder: '[name and role of the authorised representative]', after: '.' },
          ],
        },
        {
          title: 'Address and contact details',
          paragraphs: [
            { before: 'Postal address: ', placeholder: '[street, number, postcode and city]', after: '.' },
            { before: 'Email: ', placeholder: '[contact email address]', after: '.' },
            { before: 'Telephone: ', placeholder: '[telephone number]', after: '.' },
          ],
        },
        {
          title: 'Further legal information',
          paragraphs: [
            { before: 'Legal form, register details and VAT identification number: ', placeholder: '[add where applicable]', after: '.' },
            { before: 'Responsible for editorial content: ', placeholder: '[name and postal address]', after: '.' },
          ],
        },
      ],
    },
    privacy: {
      eyebrow: 'Legal information',
      title: 'Privacy policy',
      introduction: 'This page is a general template. It must be adapted to the actual data processing and legally reviewed before publication.',
      sections: [
        {
          title: 'Responsible organisation',
          paragraphs: [
            { before: 'The organisation responsible for processing personal data is ', placeholder: '[name and address of the responsible organisation]', after: '.' },
            { before: 'Privacy contact: ', placeholder: '[email address or contact details]', after: '.' },
          ],
        },
        {
          title: 'Processing when visiting this website',
          paragraphs: [
            { before: 'Describe which personal data is processed when the website is accessed, for which purpose and on which legal basis: ', placeholder: '[add the specific processing activities]', after: '.' },
            { before: 'Storage periods and recipient categories: ', placeholder: '[add the specific details]', after: '.' },
          ],
        },
        {
          title: 'Hosting, cookies and external services',
          paragraphs: [
            { before: 'Hosting provider and processing location: ', placeholder: '[add provider, location and contractual basis]', after: '.' },
            { before: 'Information about cookies, analytics tools or integrated external services: ', placeholder: '[add only services that are actually used]', after: '.' },
          ],
        },
        {
          title: 'Your rights',
          paragraphs: [
            { before: 'Where the legal requirements are met, data subjects have rights including access, rectification, erasure, restriction of processing and objection. Responsible supervisory authority: ', placeholder: '[name and contact details of the responsible supervisory authority]', after: '.' },
          ],
        },
        {
          title: 'Last updated',
          paragraphs: [{ before: 'Date of this privacy information: ', placeholder: '[DD.MM.YYYY]', after: '.' }],
        },
      ],
    },
  },
}
