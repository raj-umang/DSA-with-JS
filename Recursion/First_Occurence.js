// ITERATIVE APPROACH
const firstOCC = (arr, findMe, currIndex) => {
    while(currIndex < arr.length){
        if(arr[currIndex] == findMe){
            return currIndex
        }
        currIndex++
    }
    return -1
}

let arr = [1, 2, 3, 5, 6, 3]
console.log(firstOCC(arr, 6, 0))

// RECURSIVE APPROACH

function recurFO(arr, findMe, currIndex){
    if(arr.length === currIndex)    return -1
    if(arr[currIndex]=== findMe)    return currIndex
    return recurFO(arr, findMe, currIndex+1)
}

let arr1 = [1, 2, 3, 5, 6, 3];
console.log(recurFO(arr1, 6, 0));