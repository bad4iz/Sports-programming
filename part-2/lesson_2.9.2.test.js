import example from './lesson_2.9.2';

describe('lesson 2.9.2 n = 3', () => {
  it('expample 1 el', () => {
    const expected = '1 2 3';
    expect(example({ n: 3 })[0]).toEqual(expected);
  });
  it('expample 4 el', () => {
    const expected = '2 3 1';
    expect(example({ n: 3 })[3]).toEqual(expected);
  });
  it('expample 6 el', () => {
    const expected = '3 2 1';
    expect(example({ n: 3 })[5]).toEqual(expected);
  });
});
