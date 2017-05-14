var should = chai.should();

describe('Balanced Brackets', function() {

  it('Should return true for "(x + y) - (4)"', function() {
    var result = isBalanced("(x + y) - (4)");
    result.should.equal(true);
  });
  it('Should return true for "(((10 ) ()) ((?)(:)))"', function() {
    var result = isBalanced("(((10 ) ()) ((?)(:)))");
    result.should.equal(true);
  });
  it('Should return true for "[{()}]"', function() {
    var result = isBalanced("[{()}]");
    result.should.equal(true);
  });
  it('Should return true for "{}"', function() {
    var result = isBalanced("{}");
    result.should.equal(true);
  });
  it('Should return true for "[{}]"', function() {
    var result = isBalanced("[{}]");
    result.should.equal(true);
  });
  it('Should return true for "[[[{{{((()))}}}]]]"', function() {
    var result = isBalanced("[[[{{{((()))}}}]]]");
    result.should.equal(true);
  });
  it('Should return true for "(50)("', function() {
    var result = isBalanced("(50)(");
    result.should.equal(false);
  });
  it('Should return true for "()(()()()())((()(()()))"', function() {
    var result = isBalanced("()(()()()())((()(()()))");
    result.should.equal(false);
  });
  it('Should return true for ")("', function() {
    var result = isBalanced(")(");
    result.should.equal(false);
  });
  it('Should return true for ")))()((("', function() {
    var result = isBalanced(")))()(((");
    result.should.equal(false);
  });
  it('Should return true for "{"', function() {
    var result = isBalanced("{");
    result.should.equal(false);
  });
  it('Should return true for "}"', function() {
    var result = isBalanced("}");
    result.should.equal(false);
  });
  it('Should return true for "[]]"', function() {
    var result = isBalanced("[]]");
    result.should.equal(false);
  });
  it('Should return true for "[]}{()"', function() {
    var result = isBalanced("[]}{()");
    result.should.equal(false);
  });
  it('Should return true for "({)}"', function() {
    var result = isBalanced("({)}");
    result.should.equal(false);
  });
  it('Should return true for "[{]}"', function() {
    var result = isBalanced("[{]}");
    result.should.equal(false);
  });
});
