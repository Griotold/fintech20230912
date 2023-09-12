let car = {
  name: "소나타",
  ph: 300,
  maker: "현대",
};
// 구조 분해 할당
let carName = car.name;
let carPh = car.ph;
let carMaker = car.maker;

const { name, ph, maker } = car;
console.log(name, carName);
