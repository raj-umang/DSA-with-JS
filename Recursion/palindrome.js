// mom  = >  mom

const palindrome = (string) => {
    if(string.length <= 1)  return true
    if(string[0] === string[string.length-1]){
        return palindrome(string.substring(1, string.length-1))
    }else{
        return false
    }
}

console.log(palindrome("mom"))
console.log(palindrome("hey"))
console.log(palindrome("MADAM"))
