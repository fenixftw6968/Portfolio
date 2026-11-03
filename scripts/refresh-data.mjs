/**
 * Refreshes the checked-in public data snapshots.
 *
 *   node scripts/refresh-data.mjs
 *
 * GitHub's unauthenticated API is rate limited. Set GITHUB_TOKEN for a full
 * refresh. Without a token the script reuses the curated repository metadata
 * below and only refreshes the public contribution calendar.
 */
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const dataDir = path.join(root, 'src', 'data')

const GITHUB_USERNAME = 'fenixftw6968'
const LEETCODE_USERNAME = 'kartik6968'
const CODEFORCES_HANDLE = 'kartik8899'
const CODECHEF_HANDLE = 'fenix6968'
const TODAY = new Date().toISOString()
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36'

const FALLBACK_USER = {
  login: 'fenixftw6968',
  name: 'Kartik Bhangale',
  bio: 'Backend, GenAI',
  followers: 13,
  following: 11,
  publicRepos: 16,
  createdAt: '2025-03-03T12:20:48Z',
  htmlUrl: 'https://github.com/fenixftw6968',
}

const FALLBACK_REPOS = [
  { name: 'leetcode-codes', description: 'LeetCode Solutions - A collection of solutions covering data structures, algorithms, trees, graphs, dynamic programming, and more.', language: 'C++', stars: 0, forks: 0, pushedAt: '2026-11-01T10:54:05Z', url: 'https://github.com/fenixftw6968/leetcode-codes', homepage: '', fork: false },
  { name: 'AlgoArena', description: 'A competitive brain-training platform where players solve challenging games, earn XP, level up, compete with others, and climb the ranks.', language: 'JavaScript', stars: 1, forks: 0, pushedAt: '2026-10-29T17:13:32Z', url: 'https://github.com/fenixftw6968/AlgoArena', homepage: 'https://algo-arena-chi.vercel.app', fork: false },
  { name: 'CFArena', description: 'Fork of the CF Arena competitive programming duel platform.', language: null, stars: 1, forks: 0, pushedAt: '2026-10-28T13:19:23Z', url: 'https://github.com/fenixftw6968/CFArena', homepage: 'https://cfarena.in', fork: true },
  { name: 'CP_DUEL', description: null, language: 'Java', stars: 0, forks: 0, pushedAt: '2026-10-28T12:51:11Z', url: 'https://github.com/fenixftw6968/CP_DUEL', homepage: 'https://cp-duel-omega.vercel.app', fork: false },
  { name: 'chest-xray-gradcam-fastapi', description: 'Chest XRAY Normal or Disease', language: 'Jupyter Notebook', stars: 0, forks: 0, pushedAt: '2026-10-24T17:00:36Z', url: 'https://github.com/fenixftw6968/chest-xray-gradcam-fastapi', homepage: '', fork: false },
  { name: 'rakshak2.0', description: 'A privacy-focused AI browser agent that uses on-device vision, PII detection, and secure credential management to safely automate browser tasks while keeping sensitive data private.', language: 'JavaScript', stars: 0, forks: 1, pushedAt: '2026-10-16T15:02:56Z', url: 'https://github.com/fenixftw6968/rakshak2.0', homepage: '', fork: false },
  { name: 'InventoryManagementSystem', description: 'A Spring Boot inventory management system for products, categories, and suppliers using JPA and PostgreSQL.', language: 'Java', stars: 0, forks: 0, pushedAt: '2026-10-08T12:58:19Z', url: 'https://github.com/fenixftw6968/InventoryManagementSystem', homepage: '', fork: false },
  { name: 'IntelliQ', description: 'Full-featured AI assistant clone supporting Google Gemini and OpenAI with BYOK, split-screen canvas editing, LaTeX, code highlighting, and speech recognition.', language: 'TypeScript', stars: 0, forks: 0, pushedAt: '2026-09-24T16:42:34Z', url: 'https://github.com/fenixftw6968/IntelliQ', homepage: '', fork: false },
  { name: 'jenkins-maven-demo', description: null, language: 'Java', stars: 0, forks: 0, pushedAt: '2026-09-09T06:12:46Z', url: 'https://github.com/fenixftw6968/jenkins-maven-demo', homepage: '', fork: false },
  { name: 'E-Commerce-Platform', description: 'A full-stack e-commerce web application with React frontend and Spring Boot backend for browsing and purchasing products, featuring authentication and role-based access.', language: 'JavaScript', stars: 0, forks: 0, pushedAt: '2026-08-20T20:46:58Z', url: 'https://github.com/fenixftw6968/E-Commerce-Platform', homepage: 'https://e-commerce-azure-eight-27.vercel.app', fork: false },
  { name: 'Job-Application-Tracker', description: 'A full-stack job application tracking system built with Spring Boot and React to manage and track job applications efficiently.', language: 'Java', stars: 0, forks: 0, pushedAt: '2026-08-11T15:16:10Z', url: 'https://github.com/fenixftw6968/Job-Application-Tracker', homepage: '', fork: false },
  { name: 'Student-Management-System', description: 'A Java Spring Boot application for managing student data with a connected frontend and backend.', language: 'Java', stars: 0, forks: 0, pushedAt: '2026-08-11T08:40:34Z', url: 'https://github.com/fenixftw6968/Student-Management-System', homepage: '', fork: false },
  { name: 'X_Ray_MRI_Med_Vision_AI', description: 'X-Ray MRI Medical Vision AI - An AI-powered medical imaging project for analyzing X-ray and MRI scans using deep learning and computer vision models.', language: 'Jupyter Notebook', stars: 0, forks: 0, pushedAt: '2026-07-29T12:26:24Z', url: 'https://github.com/fenixftw6968/X_Ray_MRI_Med_Vision_AI', homepage: '', fork: false },
  { name: 'Bangalore-House-Price-Predictor', description: 'Machine Learning project to predict house prices in Bangalore using a trained regression model.', language: 'Jupyter Notebook', stars: 0, forks: 0, pushedAt: '2026-04-01T18:21:06Z', url: 'https://github.com/fenixftw6968/Bangalore-House-Price-Predictor', homepage: '', fork: false },
  { name: 'RagePredictor', description: 'Predicts whether a gamer will rage-quit from kill/death ratio, duration, messages, death streak, and score difference.', language: 'Jupyter Notebook', stars: 0, forks: 0, pushedAt: '2026-04-01T18:15:47Z', url: 'https://github.com/fenixftw6968/RagePredictor', homepage: '', fork: false },
  { name: 'fenixftw6968', description: null, language: null, stars: 0, forks: 0, pushedAt: '2026-11-03T00:27:42Z', url: 'https://github.com/fenixftw6968/fenixftw6968', homepage: '', fork: false },
]

