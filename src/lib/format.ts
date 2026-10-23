const dateFormatter = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
  timeZone: 'UTC',
});

/** Formats a YYYY-MM-DD date as "23 Apr 2026", independent of the build machine's time zone. */
export function formatDate(isoDate: string): string {
  const date = new Date(`${isoDate}T00:00:00Z`);
  if (Number.isNaN(date.getTime())) {
    throw new Error(`Invalid date "${isoDate}". Use the YYYY-MM-DD format.`);
  }
  return dateFormatter.format(date);
}
