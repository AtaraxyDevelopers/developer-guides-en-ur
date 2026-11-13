import { test } from 'node:test';
import assert from 'node:assert/strict';
import { utcDate } from '../lessons/09/example.mjs';
test('date lesson rejects impossible calendar dates rather than normalizing them', () => {
  for (const value of [
    '2025-02-29T12:00:00Z',
    '2026-04-31T12:00:00Z',
    '2026-01-01T24:00:00Z',
    '2026-01-01T12:60:00Z',
    '2026-01-01T12:00:60Z',
    '2026-01-01T12:00:00+99:00',
  ])
    assert.throws(() => utcDate(value), value);
  assert.equal(utcDate('2024-02-29T12:00:00Z'), '2024-02-29');
  assert.equal(utcDate('2026-01-01T00:30:00+05:00'), '2025-12-31');
});
