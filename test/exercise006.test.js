import {
    sumMultiples,
    isValidDNA,


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