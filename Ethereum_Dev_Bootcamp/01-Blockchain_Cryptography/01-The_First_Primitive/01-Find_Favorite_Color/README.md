# Hashing de força bruta

As funções de hash criptográficas, como a SHA256, são funções unidirecionais. Isso significa que, se você tiver a entrada, é relativamente fácil encontrar a saída. Por outro lado, se você tiver a saída, é inviável encontrar a entrada.

Entretanto, se você conhecesse os hashes de algumas entradas comuns, poderia adivinhar a saída por força bruta ou criar uma tabela Rainbow para determinar qual é essa entrada.

É fácil descobrir que o hash SHA256 de "apples" (maçãs) é 0xf5903f...0f74d9. Se essa fosse uma entrada provável, um hacker poderia procurá-la especificamente e saber que a entrada era "maçãs"! 😱

> ⚠️ Para fins de segurança, é importante lembrar-se de usar um **salt** aleatório que você pode adicionar à sua entrada para torná-la indecifrável por meio dos métodos mencionados acima!

## 📋 Detalhes

### Tabela Rainbow 🌈

Uma tabela Rainbow é simplesmente uma tabela que mapeia entradas comuns para sua saída de hash. Por exemplo, poderíamos mapear senhas comuns para seus hashes SHA256:

| SENHAS COMUNS | SHA256 HASH       |
| ------------- | ----------------- |
| password      | 0x5e8848...1542d8 |
| qwerty        | 0x65e84b...2337c5 |
| 111111        | 0xbcb15f...09802a |
| 12345678      | 0xef797c...98a64f |
| abc123        | 0x6ca13d...118090 |

Embora a senha deva ser indecifrável, dada uma saída de hash, essas senhas comuns facilitam a criação de uma tabela rainbow para descobrir qual seria a entrada de texto simples.

> ⚠️ Se uma empresa perder seu banco de dados de senhas (o que acontece com [muita frequência](https://haveibeenpwned.com/)) e não proteger os hashes de senha com um salt, pode ser relativamente fácil para um hacker usar uma tabela rainbow para descobrir quais senhas você usa. A partir daí, ele pode testar essas senhas em outros serviços.

## 🏁 Seu objetivo: encontrar a cor

Dado um hash SHA256, encontre a entrada de cor que geraria esse hash. Você pode presumir que todos os hashes sejam gerados somente a partir das cores fornecidas na matriz `COLORS`.

Para obter o hash de uma cor, primeiro use `utf8ToBytes` para converter a cadeia de caracteres em bytes. Em seguida, use `sha256` para fazer o hash.
Quando você quiser comparar dois hashes, primeiro use `toHex` para transformar cada hash de um [Uint8Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) em uma cadeia de caracteres hexadecimais.

Portanto, a comparação de dois hashes seria semelhante a esta:

```js
const a = "apple";
const b = "banana";

const aBytes = utf8ToBytes(a);
const bBytes = utf8ToBytes(b);

const aHash = sha256(aBytes);
const bHash = sha256(bBytes);

console.log(toHex(aHash) === toHex(aHash)); // true
console.log(toHex(aHash) === toHex(bHash)); // falso
```

> 📖 Está se perguntando o que significa utf8? O padrão UTF-8 traduz em bytes todos os caracteres possíveis do teclado que você possa imaginar. Esse é um padrão acordado para garantir que todos recebam os mesmos valores de bits que representam as letras e palavras que vemos na tela. Saiba mais sobre o [utf8 aqui](https://pt.wikipedia.org/wiki/UTF-8).

## 🧪 Executar teste

Para verificar se está correto acesse esse caminho em seu terminal e execute o seguinte comando:

```bash
cd 01-Blockchain_Cryptography/01-The_First_Primitive/01-Find_Favorite_Color/src
yarn test
```

ou 

```bash
cd 01-Blockchain_Cryptography/01-The_First_Primitive/01-Find_Favorite_Color/src
yarn mocha ./test.js
```