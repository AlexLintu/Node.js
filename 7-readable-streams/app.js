const readline = require('readline');
const fs = require('fs');

let myInterface = readline.createInterface({
  input: fs.createReadStream('shoppingList.txt')
});

const printData = (data) => {
  console.log(`Item: ${data}`);
}

myInterface.on('line', printData);