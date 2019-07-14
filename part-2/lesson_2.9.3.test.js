import example from './lesson_2.9.3';

describe('lesson 1.3', () => {
  const n = 3;

  it('expample', () => {
    expect(example('')).toBeFalsy();
  });
  it('expample 1 ((())())))', () => {
    expect(example('((())())))')).toBeFalsy();
  });

  it('expample 2 ((((())))', () => {
    expect(example('')).toBeFalsy();
  });

  it('expample 3 (()))((())', () => {
    expect(example('')).toBeFalsy();
  });
  it('expample 4 (())(())()', () => {
    expect(example('')).toBeTruthy();
  });
  it('expample 5 (()())(())', () => {
    expect(example('')).toBeTruthy();
  });
});
