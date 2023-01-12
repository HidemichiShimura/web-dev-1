// Question 1
// Answer: "Tigger"

// Question 2
function secondIndexOf(s1, s2) {
    // Use indexOf twice.
    return s1.indexOf(s2, s1.indexOf(s2) + 1);
}

// Question 3
function equals(a, b) {
    // Initialize a variable with 'UNEQUAL'.
    // Use 'if' to set the variable to 'EQUAL' if necessary.
    // Return the variable.
    let isEqual = 'UNEQUAL';

    if (a === b) {
        isEqual = 'EQUAL';
    }
    
    return isEqual;
}

// Question 4
function checkAge(num) {
    if (num > 18) {
        return "Old enough";
    } else {
        return "Too young";
    }
}

// Question 5
function repdigit(n) {
    const nums = [...n.toString()];
    const uniqueNums = [...new Set(nums)];

    return uniqueNums.length === 1 ? 'Repdigit!' : 'No Repdigit!';
}

// Question 6:
function unequal(a, b, c) {
    //return a !== b && ...
    return a !== b && b !== c && c !== a;
}

// Question 7
if (-1 || 0) alert( 'first' );
if (null || -1 && 1) alert( 'third' );

// Question 8
let user = prompt("Who's there?");
let password = "";

if (user === "") {
    alert("Canceled");
} else if (user !== "Admin") {
    alert("I don't know you");
} else {
    password = prompt("Password?");
    
    switch (password) {
        case "TheMaster":
            alert("Welcome!");
            break;
        case "":
            alert("Canceled");
            break;
        default:
            alert("Wrong password");
    }
}