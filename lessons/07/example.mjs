import assert from 'node:assert/strict';
export function sum(values) {
  if (!Array.isArray(values) || values.some((v) => typeof v !== 'number' || !Number.isFinite(v)))
    throw new TypeError('Expected finite numbers');
  return values.reduce((a, b) => a + b, 0);
}
export async function demo() {
  assert.equal(sum([2, 3]), 5);
  assert.equal(sum([]), 0);
  assert.throws(() => sum(['2']));
  return { checksPassed: 3 };
}
