import readlineSync from 'readline-sync';

const funcWelcom = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have yore name? ');
  console.log(`Hello, ${name}`);
  return name;
};
function getRandomNumber() {
  const max = 10;
  const min = 1;
  return Math.ceil(Math.random() * (max - min) + min);
}
export { funcWelcom, getRandomNumber };
