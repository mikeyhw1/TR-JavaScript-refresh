import {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner
} from "../challenges/exercise007";
import {
    largeData
} from "./data_exercise007";

describe("sumDigits", () => {
    test("returns the sum of all its digits", () => {
        expect(sumDigits(123)).toBe(6);
        expect(sumDigits(12345)).toBe(15);
        expect(sumDigits(483920)).toBe(26);
        expect(sumDigits(0)).toBe(0);
    });

    test("if the number is not integer, returns false", () => {
        expect(sumDigits(219.23)).toBe(false);
        expect(sumDigits('A')).toBe(false);
        expect(sumDigits('true')).toBe(false);
    });
});

describe("createRange", () => {
    test("return a range of numbers as an array", () => {
        expect(createRange(3, 11, 2)).toEqual([3, 5, 7, 9, 11]);
        expect(createRange(4, 19, 3)).toEqual([4, 7, 10, 13, 16, 19]);
        expect(createRange(5, 10, 5)).toEqual([5, 10]);
    });

    test("step parameter not provided", () => {
        expect(createRange(3, 9)).toEqual([3, 4, 5, 6, 7, 8, 9]);
        expect(createRange(1, 11)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    });
});

describe("getScreentimeAlertList", () => {
    const data = [
        {
            username: "beth_1234",
            name: "Beth Smith",
            screenTime: [
                { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
            ]
        },
        {
            username: "sam_j_1989",
            name: "Sam Jones",
            screenTime: [
                { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
                { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
                { date: "2019-06-14", usage: { mapMyRun: 30, whatsApp: 50, facebook: 0, safari: 31 } },
            ]
        },
        {
            username: "peter_1234",
            name: "Peter Pan",
            screenTime: [
                { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
                { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
                { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31, twitter: 70 } },
            ]
        },
    ]

    test("return an array of usernames of users who have used more than 100 minutes of screentime for a given date", () => {
        expect(getScreentimeAlertList(data, "2019-05-04")).toEqual(["beth_1234"]);
        expect(getScreentimeAlertList(data, "2019-06-14")).toEqual(["sam_j_1989", "peter_1234"]);
    });

    test("empty array if no positive user", () => {
        expect(getScreentimeAlertList(data, "2019-06-11")).toEqual([]);
        expect(getScreentimeAlertList(data, "2023-01-11")).toEqual([]);
    });

    test("large data, answer return after loop", () => {
        expect(getScreentimeAlertList(largeData, "2019-06-14")).toEqual(["peter_1234", "peter_2222"]);
    });
});

describe("hexToRGB", () => {
    test("transform the hex code into an RGB code", () => {
        expect(hexToRGB("#FF1133")).toBe("rgb(255,17,51)");
        expect(hexToRGB("#AB00C1")).toBe("rgb(171,0,193)");
        expect(hexToRGB("#C09001")).toBe("rgb(192,144,1)");
        expect(hexToRGB("#FFFFFF")).toBe("rgb(255,255,255)");
        expect(hexToRGB("#000000")).toBe("rgb(0,0,0)");
    });
});

describe("findWinner", () => {
    test('return "X" if player X has won, "0" if the player 0 has won', () => {
        expect(findWinner([
            ["X", "0", null],
            ["X", null, "0"],
            ["X", null, "0"]
        ])).toBe("X");
        expect(findWinner([
            ["X", "X", null],
            ["X", "X", "0"],
            ["0", "0", "0"]
        ])).toBe("0");
        expect(findWinner([
            ["X", "X", "0"],
            ["X", "0", "X"],
            ["0", "0", null]
        ])).toBe("0");
        expect(findWinner([
            ["X", "X", "X"],
            ["X", "0", "X"],
            ["0", "0", "0"]
        ])).toBe("X");
    });

    test('return null if no winner', () => {
        expect(findWinner([
            [null, null, null],
            ["X", "X", null],
            ["0", "0", null]
        ])).toBe(null);
        expect(findWinner([
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ])).toBe(null);
    });
});