function balance(array, start=0, curr=0){
    if(start === array.length){
        return curr===0
    }
    if(curr<0)  return false

    if (array[start] === "(" || array[start] === "{" || array[start] === "[")
      return balance(array, start + 1, curr + 1);
    else if (array[start] === ")" || array[start] === "}" || array[start] === "]")
      return balance(array, start + 1, curr - 1);
    else return false;
}

console.log(balance('((()))'))
console.log(balance('(()()))'))
console.log(balance("[{()}]"));
console.log(balance("[]{}()"));
console.log(balance("[{(})]"));


// [{()}]
