# Adição de dados ao Hash

Agora é hora de adicionar `dados` ao nosso hash. Isso garantirá que o hash do bloco esteja [vinculado ao seu conteúdo](#segurança-dados)!

## 📋 Detalhes

<a id="segurança-dados"></a>

### Segurança de dados

Nesse estágio, usamos dados para representar alguns dados arbitrários que podem ser armazenados em um bloco. Fazemos o hash dos dados para criar uma representação pequena e exclusiva desses dados. Se os dados forem alterados dentro de um bloco, veremos isso refletido no hash do bloco. Ele seria **totalmente diferente**!

> 📖 Para blockchains reais, os `dados` são geralmente um conjunto de transações armazenadas em uma árvore de merkle. Falaremos sobre isso em uma lição futura.

Podemos adicionar outras propriedades ao hash, como um registro de `timestamp` em que o bloco foi extraído. Dessa forma, o bloco é vinculado a um ponto específico no tempo. Seria praticamente impossível que alguém criasse um hash com os mesmos dados e um carimbo de data/hora diferente.

Nas próximas etapas, aprenderemos a tornar esse registro de hash ainda mais poderoso vinculando cada um desses blocos.

# 🏁 Seu objetivo: Hash dos dados

Ao criar um novo bloco, os `dados` serão passados para seu construtor:

```javascript
    const block = new Block("Alice enviou a Bob 1 BTC");

    console.log( block.data ); // Alice enviou a Bob 1 BTC
```
☝ Como mostrado acima, vamos adicionar uma propriedade de dados ao bloco.

1. Adicione um construtor à nossa classe `Block` que recebe um argumento `data` e o atribui a `this.data`.
2. Depois de adicionar dados ao `bloco`, use esses dados para calcular o hash do bloco na função `toHash`!

## 🧪 Executar teste

Para verificar se está correto acesse esse caminho em seu terminal e execute o seguinte comando:

```bash
cd Blockchain_Cryptography/04-Blockchain_Network/02-Whats_in_a_Hash/src
yarn test
```

ou 

```bash
cd Blockchain_Cryptography/04-Blockchain_Network/02-Whats_in_a_Hash/src
yarn mocha ./test.js
```