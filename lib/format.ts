/**
 * Date formatting helpers shared across blog, case studies, and metadata.
 */

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

/**
 * Format an ISO date string ("2025-02-04") as "Feb 4, 2025".
 * Returns the original string if parsing fails.
 */
export function formatDate(iso: string): string {
  if (!iso) return "";
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  return dateFormatter.format(date);
}
