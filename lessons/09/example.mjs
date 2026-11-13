export function utcDate(value) {
  const match =
    typeof value === 'string' &&
    value.match(/^(\d{4}-\d{2}-\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.\d{1,3})?(Z|[+-]\d{2}:\d{2})$/);
  if (!match) throw new Error('Use an ISO timestamp with seconds and an explicit timezone');
  const calendarDate = new Date(match[1] + 'T00:00:00Z');
  if (
    !Number.isFinite(calendarDate.getTime()) ||
    calendarDate.toISOString().slice(0, 10) !== match[1] ||
    Number(match[2]) > 23 ||
    Number(match[3]) > 59 ||
    Number(match[4]) > 59
  )
    throw new Error('Invalid calendar date or time');
  const date = new Date(value);
  if (!Number.isFinite(date.getTime())) throw new Error('Invalid timestamp');
  return date.toISOString().slice(0, 10);
}
export async function demo() {
  return { utcDay: utcDate('2026-01-01T00:30:00+05:00') };
}
