/**
 * @module solution example 1.4
 * @param {number} n
 * @returns {Array}
 */
export default n => {
  const answers = [];
  const arr = [];
  function rec(cursor) {
    for (let i = 1; i <= n; i++) {
      arr[cursor] = i;

      const sum = arr.reduce((accum, curr) => accum + curr, 0);

      if (sum == n) {
        const bool = arr.every((item, ind, array) => {
          if (ind === 0) return true;
          if (ind > 0 && item >= array[ind - 1]) {
            return true;
          }
        });
        if (bool) {
          answers.push(arr.join('+'));
        } else {
        }
        arr.pop();
        return;
      }

      if (sum > n) {
        arr.pop();
        return;
      }

      if (sum < n) {
        rec(cursor + 1);
      }
    }
  }
  rec(0);
  return answers;
};
