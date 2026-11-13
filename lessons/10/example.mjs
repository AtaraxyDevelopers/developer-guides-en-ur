export function paginate(values, page, size) {
  if (
    !Array.isArray(values) ||
    !Number.isInteger(page) ||
    page < 1 ||
    !Number.isInteger(size) ||
    size < 1
  )
    throw new RangeError('Invalid pagination');
  return values.slice((page - 1) * size, page * size);
}
export async function demo() {
  return {
    first: paginate([1, 2, 3, 4, 5], 1, 2),
    last: paginate([1, 2, 3, 4, 5], 3, 2),
    beyond: paginate([1, 2, 3, 4, 5], 4, 2),
  };
}
