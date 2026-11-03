export const SITE = {
  name: 'Kartik Bhangale',
  shortName: 'KARTIK',
  monogram: 'K.',
  domain: 'kartik.exe',
  title: 'KARTIK.EXE — Backend, Algorithms, Intelligent Systems',
  description:
    'The personal interface of Kartik Bhangale — backend engineer, competitive programmer, and AI & Data Science student. Real systems, real telemetry, no stock photography.',
  role: 'Backend engineer / competitive programmer / AI & DS',
  location: 'Pune, India',
  coordinates: '18.5204° N / 73.8567° E',
  timezone: 'Asia/Kolkata',
  email: 'kartikbhangale20@gmail.com',
  education: 'B.Tech Artificial Intelligence & Data Science',
  institution: 'Pune Institute of Computer Technology',
  institutionShort: 'PICT',
  studyYear: 'Third year',
  batch: 'AI & DS / 2026',
  availability: 'OPEN TO HARD PROBLEMS',
  status: 'SYSTEM ONLINE',
  links: {
    github: 'https://github.com/fenixftw6968',
    leetcode: 'https://leetcode.com/u/kartik6968/',
    codeforces: 'https://codeforces.com/profile/kartik8899',
    codechef: 'https://www.codechef.com/users/fenix6968',
    linkedin: 'https://www.linkedin.com/in/kartik-bhangale-13011a329/',
    email: 'mailto:kartikbhangale20@gmail.com',
  },
  handles: {
    github: 'fenixftw6968',
    leetcode: 'kartik6968',
    codeforces: 'kartik8899',
    codechef: 'fenix6968',
    linkedin: 'kartik-bhangale',
  },
} as const

export const SECTIONS = [
  { id: 'home', index: '00', label: 'HOME', meta: 'ROOT' },
  { id: 'about', index: '01', label: 'ABOUT', meta: 'PHILOSOPHY' },
  { id: 'experience', index: '02', label: 'EXPERIENCE', meta: 'TIMELINE' },
  { id: 'projects', index: '03', label: 'PROJECTS', meta: 'CASE FILES' },
  { id: 'cp', index: '04', label: 'CP STATS', meta: 'TELEMETRY' },
  { id: 'github', index: '05', label: 'GITHUB', meta: 'FOOTPRINT' },
  { id: 'stack', index: '06', label: 'TECH STACK', meta: 'ARSENAL' },
  { id: 'contact', index: '07', label: 'CONTACT', meta: 'TRANSMIT' },
] as const

export type SectionId = (typeof SECTIONS)[number]['id']

export const HERO_STATEMENT = ['I BUILD.', 'I BREAK.', 'I UNDERSTAND.', 'I REBUILD.'] as const

export const HERO_MODES = [
  { label: 'BACKEND SYSTEMS', detail: 'AUTH / DATA / FAILURE MODES' },
  { label: 'ALGORITHMS', detail: 'CONSTRAINTS / PROOF / COMPLEXITY' },
  { label: 'INTELLIGENT SYSTEMS', detail: 'VISION / LLMS / EVALUATION' },
] as const

export const PRINCIPLES = [
  {
    index: '01',
    title: 'Systems over surfaces.',
    body: 'A polished endpoint is not the same thing as a dependable system. I care about what happens under load, after a failed write, and when the happy path stops being available.',
  },
  {
    index: '02',
    title: 'Correctness before cleverness.',
    body: 'The first version should be understandable. The second version can be fast. In competitive programming, a correct slow solution beats an elegant wrong one every time.',
  },
  {
    index: '03',
    title: 'Measure, then optimize.',
    body: 'Cache invalidation, query plans, socket fan-out, model latency. I would rather instrument a bottleneck than guess at one.',
  },
  {
    index: '04',
    title: 'If it cannot fail safely, it is not finished.',
    body: 'Rate limits, expired tokens, duplicate handles, missing model files, dead APIs. Failure states are product surfaces too.',
  },
] as const

