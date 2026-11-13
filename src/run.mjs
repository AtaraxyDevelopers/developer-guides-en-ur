import fs from 'node:fs/promises';
const lessons = JSON.parse(
    await fs.readFile(new URL('../lessons/index.json', import.meta.url), 'utf8'),
  ),
  args = process.argv.slice(2),
  id = args[0];
if (!id || id === '--list') {
  console.log(lessons.map((l) => l.id + ' ' + l.title + ' / ' + l.ur).join('\n'));
} else if (args.length !== 1 || (id !== 'all' && !lessons.some((l) => l.id === id))) {
  console.error('Usage: npm run lesson -- <01..10|all|--list>');
  process.exitCode = 2;
} else {
  try {
    for (const lesson of lessons.filter((l) => id === 'all' || l.id === id)) {
      const { demo } = await import('../lessons/' + lesson.id + '/example.mjs');
      console.log(lesson.id + ' ' + lesson.title + '\n' + JSON.stringify(await demo(), null, 2));
    }
  } catch (e) {
    console.error(e.message);
    process.exitCode = 1;
  }
}
