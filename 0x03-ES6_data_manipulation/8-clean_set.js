function cleanSet(set, str) {
  if (str === undefined || str.length === 0) {
    return '';
  }
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
