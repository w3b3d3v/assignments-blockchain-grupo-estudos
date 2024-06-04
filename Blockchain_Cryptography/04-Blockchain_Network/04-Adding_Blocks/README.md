# 🏁 Seu objetivo: Criar uma função addBlock

Vamos criar uma função `addBlock` em nossa classe `Blockchain`.

Essa função deve receber um novo bloco e adicioná-lo à matriz da `chain`:

```javascript
const blockchain = new Blockchain();
const block = new Block("Charlie enviou para Dave 2 BTC");

blockchain.addBlock(block);

console.log(blockchain.chain.length); // 2
```

☝ Lembre-se de que agora devemos ter o bloco genesis **e** o novo bloco.

## 🧪 Executar teste

Para verificar se está correto acesse esse caminho em seu terminal e execute o seguinte comando:

```bash
cd Blockchain_Cryptography/04-Blockchain_Network/04-Adding_Blocks/src
yarn test
```

ou 

```bash
cd Blockchain_Cryptography/04-Blockchain_Network/04-Adding_Blocks/src
yarn mocha ./test.js
```