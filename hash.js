function randomChar() {
    var n = Math.floor(Math.random() * 62);
    if (n < 10) return n;
    if (n < 35) return String.fromCharCode(n + 56);
    return String.fromCharCode(n + 62);
}

function createHash(hashLength) {
    var str = '';
    while (str.length < hashLength) str += randomChar();
    return str;
}

module.exports = createHash;
