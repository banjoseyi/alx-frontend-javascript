// weak link data structure
export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  let value = weakMap.get(endpoint);
  value += 1;

  if (value >= 5) {
    throw new Error('Endpoint load is high');
  } else {
    weakMap.set(endpoint, value);
  }
}
