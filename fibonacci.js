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