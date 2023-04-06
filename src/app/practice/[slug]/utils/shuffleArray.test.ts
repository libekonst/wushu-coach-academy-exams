import { shuffleArray } from "./shuffleArray";

describe("shuffleArray function", () => {
  it("should not modify the original array", () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffledArr = shuffleArray(arr);
    expect(shuffledArr).not.toBe(arr);
    expect(shuffledArr).toHaveLength(arr.length);
    expect(arr).toEqual([1, 2, 3, 4, 5]);
  });

  it("should return an array with the same items", () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffledArr = shuffleArray(arr);
    expect(shuffledArr).toHaveLength(arr.length);
    arr.forEach((item) => expect(shuffledArr).toContain(item));
  });

  it("should return a different order each time it is called", () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffledArr1 = shuffleArray(arr);
    const shuffledArr2 = shuffleArray(arr);
    expect(shuffledArr1).not.toEqual(shuffledArr2);
  });
});
