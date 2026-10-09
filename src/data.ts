// Portfolio data — single source of truth
export const personal = {
  name: 'Backia Lakshmi B',
  tagline: 'AI & Machine Learning Enthusiast | AI Developer | Generative AI',
  location: 'Thoothukudi, Tamil Nadu, India',
  email: 'backialakshmi10e@gmail.com',
  linkedin: 'https://www.linkedin.com/in/backia-lakshmi-b-481512305',
  github: 'https://github.com/backia05',
  skillrack: 'http://www.skillrack.com/profile/440730',
};

export const achievements = [
  { value: '9.47', unit: '/10', label: 'Academic CGPA', sublabel: 'Through 6th Semester' },
  { value: '#1', unit: '', label: 'Department Rank', sublabel: 'Throughout Academic Year' },
  { value: 'IEEE', unit: '', label: 'Published Research', sublabel: 'ICESC 2025, Coimbatore' },
  { value: '2026', unit: '', label: 'AI Developer Intern', sublabel: 'Stashook Technologies' },
];

export const projects = [
  {
    id: 'bhoomibuddy',
    number: '01',
    title: 'BhoomiBuddy',
    category: 'AI for Smart Agriculture',
    tagline: 'Intelligent soil analysis and crop recommendation assistant',
    description:
      'Engineered an AI-powered smart farming assistant using OCR, rule-based intelligence, and Generative AI to analyze soil health and deliver personalized crop and fertilizer recommendations.',
    concepts: ['OCR', 'Generative AI', 'Rule-Based Intelligence', 'Information Extraction', 'Python'],
    workflow: [
      { step: 'Input Data', detail: 'Soil report or test results submitted by user' },
      { step: 'OCR Extraction', detail: 'Optical character recognition parses document data' },
      { step: 'Rule-Based Analysis', detail: 'Structured logic evaluates soil parameters' },
      { step: 'Generative AI Layer', detail: 'LLM synthesises personalised recommendations' },
      { step: 'Recommendations', detail: 'Actionable crop and fertilizer guidance delivered' },
    ],
    problem:
      'Smallholder farmers often lack access to affordable, personalised agronomic advice. Understanding soil reports requires expert knowledge most rural users do not possess.',
    approach:
      'BhoomiBuddy bridges this gap by combining OCR-based document understanding with rule-based agricultural intelligence, augmented by Generative AI to produce contextual, human-readable crop and fertiliser guidance.',
    color: '#0d7377',
    gradientFrom: 'rgba(13,115,119,0.08)',
    gradientTo: 'rgba(13,115,119,0.02)',
  },
  {
    id: 'voice-assistant',
    number: '02',
    title: 'Intelligent AI Voice Assistant',
    category: 'Conversational AI · RAG',
    tagline: 'Context-aware RAG-powered voice interaction system',
    description:
      'Built an AI-powered voice assistant utilising Retrieval-Augmented Generation to deliver context-aware responses from PDF and JSON knowledge repositories.',
    concepts: ['RAG', 'Semantic Search', 'Python', 'Query Expansion', 'Voice Interaction', 'PDF/JSON Retrieval'],
    workflow: [
      { step: 'Voice Input', detail: 'User speaks a natural-language query' },
      { step: 'Query Processing', detail: 'Intelligent query expansion enhances retrieval precision' },
      { step: 'Knowledge Retrieval', detail: 'Semantic search across PDF and JSON repositories' },
      { step: 'Context Assembly', detail: 'Relevant document chunks assembled as LLM context' },
      { step: 'LLM Response', detail: 'Model generates a grounded, context-aware answer' },
      { step: 'Voice Output', detail: 'Response delivered as synthesised speech' },
    ],
    problem:
      'Traditional voice assistants rely on generic, pre-programmed responses that fail to leverage domain-specific knowledge. Organisations need assistants that understand their own documentation.',
    approach:
      'The assistant applies RAG to ground every response in verified documents—PDF and JSON knowledge bases—combined with intelligent query expansion and semantic search to improve retrieval accuracy.',
    color: '#1e3a5f',
    gradientFrom: 'rgba(30,58,95,0.08)',
    gradientTo: 'rgba(30,58,95,0.02)',
  },
];

