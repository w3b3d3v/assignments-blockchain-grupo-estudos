# Assinando o Hash

É hora de assinar uma mensagem usando nossa **chave privada** para provar nossa intenção!

Ao assinar uma mensagem com secp256k1, podemos retornar a assinatura junto com o [bit de recuperação](https://cryptobook.nakov.com/digital-signatures/ecdsa-sign-verify-messages#ecdsa-public-key-recovery-from-signature), o que nos permite recuperar a chave pública a partir da assinatura. Isso permitirá que um nó da blockchain pegue a assinatura de uma transação e entenda qual endereço autenticou essa transação específica.

> 💭 Esse é um ponto importante: uma transação de blockchain não apenas indica a intenção da pessoa que a assinou, mas também a autentica por meio de criptografia de chave pública! Veremos isso mais claramente quando começarmos a assinar transações em lições futuras.

## 📋 Detalhes

### Uso de opções para retornar um recoveryBit

A sintaxe do terceiro parâmetro opcional da [função secp sign](https://github.com/paulmillr/noble-secp256k1/tree/1.7.1#signmsghash-privatekey) é um pouco complicada de acertar... veja como usar corretamente o terceiro parâmetro para retornar um `recoveryBit` do processo de assinatura, que será usado posteriormente para recuperar uma chave pública usando apenas o `messageHash`, a `signature` e o `recoveryBit`:

```js
return secp.sign(messageHash, PRIVATE_KEY, { recovered: true });
```
Basta incluir o terceiro parâmetro em um objeto que tenha a chave recuperada definida como `true`. ✅

## 🏁 Seu objetivo: assinar uma mensagem

Vamos assinar uma mensagem! 

1. A primeira etapa é no arquivo `signMessage.js` fazer o hash usando a função `hashMessage` que você criou na última etapa (já a importamos para você na linha 2)

2. Quando você tiver o hash da mensagem, use o método de sinalização da biblioteca [noble-secp256k1](https://github.com/paulmillr/noble-secp256k1/tree/1.7.1#signmsghash-privatekey).

> **Nota**
> O método `sign` utilizará o hash de sua mensagem juntamente com a constante `PRIVATE_KEY` declarada na parte superior do arquivo. Essa chave privada é uma chave válida que pode ser usada para autorizar transações de blockchain. **Nunca use essa chave específica**, pois ela está publicada na Internet e, portanto, muitas pessoas, inclusive você, podem se autenticar com essa chave privada específica. Nas próximas lições, discutiremos a boa higiene das chaves privadas para evitar a perda de fundos.

3. O método `sign` recebe um terceiro parâmetro opcional chamado `options`, que você verá na documentação. Use esse parâmetro para retornar o bit recuperado, de modo que a chave pública possa ser recuperada a partir dessa assinatura.

## 🧪 Executar teste

Para verificar se está correto acesse esse caminho em seu terminal e execute o seguinte comando:

```bash
cd 01-Blockchain_Cryptography/02-Digital_Signatures/02-Sign_Message/src
yarn test
```

ou 

```bash
cd 01-Blockchain_Cryptography/02-Digital_Signatures/02-Sign_Message/src
yarn mocha ./test.js
```