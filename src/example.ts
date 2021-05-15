// Работа с простыми типами
// Напиши тип функции, конкатенирующей две строки

function concat(str1: string, str2: string): string {
  return str1 + str2;
}

concat('Hello ', 'World'); // -> Hello World;

// Работа с интерфейсами
// Напиши интерфейс для описания следующих данных

interface homeTaskInterface {
  howIDoIt: string;
  simeArray: Array<string | number>;
  withData: Array<object>;
}

const myHometask: homeTaskInterface = {
  howIDoIt: 'I Do It Wel',
  simeArray: ['string one', 'string two', 42],
  withData: [{ howIDoIt: 'I Do It Wel', simeArray: ['string one', 23] }],
};

// Типизация функций, используя Generic
// В уроке про Generics мы написали интерфейс массива MyArray...
// Добавь типизацию для метода reduce

interface MyArray<T> {
  [N: number]: T;

  reduce<U>(fn: (acc: U, el: T, i: number, arr: T[]) => U, arg: U): U;
}
