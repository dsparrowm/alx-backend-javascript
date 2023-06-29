import ClassRoom from './0-classroom.js';

export default function initializeRooms() {
  const myArray = [];
  const firstObject = new ClassRoom(19);
  const secondObject = new ClassRoom(20);
  const thirdObject = new ClassRoom(34);
  myArray.push(firstObject);
  myArray.push(secondObject);
  myArray.push(thirdObject);
  return myArray;
}
