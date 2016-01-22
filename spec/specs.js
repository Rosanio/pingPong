describe("createNumberArray", function() {
  it("will generate an array of numbers up to number which user inputs", function() {
    expect(createNumberArray(15)).to.eql([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);
  });
});

describe("pingPong", function() {
  it('will replace any number which is divisible by three with the word "ping".', function() {
    expect(pingPong(4)).to.eql([1,2,'ping',4]);
  });
  it('will replace any number which is divisible by five with the word "pong"', function() {
    expect(pingPong(10)).to.eql([1,2,'ping',4,'pong','ping',7,8,'ping','pong']);
  });
  it('will replace any number which is divisible by both three and five with the word "pingpong"',function() {
    expect(pingPong(17)).to.eql([1,2,'ping',4,'pong','ping',7,8,'ping', 'pong',11,'ping',13,14,'pingpong',16,17]);
  });
});
