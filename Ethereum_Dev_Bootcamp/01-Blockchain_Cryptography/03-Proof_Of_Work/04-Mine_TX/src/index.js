const SHA256 = require('crypto-js/sha256');
const TARGET_DIFFICULTY = BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;
const mempool = [];
const blocks = [];

function addTransaction(transaction) {
    mempool.push(transaction);
}

function mine() {
    const block = { id: blocks.length }
    const hash = SHA256(JSON.stringify(block));
    blocks.push({ ...block, hash });
}

module.exports = {
    TARGET_DIFFICULTY,
    MAX_TRANSACTIONS,
    addTransaction,
    mine,
    mempool,
    blocks,
};