/** Year Carlos started his professional career; the single source of truth for "years of experience". */
export const CAREER_START_YEAR = 2013

export function getYearsOfExperience(now: Date = new Date()): number {
  return now.getFullYear() - CAREER_START_YEAR
}
