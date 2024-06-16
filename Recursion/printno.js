const printNo = (min, max) => {
    if(min > max){
        return;
    }
    console.log(min)
    printNo(min+1, max)
    // console.log(min)
}
printNo(1,5)