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

const liToForm = (keyId, message) => {
  let html = `<div>` +
    `<form action="#" method="post">` +
      `<label for="${keyId}">${message}</label>` +
      `<input id="${keyId}" type=\"text\">` +
      `<input id="${keyId}-submit" type=\"submit\" value=\"I am not a bot\">`
    "</form></div>";
  return html;
}

$(idEmail).on("click", (event) => {
  event.preventDefault();
  $(idEmail).html(liToForm("email-key", "Please enter the number \"eleven\""));
  $("#email-key-submit").on("click", (event) => {
    event.preventDefault();
    console.log(event);
  });
  //$(idEmail).html(decrypt(contactInfo.email, key));
});

$(idPhone).on("click", (event) => {
  event.preventDefault();
  let key = dialog("Enter the number \"eleven\"");
  $(idPhone).html(decrypt(contactInfo.phone, key));
});
