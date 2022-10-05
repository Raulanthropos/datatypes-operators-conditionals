/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

/* WRITE YOUR ANSWER HERE */

let var1 = "Hello World"; //1 - This variable type is String - it includes alphanumerical characters within double quotes, single quotes or backticks.
let var2 = 5; //2 - This variable type is Number - it strictly contains numerical digits.
let var3 = true; //This variable type is Boolean - this is a logical operator, and can only have one of two values: True or False. It's like a switch.
let var4 = [1, 2, 3]; //This variable type is Object - we shall not get ahead of ourselves, here.
let var5; //This variable type is Undefined - we do not know what this variable contains, since we only declared it - the contents of it have not been specified.

/* EXERCISE 2
 Try to describe what a variable is, in your own words.
*/

/* WRITE YOUR ANSWER HERE */

//A variable is an element that may change within the the scope of the file in which it was initialized.

/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

/* WRITE YOUR ANSWER HERE */

let z = 12;
let y = 20;
let zy = z + y;
console.log("The sum of z and y is", zy);

/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/

/* WRITE YOUR ANSWER HERE */
let x = 12;

/* EXERCISE 5
 Create a variable called name and assign to it the string "John Doe".
*/

/* WRITE YOUR ANSWER HERE */

let name = "John Doe";

/* EXERCISE 6
 Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12).
*/

/* WRITE YOUR ANSWER HERE */

console.log("12 minus x is", 12 - x);

/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
*/

/* WRITE YOUR ANSWER HERE */

let name1 = "john";
let name2 = "John";
let areThoseNamesTheSame = name1 === name2;
console.log("Are those two names the same?", areThoseNamesTheSame);
let cheatingAreThoseNamesTheSame = name1 === name2.toLowerCase();
console.log(
  "What if we cheat? Then the names are the same",
  cheatingAreThoseNamesTheSame
);

/* EXERCISE 8
 Create a variable named x, and assign to it a numeric value less than 10.
 Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).
*/

/* WRITE YOUR ANSWER HERE */

let X = 5;

let fiveX = X === 5 ? "five" : "not five"
console.log(fiveX);

/* EXERCISE 9
 [Extra] Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,
 try to search it by yourself, tomorrow morning we'll discuss it together!)
*/

/* WRITE YOUR ANSWER HERE */

let testVariable = true ? 0 : 1;
console.log(testVariable);
