# Recuperar a chave pública

Quando a assinatura é passada com todos os seus componentes (incluindo o bit de recuperação), a chave pública pode ser recuperada. Isso significa que os nós do blockchain poderão entender quem assinou a transação que foi enviada a eles. Uma transação poderia indicar que o usuário gostaria de enviar 1 ether para outro endereço e fornecer uma determinada taxa de transação. Como a assinatura assina o hash que contém essa intenção, ela é suficiente para autenticar totalmente essa ação.

## 🏁 Seu objetivo: assinar uma mensagem

1. Dada um `message`, `signature` e `recoveryBit` em `recoverKey.js`, encontre a chave pública e retorne-a! Certifique-se de fazer o hash da mensagem ao passá-la para o método de recuperação.
  
Use a documentação da [biblioteca noble-secp256k1](https://github.com/paulmillr/noble-secp256k1/tree/1.7.1) para encontrar o método e os parâmetros corretos para esse caso.

> Lembre-se de verificar a `versão 1.7.1` da documentação da biblioteca!

## 🧪 Executar teste

Para verificar se está correto acesse esse caminho em seu terminal e execute o seguinte comando:

```bash
cd Blockchain_Cryptography/02-Digital_Signatures/03-Recover_Key/src
yarn test
```

ou 

```bash
cd Blockchain_Cryptography/02-Digital_Signatures/03-Recover_Key/src
yarn mocha ./test.js
```