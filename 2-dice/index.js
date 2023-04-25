// Генератор случайных чисел, по параметру
function generateNumber(num) {
  // Проверка на число и положительность
  if (typeof num !== 'number' || num <= 0) {
    return 'Invalid input: Sides must be a positive number';
  }

  return Math.floor(Math.random() * num) + 1;
}

// Генератор случайных чисел, по названию из существующих
function rollDice(dicePassed) {
  const possibleSides = {
    d4: 4,
    d6: 6,
    d8: 8,
    d10: 10,
    d12: 12,
    d16: 16,
    d20: 20,
  };

  const possibleNames = Object.keys(possibleSides).join(', ');

  // Проверка на существование
  const sides = possibleSides[dicePassed];

  // Если не существует, то возвращаем ошибку
  if (!sides) {
    return `Нет дайса по названию: ${dicePassed}, емеются: ${possibleNames}`;
  }
  // Если существует, то возвращаем случайное число
  return generateNumber(sides);
}

// Проверка
console.log(rollDice('d10')); // выдаст случайное число от 1 до 10
console.log(rollDice('d3')); // выдаст сообщение что нет дайса по названию: d3, емеются: d4, d6, d8, d10, d12, d16, d20
