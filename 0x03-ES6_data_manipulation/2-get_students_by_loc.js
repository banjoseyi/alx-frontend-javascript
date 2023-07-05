export default function getStudentsByLocation(array, city) {
  const specificCity = array.filter((item) => item.location === city);
  return specificCity;
}
