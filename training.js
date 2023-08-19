"use strict";
function solution(str) {
  let original = "";
  for (let i = str.length - 1; i >= 0; i--) {
    original += str[i];
  }
  return original;
}

console.log(solution("world"));

function booleanToString(b) {
  let boolean = b;
  return String(boolean);
}

console.log(booleanToString(false));
console.log(false);

function lovefunc(flower1, flower2) {
  if (flower1 % 2 == 0 && flower2 % 2 == 1) {
    return true;
  } else if (flower1 % 2 == 1 && flower2 % 2 == 0) {
    return true;
  } else return false;
}

console.log(lovefunc(18, 18));

function noSpace(x) {
  let noSpaces = x.replace(/ /g, "");
  return noSpaces;
}

console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"));

// g stands forr global and it refers to all the appearences in the string
// / / refers to the spaes in the string

function maps(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(arr[i] * 2);
  }
  return newArray;
}

console.log(maps([1, 2, 3]));

function past(h, m, s) {
  let seconds = s * 1000;
  let mins = m * 60000;
  let hours = h * (60 * 60000);

  return seconds + mins + hours;
}

// 59*1000 + 59/m*(60000) + 23h

// console.log(past(0, 1, 1));

// function drawStairs(n) {
//   let stairs = `I\n`;
//   let spaces = (n === 0) | (n === 1) ? "" : " ".repeat(n - 1);
//   let stair1 =
//     (n === 1) | (n === 0)
//       ? stairs
//       : stairs + (spaces + stairs).repeat(n - (n - 1));
//   let staircase = "";
//   for (let i = 0; i < n; i++) {
//     staircase += stairs + stair1;
//     return staircase;
//   }
// }

// console.log(drawStairs(1));
// console.log(drawStairs(3));
// console.log(drawStairs(8));

// I/n I/n
// mert ha 1 > 0 space + 1 I/n; 2 eseten > n-1 space + n*I/n
// let stairsRepeat = stairs.repeat(n);
// return stairsRepeat;

/* let spaces = (n === 0) | (n === 1) ? "" : " ";
 let stairCase = stairs + spaces.repeat(n - 1) + stairs.repeat(n - 1);
 return stairCase;*/

// const greet = function (name, owner) {
//   if (name === owner) {
//     return `Hello boss`;
//   } else {
//     return `Hello guest`;
//   }
// };

// console.log(greet(`Daniel`, `Daniel`));
// console.log(greet(`Greg`, `Daniel`));

const abbrevName = function (name) {
  let separated = name.split(" ");
  let firstName = separated[0];
  let lastName = separated[1];
  let initials = `${firstName.charAt(0)}.${lastName.charAt(0)}`;
  return initials.toUpperCase();
};

console.log(abbrevName("Sam Harris"));
console.log(abbrevName("Patrick Feenan"));
console.log(abbrevName(`linda szarvas`));

//charAt(0) > takimg the very fisrt letter
// concat("", text) > join strings

function doubleInteger(i) {
  return i * 2;
}

console.log(doubleInteger(2));

const stringToNumber = function (str) {
  return Number(str);
};

console.log(stringToNumber("1234"));
console.log(stringToNumber(`605`));

const makeNegative = (num) => (num > 0 ? -num : num);

console.log(makeNegative(42));
console.log(makeNegative(-5));

const greet = (name) => `Hello, ${name} how are you doing today?`;

console.log(greet("Ryan"));

function sumArray(array) {
  if (array === null) {
    return 0;
  } else if ((array.length === 0) | (array.length === 1)) {
    return 0;
  } else {
    let lowest = Math.min(...array);
    let highest = Math.max(...array);
    let newArray = array.filter((num) => num !== lowest && num !== highest);
    console.log(newArray);
    return eval(newArray.join("+"));
  }
}

console.log(sumArray([6, 2, 1, 8, 10]));
console.log(sumArray(null));
console.log(sumArray([]));
console.log(sumArray([2]));

// Math.max() and Math.min() > hghest and lowest numbers of the array

let makeUpperCase = (str) => str.toUpperCase();

console.log(makeUpperCase("hello bicho"));

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  if (mpg * fuelLeft >= distanceToPump) {
    return true;
  } else {
    return false;
  }
};

console.log(zeroFuel(10, 25, 2));
console.log(zeroFuel(100, 50, 1));

function invert(array) {
  let invertedArray = [];
  for (let i = 0; i < array.length; i++) {
    invertedArray.push(array[i] * -1);
  }
  return invertedArray;
}

