//Iterative Method
function space(string){
    let result =""
    for (let i = 0; i < string.length; i++) {
        let char = string[i]    
        if(char !== "" && char!== ' '){
            result += char
        }
    }
    return result
}

// console.log(space("UM AN G "))

// Reursive
function RTAS(string){
    if(string.length === 0) return ""
    const first = string[0]
    const rest = string.slice(1)
    if(first === "" || first === " "){
        return RTAS(rest)
    }else{
        return first + RTAS(rest)
    }
}

console.log(RTAS("UM AN G   "));
