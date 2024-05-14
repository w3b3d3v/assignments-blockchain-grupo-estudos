# Tamanho do bloco

No Bitcoin, há um limite específico de tamanho de bloco que não pode ser excedido. O número de transações que caberá em um bloco varia devido ao fato de as transações serem de tamanhos diferentes.

Para fins deste exercício, usaremos a constante `MAX_TRANSACTIONS`.

> 📖  A decisão sobre o tamanho do bloco no bitcoin tem sido [bastante controversa](https://en.bitcoin.it/wiki/Block_size_limit_controversy)!

## 🏁 Seu objetivo: Transações mineradas


1. Dentro da função `mine`, retire as transações do mempool e inclua-as no bloco em uma matriz chamada `transactions`
2. Remova do `mempool` cada transação que você incluir no bloco
3. Adicione a matriz de `transactions` ao bloco antes de fazer o hash do bloco

## 🧪 Executar teste

Para verificar se está correto acesse esse caminho em seu terminal e execute o seguinte comando:

```bash
cd Blockchain_Cryptography/03-Proof_Of_Work/04-Mine_TX/src
yarn test
```

ou 

```bash
cd Blockchain_Cryptography/03-Proof_Of_Work/04-Mine_TX/src
yarn mocha ./test.js
```