export const experience = {
  company: 'Stashook Technologies Pvt. Ltd.',
  location: 'Chennai, India',
  role: 'AI Developer Intern',
  year: '2026',
  responsibilities: [
    'Developed a RAG-based conversational AI voice assistant using Python to transform data into an interactive knowledge system.',
    'Implemented semantic search and intelligent query expansion to enhance retrieval accuracy and user experience.',
    'Enabled real-time voice interaction for natural, conversational system access.',
    'Built secure multi-user authentication with encrypted password storage.',
    'Optimised data processing workflows for efficient information access across large document repositories.',
  ],
};

export const publication = {
  title: 'Self-Adaptive Digital Twins for Patient Health Dynamics: A Learning-Driven Simulation Framework',
  conference: '2025 6th International Conference on Electronics, Communication and Aerospace Technology (ICESC)',
  location: 'Coimbatore, India',
  year: '2025',
  pages: '765–770',
  doi: '10.1109/ICESC65114.2025.11212621',
  doiUrl: 'https://doi.org/10.1109/ICESC65114.2025.11212621',
  summary:
    'This paper proposes a learning-driven simulation framework for self-adaptive digital twins that model patient health dynamics. The framework continuously learns from patient data to update its simulation state, enabling personalised and responsive health monitoring through adaptive computational models.',
};

export const skills = [
  {
    category: 'Programming Languages',
    items: ['Python', 'Java', 'SQL'],
    color: 'accent',
  },
  {
    category: 'AI & Machine Learning',
    items: ['Machine Learning', 'Machine Learning Techniques', 'Generative AI'],
    color: 'teal',
  },
  {
    category: 'Data & Analytics',
    items: ['Data Analytics', 'Predictive Analytics', 'Data Visualization'],
    color: 'accent',
  },
  {
    category: 'Technical Concepts',
    items: ['Retrieval-Augmented Generation', 'Semantic Search', 'OCR', 'Rule-Based Intelligence', 'Intelligent Query Expansion'],
    color: 'teal',
  },
  {
    category: 'Tools & Software',
    items: ['Microsoft Word', 'Microsoft Excel', 'Microsoft PowerPoint'],
    color: 'neutral',
  },
];

export const education = [
  {
    institution: 'National Engineering College',
    location: 'Kovilpatti',
    degree: 'B.Tech in Artificial Intelligence and Data Science',
    period: '2023 – 2027',
    score: 'CGPA: 9.47 / 10',
    scoreNote: 'Through 6th Semester',
    highlight: true,
  },
  {
    institution: 'St. Thomas Matriculation Higher Secondary School',
    location: 'Thoothukudi',
    degree: 'Higher Secondary Certificate (HSC)',
    period: '2022 – 2023',
    score: '93%',
    scoreNote: 'Higher Secondary Certificate',
    highlight: false,
  },
];

export const leadership = [
  {
    title: 'First Rank — Department',
    description: 'Secured first rank in the Artificial Intelligence and Data Science department throughout the academic year.',
    icon: '🏅',
  },
  {
    title: 'Runner-up — Opinionators',
    description: 'Secured runner-up position at Opinionators, a national-level symposium.',
    icon: '🥈',
  },
  {
    title: 'Top 100 — Naukri Young Turf 2025',
    description: 'Selected among top 100 participants in the Naukri Young Turf 2025 national programme.',
    icon: '🌟',
  },
  {
    title: 'Treasurer — ISTE Club',
    description: 'Serving as Treasurer of the Indian Society for Technical Education (ISTE) student chapter.',
    icon: '📋',
  },
];
