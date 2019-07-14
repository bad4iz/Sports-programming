/**
 * @module solution example 1.2
 * @param {number} n
 * @returns {Array}
 */
export default ({ n }) => {
  const answer = [];

  const arr = [1, 2, 3];
  const used = [];

  function rec(cursor) {
    if (cursor === n) {
      answer.push(arr.join(' '));
      return;
    }
    for (let i = 1; i <= n; i++) {
      if (used[i]) {
        continue;
      }
      arr[cursor] = i;
      used[i] = true;
      rec(cursor + 1);
      used[i] = false;
    }
  }
  rec(0);

  return answer;
};
