console.log("Running about.js");

const encode = (str) => {
  let seq = Uint32Array.from(str.split(''));
  seq.forEach( (uint) => {
    console.log(uint);
  });
}

const idEmail = "#resume-contact-email";
const idPhone = "#resume-contact-phone";

$(idEmail).on("click", (event) => {
  event.preventDefault();
  $(idEmail).html("jamesjmeyer210@gmail.com");
});

$(idPhone).on("click", (event) => {
  event.preventDefault();
  $(idPhone).html("210.749.0947");
});
