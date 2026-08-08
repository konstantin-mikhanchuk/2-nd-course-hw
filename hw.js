function compar(a, b) {
   if (a>=b) {
      return b;
   } else {
      return a;
   }
}
console.log(compar (8, 4)); 
console.log(compar (6, 6)); 


function definit(c) {
   if (c % 2 === 0) {
      return 'Число четное';
   } else {
      return 'Число нечетное';
   }
}
console.log(definit (8)); 
console.log(definit (3)); 


function squar(d) {
   console.log (d * d);
}
squar (11);
function squarRet(e) {
   return e * e;
}
console.log(squarRet (10));


function correctAge (age) {
   if (age < 0) {
      return 'Вы ввели неправильное значение';
   } else if (age > 0 && age <= 12) {
      return 'Привет, друг!';
   } else {
      return 'Добро пожаловать!';
   }
}
alert(correctAge(prompt("Сколько вам лет?")))


function number (a, b) {
   a = Number(a);
   b = Number(b);
   if (isNaN(a) || isNaN (b)) {
      return 'Одно или оба значения не являются числом';
   } else {
      return a * b;
   }
}


function cube() {
   let n = prompt("уважаемый проверяющий, введите число") 
   n = Number (n);
   if (isNaN(n)) {
      return 'Переданный параметр не является числом';
   } else {
      return `${n} в кубе равняется ${n ** 3}`   
   }
}
console.log(cube());


let circle1 = {
   radius: 10,
   getPerimeter() {
      return 2 * 3.14 * this.radius;
   },
   getArea() {
      return 3.14 * (this.radius ** 2);
   }
}
let circle2 = {
   radius: 15,
   getPerimeter() {
      return 2 * 3.14 * this.radius;
   },
   getArea() {
      return 3.14 * (this.radius ** 2);
   }
}
