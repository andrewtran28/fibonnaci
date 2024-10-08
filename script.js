function fibonacci(n) {
    if (n <= 0) {
        return 0;
    } else if (n == 1 || n == 2) {
        return 1;
    }

    return fibonacci(n-1) + fibonacci(n-2);
}

//Edit term find it's corresponding Fibonacci number.
let term = 6;
console.log("The Fibonacci number for " + term + " is: " + fibonacci(term));

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length/2);
    const first = mergeSort(arr.slice(0, mid));
    const second = mergeSort(arr.slice(mid));

    return merge(first,second);
}

function merge(first, second) {
    let i = 0;
    let j = 0;
    const arr = [];

    while (i < first.length && j < second.length) {
        if (first[i] < second [j]) {
            arr.push(first[i]);
            i++;
        } else {
            arr.push(second[j]);
            j++;
        }
    }

    return arr.concat(first.slice(i).concat(second.slice(j)));
}

let array = [ 1, 4, 7, 2, 12];
console.log(mergeSort(array));