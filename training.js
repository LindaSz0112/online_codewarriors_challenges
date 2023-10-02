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

// function countSmileys(arr) {
//   let result = [];
//   let newArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     const elements = arr[i].split("");
//     result.push(elements);
//   }

//   for (let i = 0; i < result.length; i++) {
//     newArray.push(
//       result[i].filter(
//         (character) =>
//           (character.includes(")") || character.includes("D")) &&
//           !character.includes("o") &&
//           !character.includes("_") &&
//           (character.length === 1 || character === "-" || character === "~")
//       )
//     );
//   }
//   console.log(newArray);

//   let filteredArray = newArray.filter((subArray) => subArray.length === 1);

//   return filteredArray.length;

function countSmileys(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    const pattern = /^[:;][-~]?[)D]$/;
    if (
      pattern.test(arr[i]) &&
      !arr[i].includes("o") &&
      !arr[i].includes("_")
    ) {
      count++;
    }
  }

  return count;
}

// Certainly, let's break down the regular expression pattern ^[:;][-~]?[)D]$:

// ^ and $: These symbols anchor the pattern to the start and end of the string, respectively. This means the entire string must match the pattern.

// [:;]: This character class matches either ":" or ";". It's used to match the eyes of the smiley face.

// [-~]?: This part is an optional character class that matches either "-" or "~". It represents the optional nose of the smiley face.

// [)D]: This character class matches either ")" or "D". It represents the mouth of the smiley face.

console.log(countSmileys([]));
console.log(countSmileys([":D", ":~)", ";~D", ":)", ":_D"]));
console.log(countSmileys([":)", ":(", ":D", ":O", ":;"]));
console.log(countSmileys([";]", ":[", ";*", ":$", ";-D"]));

const setAlarm = (employed, vacation) => (employed && !vacation ? true : false);

console.log(setAlarm(true, true));
console.log(setAlarm(false, true));
console.log(setAlarm(true, false));

function towerBuilder(n) {
  let mainFloor = "*";
  let tower = [];
  for (let i = 0; i < n; i++) {
    let spaces = " ";
    let line = `${spaces.repeat(n - 1 - i)}${mainFloor.repeat(
      2 * i + 1
    )}${spaces.repeat(n - 1 - i)}`;
    tower.push(line);
  }
  return tower.join("\n").split("\n");
}

console.log(towerBuilder(1));
console.log(towerBuilder(2));
console.log(towerBuilder(5));

// legfelso lepcso = n + (n-1)
// a szokozek szama a legalso lepcson: n-1 mindket oldalon, csillag szama: n-(n-1)
//

// function drawStairs(n) {
//   let stairs = `I\n`;
//   let staircase = "";
//   for (let i = 0; i < n - 1; i++) {
//     staircase += `${" ".repeat(i)}${stairs}`;
//   }
//   staircase += " ".repeat(n - 1) + "I";
//   return staircase;
// }

function greetNew(language) {
  const welcomeLanguages = {
    english: "Welcome",
    czech: "Vitejte",
    danish: "Velkomst",
    dutch: "Welkom",
    estonian: "Tere tulemast",
    finnish: "Tervetuloa",
    flemish: "Welgekomen",
    french: "Bienvenue",
    german: "Willkommen",
    irish: "Failte",
    italian: "Benvenuto",
    latvian: "Gaidits",
    lithuanian: "Laukiamas",
    polish: "Witamy",
    spanish: "Bienvenido",
    swedish: "Valkommen",
    welsh: "Croeso",
  };
  if (welcomeLanguages.hasOwnProperty(language))
    return (
      welcomeLanguages[language] +
      ` Your function should have returned '${welcomeLanguages[language]}'. Try again.`
    );
  else {
    return (
      `${welcomeLanguages.english} ` +
      `Your function should have returned 'Welcome'. Try again.`
    );
  }
}

console.log(greetNew("english"));
console.log(greetNew("dutch"));
console.log(greetNew("IP_ADDRESS_INVALID"));

function sumMix(arr) {
  const arrOfNumbers = arr
    .map((el) => Number(el))
    .reduce((acc, currentValue) => acc + currentValue, 0);
  return arrOfNumbers;
}