console.log(invert([-1, -2, -3, -4, -5]));
console.log(invert([-1, 2, -3, 4, -5]));

function reverseWords(str) {
  return str
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}

console.log(reverseWords(`The quick brown fox jumps over the lazy dog`));
console.log(reverseWords(`apple`));
console.log(reverseWords(`a b c d`));
console.log(reverseWords(`double  spaced  words`));

// return str.split(" ").map((word) => word.split("").reverse().join(" "));

function toJadenCase(str) {
  let separatedToWords = str.split(" ");
  return separatedToWords
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(toJadenCase(`How can mirrors be real if our eyes aren't real`));

function repeatStr(n, s) {
  return s.repeat(n);
}

console.log(repeatStr(3, "*"));

function squareDigits(num) {
  let number = num;
  let digits = number.toString();
  return Number(
    digits
      .split("")
      .map((digit) => Number(digit) ** 2)
      .join("")
  );
}

console.log(squareDigits(3212));
console.log(squareDigits(2112));

function opposite(number) {
  if (number === 0) {
    return 0;
  } else {
    return number * -1;
  }
}

console.log(opposite(-5));
console.log(opposite(12));
console.log(opposite(0));

// function numberToString(num) {
//   return num.toString();
// }

let numberToString = (num) => num.toString();

console.log(numberToString(65));
console.log(numberToString(124));

function filter_list(l) {
  return l.filter((element) => typeof element !== "string");
}

//  let newArray = array.filter((num) => num !== lowest && num !== highest);
//  console.log(newArray);

console.log(filter_list([1, 2, "a", "b"]));
console.log(filter_list([1, "a", "b", 0, 15]));

function fakeBin(x) {
  let splitStr = x.split("");
  let numbers = splitStr.map((digit) => (Number(digit) >= 5 ? 1 : 0));
  return numbers.join("");
}

console.log(fakeBin("45385593107843568"));
console.log(fakeBin("509321967506747"));

function basicOp(operation, value1, value2) {
  switch (operation) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
  }
}

console.log(basicOp("+", 4, 7));
console.log(basicOp("-", 15, 18));
console.log(basicOp("*", 5, 5));
console.log(basicOp("/", 49, 7));

function findAverage(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  if (array.length !== 0) {
    return sum / array.length;
  } else {
    return 0;
  }
}

console.log(findAverage([1, 1, 1]));
console.log(findAverage([1, 2, 3]));
console.log(findAverage([1, 2, 3, 4]));
console.log(findAverage([]));

