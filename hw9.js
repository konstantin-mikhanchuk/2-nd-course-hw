const headingEl = document.querySelector('.heading');
const buttonEl = document.querySelector('.heading__btn');
let isRemoved = false;
buttonEl.addEventListener ('click', function() {
   if (isRemoved === false) {
      headingEl.remove();
      isRemoved =true;
      buttonEl.textContent = 'Воздвигнуть';
   } else {
      document.body.insertBefore(headingEl, buttonEl);
      isRemoved = false; 
      buttonEl.textContent = 'Скрыть'; 
   }
});


const textEl = document.querySelector('.heading__text');
const butTextEl = document.querySelector('.heading__tbtn');
butTextEl.addEventListener ('click', function() {
    textEl.style.color = 'blue';
});


const secondEl = document.querySelector('.second');
const secBtnEl = document.querySelector('.second__btn');
secBtnEl.addEventListener ('click', function() {
    secondEl.textContent = 'Привет, мир!'; 
});


const taskWithAnError = document.querySelector('.task-four');
const paragraphEl = taskWithAnError.querySelectorAll('.description');
paragraphEl.forEach(description => {
   description.textContent = 'Измененный текст';
});


const taskWithErrors = document.querySelector('.task-five');
const secParagraphEl = taskWithErrors.querySelectorAll('.description');
secParagraphEl.forEach(description2 => {
   description2.textContent = 'Новый текст';
});



const anothBut = document.querySelector('.tsix-btn');
anothBut.addEventListener ('click', function() {
    const newP = document.createElement('p');
    newP.textContent = 'Новый абзац';
    document.body.appendChild(newP);
});


const anothWithError = document.querySelector('.last-task');
const lastBtn = anothWithError.querySelector('.last-task__btn');
lastBtn.addEventListener ('click', function() {
    anothWithError.querySelector('.description').remove();
});
