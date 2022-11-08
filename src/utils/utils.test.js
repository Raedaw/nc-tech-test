const idGenerator = require("./utils");

describe("idGenerator", () => {
  test("returns 001 when passed an empty string", () => {
    const previousId = "";
    const expectedNewId = "card001";
    const result = idGenerator(previousId);
    expect(result).toBe(expectedNewId);
  });
  test("returns accurate card id when passed a number over 900", () => {
    const previousId = "card998";
    const expectedNewId = "card999";
    const result = idGenerator(previousId);
    expect(result).toBe(expectedNewId);
  });
  test("returns accurate card id when passed a two digit number", () => {
    const previousId = "card011";
    const expectedNewId = "card012";
    const result = idGenerator(previousId);
    expect(result).toBe(expectedNewId);
  });
  test("returns accurate card id when passed a single digit number", () => {
    const previousId = "card001";
    const expectedNewId = "card002";
    const result = idGenerator(previousId);
    expect(result).toBe(expectedNewId);
  });
  test("gives an accurate id when the number increments from a one digit to a two digit number", () => {
    const previousId = "card009";
    const expectedNewId = "card010";
    const result = idGenerator(previousId);
    expect(result).toBe(expectedNewId);
  });
  test("gives an accurate id when the number passes 3 digits", () => {
    const previousId = "card999";
    const expectedNewId = "card1000";
    const result = idGenerator(previousId);
    expect(result).toBe(expectedNewId);
  });
});
