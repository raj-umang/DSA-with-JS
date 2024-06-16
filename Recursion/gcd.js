function gcd(m, n){
    if(m == n)  return m
    if(m>n){
        return gcd(m-n, n)
    }
    return gcd(m, n-m)
}

console.log(gcd(42, 56))