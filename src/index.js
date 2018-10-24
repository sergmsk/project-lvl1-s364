import readline from 'readline-sync';

export const askName = () => {
  const name = readline.question('\nMay I have your name? ');
  return `Hello, ${name}!`;
};


