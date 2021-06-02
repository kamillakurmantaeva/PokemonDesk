import toCapitalizeFirstLetter from './toCapitalizeFirstLetter';

describe('toCapitalizeFirstLetter', () => {
  test('Должна принимать один аргумент в виде строки и возвращать строку, начинающуюся с буквы в верхнем регистре', () => {
    const str = toCapitalizeFirstLetter('some String');

    expect(str).toMatch(/^[A-ZА-Я]/);
  });

  test('Должна принимать один аргумент в виде строки и возвращать null, если строка пустая', () => {
    const str = toCapitalizeFirstLetter('');

    expect(str).toEqual(null);
  });
});
