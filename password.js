function getPasswordChecker(password) {
    return function (n) {
        if (password == n) {
            return true;
        }
        return false;        
    }
} 

let input = getPasswordChecker('123');

console.log(input(123));
console.log(input(12));
console.log(input(1));
