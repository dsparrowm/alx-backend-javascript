export default function getStudentIdsSum(array) {
  const newArray = array.reduce((acum, list) => acum + list.id, 0);
  return newArray;
}