// Language bytes for the repositories that the public API returned before the
// unauthenticated rate limit was exhausted. Used only when GitHub refuses a
// languages request.
const FALLBACK_LANGUAGES = {
  X_Ray_MRI_Med_Vision_AI: { 'Jupyter Notebook': 25166, Python: 24849, HTML: 19898, CSS: 5213, Procfile: 43 },
  AlgoArena: { JavaScript: 944810, Java: 703618, CSS: 39603, HTML: 1007, Dockerfile: 955 },
  CP_DUEL: { Java: 361770, JavaScript: 328238, Dockerfile: 6931, CSS: 5138, HTML: 852, PowerShell: 500 },
  'chest-xray-gradcam-fastapi': { 'Jupyter Notebook': 16629, Python: 10335, CSS: 9866, JavaScript: 9102, HTML: 1089, Dockerfile: 780 },
  'rakshak2.0': { JavaScript: 491770, HTML: 108292, Python: 90963, CSS: 33521, Shell: 2047, Batchfile: 1627 },
  IntelliQ: { TypeScript: 106913, CSS: 2253, JavaScript: 1433, HTML: 358 },
  RagePredictor: { 'Jupyter Notebook': 72749, HTML: 963, Python: 914, CSS: 638 },
  'E-Commerce-Platform': { JavaScript: 95362, Java: 50776, HTML: 1083, Dockerfile: 646 },
  'Job-Application-Tracker': { Java: 5754, JavaScript: 4644, CSS: 3371, HTML: 360 },
  InventoryManagementSystem: { Java: 10077 },
}

