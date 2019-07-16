/**
 * @module solution example 1.3
 * @param {string} string
 * @returns {boolean}
 */
export default string => {
  if (!typeof string === 'string') {
    return false;
  }
  if (!string) {
    return false;
  }
  if (string.length % 2) {
    return false;
  }
  function correct(string) {
    let bal = 0;

    for (let i = 0; i < string.length; i++) {
      string[i]; //?
      if (string[i] == '(') {
        bal++;
      } else {
        bal--;
      }
      if (bal < 0) {
        bal; //?
        return false;
      }
    }
    return bal == 0;
  }

  return correct(string); //?
  // return rec('(())(())()'); //?
};
