
// ─────────────────────────────────────────────
//  PORTFOLIO DATA  —  Edit everything here!
// ─────────────────────────────────────────────

export const PERSONAL = {
  name: 'Roland Shem J. Alera',
  initials: 'RSA',
  tagline: 'Building clean interfaces, scalable backends, and keeping hardware running — one line of code and one screw at a time.',
  location: 'Iloilo City, Philippines',
  email: 'rolandshemalera@email.com',
  course: 'BSIT 2-B',
  roles: [
    'Frontend Developer',
    'Backend Developer',
    'IT Technician',
    'NC2 CSS Certified',
  ],
  stats: [
    { value: '3+', label: 'Years Experience' },
    { value: '10+', label: 'Projects Built' },
    { value: 'NC2', label: 'Certified' },
  ],
  aboutHeadline: 'Developer by passion,',
  aboutHeadlineAccent: 'Technician by trade.',
  aboutP1: "I'm Roland Shem, a BSIT student and IT professional based in the Philippines. I build web applications from front to back, and when I'm not coding, I'm fixing hardware — PCs, laptops, and printers.",
  aboutP2: 'Holding an NC2 certification in Computer Systems Servicing from TESDA, I bridge the gap between software and hardware — making me a versatile tech professional.',
  aboutTags: ['React.js', 'Node.js', 'PHP', 'MySQL', 'NC2 CSS'],
  contactNote: "Have a project in mind or need IT support? Let's build something great together.",
};

export const NAV_LINKS = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'];

export const SKILLS = [
  {
    category: 'Frontend',
    icon: 'https://skillicons.dev/icons?i=html,css,js,react,tailwind,bootstrap&perline=6',
    items: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    category: 'Backend',
    icon: 'https://skillicons.dev/icons?i=nodejs,express,php,mysql&perline=4',
    items: ['Node.js', 'Express.js', 'PHP', 'MySQL', 'REST APIs'],
  },
  {
    category: 'IT / Hardware',
    icon: 'https://skillicons.dev/icons?i=linux,windows&perline=4',
    items: ['PC Assembly', 'Laptop Repair', 'Printer Maintenance', 'Networking', 'Troubleshooting'],
  },
  {
    category: 'Tools & Others',
    icon: 'https://skillicons.dev/icons?i=git,github,vscode,figma&perline=4',
    items: ['Git & GitHub', 'VS Code', 'Figma', 'Windows OS'],
  },
];

export const PROJECTS = [
  {
    title: 'Weather App',
    desc: 'A React.js weather application integrating the Open-Meteo API to display real-time weather data by location.',
    tags: ['React', 'API', 'CSS'],
    icon: '🌤️',
    color: '#3b82f6',
    link: '#',
  },
  {
    title: 'ClearFocus',
    desc: 'A productivity app UI/UX design featuring task management, focus timer, and clean minimal wireframes.',
    tags: ['UI/UX', 'Figma', 'Wireframe'],
    icon: '🎯',
    color: '#8b5cf6',
    link: '#',
  },
  {
    title: 'Portfolio Website',
    desc: 'Personal developer portfolio built with React.js showcasing skills, projects, and experience.',
    tags: ['React', 'JavaScript', 'CSS'],
    icon: '💼',
    color: '#10b981',
    link: '#',
  },
  {
    title: 'IT Support System',
    desc: 'A simple ticketing and inventory management system for tracking hardware repairs and maintenance.',
    tags: ['PHP', 'MySQL', 'Bootstrap'],
    icon: '🖥️',
    color: '#f59e0b',
    link: '#',
  },
  {
    title: 'Load Tracking System',
    desc: 'LoadTrackPro is a desktop-based business management system developed for load business operators in the Philippines.',
    tags: ['Netbeans', 'MySQL', 'Java'],
    icon: '🖥️',
    color: '#f59e0b',
    link: 'https://github.com/kazamechalera-gif/git-LoadtrackingSystem',
  },
  {
    title: 'GadgetCrate PH',
    desc: 'A specialized platform for buying and selling iPhones and laptops. Features secure transaction rules and product showcases.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Tailwind'],
    icon: '📱',
    color: '#3b82f6',
    link: 'https://gadgetcratephkaz.netlify.app/',
  },
  {
    title: 'Core Banking System',
    desc: 'A secure banking application featuring user authentication and balance management. Developed as a collaborative group project.',
    tags: ['OOP', 'Java'],
    icon: '🏦',
    color: '#10b981',
    link: 'https://github.com/JuanAndrda/BankingSystemFinal',
  },

];

export const EXPERIENCE = [
  {
    year: '2026',
    title: 'BSIT Student — CIT 205',
    company: 'West Visayas State University',
    desc: 'Studying Information Technology with focus on Java programming, UI/UX design, networking, and technical writing.',
    current: true,
  },
  {
    year: '2025',
    title: 'Frontend Developer',
    company: 'Freelance',
    desc: 'Built web interfaces and small business websites using HTML, CSS, JavaScript, and React.js for local client and School project.',
    current: false,
  },
  {
    year: '2024',
    title: 'NC2 Certified — CSS',
    company: 'TESDA',
    desc: 'Earned National Certificate II in Computer Systems Servicing covering PC, laptop, and Basic Computer Network, installation, and maintenance.',
    current: false,
  },

  {
    year: '2023',
    title: 'IT Technician',
    company: 'Self-employed',
    desc: 'Provided hardware repair, troubleshooting, and maintenance services for PCs, laptops, and printers.',
    current: false,
  },
    {
    year: '2020',
    title: 'Filipino Transcriptionist',
    company: 'Eccellente Services Pvt. Ltd.',
    desc: 'Transcribed audio recordings in Filipino language with high accuracy for various clients.',
    current: false,
  },
];
