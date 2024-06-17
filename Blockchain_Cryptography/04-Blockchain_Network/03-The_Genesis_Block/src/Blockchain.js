const Block = require('./Block');

class Blockchain {
    constructor() {
        this.chain = [ new Block() ];
    }
}


const blockchain = new Blockchain();
const genesisBlock = blockchain.chain[0];

console.log(blockchain);
console.log(genesisBlock);
module.exports = Blockchain;