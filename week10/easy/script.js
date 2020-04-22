largestnum = () => {
  let array = [267, 306, 108];
  let largest = Math.max.apply(Math, array);
  return largest;
};

largestnum();
