const Block = require('./Block');

class Blockchain {
    constructor() {
        this.chain = [new Block()];
    }

    addBlock(block) {
        block.previousHash = this.chain[this.chain.length - 1].toHash();
        this.chain.push(block);
    }
}


let blockchain = new Blockchain();
let initialGenesisHash = new Block(5);
let initialBlock1Hash = new Block(5);

blockchain.addBlock(initialGenesisHash);
blockchain.addBlock(initialBlock1Hash);

console.log('Genesis data: ' + initialGenesisHash.data)
console.log('Genesis: ' + initialGenesisHash.toHash().toString());
console.log('Block1: ' + initialBlock1Hash.toHash().toString());

// ============================================================================

let Newblockchain = new Blockchain();
let NewinitialGenesisHash = new Block(10);
let NewinitialBlock1Hash = new Block(5);

Newblockchain.addBlock(NewinitialGenesisHash);
Newblockchain.addBlock(NewinitialBlock1Hash);

console.log('\nNewGenesis data: ' + NewinitialGenesisHash.data)
console.log('NewGenesis: ' + NewinitialGenesisHash.toHash().toString());
console.log('NewBlock1: ' + NewinitialBlock1Hash.toHash().toString());

module.exports = Blockchain;