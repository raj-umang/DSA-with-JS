// ITERATIVE
const count = (array, key) => {
    let count =0
    for (let i = 0; i < array.length; i++) {
        if(array[i] === key)    count++;
    }
    return count
}

console.log(count([1,2,3,4,2,2,7], 2))
console.log(count([1,2,3,4,2,2,7], 7))

//RECURSIVE
const countR = (array,key,index=0) => {
    let count =0
    if(index>=array.length) return 0
    return (array[index] === key ? 1 : 0) + countR(array, key , index++)
}

console.log(count([1, 2, 3, 4, 2, 2, 7], 2));
