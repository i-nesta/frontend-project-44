import readlineSync from 'readline-sync';

const baseGame = (condition, question, funcCheck, name) => {
  console.log(condition);
  let i = 0;
  for (; i < 3;) {
    console.log(`Question: ${question()}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (funcCheck(userAnswer)) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "yes". Let's try again, ${name}!`);
      break;
    }
  }
  if (i === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default baseGame;
