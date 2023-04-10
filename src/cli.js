import readlineSync from 'readline-sync';
export const welcome = () => {
   const name = readlineSync.question('May I have yore name?');
   console.log(`Hello, ${name}!`);
};
