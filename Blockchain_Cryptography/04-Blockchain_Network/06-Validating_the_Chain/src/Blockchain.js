const Block = require('./Block');

class Blockchain {
    constructor() {
        this.chain = [new Block()];
    }

    addBlock(block) {
        block.previousHash = this.chain[this.chain.length - 1].toHash();
        this.chain.push(block);
    }

    isValid() {
        for (let i = this.chain.length - 1; i > 0; i--) {
            const block = this.chain[i];
            const prev = this.chain[i - 1];
            if (block.previousHash.toString() !== prev.toHash().toString()) {
                return false;
            }
        }
        return true;
    }
}

let blockchain 

blockchain = new Blockchain();
blockchain.addBlock(new Block("Dan"));
blockchain.addBlock(new Block("Peter"));
blockchain.addBlock(new Block("James"));

console.log(blockchain.isValid());

module.exports = Blockchain;