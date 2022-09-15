const each = require("jest-each").default;

const { showHowMuchILoveYou } = require('./adoration');

describe("showHowMuchILoveYou", () => {
    // 'it' is an alias for the 'test' keyword
    it("Exists", () => {

        expect(showHowMuchILoveYou).toBeDefined();
    })

    it("Is a function", () => {
        expect(showHowMuchILoveYou instanceof Function).toEqual(true); 
    })

    //Jest test: for each value in the list, test it
    each([["I love you thiiiiis much!", 5],
            ["I love you thiiis much!", 3]
        ]).test("Returns %s when passed %s", (expected, amount) => {
            expect(showHowMuchILoveYou(amount)).toBe(expected);
    })

    it("Throws an error when passed a string", () => {
        expect(() => {
            showHowMuchILoveYou("with all my heart")
         }).toThrow(new Error("I'm really sorry; you're just not my type."))
    })      
})
