//1 Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.
function compareNumbers(a, b) {
  if (a < b) return -1;
  else if (a > b) return 1;
  return 0;
}
console.log(compareNumbers(10, 5));
console.log(compareNumbers(5, 10));
console.log(compareNumbers(10, 10));

//2 Написать функцию, которая вычисляет факториал переданного ей числа.
function factorial(a) {
  if (a === 0 || a === 1) return 1;
  return a * factorial(a - 1);
}
console.log(factorial(5));

//3 Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.
function combineDigits(a, b, c) {
  return a * 100 + b * 10 + c;
}
console.log(combineDigits(5, 2, 5));

//4 Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.
function square(length, width = length) {
  return length * width;
}
console.log(square(8, 5));
console.log(square(9));

//5 Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это число, равное сумме всех своих собственных делителей.
function PerfectNumber(num) {
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) sum += i;
  }
  return sum === num;
}
console.log(PerfectNumber(6));
console.log(PerfectNumber(12));

//6  Написать функцию, которая принимает минимальное и  максимальное значения для диапазона, и выводит только  те числа из диапазона, которые являются совершенными.Используйте написанную ранее функцию, чтобы узнавать,совершенное число или нет.
function findPerfectNumbersInRange(min, max) {
  let perfectNumbers = [];
  for (let i = min; i <= max; i++) {
    if (isPerfectNumber(i)) {
      perfectNumbers.push(i);
    }
  }
  return perfectNumbers;
}
function isPerfectNumber(num) {
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  return sum === num;
}
console.log(findPerfectNumbersInRange(1, 1000));

//8 Написать функцию, которая принимает часы, минуты и  секунды и возвращает это время в секундах.
function convertToSeconds(hours, minutes, seconds) {
  return hours * 3600 + minutes * 60 + seconds;
}
console.log(convertToSeconds(2, 30, 45));

//9 Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».
function convertToTimeString(seconds) {
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds % 3600) / 60);
  let sec = seconds % 60;

  return (
    ("0" + hours).slice(-2) +
    ":" +
    ("0" + minutes).slice(-2) +
    ":" +
    ("0" + sec).slice(-2)
  );
}
console.log(convertToTimeString(3665));
