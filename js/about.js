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

// Get the modal
const modalEmail = document.getElementById("myModal");
console.assert(modalEmail !== null);

// Get the button that opens the modal
const btnEmail = document.getElementById("resume-contact-email");
console.assert(btnEmail !== null);

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btnEmail.onclick = function() {
  modalEmail.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalEmail.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalEmail) {
    modalEmail.style.display = "none";
  }
}

// const liToForm = (keyId, message) => {
//   let html =
//     `<div>` +
//       `<label for="${keyId}">${message}</label>` +
//     `</div>` +
//     `<div>` +
//       `<input id="${keyId}" type=\"number\" step=\"1\" value=\"I am not a bot\">` +
//     `</div>`;
//   return html;
// }
//
// $(idEmail).on("click", (event) => {
//   $(idEmail).html(liToForm("email-key", "Please enter the number \"eleven\""));
//   $("#email-key").on("click", (event) => {
//     console.log(event);
//   });
//   //$(idEmail).html(decrypt(contactInfo.email, key));
// });
//
// $(idPhone).on("click", (event) => {
//   let key = dialog("Enter the number \"eleven\"");
//   $(idPhone).html(decrypt(contactInfo.phone, key));
// });
