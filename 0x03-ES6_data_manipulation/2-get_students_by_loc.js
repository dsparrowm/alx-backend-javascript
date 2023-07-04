export default function getStudentsByLocation(array, city) {
  const myArray = array.filter((myObject) => myObject.location === city);
  return myArray;
}
