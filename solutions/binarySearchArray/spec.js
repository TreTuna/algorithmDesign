var should = chai.should();

describe('binarySearch', function() {
  it('should exist', function() {
    should.exist(binarySearch);
  });

  it('should be a function', function() {
    binarySearch.should.be.a.Function;
  });

  it('should return 0 for 5 in [5]', function() {
    var result = binarySearch([5], 5);
    should.equal(result, 0);
  });

  it('should return null for 4 in [5]', function() {
    var result = binarySearch([5], 4);
    should.equal(result, null);
  });

  it('should return 0 for 1 in [1, 2, 3, 4, 5]', function() {
    var result = binarySearch([1, 2, 3, 4, 5], 1);
    should.equal(result, 0);
  });

  it('should return 1 for 2 in [1, 2, 3, 4, 5]', function() {
    var result = binarySearch([1, 2, 3, 4, 5], 2);
    should.equal(result, 1);
  });

  it('should return 2 for 3 in [1, 2, 3, 4, 5]', function() {
    var result = binarySearch([1, 2, 3, 4, 5], 3);
    should.equal(result, 2);
  });

  it('should return 3 for 4 in [1, 2, 3, 4, 5]', function() {
    var result = binarySearch([1, 2, 3, 4, 5], 4);
    should.equal(result, 3);
  });

  it('should return 4 for 5 in [1, 2, 3, 4, 5]', function() {
    var result = binarySearch([1, 2, 3, 4, 5], 5);
    should.equal(result, 4);
  });

  it('should return 3 for 4 in [1, 2, 3, 4, 5, 6]', function() {
    var result = binarySearch([1, 2, 3, 4, 5], 4);
    should.equal(result, 3);
  });

  it('should return 3 for 45 in [11, 22, 33, 45, 53, 62]', function() {
    var result = binarySearch([11, 22, 33, 45, 53, 62], 45);
    should.equal(result, 3);
  });

  it('should return null for 55 in [11, 22, 33, 45, 53, 62]', function() {
    var result = binarySearch([11, 22, 33, 45, 53, 62], 55);
    should.equal(result, null);
  });



});



