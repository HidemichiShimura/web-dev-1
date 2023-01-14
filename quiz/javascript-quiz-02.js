// Question 1: What's the output?

// function greeting() {
//     console.log(name);
//     console.log(age);
//     var name = "Hana";
//     let age = 21;
// }
// 
// greeting();

// A: Hana and undefined
// B: Hana and ReferenceError
// C: ReferenceError and 21
// D: undefined and ReferenceError

Ans: D
Short explanation: "name" is hoisted by var but "age" is not because let doesn't hoist


// ######Question 2: What's the output?

// +true ,!"Lydia";

// A: 1 and false
// B: false and NaN
// C: false and false

Ans: A: 1 and false
Short explanation: !"Lydia" gets conveted to boolean, true, and turns into false by NOT operator

// ######Question 3: What's the output?

// function sum(a, b) {
// return a + b;
// }
// sum(1, "2");

// // A: NaN
// // B: TypeError
// // C: "12"
// // D: 3

Ans: C: "12"
Short explanation: a gets converted to string "1" and concated with b, which results in "12"

// ###### Question 4: What's the output?

// let number = 0;
// console.log(number++);
// console.log(++number);
// console.log(number);

// A: 1 1 2
// B: 1 2 2
// C: 0 2 2
// D: 0 1 2

Ans: C
Short explanation: The increment operator returns the previous value when it's place at the end and the incremented value at the first

// ###### Question 5: What's the output?

// !!null;
// !!"";
// !!1;

// A: false true false
// B: false false true
// C: false true true
// D: true true false

Ans: B
Short explanation:
    Null is treated as false and the two of ! cancelles out.
    !"" gets evaluated to true and gets reversed with the first ! to false.
    1 gets convered to true and the two of ! cancelles out.


// ###### Question 6: What's the output?

// console.log(3 + 4 + "5");

// A: "345"
// B: "75"
// C: 12
// D: "12"

Ans: B
Short explanation: 3 and 4 get evaluated first to 7 and concated with the string 5, which results in "75"

// ###### Question 7: What's the value of num?

// const num = parseInt("7*6", 10);

// A: 42
// B: "42"
// C: 7
// D: NaN

Ans: C
Short explanation: parseInt returns the first integer in the argument

// ###### Question 8:

// Write a function indexOfIgnoreCase taking two strings
// and determining the first occurrence of the second
// string in the first string. The function should be
// case insensitive.

// Example: indexOfIgnoreCase('bit','it') and
// indexOfIgnoreCase('bit','IT') should return 1.

const indexOfIgnoreCase = (s1, s2) => {
    const loweredS1 = s1.toLowerCase();
    const loweredS2 = s2.toLowerCase();

    return loweredS1.indexOf(loweredS2);
};

// ###### Question 9:
// Write a function firstChar, which returns the
// first character that is not a space when a string
// is passed.

// Example: firstChar(' Rosa Parks ') should return 'R'.

const firstChar = (text) => {
    return text.trim().charAt(0);
}

// ###### Question 10:
// Write a function normalize, that replaces '-'
// with '/' in a date string.

// Example: normalize('20-05-2017') should return
// '20/05/2017'.

const normalize = (date) => {
    return date.replaceAll("-", "/");
};