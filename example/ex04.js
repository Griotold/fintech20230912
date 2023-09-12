let car = {
  name: "소나타",
  ph: 300,
  start: () => {
    console.log("engine Start");
  },
  stop: () => {
    console.log("engine Stop");
  },
};

let array = ["sonata", 1234, car];
console.log(array[1]);

const points = [40, 100, 1, 5, 25, 10];

for (i = 0; i < points.length; i++) {
  console.log(points[i]);
}
console.log("--------");
for (point of points) {
  console.log(point);
}
console.log("--------");
points.map((point) => {
  console.log(point);
});
