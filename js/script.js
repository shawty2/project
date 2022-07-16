//                       LESSON 1
// let number = 5;
// const leftBorderWidth = 1;
// number = 10;
// console.log(number);
// const obj = {
//     a:50
// };
// obj.a = 10;
// console.log (obj.a);
// console.log(name);
// var name = 'Ivan';
// {
//     let result = 50;
// }
// //console.log(result);
//                       LESSON 2
// let number = 4.6;
// console.log(-4/0);
// const persone = 'Alex 5';
// const bool = true;
// console.log(something);
// let und;
// console.log(und);
// const obj = {
//     name: 'Ivan',
//     age: 25,
//     isMarried: false
// };
// console.log(obj.name);
// // console.log(obj['name']);
// let array = ['plump.png', 'orange.jpg', 6, 'apple.bmp'];
// console.log(array[0]);
//                       LESSON 3
// alert ('hello');
// const result = confirm('Are u here?');
// console.log(result);
// const answer = prompt('ur age?', '18');
// console.log(answer);
// console.log(typeof(answer));
// console.log(answer+5);
// //вся инфа приходящая от пользователя - строка. 
// const answer2 = +prompt('ur age?', '18');

// // //динамическая типизация
// const answers = [];

// answers[0] = prompt('Как Ваше имя?','');
// answers[1] = prompt('Какая у Вас фамилия?','');
// answers[2] = prompt('Сколько вам лет?','');

// console.log(answers);
// console.log(typeof(answers));
//                       LESSON 4 интерполяция
// const category = 'toys';
// console.log('https://someurl.com/' + category);
// console.log(`https://someurl.com/${category}/5`);
// const user = 'Ivan';
// alert(`Привет, ${user}`);
//                       LESSON 4 Опертаторы js
console.log('arr' + ' -- object');
console.log(4 + ' -- object');
console.log(4 + + ' -- object'); // NaN
console.log(4 + + '5');
let incr = 10,
    decr = 10;

// incr++;
// decr--;


console.log(incr++, decr++); //постфиксная форма
console.log(++incr, ++decr); //префиксная форма

console.log(2 * 4 == 8); //равенство
console.log(2 * 4 == '8'); //равенство
console.log(2 * 4 === 8); //идентичность
console.log(2 * 4 === '8'); //идентичность

const isChecked = true,
        isClose = true,
        isNot = false;

console.log(isChecked && isClose && !isNot);
console.log(isChecked || isClose || isNot); 


