const {
    reverseString,
    isPalindrome,
    fibonacci,
    factorial,
    isAnagram,
    isPrime } = require("./nd")

// 1. Apsukti paduota string eilute.Labas => sabaL
describe("reverseString tests", () => {
    test("labas apvertus gausime sabal", () => {
        expect(reverseString("labas")).toBe("sabal");
    });
    // test("null string should return empty string", () => {
    //     expect(reverseString(null)).toBe("")
    // })
    test("null string should throw and Error", () => {
        expect(() => { reverseString(null) }).toThrow();
    });
    test("empty string should return an empty string", () => {
        expect(reverseString("")).toBe("");
    });
})

// 2. Patikrinti ar duotas tekstas / skaicius yra palindromas
describe("isPalidrome tests", () => {
    test('Jonas is not palindrome', () => {
        expect(isPalindrome("Jonas")).toBe(false);
        // arba galima rasyti:
        // expect(isPalindrome("Jonas")).toBeFalsy();
    })
    test('ana is a palindrome', () => {
        expect(isPalindrome("ana")).toBeTruthy();
    })
    test('emptyString is a palindrome', () => {
        expect(isPalindrome("")).toBeTruthy();
    })
    test('null string is not a palindrome', () => {
        expect(isPalindrome(null)).toBeFalsy();
    })
})

// 3. Apskaiciuoti n - taji fibonachi skaiciu.
describe("fibonacci tests", () => {
    test("n of 3 should return [0 1 1]", () => {
        expect(fibonacci(3)).toEqual[0, 1, 1];
    });
    test("n of 8 should return [0 1 1 2 3 5 8 13]", () => {
        expect(fibonacci(8)).toEqual[0, 1, 1, 2, 3, 4, 5, 8, 13];
    });
    test('n of -1 should throw and Error', () => {
        expect(() => { fibonacci(-1) }).toThrow();
    });
    test('n of 0 should return []', () => {
        expect(fibonacci(0)).toEqual([]);
    });
    test('n of 1 should return [0]', () => {
        expect(fibonacci(1)).toEqual([0]);
    });


})

// 4. Apskaiciuoti skaiciaus n faktoriala.
describe("factorial tests", () => {
    test("factorial of 0 should be 1", () => {
        expect(factorial(0)).toBe(1);
    });
    test("factorial of 1 should be 1", () => {
        expect(factorial(1)).toBe(1);
    });
    test("factorial of 2 should be 2", () => {
        expect(factorial(2)).toBe(2);
    });
    test("factorial of 5 should be 120", () => {
        expect(factorial(5)).toBe(120);
    });
    test("factorial of 10 should be 3'628'800", () => {
        expect(factorial(10)).toBe(3_628_800);
    });
    test("negative factorial should throw an Error", () => {
        expect(() => { factorial(-3) }).toThrow();
    });
});

// 5. Davus du zodzius pasakyti ar jie yra anagramos, t.y ar sukeitus raides galima gauti is vieno i kita.
describe("isAnagram tests", () => {
    test("labas and oboulys are not anagrams", () => {
        expect(isAnagram("labas", "obuolys")).toBeFalsy();
    });
    test("labas and voras are not anagrams", () => {
        expect(isAnagram("labas", "voras")).toBeFalsy();
    });
    test("labas and balas are anagrams", () => {
        expect(isAnagram("labas", "balas")).toBeTruthy();
    });
    test("empty string and balas are not anagrams", () => {
        expect(isAnagram("", "balas")).toBeFalsy();
    });
    test("two empty strings are anagrams", () => {
        expect(isAnagram("", "")).toBeTruthy();
    });
})

// 6. Pasakyti ar duotas skaicius yra pirminis.
describe("isPrime tests", () => {
    test("", () => {
        expect(isPrime(1)).toBeFalsy();
    });
    test("", () => {
        expect(isPrime(3)).toBeTruthy();
    });
    test("", () => {
        expect(isPrime(8)).toBeFalsy();
    });
    test("", () => {
        expect(isPrime(31)).toBeTruthy();
    });
    test("", () => {
        expect(isPrime(403)).toBeFalsy();
    });
})




