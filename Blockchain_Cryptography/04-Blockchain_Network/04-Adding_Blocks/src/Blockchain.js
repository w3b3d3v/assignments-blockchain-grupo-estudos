const Block = require('./Block');

class Blockchain {
    constructor() {
        this.chain = [ new Block() ];
    }

    addBlock(block){
        this.chain.push(block);
    }
}

let blockchain = new Blockchain();
let block1 = new Block("Some data");
let block2 = new Block("Some other data");
// blockchain.addBlock(block1);
// blockchain.addBlock(block2);

console.log(blockchain.chain.length);

module.exports = Blockchain;