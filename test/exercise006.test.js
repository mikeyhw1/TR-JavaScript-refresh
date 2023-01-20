import {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered
} from "../challenges/exercise006";


describe("sumMultiples", () => {
    test("return the sum of any numbers which are a multiple of 3 or 5", () => {
        expect(sumMultiples([1, 3, 5, 7, 9])).toBe(17);
        expect(sumMultiples([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(33);
        expect(sumMultiples([3, 13, 23, 33, 15, 30, 7, 5, 0])).toBe(86);
    });

    test("if the number is not found in the array, returns 0", () => {
        expect(sumMultiples([0, 1, 4, 7, 11, 13, 29])).toBe(0);
    });

    test("if the number is found more than once, add both", () => {
        expect(sumMultiples([3, 3, 5, 5, 7, 9])).toBe(25);
    });
});

describe("isValidDNA", () => {
    test("return true/false depending on whether it is a valid DNA string", () => {
        expect(isValidDNA("CGTACGTAATGC")).toBe(true);
        expect(isValidDNA("CGTATAGCHDSUIZ")).toBe(false);
        expect(isValidDNA("TAGC0")).toBe(false);
    });

    test("check case insensitive", () => {
        expect(isValidDNA("CGTAc")).toBe(false);
        expect(isValidDNA("CGTAa")).toBe(false);
    });

    test("empty string return false", () => {
        expect(isValidDNA("")).toBe(false);
    });
});

describe("getComplementaryDNA", () => {
    test("return a string of the complementary base pairs", () => {
        expect(getComplementaryDNA("ACTG")).toBe("TGAC");
        expect(getComplementaryDNA("AATCCG")).toBe("TTAGGC");
        expect(getComplementaryDNA("ATCGGTGTCAAAGTCGCCCCC")).toBe("TAGCCACAGTTTCAGCGGGGG");
    });

    test("return false if it is an ivalid DNA string", () => {
        expect(getComplementaryDNA("CGTATAGCHDSUIZ")).toBe(false);
        expect(getComplementaryDNA("ACTGa")).toBe(false);
        expect(getComplementaryDNA("TAGC0")).toBe(false);
    });

    test("empty string return false", () => {
        expect(isValidDNA("")).toBe(false);
    });
});

describe("isItPrime", () => {
    test("check is a prime number or not", () => {
        expect(isItPrime(7)).toBe(true);
        expect(isItPrime(11)).toBe(true);
        expect(isItPrime(13)).toBe(true);
        expect(isItPrime(10)).toBe(false);
        expect(isItPrime(3)).toBe(true);
        expect(isItPrime(2)).toBe(true);
        expect(isItPrime(333)).toBe(false);
        expect(isItPrime(111)).toBe(false);
        expect(isItPrime(127)).toBe(true);
        expect(isItPrime(129)).toBe(false);
    });

    test("return null if it is 0", () => {
        expect(isItPrime(0)).toBe(null);
    });

    test("return false if not integer or negative", () => {
        expect(isItPrime(-1)).toBe(false);
        expect(isItPrime(-11)).toBe(false);
        expect(isItPrime(-7)).toBe(false);
        expect(isItPrime(-3)).toBe(false);
        expect(isItPrime(3.3)).toBe(false);
        expect(isItPrime(3.33)).toBe(false);
        expect(isItPrime(5.05)).toBe(false);
        expect(isItPrime(5.5)).toBe(false);
    });
});

describe("createMatrix", () => {
    test("return an array of n arrays, each filled with n items", () => {
        expect(createMatrix(3, "foo")).toBe([
            ["foo", "foo", "foo"],
            ["foo", "foo", "foo"],
            ["foo", "foo", "foo"]
        ]);

    });


});

// describe("areWeCovered", () => {
//     test("return true/false depending on whether there are enough staff scheduled for the given day", () => {
//         // expect(areWeCovered(3, "foo")).toBe([
//         //     ["foo", "foo", "foo"],
//         //     ["foo", "foo", "foo"],
//         //     ["foo", "foo", "foo"]
//         // ]);

//     });


// });