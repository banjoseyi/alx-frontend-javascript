export default function cleanSet(set, startString) {
  const list = [];
  if (set || startString || typeof startString !== 'string') {
    return '';
  }
  for (const value of set) {
    if ((typeof value === 'string') && (value.startsWith(startString))) {
      list.push(value.slice(startString.length));
    }
  }
  return list.join('-');
}
