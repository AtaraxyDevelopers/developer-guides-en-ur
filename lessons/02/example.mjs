export function uniqueNames(names) {
  return [...new Set(names.map((name) => name.trim().normalize('NFC')))];
}
export async function demo() {
  return uniqueNames([' Ali ', 'Ali', 'é', 'é', 'عائشہ']);
}
