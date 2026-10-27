/**
 * All portfolio content lives here — edit this one file to update the app.
 */

export const profile = {
  name: 'Yamini Sarnala',
  initials: 'YS',
  title: 'Software Engineer',
  tagline: 'React Native · Mobile-First Development',
  experienceYears: '3+',
  location: 'Hyderabad, India',
  summary:
    'Software Engineer with 3 years of experience specializing in React Native, ' +
    'React.js, JavaScript, Java, Spring Boot, REST APIs, and MySQL. I build ' +
    'mobile-first features, reusable UI components, and scalable back-end modules ' +
    'across CRM and AI-driven platforms — from dynamic forms and API integration ' +
    'to production releases in fast-paced teams.',
  phone: '+91 8712135550',
  email: 'yaminisarnala@gmail.com',
  linkedin: 'https://www.linkedin.com/in/yamini-sarnala-460675208',
  linkedinLabel: 'linkedin.com/in/yamini-sarnala',
  github: 'https://github.com/YaminiSarnala',
  githubLabel: 'github.com/YaminiSarnala',
};

export const highlights = [
  { value: '3+', label: 'Years experience' },
  { value: '4', label: 'Major products' },
  { value: '15+', label: 'Modules shipped' },
];

export type SkillGroup = { category: string; icon: string; items: string[] };

export const skills: SkillGroup[] = [
  { category: 'Mobile', icon: 'phone-portrait-outline', items: ['React Native', 'Redux Toolkit', 'Expo', 'EAS Build', 'OTA Updates'] },
  { category: 'Front-End', icon: 'code-slash-outline', items: ['JavaScript', 'React', 'HTML', 'CSS'] },
  { category: 'Back-End', icon: 'server-outline', items: ['Java', 'Spring', 'Spring Boot', 'Microservices', 'RESTful APIs'] },
  { category: 'Database', icon: 'cube-outline', items: ['MySQL'] },
  { category: 'Networking & Storage', icon: 'git-network-outline', items: ['Axios', 'Fetch', 'Async Storage', 'Local caching'] },
  { category: 'Tools', icon: 'construct-outline', items: ['Git', 'GitHub', 'VS Code', 'Postman', 'STS'] },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  summary: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    role: 'Software Engineer',
    company: 'Trysol Global Services',
    period: 'Jan 2026 – Present',
    summary:
      'Building the cross-platform mobile app for WoVerse, an AI-powered interview ' +
      'preparation platform with mock interviews, AI assessments, and mentor guidance.',
    points: [
      'Developed and maintained cross-platform mobile applications using React Native.',
      'Implemented Student and Mentor modules: authentication, dashboards, profiles, interview workflows, reports, earnings, notifications, contracts, and availability.',
      'Integrated the mobile app with backend REST APIs (FastAPI) for interview, user, and reporting flows.',
      'Built the mobile UI for AI interview flows, answer submission, reports, and performance tracking.',
      'Created reusable UI components, Redux Toolkit state management, and API integration layers.',
      'Integrated third-party services: payment gateways, notifications, and coding assessment platforms.',
      'Handled issue resolution, feature enhancements, testing, APK releases, and deployment.',
    ],
  },
  {
    role: 'Associate Software Engineer',
    company: 'Cyepro Solutions',
    period: 'Jan 2024 – Jan 2026',
    summary:
      'Worked on an Automotive CRM that digitizes the complete car sales workflow — ' +
      'lead management, evaluation, booking, and delivery — across mobile and back-end.',
    points: [
      'Developed a mobile CRM using React Native and Spring Boot to digitize the automobile sales workflow.',
      'Built reusable dynamic form components in React Native to support multiple evaluation workflows.',
      'Integrated REST APIs with mobile modules for real-time front-end/back-end data sync.',
      'Implemented bulk upload using Spring Boot, JPA, and MySQL for efficient processing of large datasets.',
      'Developed Firebase push notifications for real-time updates to mobile users.',
      'Designed and implemented multiple dashboard and evaluation screens.',
      'Improved the dev workflow with Git version control and structured feature branching.',
    ],
  },
  {
    role: 'Trainee',
    company: 'dSilo.ai',
    period: 'Nov 2022 – Mar 2023',
    summary: 'Hands-on training in Java back-end fundamentals and database integration.',
    points: [
      'Completed hands-on training in Core Java, OOP, Collections, Strings, JDBC, and SQL.',
      'Developed small backend modules and practiced database integration using Java and SQL.',
    ],
  },
];

