const fs = require('fs');
let secretWord = 'cheeseburgerpizzabagels';

let readDataCallback = (err, data) => {
  if (err) {
    console.log(`Something went wrong: ${err}`);
  } else {
    secretWord = data;
    console.log(`Provided file contained: ${secretWord}`);
  }
};

fs.readFile('./finalFile.txt', 'utf-8', readDataCallback);