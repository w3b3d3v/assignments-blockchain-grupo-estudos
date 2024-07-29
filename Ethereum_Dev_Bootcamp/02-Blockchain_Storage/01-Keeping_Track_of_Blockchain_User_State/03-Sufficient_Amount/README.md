# Inputs & Outputs

Com uma infinidade de UTXOs de entrada e saída permitidos em cada transação, há muitas possibilidades de troca!

Às vezes, o software de carteira Bitcoin escolhe incluir muitos UTXOs de entrada apenas para agregá-los em um UTXO maior para enviar de volta ao proprietário.

Por exemplo, se você tiver cinco UTXOs, cada um com quantias de 0,1 BTC, sua carteira pode escolher combiná-los em 0,5 BTC na próxima transação. Mágica dos bastidores 🐇🎩

A parte importante é garantir que haja **valor total suficiente** nos UTXOs de entrada para cobrir o valor total nos UTXOs de saída.

## 🏁 Seu objetivo: Garantir entrada suficiente

1. Vamos garantir que `inputUTXOs` eles tenham valor total suficiente para cobrir o valor total do `outputUTXOs`.
2. Se o valor total das entradas **for menor que** o valor total das saídas, gere um erro na `execute` função.

## 🧪 Executar teste

Para verificar se está correto acesse esse caminho em seu terminal e execute o seguinte comando:

```bash
cd 02-Blockchain_Storage/01-Keeping_Track_of_Blockchain_User_State/03-Inputs_&_Outputs/src
yarn test
```

ou 

```bash
cd 02-Blockchain_Storage/01-Keeping_Track_of_Blockchain_User_State/03-Inputs_&_Outputs/src
yarn mocha ./test.js
```