function isIsogram(str) {
  let arrayOfLetters = str.toLowerCase().split("");
  let test = arrayOfLetters.filter(
    (currentValue, currentIndex) =>
      arrayOfLetters.indexOf(currentValue) !== currentIndex
  );

  if (test.length === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("ABBA"));
console.log(isIsogram("moOse"));

function getMiddle(s) {
  let arrayOfLetters = s.split("");
  let arrayLength = arrayOfLetters.length;
  if (arrayLength % 2 === 0) {
    let middle = arrayLength / 2;
    return arrayOfLetters[middle - 1] + arrayOfLetters[middle];
  } else {
    let middle = arrayLength / 2 - 0.5;
    return arrayOfLetters[middle];
  }
}

console.log(getMiddle("test"));
console.log(getMiddle("testing"));
console.log(getMiddle("middle"));
console.log(getMiddle("A"));

// function simpleMultiplication(number) {
//   if (number % 2 === 0) {
//     return number * 8;
//   } else {
//     return number * 9;
//   }
// }

const simpleMultiplication = (number) => (number % 2 ? number * 8 : number * 9);

console.log(simpleMultiplication(1));
console.log(simpleMultiplication(2));
console.log(simpleMultiplication(8));
console.log(simpleMultiplication(4));
console.log(simpleMultiplication(5));

// function updateLight(current) {
//   if (current === "green") {
//     return "yellow";
//   } else if (current === "yellow") {
//     return "green";
//   } else {
//     return "red";
//   }
// }

const updateLight = (current) =>
  current === "green" ? "yellow" : current === "yellow" ? "red" : "green";

console.log(updateLight("green"));
console.log(updateLight("yellow"));
console.log(updateLight("red"));

const getSum = function (a, b) {
  if (a < b) {
    const lowNumber = a;
    const highNumber = b;
    let list = [];
    let sum = 0;
    for (let i = lowNumber; i <= highNumber; i++) {
      list.push(i);
    }
    // console.log(list);
    for (let i = 0; i < list.length; i++) {
      sum += list[i];
    }
    return sum;
  } else if (a > b) {
    const highNumber = a;
    const lowNumber = b;
    let list = [];
    let sum = 0;
    for (let i = highNumber; i >= lowNumber; i--) {
      list.push(i);
    }
    for (let i = 0; i < list.length; i++) {
      sum += list[i];
    }
    return sum;
  } else if ((a = b)) {
    return a;
  } else if (a === 0 && b === 0) {
    return 0;
  }
};

console.log(getSum(1, 2));
console.log(getSum(-1, 2));
console.log(getSum(5, -1));
console.log(getSum(0, 0));

console.log(getSum(0, -1));
console.log(getSum(1, 5));

// original += str[i];
// newArray.push(arr[i] * 2);

function cockroachSpeed(s) {
  return Math.floor(s * 27.7777778);
}

console.log(cockroachSpeed(1.08));
console.log(cockroachSpeed(1.09));

function doubleChar(str) {
  let array = str.split("");
  let newArray = [];
  console.log(array);
  for (let i = 0; i < array.length; i++) {
    newArray += array[i] + array[i];
  }
  return newArray;
}

console.log(doubleChar("abcd"));
console.log(doubleChar("1337"));
console.log(doubleChar("illuminati"));
console.log(doubleChar("123456"));
console.log(doubleChar("string"));

function getVolumeOfCuboid(length, width, height) {
  return length * width * height;
}

console.log(getVolumeOfCuboid(1, 2, 2));
console.log(getVolumeOfCuboid(6, 2, 5));

function twiceAsOld(dadYearsOld, sonYearsOld) {
  let dadAgeBabyWasBorn = dadYearsOld - sonYearsOld;
  let doubleAge = dadAgeBabyWasBorn * 2;
  if (doubleAge > dadYearsOld) {
    return doubleAge - dadYearsOld;
  } else {
    return dadYearsOld - doubleAge;
  }
}

// console.log(twiceAsOld(22, 1));
// console.log(twiceAsOld(29, 0));
// console.log(twiceAsOld(42, 21));
// console.log(twiceAsOld(55, 30));

function findSmallestInt(args) {
  let theSmallestInt = args[0];
  for (let i = 1; i < args.length; i++) {
    if (args[i] < theSmallestInt) {
      theSmallestInt = args[i];
    }
  }
  return theSmallestInt;
}

console.log(findSmallestInt([78, 56, 232, 12, 8]));
console.log(findSmallestInt([78, 56, 232, 12, 18]));

function friend(friends) {
  let friendsArray = [];
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].length === 4) {
      friendsArray.push(friends[i]);
    }
  }
  return friendsArray;
}

console.log(friend(["Ryan", "Kieran", "Mark"]));
console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]));
console.log(friend(["Love", "Your", "Face", "1"]));

const bmi = (weight, height) =>
  weight / (height * height) <= 18.5
    ? "Underweight"
    : weight / (height * height) <= 25
    ? "Normal"
    : weight / (height * height) <= 30
    ? "Overweight"
    : "Obese";

console.log(bmi(80, 1.8));
console.log(bmi(50, 1.8));
console.log(bmi(90, 1.8));
console.log(bmi(180, 1.8));

function squareSum(numbers) {
  let squareArray = numbers.map((number) => number * number);
  if (squareArray.length === 0) {
    return 0;
  } else {
    return eval(squareArray.join("+")); // The eval() function in JavaScript is a built-in global function that evaluates a string as JavaScript code and executes it.
  }
}

console.log(squareSum([1, 2]));
console.log(squareSum([0, 3, 4, 5]));
console.log(squareSum([]));

function smash(words) {
  return words.join(" ");
}

console.log(smash(["hello", "world"]));
console.log(smash(["hello", "amazing", "world"]));
console.log(smash(["this", "is", "a", "really", "long", "sentence"]));

function grow(x) {
  return eval(x.join("*"));
}

console.log(grow([1, 2, 3]));
console.log(grow([4, 1, 1, 1, 4]));
console.log(grow([2, 2, 2, 2, 2, 2]));

const evenOrOdd = (number) => (number % 2 === 0 ? "Even" : "Odd");

console.log(evenOrOdd(2));
console.log(evenOrOdd(5));
console.log(evenOrOdd(154263));