console.log(sumMix([9, 3, "7", "3"]));
console.log(sumMix(["5", "0", 9, 3, 2, 1, "9", 6, 7]));
console.log(sumMix(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"]));

function count(string) {
  const elements = string.split("");
  let object = {};
  return elements.reduce((obj, item) => {
    obj[item] = (obj[item] || 0) + 1; //  (obj[item] || 0) ensures that if the character hasn't been encountered before, it starts with a count of 0
    return obj;
  }, object);
}

console.log(count(""));
console.log(count("a"));
console.log(count("ab"));
console.log(count("aba"));
console.log(count("ABC"));

// const initialValue = {};
// return array.reduce((obj, item) => {
//   return {
//     ...obj,
//     [item[key]]: item,
//   };
// }, initialValue);

// ||: The double pipe || is the logical OR operator in JavaScript. It returns the first truthy value it encounters from left to right. If all values are falsy, it returns the last value.

function twoSum(numbers, target) {
  for (let i = 0; i <= numbers.length; i++) {
    const otherNumber = target - numbers[i];
    const secondIndex = numbers.indexOf(otherNumber, i + 1);
    if (numbers.includes(otherNumber)) {
      return [i, secondIndex];
    }
  }
}

console.log(twoSum([1, 2, 3], 4));
console.log(twoSum([1234, 5678, 9012], 14690));
console.log(twoSum([2, 2, 3], 4));
console.log(twoSum([2, 3, 1], 3));

function duplicateCount(text) {
  const modifiedText = text.toLowerCase().split("");
  const duplicates = new Set(); //using a Set, each character is added only once
  for (let i = 0; i < modifiedText.length; i++) {
    const value = modifiedText[i];

    if (modifiedText.indexOf(value, i + 1) !== -1) {
      duplicates.add(value);
    } // -1 is returned if a duplicate isnot found, JS convention
  }
  return duplicates.size;
}

console.log(duplicateCount(""));
console.log(duplicateCount("abcde"));
console.log(duplicateCount("aabbcde"));
console.log(duplicateCount("aabBcde"));
console.log(duplicateCount("Indivisibility"));

function getGrade(s1, s2, s3) {
  const percentage = (s1 + s2 + s3) / 3;
  if (percentage >= 90) {
    return "A";
  } else if (percentage >= 80) {
    return "B";
  } else if (percentage >= 70) {
    return "C";
  } else if (percentage >= 60) {
    return "D";
  } else {
    return "F";
  }
}

console.log(getGrade(95, 90, 93));
console.log(getGrade(70, 70, 100));
console.log(getGrade(70, 71, 70));

function powersOfTwo(n) {
  const array = [];
  for (let i = 0; i <= n; i++) {
    array.push(2 ** (n - i));
  }
  return array.reverse();
}

// function powersOfTwo(n) {
//   return [...Array(n + 1)].map((_, i) => 2 ** i);
// }

console.log(powersOfTwo(0));
console.log(powersOfTwo(1));
console.log(powersOfTwo(4));

function removeExclamationMarks(s) {
  return s
    .split("")
    .filter((element) => element !== "!")
    .join("");
}

console.log(removeExclamationMarks("Hello World!"));

function isPalindrome(x) {
  const lowerCase = x.toLowerCase();
  return lowerCase === lowerCase.split("").reverse().join("") ? true : false;
}

console.log(isPalindrome("ABBA"));
console.log(isPalindrome("Bichito"));

function findShort(s) {
  const arrayOfWords = s.split(" ");
  let shortestWord = arrayOfWords[0];
  for (let i = 0; i < arrayOfWords.length; i++) {
    if (shortestWord.length > arrayOfWords[i].length) {
      shortestWord = arrayOfWords[i];
    }
  }
  return shortestWord.length;
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
console.log(
  findShort(
    "turns out random test cases are easier than writing out basic ones"
  )
);
console.log(findShort("Let's travel abroad shall we"));

function sumStr(a, b) {
  return (Number(a) + Number(b)).toString();
}

console.log(sumStr("4", "5"));
console.log(sumStr("34", "5"));

const isSquare = function (n) {
  const squareRoot = Math.sqrt(n);
  return Math.floor(squareRoot) === squareRoot ? true : false;
};

console.log(isSquare(-1));
console.log(isSquare(0));
console.log(isSquare(3));
console.log(isSquare(4));
console.log(isSquare(25));
console.log(isSquare(26));

// function sumDigPow(a, b) {
//   const array = [];
//   for (let i = a; i <= b; i++) {
//     array.push(i);
//   }
//   return array;
// }

// console.log(sumDigPow(1, 10)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(sumDigPow(1, 100)); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
// console.log(sumDigPow(90, 100)); // []
// console.log(sumDigPow(90, 150)); //[135]

function printerError(s) {
  const arrayLetters = s
    .split("")
    .filter((letter) => /[nopqrstuvwxyz]/g.test(letter));
  return `${arrayLetters.length}/${s.length}`;
}

console.log(
  printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz")
);

function findNeedle(haystack) {
  return haystack.includes("needle")
    ? `found the needle at position ${haystack.indexOf("needle")}`
    : "Your function didn't return anything";
}

console.log(
  findNeedle([
    "3",
    "123124234",
    undefined,
    "needle",
    "world",
    "hay",
    2,
    "3",
    true,
    false,
  ])
);
console.log(
  findNeedle([
    "283497238987234",
    "a dog",
    "a cat",
    "some random junk",
    "a piece of hay",
    "needle",
    "something somebody lost a while ago",
  ])
);

function switchItUp(number) {
  switch (number) {
    case 0:
      return "Zero";

    case 1:
      return "One";

    case 2:
      return "Two";

    case 3:
      return "Three";

    case 4:
      return "Four";

    case 5:
      return "Five";

    case 6:
      return "Six";

    case 7:
      return "Seven";

    case 8:
      return "Eight";
    case 9:
      return "Nine";

    default:
      return "test";
  }
}

console.log(switchItUp(8));

const summation = function (num) {
  let count = 0;
  for (let i = 0; i <= num; i++) {
    count += i;
  }
  return count;
};

console.log(summation(1));
console.log(summation(2));
console.log(summation(4));
console.log(summation(8));

function nbDig(n, d) {
  let array = [];
  for (let i = 0; i <= n; i++) {
    array.push(i ** 2);
  }

  return array
    .toString()
    .split("")
    .filter((el) => el === String(d)).length;
}

console.log(nbDig(10, 1));

console.log(nbDig(5750, 0));
console.log(nbDig(11011, 2));
console.log(nbDig(12224, 8));
console.log(nbDig(11549, 1));

function positiveSum(arr) {
  return arr.filter((el) => el >= 0).reduce((acc, value) => acc + value, 0);
}

console.log(positiveSum([1, 2, 3, 4, 5]));
console.log(positiveSum([1, -2, 3, 4, 5]));
console.log(positiveSum([]));
console.log(positiveSum([-1, -2, -3, -4, -5]));

function enough(cap, on, wait) {
  const currentState = cap - (on + wait);
  return currentState >= 0 ? 0 : currentState * -1;
}

console.log(enough(20, 5, 5));
console.log(enough(100, 60, 50));
console.log(enough(10, 5, 5));

function points(games) {
  const switchedArray = games
    .map((el) => el.replace(":", "-"))
    .map((el) => {
      let parts = el.split("-");
      let firstElement = parseFloat(parts[0]);
      let secondElement = parseFloat(parts[1]);
      return firstElement - secondElement;
    });
  const arrayNew = [];
  for (let element of switchedArray) {
    if (element > 0) {
      arrayNew.push((element = 3));
    } else if (element === 0) {
      arrayNew.push((element = 1));
    } else {
      arrayNew.push((element = 0));
    }
  }
  return arrayNew.reduce((acc, value) => acc + value, 0);
}

console.log(
  points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"])
); //30
console.log(
  points(["1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"])
); //10
console.log(
  points(["0:1", "0:2", "0:3", "0:4", "1:2", "1:3", "1:4", "2:3", "2:4", "3:4"])
); //0

function howMuch(m, n) {
  if (m < n) {
    let array = [];
    for (let i = 0; i <= n - m; i++) {
      array.push(m + i);
    }
    const money = array
      .filter((el) => el % 7 === 2 && el % 9 === 1)
      .map((element) => [element])
      .map((el) => [
        `M: ${el[0]}`,
        `B: ${(el[0] - 2) / 7}`,
        `C: ${(el[0] - 1) / 9}`,
      ]);
    return money;
  } else if (m > n) {
    let array = [];
    for (let i = 0; i <= m - n; i++) {
      array.push(n + i);
    }
    const money = array
      .filter((el) => el % 7 === 2 && el % 9 === 1)
      .map((element) => [element])
      .map((el) => [
        `M: ${el[0]}`,
        `B: ${(el[0] - 2) / 7}`,
        `C: ${(el[0] - 1) / 9}`,
      ]);
    return money;
  } else {
    return [];
  }
}

console.log(howMuch(1, 100));
console.log(howMuch(2950, 2950));

const numbers = function (busStops) {
  if (busStops[0] - busStops[1] === 0) {
    return 0;
  } else {
    let sumArray = [];
    for (let i = 0; i < busStops.length; i++) {
      let subArray = busStops[i];
      sumArray.push(subArray[0] - subArray[1]);
    }
    return sumArray.reduce((acc, value) => acc + value, 0);
  }
};

console.log(
  numbers([
    [10, 0],
    [3, 5],
    [5, 8],
  ])
);
console.log(
  numbers([
    [3, 0],
    [9, 1],
    [4, 10],
    [12, 2],
    [6, 1],
    [7, 10],
  ])
);
console.log(
  numbers([
    [3, 0],
    [9, 1],
    [4, 8],
    [12, 2],
    [6, 1],
    [7, 8],
  ])
);
console.log(numbers([0, 0]));

function countPositivesSumNegatives(input) {
  if (input === null || (input[0] === 0 && input[1] === 0)) {
    return [];
  } else {
    let positives = input.filter((el) => el > 0 && el !== 0);
    let negatives = input.filter((el) => el < 0 && el !== 0);
    return [positives.length, negatives.reduce((acc, el) => acc + el, 0)];
  }
}

console.log(
  countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ])
);
console.log(countPositivesSumNegatives([0, 0]));

const check = (a, x) => a.includes(x);

console.log(check([66, 101], 66));
console.log(check([101, 45, 75, 105, 99, 107], 108));
console.log(check(["t", "e", "s", "t"], "e"));

const stringToArray = (string) => string.split(" ");

console.log(stringToArray("I love arrays they are my favorite"));

function howMuchILoveYou(nbPetals) {
  const options = [
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all",
  ];
  if (nbPetals <= 6) {
    return options[nbPetals - 1];
  } else {
    const numberOption = nbPetals % 6;
    return numberOption === 0 ? options[5] : options[numberOption - 1];
  }
}

console.log(howMuchILoveYou(7));
console.log(howMuchILoveYou(3));
console.log(howMuchILoveYou(6));
console.log(howMuchILoveYou(348));

function stray(numbers) {
  let uniqueNumber = numbers[0];
  let elementsArray = [];
  for (let i = 0; i < numbers.length; i++) {
    elementsArray = numbers.filter((el) => el !== uniqueNumber);
  }
  return elementsArray.length > 1 ? uniqueNumber : elementsArray[0];
}

console.log(stray([17, 17, 3, 17, 17, 17, 17]));
console.log(stray([1, 1, 2]));
console.log(stray([2, 1, 1]));

// optimized code by ChatGPT

// function stray(numbers) {
//   let uniqueNumber = numbers[0];
// XOR (^) operation cancels out duplicate numbers
//   for (let i = 1; i < numbers.length; i++) {
//     uniqueNumber ^= numbers[i];
//   }

//   return uniqueNumber;
// }

const disemvowel = (str) => str.replace(/[aeiouAEIOU]/g, "");

console.log(disemvowel("This website is for losers LOL!"));
console.log(disemvowel("What are you, a communist?"));

function dirReduc(arr) {
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === "NORTH" && arr[i + 1] === "SOUTH") {
      arr.splice(i, 2);
      i -= 2;
    } else if (arr[i] === "SOUTH" && arr[i + 1] === "NORTH") {
      arr.splice(i, 2);
      i -= 2;
    } else if (arr[i] === "EAST" && arr[i + 1] === "WEST") {
      arr.splice(i, 2);
      i -= 2;
    } else if (arr[i] === "WEST" && arr[i + 1] === "EAST") {
      arr.splice(i, 2);
      i -= 2;
    }
  }
  return arr;
}

