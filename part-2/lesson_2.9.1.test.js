import example from './lesson_2.9.1';

describe('lesson 2.9.1', () => {
  it('expample', () => {
    const expected = '2 1';
    expect(example({ m: 2, n: 2 })[2]).toEqual(expected);
  });

  it(' n=6, m=5, имеющую номер 6659', () => {
    const expected = '3 1 4 2 2 4';
    expect(example({ m: 5, n: 6 })[6658]).toEqual(expected);
  });
});
