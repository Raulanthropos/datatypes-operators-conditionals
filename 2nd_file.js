// Additional assignments for Day 3

/*EX 1
 Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
*/

/* WRITE YOUR ANSWER HERE */

let isMale = true;
let gender = isMale ? "male" : "female";
console.log(gender);

/*EX 2
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/

/* WRITE YOUR ANSWER HERE */

let int1 = 5;
let int2 = 3;
let isAnyOfTheConditionsMet = int1 === 8 ? true : int2 === 8 ? true : int1 + int2 === 8? true : int1 - int2 === 8 ? true : int2 - int1 === 8 ? true : false
console.log(isAnyOfTheConditionsMet);

/*EX 3
 Create a variable and assign to it the concatenation of two strings.
*/

/* WRITE YOUR ANSWER HERE */

let string1 = "John";
let string2 = "Doe";
let fullName = string1 + string2;
console.log(fullName);

/*EX 4
 Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/

/* WRITE YOUR ANSWER HERE */

let num1 = 2;
let num2 = 5;
let num3 = 6;

if (num1 < num2 && num2 < num3) {
    console.log(num1, num2, num3)
} else if (num1 < num3 && num3 < num2) {
    console.log(num1, num3, num2)
} else if (num2 < num3 && num3 < num1) {
    console.log(num2, num3, num1)
} else if (num2 < num1 && num1 < num3) {
    console.log(num2, num1, num3)
} else if (num3 < num2 && num2 < num1) {
    console.log(num3, num2, num1)
} else {
    console.log(num3, num1, num2)
}

/*EX 5
 Write a piece of code for finding the average of two given integers.
*/

/* WRITE YOUR ANSWER HERE */

let int3 = 4;
let int4 = 6;
let avg = (int3 + int4) / 2;
console.log("The average of 4 and 6 is", avg);

/*EX 6
 Write a piece of code for finding the longest of two given strings.
*/

/* WRITE YOUR ANSWER HERE */

let string3 = "Geisha";
let string4 = "Robocop";
let longestString = string3.length > string4.length ? string3 : string4;


/*EX 7
 Write a piece of code for checking if a given value is a integer or not.
*/

/* WRITE YOUR ANSWER HERE */

let randomNumber = 10;
let integerOrNot = randomNumber  === parseInt.randomNumber ? randomNumber : "Not an integer";
console.log(integerOrNot);

/*EX 8
 Write a piece of code for calculating a certain percentage of a given number.
 (Ex.: the 20% of 400 is 80)
*/

/* WRITE YOUR ANSWER HERE */

let givenNumber = 9;
let percentageNumberTwenty = (givenNumber / 0.20) * 100;

/*EX 9
 Write a piece of code for checking if a given number is even or odd.
*/

/* WRITE YOUR ANSWER HERE */

let givenNumber2 = 9;
let evenOrOdd = givenNumber2 % 2 === 0 ? "even" : "odd";
console.log(evenOrOdd);
