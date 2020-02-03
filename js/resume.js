(function(){
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
    phone: "?AD8??=8BD>=",
  };
  // Get the modal
  const modalEmail = document.getElementById("modal-email");
  const modalPhone = document.getElementById("modal-phone");
  console.assert(modalEmail !== null && modalPhone !== null);
  // Get the button that opens the modal
  const btnEmail = document.getElementById("resume-contact-email");
  const btnPhone = document.getElementById("resume-contact-phone");
  console.assert(btnEmail !== null && btnPhone !== null);
  // Get the <span> element that closes the modal
  let closeEmail = document.getElementsByClassName("close")[0];
  let closePhone = document.getElementsByClassName("close")[1];
  console.assert(closeEmail !== null && closePhone !== null);
  // When the user clicks on the button, open the modal
  btnEmail.onclick = () => {
    document.getElementById("modal-email-val")
      .innerText = decrypt(contactInfo.email, 11);
    modalEmail.style.display = "block";
  }
  btnPhone.onclick = () => {
    document.getElementById("modal-phone-val")
      .innerText = decrypt(contactInfo.phone, 11);
    modalPhone.style.display = "block";
  }
  // When the user clicks on <span> (x), close the modal
  closeEmail.onclick = () => {
    modalEmail.style.display = "none";
  }
  closePhone.onclick = () => {
    modalPhone.style.display = "none";
  }
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = (event) => {
    if (event.target == modalEmail) {
      modalEmail.style.display = "none";
    }
    if (event.target == modalPhone) {
      modalEmail.style.display = "none";
    }
  }

})();
