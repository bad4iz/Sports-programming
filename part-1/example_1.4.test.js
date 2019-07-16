import example from './example_1.4';

describe('Example_1.4', () => {
  describe('Example_1.4  n= 5', () => {
    test('первый элемент', () => {
      expect(example(5)[0]).toEqual('1+1+1+1+1');
    });
    test('4 элемент', () => {
      expect(example(5)[3]).toEqual('1+2+2');
    });
    test('7 элемент', () => {
      expect(example(5)[6]).toEqual('5');
    });
  });

  describe('Example_1.4  n= 7', () => {
    const n = 7;
    test('10 элемент', () => {
      example(n)[9]; //?
      expect(example(n)[9]).toEqual('1+3+3');
    });
    test('4 элемент', () => {
      expect(example(n)[3]).toEqual('1+1+1+2+2');
    });
    test('7 элемент', () => {
      expect(example(n)[6]).toEqual('1+1+5');
    });
  });

  // бонус по тестам раскоментировать
  // describe('Бонус Example_1.4  n= 35', () => {
  //   const n = 35;
  //   test('13672  элемент', () => {
  //     expect(example(n)[13671]).toEqual('1+3+3');
  //   });
  // });
});
