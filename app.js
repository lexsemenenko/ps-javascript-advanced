'use strict';

// Task: Сделать с помощью Set уникализацию массива обьектов используя map и find.

const myArray = [
  { id: 1, name: 'Вася' },
  { id: 2, name: 'Петя' },
  { id: 1, name: 'Вася' },
];

// Вставляться в set будут только уникальные значения id, т.к. Set не может содержать повторяющиеся значения.
const set = new Set(myArray.map((a) => a.id)); // Получаем Set(2) { 1, 2 }

// Возвращаем массив, в котором каждый элемент будет найден по уникальным id из созданного Set.
const noDuplicates = [...set].map((id) =>
  myArray.find((item) => item.id === id)
);

console.log(noDuplicates); // [ { id: 1, name: 'Вася' }, { id: 2, name: 'Петя' } ]
