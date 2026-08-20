const people1 = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];
console.log(people1.sort((a, b) => a.age - b.age));


function isPositive(a) {
    return a > 0;
}
function isMale(b) {
    return b.gender === 'male';

}
function filter(arr, ruleFunction) {
    const output = [];
    for (let i = 0; i < arr.length; i++) {
        if (ruleFunction(arr[i])) {
            output.push(arr[i]);
        }
    }
    return output;
}
console.log(filter([3, -4, 1, 9], isPositive));
const people = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];
console.log(filter(people, isMale));


let timerId = setInterval(() => {
    let currentDate = new Date();
    console.log(currentDate);
}, 3000)
setTimeout(() => { clearInterval(timerId); console.log('30 секунд прошло'); }, 1000 * 30);


function delayForSecond(callback) {
    setTimeout(
        callback, 1000)
}
delayForSecond(function () {
    console.log('Привет, Глеб!');
});


function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (cb) { cb(); }
    }, 1000)
}
function sayHi(name) {
    console.log(`Привет, ${name}!`);
}
delayForSecond(() => {
    sayHi('Глеб');
}
);
    