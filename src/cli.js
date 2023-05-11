import readlineSync from 'readline-sync';

const funcWelcom = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};
function getRandomNumber(max, min) {
  return Math.ceil(Math.random() * (max - min) + min);
}
export { funcWelcom, getRandomNumber };
