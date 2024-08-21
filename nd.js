// 1. Apsukti paduota string eilute.Labas => sabaL
function reverseString(text) {
    // if (text === null) {
    //     return "";
    // }
    if (text === null) {
        throw Error('string is null');
    }
    return text.split('').reverse().join("");
}

//2. Patikrinti ar duotas tekstas / skaicius yra palindromas.
function isPalindrome(text) {
    if (text === null) return false;
    return text === text.split('').reverse().join('')
}

// 3. Apskaiciuoti n - taji fibonachi skaiciu.
function fibonacci(n) {
    if (n < 0) throw Error('n cannot be negative');
    if (n === 0) return [];
    if (n === 1) return [0];
    let series = new Array(n).fill(0);
    series[1] = 1;
    for (let i = 2; i < n; i++) {
        series[i] = series[i - 1] + series[i - 2];
    }
    return series;
}

// 4. Apskaiciuoti skaiciaus n faktoriala.
function factorial(n) {
    if (n < 0) throw Error("can't calculate negative factorial")
    if (n === 0) return 1;
    if (n === 1) return 1;
    let res = 1;
    for (let i = 2; i <= n; i++) {
        res *= i;
    }
    return res;
}

// 5. Davus du zodzius pasakyti ar jie yra anagramos, t.y ar sukeitus raides galima gauti is vieno i kita.
function isAnagram(text1, text2) {
    if (text1.length !== text2.length) return false;
    return text1.split("").sort().join("") === text2.split("").sort().join("")
}

// 6. Pasakyti ar duotas skaicius yra pirminis.
function isPrime(x) {
    if (x === 1) return false;
    for (let i = 2; i <= Math.floor(x / 2); i++) {
        if (x % i === 0) return false
    }
    return true
}

module.exports = {
    reverseString,
    isPalindrome,
    fibonacci,
    factorial,
    isAnagram,
    isPrime,
};



