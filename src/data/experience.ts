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
    period: '2023 — 2026 (Present)',
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
    id: 'pcl-leader',
    period: '2023 — Present',
    role: 'Competitive Problem Solver & Contributor',
    organization: 'PICT Coders League (PCL)',
    location: 'Pune, MH',
    type: 'leadership',
    description: "Active core contributor in PICT's premier algorithmic league, solving high-constraint contest challenges and coaching junior peers in data structures and contest strategies.",
    bullets: [
      'Surpassed 700+ LeetCode solves with global contest rating in top percentiles.',
      'Conducted peer problem-solving sessions on dynamic programming and graph invariants.',
      'Engineered CF Arena: live WebSocket dueling platform for Codeforces contestants.',
    ],
    tags: ['Competitive Programming', 'LeetCode', 'Codeforces', 'CodeChef'],
  },
  {
    id: 'algoarena-release',
    period: '2024',
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
    id: 'medvision-research',
    period: '2024',
    role: 'Applied AI & Medical Imaging Researcher',
    organization: 'MedVision Project',
    location: 'Pune, MH',
    type: 'achievement',
    description: 'Trained DenseNet121 transfer learning neural networks achieving 98.4% validation accuracy on chest radiograph abnormalities with explainable Grad-CAM heatmaps.',
    bullets: [
      'Engineered FastAPI inference microservice serving predictions in under 120ms.',
      'Implemented explainable AI overlays allowing clinicians to verify activations.',
      'Built automated image preprocessing pipeline dealing with class imbalance.',
    ],
    tags: ['TensorFlow', 'DenseNet121', 'Grad-CAM', 'FastAPI', 'Computer Vision'],
  },
]
