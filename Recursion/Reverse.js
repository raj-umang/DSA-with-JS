// Iterative Approach
function reverseString(string) {
  let reverse = "";
  let length = string.length - 1;
  while (length >= 0) {
    reverse = reverse + string[length];
    length = length - 1;
  }
  return reverse;
}

console.log(reverseString("HELLO"));

//Recursive Approach
const recursiveRS = (string) => {
  if (string.length === 0) return "";
  let reverse = recursiveRS(string.substring(0, string.length - 1));
  let res = string[string.length - 1] + reverse;
  return res;
};

console.log(recursiveRS("UMANG"));
