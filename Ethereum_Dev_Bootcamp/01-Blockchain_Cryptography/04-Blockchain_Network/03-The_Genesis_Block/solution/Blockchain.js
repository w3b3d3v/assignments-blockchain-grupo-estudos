const Block = require('./Block');

class Blockchain {
    constructor() {
        this.chain = [ new Block() ];
    }
}

module.exports = Blockchain;