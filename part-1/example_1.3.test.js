import example from './example_1.3';

describe('Example_1.3  ', () => {
  const n = 3;

  it('test', () => {
    expect(example('')).toBeFalsy();
  });
  it('test 1 ((())())))', () => {
    expect(example('((())())))')).toBeFalsy();
  });

  it('test 2 ((((())))', () => {
    example('((((())))'); //?
    expect(example('((((())))')).toBeFalsy();
  });

  it('test 3 (()))((())', () => {
    expect(example('(()))((())')).toBeFalsy();
  });
  it('test 4 (())(())()', () => {
    example('(())(())()'); //?
    expect(example('(())(())()')).toBeTruthy();
  });
  it('test 5 (()())(())', () => {
    expect(example('(()())(())')).toBeTruthy();
  });
});