console.log(
  dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])
);
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]));
console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]));

function findNextSquare(sq) {
  const square = Math.sqrt(sq) + 1;
  return square === Math.floor(square) ? square ** 2 : -1;
}

console.log(findNextSquare(121));
console.log(findNextSquare(155));
console.log(findNextSquare(625));

function removeSmallest(numbers) {
  let theSmallest = numbers[0];
  let index = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (theSmallest > numbers[i]) {
      theSmallest = numbers[i];
      index = i;
    }
  }
  // creating new array with the slice method, withoit the smallest element and then joining them
  const result = [...numbers.slice(0, index), ...numbers.slice(index + 1)];
  return result;
}

console.log(removeSmallest([2, 2, 1, 2, 1]));
console.log(removeSmallest([1, 2, 3, 4, 5]));
console.log(removeSmallest([5, 3, 2, 1, 4]));

const hero = (bullets, dragons) => 2 * dragons <= bullets;

console.log(hero(10, 5));
console.log(hero(1500, 751));
console.log(hero(100, 40));
console.log(hero(7, 4));

const areYouPlayingBanjo = (name) =>
  name[0] === "r" || name[0] === "R"
    ? `${name} plays banjo`
    : `${name} does not play banjo`;

console.log(areYouPlayingBanjo("Adam"));
console.log(areYouPlayingBanjo("Ringo"));
console.log(areYouPlayingBanjo("rolf"));

