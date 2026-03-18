// Задача 1.
// Создайте объект person с несколькими свойствами, содержащими информацию о вас. Затем выведите значения этих свойств в консоль.

// const user = {
//   name: "Abdurrahman",
//   age: 13,
//   isProgrammer: true,
//   "isStudy_atAROKEN.RU": true
// };

// console.log(user)

// Задача 2.
// Создайте функцию isEmpty, которая проверяет является ли переданный объект пустым. Если объект пуст - верните true, в противном случае false.

// const obj = {
//   name: "",
// };

// function isEmpty() {
//   if (obj.name == "") {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
// console.log(isEmpty());

// Задача 3.
// Создайте объект task с несколькими свойствами: title, description, isCompleted.
// Напишите функцию cloneAndModify(object, modifications), которая с помощью оператора spread создает копию объекта и применяет изменения из объекта modifications.
// Затем с помощью цикла for in выведите все свойства полученного объекта.

// const task = {
//   title: "Изучить JavaScript",
//   description: "Сделать домашку",
//   isCompleted: false,
// };

// function cloneAndModify(object, modifications) {
//   return { ...object, ...modifications };
// }

// const updatedTask = cloneAndModify(task, {
//   isCompleted: true,
// });

// for (let key in updatedTask) {
//   console.log(`${key}: ${updatedTask[key]}`);
// }

// Задача 4.
// Создайте функцию callAllMethods, которая принимает объект и вызывает все его методы.

// Пример использования:
// const myObject = {
//     method1() {
//         console.log('Метод 1 вызван');
//     },
//     method2() {
//         console.log('Метод 2 вызван');
//     },
//     property: 'Это не метод'
// };
// callAllMethods(myObject);

// const callAllMethods = (obj) => {
//   Object.values(obj).forEach(value => {
//     if (typeof value === 'function') {
//       value.call(obj);
//     }
//   });
// };

// const myObject = {
//     method1() {
//         console.log('Метод 1 вызван');
//     },
//     method2() {
//         console.log('Метод 2 вызван');
//     },
//     property: 'Это не метод'
// };