export const STACK_GROUPS = [
  {
    id: 'languages',
    label: 'LANGUAGES',
    index: '01',
    summary: 'The syntax layer.',
    tags: [
      { name: 'Java', status: 'shipped', note: 'Spring Boot services across CF Arena, AlgoArena, and Inventory.', projects: ['cf-arena', 'algoarena', 'inventory'] },
      { name: 'C++', status: 'shipped', note: 'Primary contest language: 705 LeetCode solves and 62 Codeforces solves.', projects: ['leetcode-codes'] },
      { name: 'Python', status: 'shipped', note: 'TensorFlow/Keras training, FastAPI inference, Flask dashboards.', projects: ['medvision', 'rakshak'] },
      { name: 'TypeScript', status: 'shipped', note: 'This interface, IntelliQ, and typed frontend tooling.', projects: ['intelliq', 'kartik-exe'] },
      { name: 'JavaScript', status: 'shipped', note: 'React SPAs, browser-extension modules, and game engines.', projects: ['algoarena', 'rakshak'] },
      { name: 'SQL', status: 'shipped', note: 'Relational modelling and query work on PostgreSQL.', projects: ['algoarena', 'medvision'] },
    ],
  },
  {
    id: 'backend',
    label: 'BACKEND',
    index: '02',
    summary: 'Where the promises live.',
    tags: [
      { name: 'Spring Boot', status: 'shipped', note: 'Layered REST services, scheduled workers, and WebSocket endpoints.', projects: ['cf-arena', 'algoarena'] },
      { name: 'Spring Security', status: 'shipped', note: 'Stateless JWT, OAuth2/OIDC, BCrypt password hashing, role checks.', projects: ['cf-arena', 'algoarena'] },
      { name: 'Spring Data JPA', status: 'shipped', note: 'Entity modelling, repository queries, pessimistic locks.', projects: ['algoarena', 'inventory'] },
      { name: 'REST APIs', status: 'shipped', note: 'DTO boundaries, validation, global error responses.', projects: ['cf-arena', 'algoarena'] },
      { name: 'JWT', status: 'shipped', note: 'Short-lived stateless identity across REST and STOMP connections.', projects: ['cf-arena', 'algoarena'] },
      { name: 'WebSockets / STOMP', status: 'shipped', note: 'Live match state, chat, emotes, tournament events.', projects: ['cf-arena', 'algoarena'] },
      { name: 'Kafka', status: 'exploring', note: 'Studying durable event flows and consumer failure semantics.', projects: [] },
      { name: 'FastAPI', status: 'shipped', note: 'Model serving and Grad-CAM endpoints for medical imaging.', projects: ['medvision'] },
      { name: 'Flask', status: 'shipped', note: 'The two-model MedVision application and its dashboard.', projects: ['medvision'] },
      { name: 'Distributed Systems', status: 'exploring', note: 'Partitioning, consensus, idempotency, and observability as a next frontier.', projects: [] },
    ],
  },
  {
    id: 'data',
    label: 'DATA',
    index: '03',
    summary: 'State that outlives a request.',
    tags: [
      { name: 'PostgreSQL', status: 'shipped', note: 'Relational schema for AlgoArena, MedVision, Inventory, and job tracking.', projects: ['algoarena', 'medvision', 'inventory'] },
      { name: 'MongoDB', status: 'shipped', note: 'Document model for CF Arena matches, tournaments, and users.', projects: ['cf-arena'] },
      { name: 'Hibernate', status: 'shipped', note: 'ORM mappings and entity relationships in Spring services.', projects: ['algoarena', 'inventory'] },
      { name: 'Schema Design', status: 'shipped', note: 'Patients → scans → predictions, products → categories → suppliers, and more.', projects: ['medvision', 'inventory'] },
      { name: 'Caching', status: 'exploring', note: 'Studying cache keys, TTLs, stampedes, and invalidation paths.', projects: [] },
      { name: 'Observability', status: 'exploring', note: 'Logs, metrics, traces, and failure narratives.', projects: [] },
    ],
  },
  {
    id: 'intelligence',
    label: 'AI / ML',
    index: '04',
    summary: 'Models that show their work.',
    tags: [
      { name: 'TensorFlow / Keras', status: 'shipped', note: 'DenseNet121 transfer learning for X-ray and MRI classification.', projects: ['medvision'] },
      { name: 'Computer Vision', status: 'shipped', note: 'Medical imaging, augmentation, and on-device browser vision.', projects: ['medvision', 'rakshak'] },
      { name: 'Grad-CAM', status: 'shipped', note: 'Explainability overlays returned as part of the inference response.', projects: ['medvision'] },
      { name: 'scikit-learn', status: 'shipped', note: 'Class weighting, split logic, reports, and classical ML experiments.', projects: ['medvision', 'ragepredictor'] },
      { name: 'OpenCV', status: 'shipped', note: 'Image preprocessing and Grad-CAM overlay generation.', projects: ['medvision'] },
      { name: 'LLM APIs', status: 'shipped', note: 'Gemini and OpenAI integration in IntelliQ and Rakshak.', projects: ['rakshak', 'intelliq'] },
      { name: 'On-device Vision', status: 'shipped', note: 'Local PII, OCR, and face detection before any network call.', projects: ['rakshak'] },
      { name: 'RAG', status: 'exploring', note: 'Retrieval quality, chunking, evaluation, and grounded answers.', projects: [] },
      { name: 'Deep Learning', status: 'shipped', note: 'CNNs, transfer learning, data augmentation, class imbalance.', projects: ['medvision'] },
    ],
  },
  {
    id: 'systems',
    label: 'SYSTEMS',
    index: '05',
    summary: 'The floor beneath the stack.',
    tags: [
      { name: 'DSA', status: 'shipped', note: '705 LeetCode / 62 Codeforces / 163 CodeChef problems solved.', projects: ['leetcode-codes'] },
      { name: 'OOP', status: 'shipped', note: 'Layered service design and explicit domain boundaries.', projects: ['cf-arena', 'algoarena'] },
      { name: 'DBMS', status: 'shipped', note: 'Transactions, constraints, indexes, and relational modelling.', projects: ['algoarena', 'inventory'] },
      { name: 'Operating Systems', status: 'shipped', note: 'Coursework and process/thread intuition applied to concurrency.', projects: [] },
      { name: 'Computer Networks', status: 'shipped', note: 'HTTP, WebSockets, CORS, and request lifecycles.', projects: ['cf-arena', 'algoarena'] },
      { name: 'System Design', status: 'exploring', note: 'Capacity, boundaries, queues, failure isolation, and change.', projects: [] },
      { name: 'Concurrency', status: 'shipped', note: 'Locks, races, and server-authoritative state in live matches.', projects: ['algoarena'] },
    ],
  },
  {
    id: 'infra',
    label: 'INFRA',
    index: '06',
    summary: 'Ship it, then keep it alive.',
    tags: [
      { name: 'Docker', status: 'shipped', note: 'Containerised Spring and React services with Compose stacks.', projects: ['cf-arena', 'algoarena'] },
      { name: 'Render', status: 'shipped', note: 'Backend deployment target for Spring services.', projects: ['cf-arena'] },
      { name: 'Vercel', status: 'shipped', note: 'Frontend deployments for AlgoArena and CF Arena.', projects: ['algoarena', 'cf-arena'] },
      { name: 'AWS', status: 'exploring', note: 'EC2 and S3 deployment paths documented for the medical inference stack.', projects: ['medvision'] },
      { name: 'Nginx', status: 'shipped', note: 'Serving the built SPA in the AlgoArena frontend container.', projects: ['algoarena'] },
      { name: 'Maven', status: 'shipped', note: 'Reproducible Spring builds and test execution.', projects: ['cf-arena', 'algoarena'] },
      { name: 'Git', status: 'shipped', note: 'Version control, PR-sized changes, and conventional commits.', projects: [] },
      { name: 'Jenkins', status: 'exploring', note: 'CI demo pipeline for a Maven application.', projects: ['jenkins'] },
    ],
  },
] as const

export type StackGroup = (typeof STACK_GROUPS)[number]
export type StackTag = StackGroup['tags'][number]

export const TERMINAL_COMMANDS = [
  'help',
  'about',
  'projects',
  'github',
  'leetcode',
  'codeforces',
  'codechef',
  'skills',
  'contact',
  'clear',
] as const

export const EMAIL_SUBJECT = 'KARTIK.EXE / let%27s%20build%20something'
