describe("arrayToRecord", () => {
  it("should convert an empty array to an empty record", () => {
    const input: any[] = [];
    const result = arrayToRecord(input);
    expect(result).toEqual({});
  });

  it("should convert an array of objects to a record by their id", () => {
    const input = [
      { id: "1", name: "Alice" },
      { id: "2", name: "Bob" },
      { id: "3", name: "Charlie" },
    ];
    const result = arrayToRecord(input);
    expect(result).toEqual({
      1: { id: "1", name: "Alice" },
      2: { id: "2", name: "Bob" },
      3: { id: "3", name: "Charlie" },
    });
  });

  // it("should throw an error if there are no ids", () => {
  //   const input = [
  //     { id: "1", name: "Alice" },
  //     { id: "2", name: "Bob" },
  //     { id: "1", name: "Charlie" },
  //   ];
  //   expect(() => arrayToRecord(input)).toThrow();
  // });
});