function openOrSenior(data) {
  let results = [];
  for (const el of data) {
    if (el[0] >= 55 && el[1] > 7) {
      results.push("Senior");
    } else {
      results.push("Open");
    }
  }
  return results;
}

console.log(
  openOrSenior([
    [45, 12],
    [55, 21],
    [19, -2],
    [104, 20],
  ])
);

const checkForFactor = (base, factor) => base % factor === 0;

console.log(checkForFactor(10, 2));
console.log(checkForFactor(63, 7));
console.log(checkForFactor(9, 2));
console.log(checkForFactor(2453, 5));

function findUniq(arr) {
  let differentElement = arr[0];
  let clearArray = [];
  for (let i = 1; i < arr.length; i++) {
    if (differentElement !== arr[i]) {
      clearArray.push(arr[i]);
    }
  }
  return clearArray.length === 1 ? clearArray[0] : differentElement;
}

console.log(findUniq([1, 0, 0]));
console.log(findUniq([3, 10, 3, 3, 3]));

//OPtimized code:

// function findUniq(arr) {
//   const firstElement = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     if (firstElement !== arr[i]) {
//       return arr[i];
//     }
//   }

//   return firstElement;
// }

// The lastIndexOf() method is a built-in JavaScript array method that allows you to search for the last occurrence of a specified element in an array. It returns the index of the last occurrence of the element or -1 if the element is not found in the array.

