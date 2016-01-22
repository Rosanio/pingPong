describe("createNumberArray", function() {
  it("will generate an array of numbers up to number which user inputs", function() {
    expect(createNumberArray(15)).to.eql([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);
  });
});
