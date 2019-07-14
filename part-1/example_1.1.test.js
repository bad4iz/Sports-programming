import example from './example_1.1';

describe('Example 1.1', () => {
  it('test', () => {
    const expected = '2 1';
    expect(example({ n: 2, m: 2 })[2]).toEqual(expected);
  });

  it(' n=6, m=5, имеющую номер 6659', () => {
    const expected = '3 1 4 2 2 4';
    expect(example({ m: 5, n: 6 })[6658]).toEqual(expected);
  });
});
