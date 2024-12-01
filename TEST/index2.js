//1.Write a function that takes a number as input and returns its factorial using a for loop.

function factorial(n) {
     
    if (n < 0) {
        return "Factorial is not defined for negative numbers";
    }
    let res = 1;
    for (let i = 1; i <= n; i++) {
        res *= i;
    }
    return res;
}
n =3
console.log(factorial(n));

//2.Create a function to check if a given number is prime. Use a loop to perform the check.

function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
n = 3;
console.log(isPrime(n));

//3.Write a loop to print all even numbers between 1 and 50.

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

//4.Write a function to calculate the sum of all numbers in an array using a loop.

function sumArray(ar) {
    let sum = 0;
    for (let i = 0; i < ar.length; i++) {
        sum += ar[i];
    }
    return sum;
}
ar=[1,2,3,4,5]
console.log(sumArray(ar));

//5.Use a loop to reverse a string provided as input.

function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

//6.Write a function that generates the Fibonacci sequence up to a given number of terms.
function generateFibonacci(terms) {
    if (terms <= 0) return [];
    if (terms === 1) return [0];

    const sequence = [0, 1];
    for (let i = 2; i < terms; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}
console.log(generateFibonacci(5)); 

/*7.Use nested loops to print the following pattern:
*
**
***
****
*****
*/
function printPattern(rows) {
    for (let i = 1; i <= rows; i++) {
        let st = '';
        for (let j = 1; j <= i; j++) {
            st += '*';
        }
        console.log(st);
    }
}
printPattern(5);

//8.Write a function that takes an array of numbers and returns the largest number using a loop.

function findLargestNumber(ar) {
    if (ar.length === 0) return null; 
    let largest = ar[0];
    for (let i = 1; i < ar.length; i++) {
        if (ar[i] > largest) {
            largest = ar[i];
        }
    }
    return largest;
}

console.log(findLargestNumber([6,4,3,7,9])); 

//9.Implement a function to count the number of vowels in a given string.

function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log(countVowels("sushmitha")); 

//10.Use a loop to check if a given word is a palindrome (same forwards and backwards).

function isPalindrome(word) {
    const len = word.length;
    for (let i = 0; i < len / 2; i++) {
        if (word[i] !== word[len - 1 - i]) {
            return false;
        }
    }
    return true;
}
console.log(isPalindrome("mom")); 
console.log(isPalindrome("jam"));   

//11.Create a function that takes an array of integers and removes duplicates using loops.

function removeDuplicates(arr) {
    const uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArray.includes(arr[i])) {
            uniqueArray.push(arr[i]);
        }
    }
    return uniqueArray;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 1])); 

//12.Write a program to calculate the power of a number (e.g., base^exponent) without using the Math.pow() function.

function calculatePower(base, exponent) {
    let result = 1;
    for (let i = 0; i < Math.abs(exponent); i++) {
        result *= base;
    }
    return exponent < 0 ? 1 / result : result;
}


console.log(calculatePower(2, 5));  
console.log(calculatePower(2, -3)); 

//13.Implement a function to sort an array of numbers in ascending order using a loop (e.g., bubble sort).

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}


console.log(bubbleSort([4, 3, 8, 1, 5, 6])); 

//14.Write a loop to find the intersection of two arrays (common elements).

function findIntersection(arr1, arr2) {
    const intersection = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i]) && !intersection.includes(arr1[i])) {
            intersection.push(arr1[i]);
        }
    }
    return intersection;
}


console.log(findIntersection([1, 2, 6, 4], [6, 4, 5, 9])); 

//15.Create a function that generates a multiplication table for a given number using a loop.

function generateMultiplicationTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}

generateMultiplicationTable(4);