const areaOrPerimeter = (l, w) => (l === w ? l * w : (l + w) * 2);

console.log(areaOrPerimeter(3, 3));
console.log(areaOrPerimeter(6, 10));

function longest(s1, s2) {
  let duplicates1 = Array.from(new Set(s1.split("")));
  let duplicates2 = Array.from(new Set(s2.split("")));

  let [...array] = [...duplicates1, ...duplicates2];
  return Array.from(new Set(array)).sort().join("");
}

console.log(longest("aretheyhere", "yestheyarehere"));
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"));

// optimized code
// function longest(s1, s2) {
//   return Array.from(new Set(s1 + s2))
//     .sort()
//     .join("");
// }

const rentalCarCost = (d) =>
  d >= 3 && d < 7 ? d * 40 - 20 : d >= 7 ? d * 40 - 50 : d * 40;

console.log(rentalCarCost(1));
console.log(rentalCarCost(5));
console.log(rentalCarCost(8));

const saleHotdogs = (n) =>
  n < 5 ? n * 100 : n >= 5 && n < 10 ? n * 95 : n * 90;
console.log(saleHotdogs(1));
console.log(saleHotdogs(5));
console.log(saleHotdogs(100));

const findDifference = (a, b) =>
  Math.abs(a[0] * a[1] * a[2] - b[0] * b[1] * b[2]);

//By wrapping the calculation with Math.abs(), it ensures that the result is always a positive number

console.log(findDifference([11, 2, 5], [1, 10, 8]));
console.log(findDifference([3, 2, 5], [1, 4, 4]));
console.log(findDifference([4, 4, 7], [3, 9, 3]));
console.log(findDifference([22, 10, 7], [29, 14, 26]));

//code variation recommended by ChatGPT

// const findDifference = (a, b) => {
//   const productA = a.reduce((acc, val) => acc * val, 1);
//   const productB = b.reduce((acc, val) => acc * val, 1);
//   return Math.abs(productA - productB);
// };

const square = (n) => n ** 2;

console.log(square(3));

// code variation
// function square(num){
//   var num = Math.pow(num, 2);
//   return num;
// };
// it computes the power of a number. > Math.pow(base, exponent);

