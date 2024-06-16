// ITERATIVE APPROACH

const countVowels = (string) => {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (isVowel(string[i])) {
      count++;
    }
  }
  return count;
};

const isVowel = (character) => {
  let lowercase = character.toLowerCase();
  let vowels = "aeiou";
  if (vowels.indexOf(lowercase) != -1) return true;
  else return false;
};

console.log(countVowels("UMANG"));
console.log(countVowels("aeiou"));

// RECURSIVE APPROACH
const recursiveCV = (string, stringLength) => {
  if (stringLength === 1) return isVowel(string[0]);

  let result =
    recursiveCV(string, stringLength - 1) + isVowel(string[stringLength - 1]);
  return result;
};

let myString = "HELLO";
console.log(recursiveCV(myString, myString.length));

// console.log(isVowel('A'))