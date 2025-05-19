/**
 * Adds two numbers and returns the result.
 *
 * @param {number} a - The first number
 * @param {number} b - The second number
 * @returns {number} - The sum of the two numbers
 */
export default function sum(a: number, b: number): number {
  return a + b;
}

describe("sum function", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });

  test("works with negative numbers", () => {
    expect(sum(-1, -2)).toBe(-3);
  });

  test("adds zero correctly", () => {
    expect(sum(0, 5)).toBe(5);
  });
});
