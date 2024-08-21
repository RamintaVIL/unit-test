function sum(a, b) {
    return a + b;
}
function age(x) {
    if (x < 0) {
        throw Error()
    }
    return x * 365
}
function klonas(x) {
    return [...x]
}

function reverseString(str) {
    let word = "";
    for (let i = str.length - 1; i >= 0; i--) {
        word += str[i];
    }
    return word;
}

function isPalindrome(num) {
    const str = num.toString();
    return str === str.split('').reverse().join('');
}

function fib(n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
}
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}
function areAnagrams(word1, word2) {
    if (word1.length !== word2.length) return false;
    let sortedWord1 = word1.split('').sort().join('');
    let sortedWord2 = word2.split('').sort().join('');
    return sortedWord1 === sortedWord2;
}
function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
}

module.exports = {
    sum,
    klonas,
    age,
    reverseString,
    isPalindrome,
    fib,
    factorial,
    areAnagrams,
    isPrime,
}



