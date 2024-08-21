const {
    sum,
    klonas,
    age,
    reverseString,
    isPalindrome,
    fib,
    factorial,
    areAnagrams,
    isPrime } = require('./sum');

describe("Sum tests", () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    })
    test('adds 5 + 2 to equal 7', () => {
        expect(sum(5, 2)).toBe(7);
    });
});

describe("Klonas tests", () => {
    test('array should be cloned', () => {
        let x = [1, 2, 3]
        expect(klonas(x)).not.toBe(x)
    });

    test('array should contain the same elements', () => {
        expect(klonas([1, 2, 3])).toEqual([1, 2, 3])
    });
});

describe("Age tests", () => {
    test('age of should return 365 days', () => {
        expect(age(1)).toBe(365)
    });
    test('negative age should return an error', () => {
        expect(() => { age(-1) }).toThrow();
    });
    test('negative age should return an error', () => {
        const fun = () => { age(-1) }
        expect(fun).toThrow();
    });
});

// 1. Apsukti paduota string eilute.Labas => sabaL
describe("ReverseString tests", () => {
    test('turi grąžinti apverstą žodį', () => {
        const word = 'labas';
        const drow = 'sabal'
        expect(reverseString(word)).toBe(drow);
    })
    test('turi apversti žodžius su kableliais', () => {
        const words = 'labas, alus';
        const sdrow = 'sula ,sabal';
        expect(reverseString(words)).toBe(sdrow);
    })
})

// 2. Patikrinti ar duotas tekstas / skaicius yra palindromas.
describe("IsPalindrome tests", () => {

    test('ar skaičius yra palindromas', () => {
        expect(isPalindrome('121')).toBe(true);
    })

    test('ar skaičius yra palindromas', () => {
        expect(isPalindrome('123')).toBe(false);
    })

    test('grąžinkime false, jei skaičius nėra palindromas', () => {
        expect(isPalindrome('167')).toBe(false);
    })

    test('ar skaičius yra palindromas', () => {
        expect(isPalindrome('-212')).toBe(false);
    })

    test('jei vienas skaičius yra palindromas, grąžinkime true', () => {
        expect(isPalindrome('2')).toBe(true);
    })
    test('jei skaičius yra 0, grąžinkime false', () => {
        expect(isPalindrome('0')).toBe(true);
    })
})

// 3. Apskaiciuoti n - taji fibonachi skaiciu.
describe("Fib tests", () => {
    test('fib(0) turi grąžinti 0', () => {
        expect(fib(0)).toBe(0);
    });
    test('fib(1) turi grąžinti', () => {
        expect(fib(1)).toBe(1);
    });
    test('fib(10) turi grąžinti 55', () => {
        expect(fib(10)).toBe(55);
    });
})

// 4. Apskaiciuoti skaiciaus n faktoriala.
describe("Factorial tests", () => {
    test('faktorialas(0) turi grąžinti 1', () => {
        expect(factorial(0)).toBe(1);
    });
    test('faktorialas(5) turi grąžinti 120', () => {
        expect(factorial(5)).toBe(120);
    });
})

// 5. Davus du zodzius pasakyti ar jie yra anagramos, t.y ar sukeitus raides galima gauti is vieno i kita.
describe("AreAnagrams tests", () => {
    test("Žodžiai 'romas' ir 'moras' turi būti anagramos", () => {
        expect(areAnagrams('romas', 'moras')).toBe(true);
    });
})

// 6. Pasakyti ar duotas skaicius yra pirminis.
describe("IsPrime", () => {
    test('2 turi būti pirminis', () => {
        expect(isPrime(2)).toBe(true);
    });
    test('3 turi būti pirminis', () => {
        expect(isPrime(3)).toBe(true);
    });
    test('4 turi būti pirminis', () => {
        expect(isPrime(4)).toBe(false);
    });
    test('13 turi būti pirminis', () => {
        expect(isPrime(13)).toBe(true);
    });
})