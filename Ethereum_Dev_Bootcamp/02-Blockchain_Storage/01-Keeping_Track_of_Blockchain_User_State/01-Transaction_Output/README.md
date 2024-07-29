# Saídas de transações

Agora é hora de criar um objeto para Saídas de Transação (TXOs)!

Usando um Bitcoin Block Explorer você pode procurar TXOs na rede real. Se quiséssemos procurar UTXOs para um endereço específico, por exemplo:

https://blockchain.info/unspent?active=1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa

> ☝️ O valor depois `active=` é um endereço. Este endereço em particular foi o que Satoshi usou quando minerou o primeiro bloco de Bitcoin.

## 🏁 Seu objetivo: Criar uma classe TXO

Vamos completar os métodos `constructor` e `spend` para a `TXO` classe no `TXO.js` arquivo.

1. O `constructor` deve armazenar os valores passados ​​para ele em propriedades do mesmo nome. Ele também deve criar uma propriedade spente padronizá-la para false.
2. A `spend` função deve definir a `spent` propriedade como `true`. Por exemplo:

```javascript
const txo = new TXO("1FNv3tXLkejPBYxDHDaZz6ENNz3zn3G4GM", 10);

console.log( txo.owner ); // 1FNv3tXLkejPBYxDHDaZz6ENNz3zn3G4GM
console.log( txo.amount ); // 10
console.log( txo.spent ); // false

txo.spend();

console.log( txo.spent ); // true
```

☝️ Observe como `spent` é inicialmente `false` quando criamos o novo `TXO`. Após invocar a `spend` função, `spent` deve ser definido como `true`.

## 🧪 Executar teste

Para verificar se está correto acesse esse caminho em seu terminal e execute o seguinte comando:

```bash
cd 02-Blockchain_Storage/01-Keeping_Track_of_Blockchain_User_State/01-Transaction_Output/src
yarn test
```

ou 

```bash
cd 02-Blockchain_Storage/01-Keeping_Track_of_Blockchain_User_State/01-Transaction_Output/src
yarn mocha ./test.js
```