export type Project = {
  name: string;
  role: string;
  blurb: string;
  tech: string[];
  features: string[];
  /**
   * Public store listings. Either may be omitted — not every app ships on both
   * platforms. The Projects screen picks the one matching the viewer's device
   * (App Store on iOS, Play Store elsewhere) and falls back to the other if the
   * native one doesn't exist, so the button label always matches where it goes.
   */
  playStoreUrl?: string;
  appStoreUrl?: string;
  /** Still being built — shows an "In development" badge instead of a store link. */
  inDevelopment?: boolean;
};

export const projects: Project[] = [
  {
    name: 'TapCure',
    role: 'Clinic Booking & Live OP Queue · Mobile',
    blurb:
      'A healthcare app that connects patients, doctors, and clinic front desks — book ' +
      'appointments, track your live OP token, and manage the whole clinic day from one app.',
    tech: ['React Native', 'Expo', 'TypeScript', 'Expo Router', 'REST APIs', 'EAS Build', 'OTA Updates'],
    features: [
      'Patient, Doctor & Reception modules',
      'Doctor & hospital discovery with appointment booking',
      'Live OP queue and token tracking',
      'Reception desk: walk-ins, vitals capture, patient records',
      'English, Hindi & Telugu with voice-guided booking',
      'Phone and iPad layouts',
    ],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.tryovate.tapcure',
  },
  {
    name: 'CrewNBuild',
    role: 'Construction Project Marketplace · Mobile',
    blurb:
      'A construction platform where home owners plan projects, hire builders and site ' +
      'engineers, buy materials, and follow progress on site — all from their phone.',
    tech: ['React Native', 'Expo', 'Redux Toolkit', 'React Navigation', 'Axios'],
    features: [
      'Owner project creation and management',
      'Find, compare, negotiate with and award builders',
      'Materials marketplace with cart and orders',
      'Site photo calendar and live CCTV cameras',
      'Chat, notifications, multi-language and dark mode',
    ],
    inDevelopment: true,
  },
  {
    name: 'WoVerse',
    role: 'AI Interview Preparation Platform · Mobile',
    blurb:
      'An AI-driven platform that helps students improve interview skills through mock ' +
      'interviews, AI assessments, mentor guidance, and performance analytics.',
    tech: ['React Native', 'Redux Toolkit', 'Expo', 'REST APIs'],
    features: [
      'Student & Mentor modules',
      'AI interview flows',
      'Reports & performance analytics UI',
      'Payment gateway integration',
      'Push notifications',
    ],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.thewoverse.mobile',
    // No iOS listing found for WoVerse — every EAS production build was Android.
    // If an App Store version ships, add: appStoreUrl: 'https://apps.apple.com/...'
  },
  {
    name: 'Automotive CRM Cyepro',
    role: 'Car Sales Workflow · Mobile + Back-end',
    blurb:
      'A mobile CRM that digitizes the full car sales workflow from lead capture to ' +
      'delivery, with dynamic evaluation forms and bulk data processing.',
    tech: ['React Native', 'React', 'Spring Boot', 'MySQL', 'Firebase'],
    features: [
      'Lead management system',
      'Dynamic evaluation forms',
      'Vehicle booking workflow',
      'Push notifications',
      'Bulk upload module',
    ],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.b2b_new_theme',
    appStoreUrl: 'https://apps.apple.com/us/app/cyepro/id1635723670',
  },
];

export type Education = { degree: string; institution: string; period: string; score: string };

export const education: Education[] = [
  { degree: 'Master of Computer Applications (MCA)', institution: 'P.B. Siddhartha College of Arts & Science', period: '2020 – 2022', score: 'GPA 85%' },
  { degree: 'B.Sc in Computer Science', institution: 'Sri Durga Malleswara Siddhartha Mahila Kalasala', period: '2017 – 2020', score: 'GPA 67%' },
  { degree: 'Intermediate', institution: 'NRI Junior College', period: '2015 – 2017', score: 'GPA 89%' },
  { degree: 'SSC', institution: 'Sri Vijnana Vihara English Medium High School', period: '2014 – 2015', score: 'GPA 77%' },
];

export const certifications = [
  'NPTEL Certificate – Blockchain and its Applications',
  'Full Stack Development – Coding Hub Innovations Pvt. Ltd.',
  'Cloud Computing – Albright Technologies',
];

export const achievements = [
  "SGT Rank Holder in NCC; achieved NCC 'C' Certificate",
  'Participated in workshops on IoT & IoT using Raspberry Pi',
];
