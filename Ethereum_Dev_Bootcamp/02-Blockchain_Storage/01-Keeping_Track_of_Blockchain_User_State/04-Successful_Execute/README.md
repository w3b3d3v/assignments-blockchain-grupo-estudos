# Transação bem-sucedida

Quando uma transação é bem-sucedida e minerada para o blockchain, os **UTXOs de saída** se tornam novos TXOs prontos para serem gastos. Os **UTXOs de entrada** precisam ser **marcados como gastos**, para garantir que não sejam gastos novamente!

Afinal, todo o propósito do blockchain é corrigir o problema de gasto duplo 😉

## 🏁 Seu objetivo: Marcar entradas como gastas

Se nenhum erro for gerado durante a `execute` operação da transação, ela será bem-sucedida 🎉

## 🧪 Executar teste

Para verificar se está correto acesse esse caminho em seu terminal e execute o seguinte comando:

```bash
cd 02-Blockchain_Storage/01-Keeping_Track_of_Blockchain_User_State/04-Successful_Execute/src
yarn test
```

ou 

```bash
cd 02-Blockchain_Storage/01-Keeping_Track_of_Blockchain_User_State/04-Successful_Execute/src
yarn mocha ./test.js
```