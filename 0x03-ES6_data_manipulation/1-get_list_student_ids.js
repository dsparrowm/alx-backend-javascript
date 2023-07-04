export default function getListStudentIds(array) {
  if (!(Array.isArray(array))) {
    return [];
  }
  const arrayIds = array.map((myObject) => myObject.id);
  return arrayIds;
}
