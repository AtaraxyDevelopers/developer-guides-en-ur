import http from 'node:http';
export async function demo() {
  const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'hello from loopback' }));
  });
  await new Promise((r) => server.listen(0, '127.0.0.1', r));
  try {
    const response = await fetch('http://127.0.0.1:' + server.address().port);
    if (!response.ok) throw new Error('HTTP request failed');
    return await response.json();
  } finally {
    server.closeAllConnections();
    await new Promise((r) => server.close(r));
  }
}
