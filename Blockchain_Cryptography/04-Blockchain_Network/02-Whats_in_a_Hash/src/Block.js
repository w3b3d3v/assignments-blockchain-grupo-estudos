const SHA256 = require('crypto-js/sha256');

class Block {
    constructor(data) {
        this.data = data;
    }

    toHash() {
        console.log(this.data);
        return SHA256(this.data);
    }
}

const newBlock = new Block('vini');
console.log(newBlock.toHash());

module.exports = Block;