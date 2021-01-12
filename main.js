/*
 * Author:  Kyle Mayer
 * Program: Sum of odd numbers inclusive
 * Date:    01/12/2021
 * Requirements:
 *      Given two numbers, write an algorithm that outputs the sum
 *      of all odd numbers between those numbers, inclusive.
 */


/**
 *
 * @param num1 integer number to begin range
 * @param num2 integer number to end range
 * @returns total integer number representing total
 */
let sumOfOddNumbersInclusive = (num1, num2) => {
    // initialize int variable for total
    let total = 0;

    //checking for possible error cases - I realize this is probably overkill
    if (typeof (num1) === "string" || typeof (num2) === "string") {
        //check case that both num1 and num2 are indeed numbers
        return "Both numbers must be integers.";
    } else if (num2 <= num1) {
        //check case that num2 is not greater than or equal to num1
        return "The first number must be less than or equal to the second number!";
    }

    //loop through given range between num1 and num2
    for (let i = num1; i <= num2; i++) {
        if (i % 2 !== 0) {
            //current iteration is odd, add to total
            total += i;
        }
    }
    return total;
}

// ------- TEST CASES:

// Numerical test cases
console.log("Running Test Cases");

// 1 - 7:
// 1 + 3 + 5 + 7 = 16
let num1 = 1;
let num2 = 7;
console.log("\t", sumOfOddNumbersInclusive(num1, num2));

// 13 - 26:
// 13 + 15 + 17 + 19 + 21 + 23 + 25 = 133
num1 = 13;
num2 = 26;
console.log("\t", sumOfOddNumbersInclusive(num1, num2));

// 24 - 51
// 25 + 27 + 29 + 31 + 33 + 35 + 37 + 39 + 41 + 43 + 45 + 47 + 49 + 51 = 532
num1 = 24;
num2 = 51;
console.log("\t", sumOfOddNumbersInclusive(num1, num2));

// Check error cases
console.log("Testing Error Cases");

// Case: num1 is greater than num2
num1 = 3;
num2 = 1;
console.log("\t", sumOfOddNumbersInclusive(num1, num2));

// Case: one of the arguments is a string and not an integer
num1 = "one"
console.log("\t", sumOfOddNumbersInclusive(num1, num2));

// Case: one of the arguments is the string representation of 1
num1 = 6;
num2 = "5";
console.log("\t", sumOfOddNumbersInclusive(num1, num2));