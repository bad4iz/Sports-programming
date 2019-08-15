import example from './example_1.5';

describe('Example_1.5', () => {
  describe('Example_1.5  n= 5 m= 2', () => {
    const n = 5;
    const m = 2;
    test('первый элемент', () => {
      expect(example(n, m)[0]).toEqual('*.*..');
    });
    test('3 элемент', () => {
      expect(example(n, m)[2]).toEqual('*...*');
    });
    test('6 элемент', () => {
      expect(example(n, m)[5]).toEqual('..*.*');
    });
  });
});
