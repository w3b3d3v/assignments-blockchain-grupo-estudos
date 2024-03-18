# Mensagens de hashing

A primeira etapa do ECDSA é fazer o hash da mensagem antes de aplicar o algoritmo de assinatura. Portanto, se você quiser assinar uma mensagem com um de seus pares de chaves dizendo que "Vote Sim na Proposta 327", a primeira etapa seria fazer o hash dessa mensagem:

```js
// transformá-lo em uma matriz de bytes, o formato esperado para o algoritmo de hash
const bytes = utf8ToBytes("Vote Yes on Proposal 327");

// fazer o hash da mensagem usando keccak256
const hash = keccak256(bytes); 

console.log(toHex(hash)); // 928c3f25193b338b89d5646bebbfa2436c5daa1d189f9c565079dcae379a43be
```
👆 Depois de obtermos o hash da mensagem, podemos assiná-la com nossa chave privada para provar que um determinado endereço votou sim na proposta 327. Você pode ter feito algo semelhante se já assinou uma mensagem na web3. Quando você envia uma transação para uma blockchain, também assina uma representação com hash dessa transação antes de enviá-la para um nó da blockchain.

## 🏁 Seu objetivo: transmitir a mensagem

A biblioteca [noble-secp256k1 (v 1.7.1)](https://github.com/paulmillr/noble-secp256k1/tree/1.7.1) nos fornece toda a criptografia de que precisaremos ao longo deste curso. Vamos usar o hash `keccak256` e a função `utf8ToBytes`.

> Observe que este tutorial exigirá funções documentadas na `versão 1.7.1` da biblioteca [noble-secp256k1](https://github.com/paulmillr/noble-secp256k1/tree/1.7.1). Qualquer outro link neste tutorial levará diretamente à versão `1.7.1` da documentação da `noble-secp256k1`.

1. Sua primeira etapa é pegar a mensagem de string passada e transformá-la em uma matriz de bytes UTF-8. Você pode fazer isso com a função `utf8ToBytes`.
2. Em seguida, pegue o hash `keccak256` desses bytes e retorne esse valor.