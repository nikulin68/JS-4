const { count } = require('console');
var readline = require('readline');
const { isNumberObject } = require('util/types');
var rl = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);

async function userNumberInput() {
    let promise = new Promise(function(resolve, reject){
        rl.question('Введите число от 1 до 10: ', function(input) {
            let userNumber = Number(input);
            return resolve(userNumber);
        })
    })
    return await promise;
}

async function game(number, trycount) {
    console.log('Попытка № ', trycount);
    while(true) {
        let userNumber = await userNumberInput();              
        if (randonNumber === userNumber) {
            console.log('Вы угадали!', 'Количество попыток = ', trycount);                
            break;
        }

        else if (userNumber > randonNumber){
            console.log('Ведите число меньше');
        }

        else if (userNumber < randonNumber) {
            console.log('Ведите число больше');                
        }

        else {                        
            console.log('Вы ввели некорректное значение...');
        }

        trycount++; 
        game(number, trycount);
    }
    rl.close();    
}

let counter = 1
let randonNumber = Math.floor(Math.random() * 10);
console.log('Загаданное число  =  ', randonNumber);

game(randonNumber, counter);