function isPangram(string) {
  let lettersArray = string.toLowerCase().split("");
  console.log(lettersArray);
  for (let i = 0; i < lettersArray.length; i++) {
    if (lettersArray.length >= 26) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."));
console.log(isPangram("This is not a pangram."));

function descendingOrder(n) {
  const digits = String(n).split("");

  for (let i = 0; i < digits.length; i++) {
    digits[i] = Number(digits[i]);
  }
  let theHighestNumber = digits[0];
  for (let i = 0; i < digits.length; i++) {
    if (theHighestNumber < digits[i]) {
      theHighestNumber = digits[i];
    }
  }
  digits.sort((a, b) => b - a);
  return Number(digits.join(""));
}

console.log(descendingOrder(15));
console.log(descendingOrder(1021));
console.log(descendingOrder(123456789));

const uniqueInOrder = function (iterable = "array") {
  if (typeof iterable === "string") {
    let array = iterable.split("");
    let result = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] !== array[i + 1]) {
        array.slice(array[i], array[i + 1]);
        result.push(array[i]);
      }
    }
    return result;
  } else {
    let array = iterable;
    let result = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] !== array[i + 1]) {
        array.slice(array[i], array[i + 1]);
        result.push(array[i]);
      }
    }
    return result;
  }
};

console.log(uniqueInOrder("AAAABBBCCDAABBB"));
console.log(uniqueInOrder([1, 2, 2, 3, 3]));

// function order(words) {
//   const array = words.split(" ");
//   let newArray = [];
//   for (const el of array) {
//     newArray.push(el.split(""));
//   }
//   console.log(newArray);
//   for (const el of newArray) {
//   }
// }

// console.log(order("is2 Thi1s T4est 3a"));
// console.log(order("4of Fo1r pe6ople g3ood th5e the2"));

function drawStairs(n) {
  let stairs = `I\n`;
  let staircase = "";
  for (let i = 0; i < n - 1; i++) {
    staircase += `${" ".repeat(i)}${stairs}`;
  }
  staircase += " ".repeat(n - 1) + "I";
  return staircase;
}

console.log(drawStairs(1));
console.log(drawStairs(3));
console.log(drawStairs(8));

function solution(str, ending) {
  return str.endsWith(ending);
}

console.log(solution("abcde", "cde"));
console.log(solution("abcde", "abc"));

function likes(names) {
  if (names.length === 0) {
    return "no one likes this";
  } else if (names.length === 1) {
    return `${names[0]} likes this`;
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}

console.log(likes([]));
console.log(likes(["Peter"]));
console.log(likes(["Jacob", "Alex"]));
console.log(likes(["Max", "John", "Mark"]));
console.log(likes(["Alex", "Jacob", "Mark", "Max"]));

const number = function (array) {
  let modifiedArray = [];
  for (const [i, el] of array.entries()) {
    modifiedArray.push(`${i + 1}:${el}`);
  }
  return modifiedArray;
};

console.log(number([]));
console.log(number(["a", "b", "c"]));

// function tribonacci(signature, n) {
//   while (signature.length < n) {
//     let sum =
//       signature[signature.length - 1] +
//       signature[signature.length - 2] +
//       signature[signature.length - 3];
//     signature.push(sum);
//   }
//   return signature.slice(0, n);
// }

function tribonacci(signature, n) {
  for (let i = 0; i < signature.length; i++) {
    let sum = signature[i] + signature[i + 1] + signature[i + 2];
    signature.push(sum);
    if (signature.length >= n) {
      break;
    }
  }
  return signature.slice(0, n);
}

console.log(tribonacci([1, 1, 1], 10));
console.log(tribonacci([0, 0, 1], 10));
console.log(tribonacci([0, 1, 1], 10));
console.log(tribonacci([1, 2, 3], 10));
console.log(tribonacci([100, 200, 300], 0));

function removeEveryOther(arr) {
  return arr.filter((element, index) => index % 2 === 0);
}

console.log(removeEveryOther(["Hello", "Goodbye", "Hello Again"]));
console.log(removeEveryOther(["Goodbye"], { Great: "Job" }));
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

function getAge(inputString) {
  return Number(inputString.charAt(0));
}

console.log(getAge("4 years old"));

function countSmileys(arr) {
  let result = [];
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    const elements = arr[i].split("");
    result.push(elements);
  }

  for (let i = 0; i < result.length; i++) {
    newArray.push(
      result[i].filter(
        (character) => character.includes(")") || character.includes("D")
      )
    );
  }

  let filteredArray = newArray.filter((subArray) => subArray.length === 1);

  return filteredArray.length;
}

console.log(countSmileys([]));
console.log(countSmileys([":D", ":~)", ";~D", ":)"]));
console.log(countSmileys([":)", ":(", ":D", ":O", ":;"]));
console.log(countSmileys([";]", ":[", ";*", ":$", ";-D"]));
