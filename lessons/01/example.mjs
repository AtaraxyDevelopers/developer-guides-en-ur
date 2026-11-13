export function parsePort(value) {
  if (value === undefined) return 3000;
  if (typeof value !== 'string' || !/^\d+$/.test(value)) throw new Error('Port must be numeric');
  const port = Number(value);
  if (port < 1 || port > 65535) throw new Error('Port out of range');
  return port;
}
export async function demo() {
  return { configured: parsePort('4310'), fallback: parsePort() };
}
