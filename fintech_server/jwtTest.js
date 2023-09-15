var jwt = require("jsonwebtoken");
var token = jwt.sign({ foo: "bar", phone: "01012345678" }, "shhhhh");

console.log(token);

let madeToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJwaG9uZSI6IjAxMDEyMzQ1Njc4IiwiaWF0IjoxNjk0NzUxMTE2fQ.tca4e1YSfV514M5Jz2xe7f4-OND98f0xD2KA6yYGc1k";

console.log(madeToken);

// verify a token symmetric
jwt.verify(madeToken, "shhhhh", function (err, decoded) {
  console.log(decoded.foo); // bar
});
