import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
export async function roundTrip(value) {
  const directory = await fs.mkdtemp(path.join(os.tmpdir(), 'lesson-'));
  try {
    const file = path.join(directory, 'sample.json');
    await fs.writeFile(file, JSON.stringify(value), 'utf8');
    return JSON.parse(await fs.readFile(file, 'utf8'));
  } finally {
    await fs.rm(directory, { recursive: true, force: true });
  }
}
export async function demo() {
  return roundTrip({ message: 'السلام علیکم', synthetic: true });
}
