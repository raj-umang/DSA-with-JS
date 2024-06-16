//Iterative
function remove(string){
    let res = ""
    for (let i = 1; i < string.length; i++) {
        if(string[i] !== string[i-1]){
            res+=string[i]
        }
    }
    return res
}
// console.log(remove('aabbccd'))
// console.log(remove(' aaaabcccddghjjloopddac'))

// Recursive
const recurRemove = (string) => {
    if(string.length <=1 )  return string
    if(string[0] === string[1]){
      return recurRemove(string.substring(2)); //For Removing both the duplicates
    //   return recurRemove(string.substring(1)); //For Removing only one duplicates
    }else{
        return string[0]+recurRemove(string.substring(1))

    }
}

console.log(recurRemove("abbccd"));
console.log(recurRemove("helloo"));
console.log(recurRemove("heelooppqrr"));


//Length without length
function leng(string){
    if(string === "")   return 0
    else{
        return 1 + leng(string.substring(1))
    }
}

console.log(leng('umang'))
