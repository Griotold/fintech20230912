const crypto = require("crypto");

const sha256Enc = (plainText, key) => {
  const secret = key;
  const hash = crypto
    .createHmac("sha256", secret)
    .update(plainText)
    .digest("base64"); // base64, hex, utf-8 --> 인코딩
  console.log(hash);
};

sha256Enc("im trying to be better", "rien");
