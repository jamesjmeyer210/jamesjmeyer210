console.log("Running about.js");

// convert a string to Uint8Array
const stringToUint8Array = (str) => {
  if(typeof(str) != "string"){
    return undefined;
  }

  let seq = [];
  for(let i = 0; i < str.length; i++){
    seq.push(str.charCodeAt(i));
  }
  return new Uint8Array(seq);
}
// convert a Uint8Array to a string
const uint8ArrayToString = (bytes) => {
  let str = "";
  bytes.forEach( (byte) => {
    str += String.fromCharCode(byte);
  });
  return str;
}
// ads 'amount' to each byte in the array
const upshift = (bytes, amount) => {
  for(let i = 0; i < bytes.length; i++){
    bytes[i] += amount;
  }
  return bytes;
}
// subtracts 'amount' from each byte in the array
const downshift = (bytes, amount) => {
  for(let i = 0; i < bytes.length; i++){
    bytes[i] -= amount;
  }
  return bytes;
}

const encrypt = (digest, key) => {
  return uint8ArrayToString(upshift(stringToUint8Array(digest), key));
}

const decrypt = (digest, key) => {
  return uint8ArrayToString(downshift(stringToUint8Array(digest), key));
}

//  *   *   *   *   *   *   *   *
//  *   *   * begin main*   *   *
//  *   *   *   *   *   *   *   *
const contactInfo = {
  email: "ulxp~uxp\u0084p}=<;Krxltw9nzx",
  phone: "=<;9B?D9;D?B",
};

const idEmail = "#resume-contact-email";
const idPhone = "#resume-contact-phone";

$(idEmail).on("click", (event) => {
  event.preventDefault();
  $(idEmail).html(decrypt(contactInfo.email, 11));
});

$(idPhone).on("click", (event) => {
  event.preventDefault();
  $(idPhone).html(decrypt(contactInfo.phone, 11));
});
