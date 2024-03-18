const { sha256 } = require("ethereum-cryptography/sha256");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

// as possíveis cores que o hash poderia representar
const COLORS = ['red', 'green', 'blue', 'yellow', 'pink', 'orange'];

// dado um hash, retorna a cor que criou o hash
function findColor(hash) {
    
}

module.exports = findColor;