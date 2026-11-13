export async function retryOnce(operation) {
  try {
    return await operation();
  } catch {
    return await operation();
  }
}
export async function demo() {
  let attempts = 0;
  const result = await retryOnce(async () => {
    if (++attempts === 1) throw new Error('Synthetic temporary failure');
    return 'recovered';
  });
  return { attempts, result };
}
