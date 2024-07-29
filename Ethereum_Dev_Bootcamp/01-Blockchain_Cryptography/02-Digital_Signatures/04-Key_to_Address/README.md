# Chave pública para endereço

Tanto o Bitcoin quanto o Ethereum têm um processo de transformação para pegar uma chave pública e transformá-la em um endereço. No caso do Bitcoin, isso inclui [uma soma de verificação e codificação Base58](https://en.bitcoin.it/wiki/Technical_background_of_version_1_Bitcoin_addresses). A transformação de endereço da Ethereum é um pouco mais simples, seu endereço é os últimos 20 bytes do hash da chave pública.

O importante a reconhecer aqui é que o endereço é diferenciado da chave pública, mas você sempre pode derivar o endereço se tiver a chave pública.

## 🏁 Seu objetivo: assinar uma mensagem

Vamos obter o endereço da ethereum a partir da chave pública!

1. Na primeira etapa, você precisará retirar o primeiro byte da chave pública. O primeiro byte indica o formato da chave, se ela está no formato compactado ou não. A publicKey será um `Uint8Array`, portanto, você pode usar o [método slice](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) para cortar o primeiro byte.
2. Em seguida, pegue o hash `keccak` do restante da chave pública
3. Por fim, pegue os últimos 20 bytes do hash keccak e retorne-os. Mais uma vez, você pode usar o [método slice](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/slice).

## 🧪 Executar teste

Para verificar se está correto acesse esse caminho em seu terminal e execute o seguinte comando:

```bash
cd Blockchain_Cryptography/02-Digital_Signatures/04-Key_to_Address/src
yarn test
```

ou 

```bash
cd Blockchain_Cryptography/02-Digital_Signatures/04-Key_to_Address/src
yarn mocha ./test.js
```