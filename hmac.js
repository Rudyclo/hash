function randomKey() {
    var key = document.getElementById("key");
    var keyByte = forge.random.getBytesSync(20);
    key.value = forge.util.bytesToHex(keyByte);
}

function hmac() {
    let message = document.getElementById('message').value
    let key = document.getElementById('key').value
    let select = document.getElementById('Item')
    let optionValue = select.option[select.selectedIndex].value
    let hash = ['md5', 'sha1', 'sha256', 'sha384', 'sha512']
    let result =document.getElementById('result')

    let hmac = forge.hmac.create()
    hmac.start(hash[optionValue], key)
    hmac.update(message)
    result.value = hmac.digest().toHex()
}