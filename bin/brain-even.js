import readlineSync from 'readline-sync';

function getRandomNumber() {
  const max = 100;
  const min = 1;
  return Math.ceil(Math.random() * (max - min) + min);
}

const mainGame = (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let i = 0;
  for (; i < 3;) {
    const number = getRandomNumber();
    console.log(`Question: ${number}`);
    const answerUser = readlineSync.question('Your answer:');

    if (number % 2 === 0) {
      if (answerUser === 'yes') {
        console.log('Correct!');
        i += 1;
      } else {
        console.log(`"${answerUser}" is wrong answer ;(. Correct answer was "yes". Let's try again, ${name}!`);
        break;
      }
    } else if (number % 2 !== 0) {
      if (answerUser === 'no') {
        console.log('Correct!');
        i += 1;
      } else {
        console.log(`"${answerUser}" is wrong answer ;(. Correct answer was 'no'. Let's try again, "${name}"!`);
        break;
      }
    } else {
      console.log(`${answerUser} is wrong answer ;(. Let's try again, ${name}}!`);
      break;
    }
  }
  if (i === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
export default mainGame;
