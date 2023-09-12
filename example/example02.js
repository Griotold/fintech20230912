function plus(p1, p2) {
  return p1 + p2;
}

// const minus = (p1, p2) => {
//   return p1 - p2;
// };

// console.log(minus(4, 3));

const minus = (p1, p2) => {
  const result = p1 - p2;
  console.log(`${p1} - ${p2}은 ${result}입니다`);
  return result;
};

minus(4, 3);
