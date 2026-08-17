const numbs = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < numbs.length; i++) {
    console.log(numbs[i]);
    if (numbs[i] === 10) break;
}


const index = [1, 5, 4, 10, 0, 3];
let search = index.indexOf(4);
console.log(search);


const sequence = [1, 3, 5, 10, 20];
let seqApp = sequence.join(' ');
console.log(seqApp);


const arr = [];
for (let a = 0; a < 3; a++) {
    const row = [];
    for (let j = 0; j < 3; j++) {
        row.push(1);
    }
    arr.push(row);
}
console.log(arr);


const five = [1, 1, 1];
five.push(2, 2, 2);
console.log(five);


const six = [9, 8, 7, 'a', 6, 5];
let variation = six.sort();
let isDelete = variation.filter(el => el !== 'a');
console.log(isDelete);


const seven = [9, 8, 7, 6, 5];
let guess = Number(prompt("Попробуйте угадать: введите какое-то число."));
if (seven.includes(guess)) {
    alert("Угадал")
} else {
    alert("Не угадал")
};


const eight = 'abcdef';
let divided = eight.split('');
let turnOver = divided.reverse();
console.log(turnOver.join(''));


const nine = [
    [1, 2, 3],
    [4, 5, 6]
];
console.log([...nine[0],...nine[1]]);


const ten = [2, 4, 3, 1, 10];
for (let c = 0; c < ten.length - 1; c++) {
  let current = ten[c];
  let second = ten[c + 1];
  let sum = current + second;
  console.log(sum);
}


function eleven(arr) {
    return arr.map(num => num**2)
};
let example = [4, 3, 1];
console.log(eleven(example));


function twelve(amm) {
    return amm.map(d => d.length)
}
const words = [
    "нужно",
    "для",
    "проверки"
]
console.log(twelve(words));


function thirteen(numeric) {
    return numeric.filter(e => e < 0)
}
const negative = [2, 3, -1]
console.log(thirteen(negative));


const fourteen = [];
for (let f = 0; f < 10; f++) {
    let g = Math.random() * 10;
    fourteen.push(g);
}
const even = fourteen.filter(num => num % 2 === 0);
console.log(fourteen);
console.log(even);


const fifteen = [];
for (let h = 0; h < 6; h++) {
    let k = Math.random() * 9 + 1;
    fifteen.push(k);
}
let addition = fifteen.reduce((l, m) => l + m, 0) / 6;
console.log(addition);
    