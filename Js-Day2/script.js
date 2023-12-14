// Assignment 1:
let num = parseInt(prompt("Enter the number to find possitive or negative"))
function finder(num){
    if(num < 0){
        console.log(num + " is negative")
    }else{
        console.log(num + " is Possitive")
    }
}
finder(num)


// Assignment 2:
let factNum = parseInt(prompt("Enter the number"))
function factorial(num){
    if(factNum < 0){
        console.log("Negative number cant be calculated")
    }else if(factNum === 0){
        console.log(factNum + " factorial is 1")
    }else{
        let fact = 1
        for(let i=1 ; i<=factNum ; i++){
            fact = fact * i ;
        }
        console.log(factNum + " factorial is " + fact)
    }
}
factorial(factNum)

// Assignment 3:

let a = parseInt(prompt("Enter the a value"))
let b = parseInt(prompt("Enter the a value"))
function largenum(a,b){
    if(a>b){
        return console.log(a + "  is biggest number")
    }else{
        return console.log(b + "  is biggest number")
    }
}
largenum(a,b)

// Assignment 4:
let input = prompt("Enter the value to check if palindrome or not ")
function palindrome(input){
    let cleanedInput = input.toLowerCase().replace(/\s/g,'')
    let revInput = cleanedInput.split('').reverse().join('')
    if(cleanedInput === revInput){
        return console.log(input + " is Palindrome")
    }else{
        return console.log(input + " is not a Palindrome")
    }
}
palindrome(input)

// Assignment 5:
let number = parseInt(prompt("Enter the number to print prime value"))
function printPrimesUpToN(n) {
    // Iterate through numbers from 2 to n and print primes
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
        // Function to check if a number is prime
        function isPrime(num) {
            if (num <= 1) return false;
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) {
                    return false;
                }
            }
            return true;
        }
}
printPrimesUpToN(number);