function alphabetPosition(text) {
  const modifiedText = text
    .toLowerCase()
    .split("")
    .filter((el) => /[a-z]/.test(el));

  const alphabetPos = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };

  for (let i = 0; i < modifiedText.length; i++) {
    const el = modifiedText[i];
    if (alphabetPos.hasOwnProperty(el)) {
      modifiedText[i] = alphabetPos[el].toString();
    }
  }
  return modifiedText.join(" ");
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
console.log(alphabetPosition("The narwhal bacons at midnight."));

// The hasOwnProperty() method is a built-in method in JavaScript that is used to check if an object has a specific property. It returns a boolean value indicating whether the object contains the specified property as a direct (non-inherited) property.

function between(a, b) {
  let arrayBetween = [];
  for (let i = 0; i < b - a + 1; i++) {
    arrayBetween.push(a + i);
  }
  return arrayBetween;
}

console.log(between(1, 4));
console.log(between(-2, 2));
console.log(between(90, 100));

//optimized code variation by chat GPT

// function between(a, b) {
//   return Array.from({ length: b - a + 1 }, (_, index) => a + index);
// }

function getRealFloor(n) {
  if (n > 0 && n <= 12) {
    return n - 1;
  } else if (n > 0 && n >= 13) {
    return n - 2;
  } else return n;
}

console.log(getRealFloor(1));
console.log(getRealFloor(15));
console.log(getRealFloor(-2));

function solution(string) {
  const index = string
    .split("")
    .map((char, index) => {
      if (/[A-Z]/.test(char)) {
        return index;
      }
      return -1;
    })
    .filter((index) => index !== -1);
  for (let i = index.length - 1; i >= 0; i--) {
    string = string.slice(0, index[i]) + " " + string.slice(index[i]);
  }

  return string;
}

console.log(solution("camelCasing"));
console.log(solution("camelCasingTest"));
console.log(solution("identifier"));

const countSheeps = (sheep) => sheep.filter((el) => el === true).length;

console.log(
  countSheeps([undefined, null, false, true, true, false, null, undefined])
);
console.log(countSheeps([]));
console.log(countSheeps([false]));

// function vowelShift(text, n) {
//   const brokenArray = text.split("");
//   const indexes = brokenArray
//     .map((char, index) => {
//       if (/[aeiouAEIOU]/.test(char)) {
//         return index;
//       }
//       return -1;
//     })
//     .filter((index) => index !== -1);
//   console.log(indexes);

//   for (let i = 0; i < indexes.length; i++) {
//     let currentIndex = indexes[i];
//     let shiftedIndex = indexes[currentIndex - n];
//     if (shiftedIndex < 0) {
//       shiftedIndex += indexes.length; // Handle negative indices by wrapping around
//     }
//     brokenArray[currentIndex] = brokenArray[shiftedIndex];
//   }
//   return brokenArray.join("");
// }

// // console.log(vowelShift("This is a test!", 0));
// console.log(vowelShift("This is a test!", 1)); //Thes is i tast!
// // console.log(vowelShift("This is a test!", 3));

function isPangram(string) {
  let lettersArray = string.toLowerCase().split("");
  let setOfLetters = new Set();
  console.log(lettersArray);
  for (let i = 0; i < lettersArray.length; i++) {
    if (/[a-z]/.test(lettersArray[i])) {
      setOfLetters.add(lettersArray[i]);
    }
  }
  return setOfLetters.size === 26;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."));
console.log(isPangram("This is not a pangram."));

// function isPangram(string) {
//   const str = string.replace(/[^a-zA-Z]/gi, "").toLowerCase();
//   const set = new Set([...str]);
//   return set.size === 26;
// }

function betterThanAverage(classPoints, yourPoints) {
  return (
    classPoints.reduce((acc, value) => acc + value, 0) / classPoints.length <
    yourPoints
  );
}

console.log(betterThanAverage([2, 3], 5));
console.log(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50));

// const isUpperCase = (string) =>
//   string
//     .split("")
//     .map((char) => char.toUpperCase())
//     .join("") === string;

String.prototype.isUpperCase = function () {
  let testString = this.split("")
    .map((char) => char.toUpperCase())
    .join("");
  return testString === this;
};

console.log("HELLO I AM DONALD".isUpperCase());
// console.log(isUpperCase("hello I AM DONALD"));
// console.log(isUpperCase("C"));
// console.log(isUpperCase("HELLO WORLD"));
