export type PlatformId = 'leetcode' | 'codeforces' | 'codechef'

export type DataSourceState = 'live' | 'snapshot' | 'unavailable'

export interface RatingPoint {
  date: string
  name: string
  rating: number
  rank?: number | null
}

export interface SolvedBreakdown {
  easy: number
  medium: number
  hard: number
}

export interface PlatformSnapshot {
  id: PlatformId
  name: string
  handle: string
  profileUrl: string
  currentRating: number | null
  maxRating: number | null
  contests: number
  globalRank: number | null
  countryRank?: number | null
  profileRank?: number | null
  topPercentage: number | null
  rankTitle: string | null
  maxRankTitle: string | null
  solved: number | null
  solvedBreakdown?: SolvedBreakdown | null
  submissions?: number | null
  activeDays?: number | null
  streak?: number | null
  reputation?: number | null
  stars?: number | null
  division?: string | null
  submissionsByDay?: { date: string; count: number }[]
  history: RatingPoint[]
  fetchedAt: string
  source: DataSourceState
  error?: string
}

export interface CPSnapshot {
  capturedAt: string
  leetcode: PlatformSnapshot
  codeforces: PlatformSnapshot
  codechef: PlatformSnapshot
}

export interface GitHubUser {
  login: string
  name: string | null
  bio: string | null
  followers: number
  following: number
  publicRepos: number
  createdAt: string
  htmlUrl: string
}

export interface GitHubRepo {
  name: string
  description: string | null
  language: string | null
  stars: number
  forks: number
  pushedAt: string
  url: string
  homepage: string
  fork: boolean
}

export interface GitHubLanguage {
  name: string
  bytes: number
  percent: number
}

export interface ContributionDay {
  date: string
  count: number
  level: number
}

export interface ContributionCalendar {
  year: number
  days: ContributionDay[]
  total: number
  activeDays: number
  longestStreak: number
}

export interface GitHubSnapshot {
  capturedAt: string
  user: GitHubUser
  repos: GitHubRepo[]
  languages: GitHubLanguage[]
  contributions: ContributionCalendar
}

export interface LivePlatformResponse extends Partial<PlatformSnapshot> {
  fetchedAt?: string
}

export type ProjectVisual = 'arena' | 'vision' | 'algo' | 'classified' | 'rakshak'

export interface Project {
  id: string
  index: string
  name: string
  alias: string
  tagline: string
  year: string
  status: string
  category: string
  repo: string | null
  live: string | null
  primaryLanguage: string
  stack: string[]
  problem: string
  architecture: { label: string; detail: string }[]
  decisions: string[]
  challenges: string[]
  verified: string[]
  caveat?: string
  screenshot?: string
  visual: ProjectVisual
  accent?: 'lime' | 'bone'
}
