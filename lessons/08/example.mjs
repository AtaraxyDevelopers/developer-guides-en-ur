export function summarizeConfig(env) {
  if (typeof env.API_TOKEN !== 'string' || !env.API_TOKEN.trim())
    throw new Error('API_TOKEN is required');
  return { tokenConfigured: true, mode: env.MODE === 'production' ? 'production' : 'development' };
}
export async function demo() {
  return summarizeConfig({ API_TOKEN: 'synthetic-example-only', MODE: 'development' });
}
