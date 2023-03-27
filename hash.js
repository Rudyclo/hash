function hash() {
    let message = document.getElementById("message").value;
    let result = document.getElementById("result");
    let select = document.getElementById("item");
    let option_value = select.options[select.selectedIndex].value;
  
    if (option_value == 1) {
      // MD5
      let md = forge.md.md5.create();
      md.update(message);
      result.value = md.digest().toHex();
    }
    if (option_value == 2) {
      // SHA1
      let md = forge.md.sha1.create();
      md.update(message);
      result.value = md.digest().toHex();
    }
    if (option_value == 3) {
      // SHA256
      let md = forge.md.sha256.create();
      md.update(message);
      result.value = md.digest().toHex();
    }
    if (option_value == 4) {
      // SHA384
      let md = forge.md.sha384.create();
      md.update(message);
      result.value = md.digest().toHex();
    }
    if (option_value == 5) {
      // SHA512
      let md = forge.md.sha512.create();
      md.update(message);
      result.value = md.digest().toHex();
    }
  }