async function getJson(url, options = {}) {
  const res = await fetch(url, {
    ...options,
    headers: {
      'User-Agent': UA,
      Accept: 'application/json',
      ...(options.headers || {}),
    },
    signal: AbortSignal.timeout(30000),
  })
  if (!res.ok) throw new Error(`${url} -> ${res.status}`)
  return res.json()
}

async function getText(url, options = {}) {
  const res = await fetch(url, {
    ...options,
    headers: {
      'User-Agent': UA,
      Accept: 'text/html,application/xhtml+xml',
      ...(options.headers || {}),
    },
    signal: AbortSignal.timeout(45000),
  })
  if (!res.ok) throw new Error(`${url} -> ${res.status}`)
  return res.text()
}

function decodeEntities(value = '') {
  return value
    .replace(/&amp;/g, '&')
    .replace(/&#0?39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ')
}

async function fetchLeetCode() {
  const query = `
    query portfolioStats($username: String!) {
      matchedUser(username: $username) {
        username
        profile { ranking reputation }
        submitStatsGlobal { acSubmissionNum { difficulty count submissions } }
        userCalendar { activeYears streak totalActiveDays submissionCalendar }
      }
      userContestRanking(username: $username) {
        attendedContestsCount
        rating
        globalRanking
        totalParticipants
        topPercentage
      }
      userContestRankingHistory(username: $username) {
        attended
        rating
        ranking
        contest { title startTime }
      }
    }
  `
  const json = await getJson('https://leetcode.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Referer: `https://leetcode.com/u/${LEETCODE_USERNAME}/`,
    },
    body: JSON.stringify({ query, variables: { username: LEETCODE_USERNAME } }),
  })
  if (json.errors) throw new Error(json.errors.map((e) => e.message).join('; '))
  const user = json.data?.matchedUser
  const ranking = json.data?.userContestRanking
  const history = (json.data?.userContestRankingHistory || []).filter((entry) => entry.attended)
  if (!user) throw new Error('LeetCode profile not found')
  const ac = Object.fromEntries((user.submitStatsGlobal?.acSubmissionNum || []).map((item) => [item.difficulty, item.count]))
  const calendar = user.userCalendar?.submissionCalendar ? JSON.parse(user.userCalendar.submissionCalendar) : {}
  const submissionsByDay = Object.entries(calendar)
    .map(([sec, count]) => ({ date: new Date(Number(sec) * 1000).toISOString().slice(0, 10), count }))
    .sort((a, b) => a.date.localeCompare(b.date))

  return {
    currentRating: ranking?.rating ? Math.round(ranking.rating) : null,
    maxRating: history.length ? Math.round(Math.max(...history.map((item) => item.rating))) : null,
    contests: ranking?.attendedContestsCount ?? history.length,
    globalRank: ranking?.globalRanking ?? user.profile?.ranking ?? null,
    profileRank: user.profile?.ranking ?? null,
    topPercentage: ranking?.topPercentage ?? null,
    rankTitle: null,
    maxRankTitle: null,
    solved: ac.All ?? null,
    solvedBreakdown: { easy: ac.Easy ?? 0, medium: ac.Medium ?? 0, hard: ac.Hard ?? 0 },
    submissions: null,
    activeDays: user.userCalendar?.totalActiveDays ?? null,
    streak: user.userCalendar?.streak ?? null,
    reputation: user.profile?.reputation ?? null,
    history: history.map((item) => ({
      date: new Date(item.contest.startTime * 1000).toISOString().slice(0, 10),
      name: item.contest.title,
      rating: Math.round(item.rating),
      rank: item.ranking ?? null,
    })),
    submissionsByDay,
  }
}

