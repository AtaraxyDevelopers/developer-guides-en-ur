export function utcDate(value) {
  if (typeof value !== 'string' || !/(Z|[+-]\d{2}:\d{2})$/.test(value))
    throw new Error('Use an ISO timestamp with an explicit timezone');
  const date = new Date(value);
  if (!Number.isFinite(date.getTime())) throw new Error('Invalid timestamp');
  return date.toISOString().slice(0, 10);
}
export async function demo() {
  return { utcDay: utcDate('2026-01-01T00:30:00+05:00') };
}
