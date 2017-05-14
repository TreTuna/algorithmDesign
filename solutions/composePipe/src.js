const compose = (...args) => {
  return (val) => {
    return args.reduceRight((memo, fn) => {
      return fn(memo);
    }, val);
  };
};

const pipe = (...args) => {
  return (val) => {
    return args.reduce((memo, fn) => {
      return fn(memo);
    }, val);
  };
};