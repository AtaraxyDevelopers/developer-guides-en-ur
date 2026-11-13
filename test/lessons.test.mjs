import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import { parsePort } from '../lessons/01/example.mjs';
import { retryOnce } from '../lessons/04/example.mjs';
import { sum } from '../lessons/07/example.mjs';
import { summarizeConfig } from '../lessons/08/example.mjs';
import { utcDate } from '../lessons/09/example.mjs';
import { paginate } from '../lessons/10/example.mjs';
const lessons = JSON.parse(
  await fs.readFile(new URL('../lessons/index.json', import.meta.url), 'utf8'),
);
for (const lesson of lessons)
  test('lesson ' + lesson.id + ' matches its documented result', async () => {
    const { demo } = await import('../lessons/' + lesson.id + '/example.mjs');
    assert.deepEqual(await demo(), lesson.expected);
  });
test('invalid inputs and exhausted retries fail explicitly', async () => {
  for (const value of ['0', '65536', 'abc', '']) assert.throws(() => parsePort(value));
  let calls = 0;
  await assert.rejects(
    retryOnce(() => {
      calls++;
      throw new Error('permanent');
    }),
  );
  assert.equal(calls, 2);
  assert.throws(() => sum([NaN]));
  assert.throws(() => summarizeConfig({ API_TOKEN: '' }));
  const token = 'synthetic-value-not-for-output';
  assert.ok(!JSON.stringify(summarizeConfig({ API_TOKEN: token })).includes(token));
  assert.throws(() => utcDate('2026-01-01'));
  assert.throws(() => utcDate('invalidZ'));
  assert.throws(() => paginate([1], 0, 1));
  const items = [1, 2, 3];
  paginate(items, 1, 2);
  assert.deepEqual(items, [1, 2, 3]);
});
