export function validateName(input) {
  if (!input || typeof input !== 'object' || Array.isArray(input))
    return { ok: false, error: 'Expected an object' };
  if (typeof input.name !== 'string' || !input.name.trim())
    return { ok: false, error: 'Name is required' };
  return { ok: true, name: input.name.trim() };
}
export async function demo() {
  return [validateName(null), validateName({ name: ' عائشہ ' })];
}
