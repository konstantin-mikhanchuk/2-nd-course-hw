let password = 'пароль';
let control = prompt("введите пароль");
if (control === password) {
    console.log("Пароль введен верно");   
} else {
    console.log("Пароль введен неправильно"); 
}

let c = 0;
if (c > 0 && c < 10) {
   console.log('Верно');
} else {
   console.log('Неверно');
}


let d = 1;
let e = 999;
if (d > 100 || e > 100) {
   console.log('Верно');
} else {
   console.log('Неверно');
}

let a = '2';
let b = '3';
alert(Number(a) + Number(b));

let monthNumber = 12;
if (monthNumber > 13) {
    console.log('при таком числе программа не выполняется, так как этого требуют создатели задания, а мы не можем их не слушать');
} 
else {
    switch (monthNumber) {
        case 12:
        case 1:
        case 2:
            console.log('зима');
            break;
        case 3:
        case 4:
        case 5:
            console.log('весна');
            break;
        case 6:
        case 7:
        case 8:
            console.log('лето');
            break;
        case 9:
        case 10:
        case 11:
            console.log('осень');
            break;
        default:
            console.log('ввели что-то не то');
            break;
    }
}

