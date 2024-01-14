import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date | undefined) {
  return date
    ? date.toLocaleDateString("en-US", { month: "short", year: "numeric" })
    : undefined
}

export function dateDelta(date1: Date, date2: Date) {
  // write a function that returns the difference between two dates in years and months
  // e.g. 2021-01-01 and 2021-02-01 should return 0 years and 1 month
  // e.g. 2021-01-01 and 2022-01-01 should return 1 year and 0 months
  // e.g. 2021-01-01 and 2022-02-01 should return 1 year and 1 month

  const years = date2.getFullYear() - date1.getFullYear()
  const months = date2.getMonth() - date1.getMonth()
  return { years, months }
}