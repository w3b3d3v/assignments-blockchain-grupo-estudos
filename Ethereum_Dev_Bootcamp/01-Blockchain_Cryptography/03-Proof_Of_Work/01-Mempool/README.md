# O Mempool

Os usuários que quiserem fazer transações enviadas para a rede blockchain. O mempool é um local para os mineradores manterem essas transações antes de adicioná-las a um bloco.

Normalmente, o minerador retira do mempool todas as transações com as taxas de transação mais altas. Em seguida, eles as adicionam ao bloco e tentam encontrar a prova de trabalho.

>  Você pode encontrar mais informações sobre a prioridade da taxa de mineração de bitcoin [aqui](https://en.bitcoin.it/wiki/Miner_fees#Priority_transactions).

## 🏁 Seu objetivo: Adicionar transação

Seu objetivo é implementar a função `addTransaction`, que adiciona transações ao mempool.

1. Pegue a `transaction` enviada para a função e coloque-a no topo da matriz `mempool`.

## 🧪 Executar teste

Para verificar se está correto acesse esse caminho em seu terminal e execute o seguinte comando:

```bash
cd Blockchain_Cryptography/03-Proof_Of_Work/01-Mempool/src
yarn test
```

ou 

```bash
cd Blockchain_Cryptography/03-Proof_Of_Work/01-Mempool/src
yarn mocha ./test.js
```