// Hàm băm
function hashText() {
    var inputText = document.getElementById('inputText').value;
    var hashedText = sha256(inputText);
    document.getElementById('hashedText').innerText = hashedText;
}

// Mật mã bất đối xứng
let publicKey, privateKey;

function generateKeyPair() {
    const crypt = new JSEncrypt();
    crypt.getKey();

    privateKey = crypt.getPrivateKeyB64();
    publicKey = crypt.getPublicKeyB64();

    document.getElementById("publicKey").value = publicKey;
    document.getElementById("privateKey").value = privateKey;
}

function encrypt() {
    const plainText = document.getElementById("plainText").value;
    const publicKeyEncrypt = document.getElementById("publicKeyEncrypt").value;

    const crypt = new JSEncrypt();
    crypt.setPublicKey(publicKeyEncrypt);

    const encryptedText = crypt.encrypt(plainText);
    document.getElementById("encryptedText").value = encryptedText;
}

function decrypt() {
    const encryptedText = document.getElementById("encryptedTextDecrypt").value;
    const privateKeyDecrypt = document.getElementById("privateKeyDecrypt").value;

    const crypt = new JSEncrypt();
    crypt.setPrivateKey(privateKeyDecrypt);

    const decryptedText = crypt.decrypt(encryptedText);
    document.getElementById("decryptedText").value = decryptedText;
}