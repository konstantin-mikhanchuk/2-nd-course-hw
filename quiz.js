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
