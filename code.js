function sum(a) {
    var sum = 0; //swapped to a zero so it no longer double counts the first element in the array
    for(var i = 0; i < a.length; i++) {
        sum += a[i]; //the sum was counting the first number twice
    }
    return sum;
}

//console.log(sum([1,2,3,4,5])) // testing out sum