async function fetchCodeforces() {
  const [infoRes, ratingRes, statusRes] = await Promise.all([
    getJson(`https://codeforces.com/api/user.info?handles=${CODEFORCES_HANDLE}`),
    getJson(`https://codeforces.com/api/user.rating?handle=${CODEFORCES_HANDLE}`),
    getJson(`https://codeforces.com/api/user.status?handle=${CODEFORCES_HANDLE}&from=1&count=10000`),
  ])
  const user = infoRes.result?.[0]
  if (!user) throw new Error('Codeforces profile not found')
  const accepted = (statusRes.result || []).filter((s) => s.verdict === 'OK')
  const uniqueSolved = new Set(accepted.map((s) => `${s.problem.contestId}-${s.problem.index}`)).size
  return {
    currentRating: user.rating ?? null,
    maxRating: user.maxRating ?? null,
    contests: ratingRes.result?.length ?? 0,
    globalRank: null,
    profileRank: null,
    topPercentage: null,
    rankTitle: user.rank ?? null,
    maxRankTitle: user.maxRank ?? null,
    solved: uniqueSolved,
    solvedBreakdown: null,
    submissions: statusRes.result?.length ?? null,
    activeDays: null,
    streak: null,
    history: (ratingRes.result || []).map((item) => ({
      date: new Date(item.ratingUpdateTimeSeconds * 1000).toISOString().slice(0, 10),
      name: item.contestName,
      rating: item.newRating,
      rank: item.rank ?? null,
    })),
  }
}

function findBalancedObject(source, startIndex) {
  let depth = 0
  let inString = false
  let escaped = false
  for (let i = startIndex; i < source.length; i += 1) {
    const char = source[i]
    if (inString) {
      if (escaped) escaped = false
      else if (char === '\\') escaped = true
      else if (char === '"') inString = false
      continue
    }
    if (char === '"') inString = true
    else if (char === '{') depth += 1
    else if (char === '}') {
      depth -= 1
      if (depth === 0) return source.slice(startIndex, i + 1)
    }
  }
  return null
}

