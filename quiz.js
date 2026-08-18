function startQuiz() {
   let score = 0;
   const quiz = [
      {
         question: "Какого цвета небо?",
         options: ["1. Красный", " 2. Синий", " 3. Зеленый"],
         correctAnswer: 2
      },
      {
         question: "Сколько дней в неделе?",
         options: ["1. Шесть", "2. Семь", "3. Восемь"],
         correctAnswer: 2
      },
      {
         question: "Сколько у человека пальцев на одной руке?",
         options: ["1. Четыре", "2. Пять", "3. Шесть"],
         correctAnswer: 2
      }
   ];
   let answer1 = prompt(quiz[0].question + ` Введите номер правильного ответа (только цифру без точки, так как я пока так себе программист), варианты: ` + quiz[0].options)
   if (Number(answer1) === quiz[0].correctAnswer) {
      score++
   }
   let answer2 = prompt(quiz[1].question + ` Введите номер правильного ответа (только цифру без точки, так как я пока так себе программист), варианты: ` + quiz[1].options)
   if (Number(answer2) === quiz[1].correctAnswer) {
      score++
   }
   let answer3 = prompt(quiz[2].question + ` Введите номер правильного ответа (только цифру без точки, так как я пока так себе программист), варианты: ` + quiz[2].options)
   if (Number(answer3) === quiz[2].correctAnswer) {
      score++
   }
   alert(`Количество правильных ответов:` + score)
}


function guess() {
   let num = Math.floor(Math.random() * 100 + 1); 
   while (true) {
      let guess = Number(prompt("угадайте число от 1 до 100, напишите предложенный вариант"));
      if (guess === num) {
         alert("Вы преогромнейшая умничка, угадали.");
         break;
      } else if (guess > num) { 
         alert("Вы преогромнейшая умничка, молодец, что стараетесь, но верное число меньше вашего.");
      } else {
         alert("Вы ошиблись, но не расстраивайтесь, а продолжайте поиски, верное число больше вашего.");
      }
   }
}


function count() {
   let a = Math.floor(Math.random() * 20 + 1);
   let b = Math.floor(Math.random() * 20 + 1);
   let mathematic = [a + b, a - b, Number((a / b).toFixed(2)), a * b];
   let operations = ["+", "-", "/", "*"];
   let randomIndex = Math.floor(Math.random() * 4);
   let version = Number(prompt("решите эту задачу: " + a + " " + operations[randomIndex] + " " + b + ", если результат деления дробное число, то после запятой пишите только первые две цыфры."));
   if (version === mathematic[randomIndex]) {
      alert("Вы великий математик, ответ верный.");
   } else {
      alert("Вы преогромнейшая умничка, молодец, что стараетесь, но ответ неверный.");
   }
}


function overturn() {
   let request = prompt("введите текст");
   let change = request.split("").reverse().join("");
   alert(change);
}
