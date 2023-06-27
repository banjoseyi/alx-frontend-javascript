export default function createIteratorObject(report) {
  const reportObject = [];
  for (const value of Object.values(report)) {
    for (const item of Object.values(value)) {
      reportObject.push(...item);
    }
  }
  return reportObject;
}
