/*1.Define a function, as a function declaration, maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. 
If they are the same, return that number. Use the if-else construct or a ternary expression - the Math.max method is not allowed.
*/

function maxOfTwoNumbers(x, y) {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
}

console.log(maxOfTwoNumbers(3, 4));

/*2.Define a function, as a function expression, maxOfThree that takes three numbers as arguments and returns the largest of them. 
Again, the Math.max method is not allowed.
 */
let maxOfThree = function (x, y, z) {
  if (x >= y && x >= z) {
    return x;
  } else if (y >= x && y >= z) {
    return y;
  } else {
    return z;
  }
};
console.log(maxOfThree(7, 11, 5));

/*3. Define a function, as a function declaration, isCharAVowel that takes a character as an argument and returns true if it is a vowel, false otherwise.
 */

function isCharAVowel(char) {
  if (
    char.toLowerCase() === "a" ||
    char.toLowerCase() === "e" ||
    char.toLowerCase() === "i" ||
    char.toLowerCase() === "o" ||
    char.toLowerCase() === "u"
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(isCharAVowel("u"));

/*4. Define a function, as a function expression, sumArray that takes an array of numbers and returns the sum of those numbers. 
For example, sumArray([2, 4, 5]); would return 11.
*/

let sum = 0;
let sumArray = function (num) {
  num.forEach(function (n) {
    sum += n;
  });
  return sum;
};
sumArray([3, 5, 5]);

/*5. Define a function, as a function declaration, multiplyArray that takes an array of numbers and returns the product those numbers. 
For example, multiplyArray([2, 4, 5]); would return 40.
*/

let product = 1;
function multiplyArray(num) {
  num.forEach(function (n) {
    product *= n;
  });
  return product;
}
multiplyArray([2, 2, 4]);

/*6.Define a function, as a function expression, numArgs that returns the number of
arguments passed to the function when called.
*/

let numArgs = function () {
  console.log(arguments.length);
};

numArgs(1, 2, 3, 4, 5, 9);

/*7.Define a function, as a function declaration, reverseString that takes a string,
reverses the characters, and returns it. 
For example, reverseString('rockstar'); would return the string "ratskcor".
*/

function reverseString(str) {
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  return rev;
}
reverseString("ESREVER");

/*8. Define a function, as a function expression, longestStringInArray that 
takes an array of strings as an argument and returns the length of the longest string
*/

let longestStringInArray = function (str) {
  let longest;
  let len = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].length > len) {
      let len = str[i].length;
      longest = str[i];
    }
  }
  console.log(longest);
};

longestStringInArray(["123456", "1", "1234567", "123", "12345678"]);

/*9. Define a function, as a function declaration, stringsLongerThan that takes an array of strings and a number as arguments; 
and returns an array of the strings that are longer than the number passed in. 
For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
*/

let output = [];
function stringsLongerThan(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > num) {
      output.push(arr[i]);
    } else {
      console.log("No string greater than the number given.");
    }
  }
  console.log(output);
}

stringsLongerThan(["I", "am", "lost", "here"], 3);
