import HomePage from "@/components/home-page"
import { getYearsOfExperience } from "@/lib/experience"

// Regenerate the static page daily so the years of experience stay current without a redeploy.
export const revalidate = 86400

export default function Page() {
  return <HomePage yearsOfExperience={getYearsOfExperience()} />
}
