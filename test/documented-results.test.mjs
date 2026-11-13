import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
for (let number = 1; number <= 10; number++) {
  const id = String(number).padStart(2, '0');
  test('lesson ' + id + ' matches the printed result in both languages', async () => {
    const { demo } = await import('../lessons/' + id + '/example.mjs');
    const actual = await demo();
    for (const language of ['en', 'ur']) {
      const document = await fs.readFile(
        new URL('../lessons/' + id + '/README.' + language + '.md', import.meta.url),
        'utf8',
      );
      const match = document.match(/\x60{3}json\r?\n([\s\S]*?)\r?\n\x60{3}/);
      assert.ok(match, 'expected-output block must exist');
      assert.deepEqual(actual, JSON.parse(match[1]), language);
    }
  });
}
