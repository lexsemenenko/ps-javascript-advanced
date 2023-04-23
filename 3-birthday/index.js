'use strict';

function validateAge(dateString) {
  // Переводим строку в дату
  const birthDate = new Date(dateString);

  // Получаем разницу в миллисекундах между текущей датой и датой рождения
  const ageDifferenceMs = Date.now() - birthDate.getTime();

  // Пробразуем миллисекунды в годы
  // Делим на миллисекунды / секунды / минуты / часы / дни
  let ageDate = ageDifferenceMs / 1000 / 60 / 60 / 24 / 365;

  // Округляем полученное число в меньшую сторону, чтобы получить целое число лет
  const age = Math.floor(ageDate);

  // Возвращаем ответ если возраст больше либо равен 14
  return age >= 14;
}

const age = validateAge('2009-01-01');

console.log(age); // true
