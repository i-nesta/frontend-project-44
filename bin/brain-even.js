import readlineSync from 'readline-sync';

function getRandomNumber() {
   const max = 100;
   const min = 1;
   return Math.ceil(Math.random() * (max - min) + min);
};
console.log(getRandomNumber());

console.log('Answer "yes" if the number is even, otherwise answer "no".');
console.log(`'Question: ${getRandomNumber()}'`);

let answerUser = readlineSync.question('Your answer:');

const mainGame = () => {
   for (i = 0; i <= 3;) {
      if (getRandomNumber() % 2 === 0 || answerUser === 'yes') {
         console.log('Correct!');
         i++;
      } else if (getRandomNumber() % 2 !== 0 || answerUser === 'no') {
         console.log('Correct!');
         i++;
      } else {

      }
   }
}