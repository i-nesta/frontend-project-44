import readlineSync from 'readline-sync';
import welcome from '../src/cli.js';

function getRandomNumber() {
  const max = 100;
  const min = 1;
  return Math.ceil(Math.random() * (max - min) + min);
}
// console.log(getRandomNumber());

// console.log('Answer "yes" if the number is even, otherwise answer "no".');
// console.log(`Question: ${getRandomNumber()}`);

// const answerUser = readlineSync.question('Your answer:');
let name = (welcome())
const mainGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let i = 0;
  for (; i < 3;) {
    let number = getRandomNumber();
    console.log(`Question: ${number}`);
    let answerUser = readlineSync.question('Your answer:');

    if (number % 2 === 0) {
      if (answerUser === 'yes') {
        console.log('Correct!');
        i++;
      } else {
        console.log(`"${answerUser}" is wrong answer ;(. Correct answer was "yes". Let's try again, ${name}!`);
        break;
      };
    } else if (number % 2 !== 0) {
      if (answerUser === 'no') {
        console.log('Correct!');
        i++;
      } else {
        console.log(`"${answerUser}" is wrong answer ;(. Correct answer was 'no'. Let\\'s try again, "${name}"!`);
        break;
      }
    } else {
      return console.log(`${answerUser} is wrong answer ;(. Let\\'s try again, ${name}}!`)
    }
  }
  if (i === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
(mainGame());
