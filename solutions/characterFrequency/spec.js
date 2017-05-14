var should = chai.should();

describe('Character Frequency', function() {
  it('should exist', function(){
    should.exist(characterFrequency);
  });
  it('should be a function', function(){
    characterFrequency.should.be.a.Function;
  });
  it('Should return [["a",3],["b",2],["c",1]] when given "aaabbc"', function() {
    var result = characterFrequency('aaabbc');
    result.should.deep.equal([["a",3],["b",2],["c",1]]);
  });
  it('Should return [["i",4],["s",4],["p",2],["m",1]] when given "mississippi"', function() {
    var result = characterFrequency('mississippi');
    result.should.deep.equal([["i",4],["s",4],["p",2],["m",1]]);
  });
  it('Should return [["y",2],["z",2],["b",1]] when given "yzbzy"', function() {
    var result = characterFrequency('yzbzy');
    result.should.deep.equal([["y",2],["z",2],["b",1]]);
  });
  it('Should return [["o",3],["p",3]] when given "popopo"', function() {
    var result = characterFrequency('popopo');
    result.should.deep.equal([["o",3],["p",3]]);
  });
  it('Should return [["p",4],["o",3]] when given "popopop"', function() {
    var result = characterFrequency('popopop');
    result.should.deep.equal([["p",4],["o",3]]);
  });
  it('Should return [] when given ""', function() {
    var result = characterFrequency('');
    result.should.deep.equal([]);
  });
  it('Should return [["i",7],["a",3],["c",3],["l",3],["s",3],["e",2],["o",2],["p",2],["r",2],["u",2],["d",1],["f",1],["g",1],["t",1],["x",1]] when given "supercalifragilisticexpialidocious"', function() {
    var result = characterFrequency('supercalifragilisticexpialidocious');
    result.should.deep.equal([["i",7],["a",3],["c",3],["l",3],["s",3],["e",2],["o",2],["p",2],["r",2],["u",2],["d",1],["f",1],["g",1],["t",1],["x",1]]);
  });
});
