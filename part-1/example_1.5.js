/**
 * @module solution example 1.5
 * @param {number} n
 * @param {number} m
 * @returns {Array}
 */
export default (n, m) => {
  const answers = [];
  const arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr.map(item => '.');
    arr; //?
    arr[i] = '*';

    // console.log(arr);
  }

  return answers;
};
