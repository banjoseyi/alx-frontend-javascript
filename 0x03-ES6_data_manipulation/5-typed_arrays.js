export default function createInt8TypedArray(length, position, value) {
  if (position > length) {
    throw new Error('Position outside range');
  }
  const array = new DataView(new ArrayBuffer(length), 0, length);
  array.setInt8(position, value);
  return array;
}
