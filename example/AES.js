const crypto = require("crypto");

// EncSpec	AES_CBC_PKCS5PADDING/256
// EncKey	H3uVnnOnNIXXsH63CsgswUsmICSCdVsn
// EncIV	dwUgwmwOndnJOmOX
// PlainData	!Kwic123테스트
// EncData	b3Bu7QBZ0q96+f2GY2NQmaT1XnZElI1+wRdSHBOY01s=

// const sha256Enc = (plainText, key) => {
//     const secret = key;
//     const hash = crypto
//       .createHmac("sha256", secret)
//       .update(plainText)
//       .digest("base64"); // base64, hex, utf-8 --> 인코딩
//     console.log(hash);
//   };

//   sha256Enc("im trying to be better", "rien");

const AESEncrypt = (plainTxt) => {
  const algorithm = "aes-256-cbc";
  const key = "H3uVnnOnNIXXsH63CsgswUsmICSCdVsn";
  const iv = "dwUgwmwOndnJOmOX";
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(plainTxt, "utf8", "base64");
  encrypted += cipher.final("base64");
  console.log(encrypted);
  return encrypted;
};

if (
  AESEncrypt("!Kwic123테스트") ===
  "b3Bu7QBZ0q96+f2GY2NQmaT1XnZElI1+wRdSHBOY01s="
) {
  console.log("It's good!");
}
