function cleanSet(set, str) {
  const newString = [];
  for (const string of set) {
    if (string.startsWith(str)) {
      const restOfString = string.slice(str.length);
      newString.push(restOfString);
    }
  }
  return newString.join('-');
}

export default cleanSet;
