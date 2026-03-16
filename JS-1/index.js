// Задача 1.
// Напишите функцию calculateFinalPrice, которая принимает базовую цену товара, процент скидки и налоговую ставку. Функция должна вычислять скидку, затем прибавлять налог и возвращать итоговую цену.

// Пример работы:
// console.log(calculateFinalPrice(100, 10, 0.2)); // 108
// console.log(calculateFinalPrice(100, 10, 0)); // 90

// 1)

// function calculateFinalPrice(price, discount, tax) {
//   let i = (price -= discount);
//   let j = i * tax;
//   return (i += j);
// }

// console.log(calculateFinalPrice(100, 10, 0.2));

// Задача 2.
// Напишите функцию checkAccess, которая принимает имя пользователя и пароль. Если имя пользователя равно "admin" и пароль равен "123456", функция должна возвращать строку "Доступ разрешен", иначе — "Доступ запрещен".

// 2)

// function checkAccess(user_name, password) {
//   if (user_name == "admin" && password == 123456) {
//     console.log("Доступ разрешен");
//   } else {
//     console.log("Доступ запрещен");
//   }
//   return (user_name, password);
// }

// let ADMIN = "admin";
// let PASSWORD = 123456;

// console.log(checkAccess(ADMIN , PASSWORD));

// Задача 3.
// Напишите функцию getTimeOfDay, которая принимает текущее время (число от 0 до 23) и возвращает строку:
// "Ночь" (с 0 до 5 часов),
// "Утро" (с 6 до 11 часов),
// "День" (с 12 до 17 часов),
// "Вечер" (с 18 до 23 часов).
// Если введённое значение не попадает в этот диапазон, возвращайте `"Некорректное время"`.

// 3)

// function getTimeOfDay(time) {
//   let dayTime;
//   if (time < 0 && time > 23) {
//     console.log("Некорректное время");
//   }
//   switch (true) {
//     case time >= 0 && time <= 5:
//       dayTime = "Ночь";
//       break;
//     case time >= 6 && time <= 11:
//       dayTime = "Утро";
//       break;
//     case time >= 12 && time <= 17:
//       dayTime = "День";
//       break;
//     case time >= 18 && time <= 23:
//       dayTime = "Вечер";
//       break;
//   }
//   return dayTime;
// }

// console.log(getTimeOfDay(19))

// Задача 4.
// Напишите функцию findFirstEven, которая принимает два числа start и end и находит первое чётное число в указанном диапазоне.
// Если чётного числа в этом диапазоне нет, функция должна вернуть "Чётных чисел нет".

// 4)

// function findFirstEven(start, end) {
//   for (let i = start; i <= end; i++) {
//     if (i % 2 === 0) {
//       return i;
//     }
//   }
//   return "Чётных чисел нет";
// }

// console.log(findFirstEven(9, 9))

// Пример работы:
// console.log(findFirstEven(1, 10)); // 2
// console.log(findFirstEven(9, 9)); // "Чётных чисел нет"
