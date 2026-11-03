export interface ExperienceItem {
  id: string
  period: string
  role: string
  organization: string
  location: string
  type: 'education' | 'leadership' | 'achievement'
  description: string
  bullets: string[]
  tags: string[]
}

export const TIMELINE_EXPERIENCES: ExperienceItem[] = [
  {
    id: 'pict-btech',
    period: '2024 — 2028 (Present)',
    role: 'B.Tech in Artificial Intelligence & Data Science',
    organization: 'Pune Institute of Computer Technology (PICT)',
    location: 'Pune, MH',
    type: 'education',
    description: 'Specializing in distributed systems, machine learning architectures, and high-performance algorithms with rigorous coursework in DBMS, OS, and Computer Networks.',
    bullets: [
      'Core focus on backend systems, concurrency paradigms, and algorithm proofs.',
      'Active researcher in deep learning architectures (CNNs, Grad-CAM interpretability).',
      'Regular finalist and participant in inter-college competitive coding hackathons.',
    ],
    tags: ['B.Tech', 'AI & DS', 'Algorithms', 'Distributed Systems'],
  },
  {
    id: 'pcl-member',
    period: '2025 — Present',
    role: 'Competitive Programming & DSA Member',
    organization: 'PICT Coders League (PCL)',
    location: 'Pune, Maharashtra',
    type: 'leadership',
    description: 'Active member of PICT Coders League, a student-led community focused on building a strong culture of Competitive Programming and Data Structures & Algorithms at PICT. Participate in coding contests, problem-solving discussions, post-contest analyses, and collaborative learning to strengthen algorithmic thinking and problem-solving skills.',
    bullets: [
      'Participate in regular coding contests and post-contest problem analyses.',
      'Engage in collaborative peer problem-solving to strengthen algorithmic thinking.',
      'Focus on Data Structures, Algorithms, dynamic programming, and graph theory.',
    ],
    tags: ['Competitive Programming', 'Data Structures & Algorithms', 'Codeforces', 'LeetCode', 'CodeChef'],
  },
  {
    id: 'algoarena-release',
    period: '2025',
    role: 'Lead Systems Architect & Full-Stack Developer',
    organization: 'AlgoArena / CF Arena Engine',
    location: 'Pune, MH',
    type: 'achievement',
    description: 'Designed and shipped real-time 1v1 algorithmic dueling platforms featuring server-authoritative code execution, STOMP WebSockets, and pessimistic lock management.',
    bullets: [
      'Architected Spring Boot backend with sub-50ms WebSocket latency.',
      'Integrated Judge0 sandbox runtime with Dockerized multi-language compilers.',
      'Implemented JWT stateless auth, ELO calculation engine, and instant replay logs.',
    ],
    tags: ['Spring Boot', 'WebSockets', 'Docker', 'PostgreSQL', 'Redis'],
  },
  {
    id: 'rakshak-project',
    period: '2026',
    role: 'Privacy & Agent Systems Architect',
    organization: 'Rakshak 2.0 Project',
    location: 'Pune, MH',
    type: 'achievement',
    description: 'Engineered a privacy-first autonomous browser agent that performs on-device OCR, face detection, and PII redaction before context transmission to reasoning LLMs.',
    bullets: [
      'Built Chrome extension with local vision and WebGPU/WASM fallback inference.',
      'Implemented FastAPI validation microservice with dual-layer sanitization checks.',
      'Integrated Gemini LLM API with zero raw secret exposure and audit trails.',
    ],
    tags: ['Chrome Extension', 'Python', 'FastAPI', 'Gemini', 'On-device Vision', 'Privacy'],
  },
]
