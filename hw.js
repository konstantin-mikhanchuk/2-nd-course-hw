let first = "js"
let big = first.toUpperCase();
console.log(big);


function second (a, b) {
    return a.filter ((product) => {
        return product.toLowerCase().startsWith(b.toLowerCase());
    });
}
let controle = second(['Хлеб Московский', 'Молоко Алексеевское', 'Коровка на лугу', 
'Груша Симпозиум'], 'молоко');
console.log(controle);


let third = 32.58884;
console.log(Math.floor(third));
console.log(Math.ceil(third));
console.log(Math.round(third));


const fourth = [52, 53, 49, 77, 21, 32];
console.log(Math.min(...fourth));
console.log(Math.max(...fourth));


function fifth() {
    const randNum = Math.floor(Math.random() * 10 + 1)
    console.log(randNum);
}
fifth();


function sixth(c) {
    const arr = [];
    let targetLength = c / 2;
    for (let i = 0; i < targetLength; i++) {
        let randNum = Math.floor(Math.random() * (c + 1))
        arr.push(randNum)
    }
    return arr;
}
let test = sixth(6);
console.log(test);


function seventh (d, e) {
    if (d > e) {
        return Math.floor(Math.random() * (d - e + 1) + e);
    } else {
        return Math.floor(Math.random() * (e - d + 1) + d);
    }
};


let eighth = new Date();
console.log(eighth);


let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);


function tenth(myDate) {
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг",
    "Пятница", "Суббота"];
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    let fullDate = "Дата: " + myDate.getDate() + 
    " " + months[myDate.getMonth()] + 
    " " + myDate.getFullYear() + 
    " — это " + days[myDate.getDay()] +
    ". Время: " + myDate.toLocaleTimeString('ru-RU'); 
    return fullDate;
}
let current = new Date();
console.log(tenth(current));
    