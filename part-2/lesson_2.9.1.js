/**
 * @module solution example 2.1.9
 * @param {number} m
 * @param {number} n
 * @returns {Array}
 */
export default ({ m, n }) => {
  const answer = [];
  const arr = [];

  function rec(cursor) {
    if (cursor === n) {
      answer.push(arr.join(' '));
      return;
    }
    for (let i = 1; i <= m; i++) {
      arr[cursor] = i;
      rec(cursor + 1);
    }
  }
  rec(0);

  return answer;
};
