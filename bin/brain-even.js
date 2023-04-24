import funcWelcom from '../src/cli.js';
import baseGame from '../src/index.js';

function getRandomNumber() {
  const max = 100;
  const min = 1;
  return Math.ceil(Math.random() * (max - min) + min);
}

const name = funcWelcom();

const condition = 'Answer "yes" if the number is even, otherwise answer "no".';
let question;
const questionFunc = () => {
  question = getRandomNumber();
  return question;
};
function funcCheck(userAnswer) {
  let result;
  if (question % 2 === 0) {
    if (userAnswer === 'yes') {
      result = true;
    } else {
      result = false;
    }
  } else if (userAnswer % 2 !== 0) {
    if (userAnswer === 'no') {
      result = true;
    } else {
      result = false;
    }
  }
  return result;
}

baseGame(condition, questionFunc, funcCheck, name);

// const mainGame = (name) => {
//   console.log('Answer "yes" if the number is even, otherwise answer "no".');
//   let i = 0;
//   for (; i < 3;) {
//     const number = getRandomNumber();
//     console.log(`Question: ${number}`);
//     const answerUser = readlineSync.question('Your answer:');

//     if (number % 2 === 0) {
//       if (answerUser === 'yes') {
//         console.log('Correct!');
//         i += 1;
//       } else {
// eslint-disable-next-line max-len
//         console.log(`"${answerUser}" is wrong answer ;(. Correct answer was "yes". Let's try again, ${name}!`);
//         break;
//       }
//     } else if (number % 2 !== 0) {
//       if (answerUser === 'no') {
//         console.log('Correct!');
//         i += 1;
//       } else {
// eslint-disable-next-line max-len
//         console.log(`"${answerUser}" is wrong answer ;(. Correct answer was 'no'. Let's try again, "${name}"!`);
//         break;
//       }
//     } else {
//       console.log(`${answerUser} is wrong answer ;(. Let's try again, ${name}}!`);
//       break;
//     }
//   }
//   if (i === 3) {
//     console.log(`Congratulations, ${name}!`);
//   }
// };
// export default mainGame;
