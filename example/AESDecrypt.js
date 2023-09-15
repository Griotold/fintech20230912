const crypto = require("crypto");

// EncSpec	AES_CBC_PKCS5PADDING/256
// EncKey	H3uVnnOnNIXXsH63CsgswUsmICSCdVsn
// EncIV	dwUgwmwOndnJOmOX
// PlainData	!Kwic123테스트
// EncData	b3Bu7QBZ0q96+f2GY2NQmaT1XnZElI1+wRdSHBOY01s=

const AESDecrypt = (plainText) => {
  const algorithm = "aes-256-cbc";
  const key = "H3uVnnOnNIXXsH63CsgswUsmICSCdVsn";
  const iv = "dwUgwmwOndnJOmOX";
  const cipher = crypto.createDecipheriv(algorithm, key, iv);
  let decrypted = cipher.update(plainText, "base64", "utf8");
  decrypted += cipher.final("utf-8");
  console.log(decrypted);
};

AESDecrypt("b3Bu7QBZ0q96+f2GY2NQmaT1XnZElI1+wRdSHBOY01s=");
