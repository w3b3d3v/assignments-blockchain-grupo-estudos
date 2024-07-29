# Transações

As transações na rede Bitcoin podem ter **muitas entradas** e **muitas saídas**.

> 🧐 Você pode dar uma olhada nesta [transação de Bitcoin](https://www.blockchain.com/explorer/transactions/btc/1c55e5e7446ce296fd78132b8196fb82190af050585867a04f9182c53dc480af) para ver um exemplo de uma com muitas saídas.

Isso, combinado com um [sistema de script](https://en.bitcoin.it/wiki/Script) em cada transação, permite que os usuários de Bitcoin se envolvam em acordos financeiros mais complexos do que apenas um indivíduo enviando dinheiro para outro.

Para uma transação média, o Script simplesmente exige que novos UTXOs só possam ser gastos pelo endereço associado.

## 🏁 Seu objetivo: Garantir que as entradas sejam UTXOs

Nesta etapa, introduzimos um novo arquivo `Transaction.js`.

No `Transaction` construtor, você verá dois argumentos passados: `inputUTXOs` se `outputUTXOs`. Ambos os objetos são arrays contendo instâncias de saídas de transação.

1. Armazene `inputUTXOs` e `outputUTXOs` no objeto de transação.
2. Na `execute` função, faça uma coisa por enquanto: garanta que nenhum dos `inputUTXOs` já foi gasto. Não podemos permitir TXOs de gasto duplo!
3. Lança um erro `execute` se alguma entrada TXO já tiver sido gasta.

> ❓ A terminologia entre UTXO e TXO pode às vezes ficar confusa. Lembre-se de que um TXO é apenas a nomenclatura para um UTXO que **já foi gasto**!

## 🧪 Executar teste

Para verificar se está correto acesse esse caminho em seu terminal e execute o seguinte comando:

```bash
cd 02-Blockchain_Storage/01-Keeping_Track_of_Blockchain_User_State/02-Spent_TXOs/src
yarn test
```

ou 

```bash
cd 02-Blockchain_Storage/01-Keeping_Track_of_Blockchain_User_State/02-Spent_TXOs/src
yarn mocha ./test.js
```