async function fetchCodeChef() {
  const html = process.env.CODECHEF_HTML
    ? await fs.readFile(process.env.CODECHEF_HTML, 'utf8')
    : await getText(`https://www.codechef.com/users/${CODECHEF_HANDLE}`)
  const settingsIndex = html.search(/date_versus_rating"\s*:/)
  if (settingsIndex < 0) throw new Error('CodeChef rating payload missing')
  const objectStart = html.indexOf('{', settingsIndex)
  const objectText = findBalancedObject(html, objectStart)
  if (!objectText) throw new Error('CodeChef rating payload malformed')
  const ratings = JSON.parse(objectText)
  const all = ratings.all || []

  const ratingBlock = html.match(/rating-block-all[\s\S]*?rating-block-dsa-monday/)?.[0] || html
  const currentRating = Number(ratingBlock.match(/rating-number">\s*([\d]+)/)?.[1] ?? all.at(-1)?.rating ?? 0)
  const highestRating = Number(ratingBlock.match(/Highest Rating\s*([\d]+)/)?.[1] ?? 0)
  const stars = (ratingBlock.match(/&#9733;/g) || []).length
  const division = ratingBlock.match(/<div>\((Div \d+)\)<\/div>/)?.[1] ?? null
  const globalRank = Number(ratingBlock.match(/<strong>\s*([\d,]+)\s*<\/strong>\s*Global Rank/)?.[1]?.replace(/,/g, '') ?? 0)
  const countryRank = Number(ratingBlock.match(/<strong>\s*([\d,]+)\s*<\/strong>\s*Country Rank/)?.[1]?.replace(/,/g, '') ?? 0)
  const contests = Number(html.match(/No\. of Contests Participated:\s*<b>(\d+)<\/b>/)?.[1] ?? all.length)
  const solved = Number(html.match(/Total Problems Solved:\s*([\d,]+)/)?.[1]?.replace(/,/g, '') ?? 0)

  return {
    currentRating,
    maxRating: highestRating || Math.max(...all.map((item) => Number(item.rating))),
    contests,
    globalRank: globalRank || null,
    countryRank: countryRank || null,
    profileRank: null,
    topPercentage: null,
    rankTitle: stars ? `${stars} star` : null,
    maxRankTitle: null,
    solved,
    solvedBreakdown: null,
    submissions: null,
    stars,
    division,
    history: all.map((item) => ({
      date: `${item.getyear}-${String(item.getmonth).padStart(2, '0')}-${String(item.getday).padStart(2, '0')}`,
      name: decodeEntities(item.name),
      rating: Number(item.rating),
      rank: Number(item.rank) || null,
    })),
  }
}

async function fetchContributions() {
  const url = `https://github.com/users/${GITHUB_USERNAME}/contributions`
  const html = await getText(url)
  const cells = [...html.matchAll(/data-date="([^"]+)"[^>]*data-level="([^"]*)"/g)].map((match) => ({
    date: match[1],
    level: Number(match[2]),
    id: html.slice(match.index, match.index + 500).match(/id="([^"]+)"/)?.[1],
  }))
  const tips = new Map(
    [...html.matchAll(/<tool-tip[^>]*for="([^"]+)"[^>]*>([^<]+)<\/tool-tip>/g)].map((match) => [match[1], match[2]]),
  )
  const today = new Date()
  const end = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`
  const days = cells
    .map((cell) => {
      const tip = tips.get(cell.id) || ''
      const count = Number(tip.match(/^(\d+) contribution/)?.[1] ?? 0)
      return { date: cell.date, count, level: Math.max(0, Math.min(4, cell.level)) }
    })
    .filter((day) => day.date <= end)
    .sort((a, b) => a.date.localeCompare(b.date))
  const total = days.reduce((sum, day) => sum + day.count, 0)
  let activeDays = 0
  let longestStreak = 0
  let running = 0
  for (const day of days) {
    if (day.count > 0) {
      activeDays += 1
      running += 1
      longestStreak = Math.max(longestStreak, running)
    } else running = 0
  }
  return { year: today.getFullYear(), days, total, activeDays, longestStreak }
}

async function fetchGitHub() {
  const token = process.env.GITHUB_TOKEN
  const headers = token ? { Authorization: `Bearer ${token}` } : {}
  let user = FALLBACK_USER
  let repos = FALLBACK_REPOS
  try {
    const data = await getJson(`https://api.github.com/users/${GITHUB_USERNAME}`, { headers })
    user = {
      login: data.login,
      name: data.name,
      bio: data.bio,
      followers: data.followers,
      following: data.following,
      publicRepos: data.public_repos,
      createdAt: data.created_at,
      htmlUrl: data.html_url,
    }
  } catch (error) {
    console.warn(`GitHub user fallback: ${error.message}`)
  }
  try {
    const data = await getJson(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=pushed`, { headers })
    repos = data.map((repo) => ({
      name: repo.name,
      description: repo.description,
      language: repo.language,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      pushedAt: repo.pushed_at,
      url: repo.html_url,
      homepage: repo.homepage || '',
      fork: repo.fork,
    }))
  } catch (error) {
    console.warn(`GitHub repos fallback: ${error.message}`)
  }

  const languageTotals = {}
  await Promise.all(
    repos
      .filter((repo) => !repo.fork)
      .map(async (repo) => {
        let languages = FALLBACK_LANGUAGES[repo.name]
        if (!languages) {
          try {
            languages = await getJson(`https://api.github.com/repos/${GITHUB_USERNAME}/${repo.name}/languages`, { headers })
          } catch {
            languages = repo.language ? { [repo.language]: 1 } : {}
          }
        }
        for (const [name, bytes] of Object.entries(languages || {})) {
          languageTotals[name] = (languageTotals[name] || 0) + bytes
        }
      }),
  )
  const totalBytes = Object.values(languageTotals).reduce((sum, bytes) => sum + bytes, 0)
  const languages = Object.entries(languageTotals)
    .map(([name, bytes]) => ({ name, bytes, percent: Number(((bytes / totalBytes) * 100).toFixed(1)) }))
    .sort((a, b) => b.bytes - a.bytes)

  let contributions
  try {
    contributions = await fetchContributions()
  } catch (error) {
    console.warn(`GitHub contributions fallback: ${error.message}`)
    const seed = JSON.parse(await fs.readFile(path.join(__dirname, 'data', 'github-contributions.json'), 'utf8'))
    contributions = seed
  }

  return { user, repos, languages, contributions }
}

