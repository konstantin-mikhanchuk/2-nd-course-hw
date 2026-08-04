{
   let i = 0;
   do {
      console.log("Привет");
      i++;
   } while (i < 2);
} 

{
   let a = 1;
   while (a <= 5) {
      console.log(a); 
      a++;
   }
} 

{
   let b = 7;
   while (b >= 7 && b <= 22) {
      console.log(b); 
      b++;
   }
} 

{
   const obj = {
       Коля : 200,
       Вася : 300,
       Петя : 400
   }
   for (let key in obj) {
      console.log(`${key}: ${obj[key]}`);
   }
} 

{
   let n = 1000;
   let num = 0;
   while (n >= 50) {
      n /= 2;
      num++;      
   }
   console.log(n);
   console.log(num);
} 

{
   let fridayNumber = 1;
   while (fridayNumber <= 31) {
        if (fridayNumber % 7 === 1) {
        console.log(`Сегодня пятница, ${fridayNumber}-е число. Необходимо подготовить отчет.`);
    }
    fridayNumber++;
   }
} 
