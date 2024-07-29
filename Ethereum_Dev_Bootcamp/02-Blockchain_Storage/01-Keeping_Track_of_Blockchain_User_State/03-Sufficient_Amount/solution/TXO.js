class TXO {
    constructor(address, amount) {
        this.owner = address;
        this.amount = amount;
        this.spent = false;
    }
    spend() {
        this.spent = true;
    }
}

module.exports = TXO;