function js(value) {
  return JSON.stringify(value, null, 2)
    .replace(/"([^"]+)":/g, (match, key) => (/^[a-zA-Z_$][\w$]*$/.test(key) ? `${key}:` : match))
}

async function main() {
  console.log('Fetching LeetCode...')
  let leetcode
  try {
    leetcode = await fetchLeetCode()
    console.log(`  LeetCode: ${leetcode.solved} solved, rating ${leetcode.currentRating}`)
  } catch (error) {
    console.error(`  LeetCode failed: ${error.message}`)
    process.exitCode = 1
    return
  }

  console.log('Fetching Codeforces...')
  let codeforces
  try {
    codeforces = await fetchCodeforces()
    console.log(`  Codeforces: ${codeforces.solved} solved, rating ${codeforces.currentRating}`)
  } catch (error) {
    console.error(`  Codeforces failed: ${error.message}`)
    process.exitCode = 1
    return
  }

  console.log('Fetching CodeChef...')
  let codechef
  try {
    codechef = await fetchCodeChef()
    console.log(`  CodeChef: ${codechef.solved} solved, rating ${codechef.currentRating}`)
  } catch (error) {
    console.error(`  CodeChef failed: ${error.message}`)
    process.exitCode = 1
    return
  }

  console.log('Fetching GitHub...')
  const github = await fetchGitHub()
  console.log(`  GitHub: ${github.repos.length} repos, ${github.contributions.total} contributions`)

  const cp = {
    capturedAt: TODAY,
    leetcode: {
      id: 'leetcode',
      name: 'LeetCode',
      handle: LEETCODE_USERNAME,
      profileUrl: `https://leetcode.com/u/${LEETCODE_USERNAME}/`,
      source: 'snapshot',
      fetchedAt: TODAY,
      ...leetcode,
    },
    codeforces: {
      id: 'codeforces',
      name: 'Codeforces',
      handle: CODEFORCES_HANDLE,
      profileUrl: `https://codeforces.com/profile/${CODEFORCES_HANDLE}`,
      source: 'snapshot',
      fetchedAt: TODAY,
      ...codeforces,
    },
    codechef: {
      id: 'codechef',
      name: 'CodeChef',
      handle: CODECHEF_HANDLE,
      profileUrl: `https://www.codechef.com/users/${CODECHEF_HANDLE}`,
      source: 'snapshot',
      fetchedAt: TODAY,
      ...codechef,
    },
  }

  const cpFile = `/* Generated by scripts/refresh-data.mjs. Real public data, checked in as a graceful fallback. */\nimport type { CPSnapshot } from '../types'\n\nexport const CP_SNAPSHOT: CPSnapshot = ${js(cp)}\n`
  await fs.writeFile(path.join(dataDir, 'cp-snapshot.ts'), cpFile)
  await fs.writeFile(path.join(dataDir, 'github-snapshot.ts'), `/* Generated by scripts/refresh-data.mjs. */\nimport type { GitHubSnapshot } from '../types'\n\nexport const GITHUB_SNAPSHOT: GitHubSnapshot = ${js({ capturedAt: TODAY, ...github })}\n`)
  await fs.mkdir(path.join(__dirname, 'data'), { recursive: true })
  await fs.writeFile(path.join(__dirname, 'data', 'github-contributions.json'), JSON.stringify(github.contributions, null, 2))
  console.log('Wrote src/data/cp-snapshot.ts and src/data/github-snapshot.ts')
}

await main()
