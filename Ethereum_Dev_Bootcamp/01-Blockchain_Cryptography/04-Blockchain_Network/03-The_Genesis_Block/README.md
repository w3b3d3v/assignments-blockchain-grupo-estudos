# Tempo de blockchain

Temos um novo arquivo: `Blockchain.js`. Que empolgante! 😁

Esta etapa se concentrará em adicionar o primeiro bloco à nossa nova classe Blockchain! O primeiro bloco é geralmente chamado de [Genesis Block](#genesis-block).

## 📋 Detalhes

<a id="genesis-block"></a>

### Bloco Genesis

O bloco genesis é o primeiro bloco da cadeia, onde tudo começa! Todos os blocos após o bloco de gênese são vinculados ao primeiro, mas o bloco de gênese não tem nenhum bloco anterior! É importante ter isso em mente nos próximos estágios. 🧠

Aqui estão alguns exemplos de blocos de gênese em blockchains ativos exibidos em seus respectivos exploradores de blocos:

#### Bloco Gênesis do Bitcoin

Aqui está o [bloco de gênese do Bitcoin no Block Explorer](https://blockstream.info/block/000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f) em 3 de janeiro de 2009.

#### Bloco Ethereum Genesis

Aqui está o [bloco Genesis da Ethereum no EtherScan](https://etherscan.io/block/0) em 30 de julho de 2015.

# 🏁 Seu objetivo: Adicionar o bloco Gênesis

O arquivo `Blockchain.js` contém a classe `Blockchain` com uma matriz de `chain`. Vamos adicionar o **Bloco Genesis** a essa matriz.

Crie um `new Block` no construtor do Blockchain e, em seguida, adicione-o ao array da `chain`.

## 🧪 Executar teste

Para verificar se está correto acesse esse caminho em seu terminal e execute o seguinte comando:

```bash
cd Blockchain_Cryptography/04-Blockchain_Network/03-The-Genesis-Block/src
yarn test
```

ou 

```bash
cd Blockchain_Cryptography/04-Blockchain_Network/03-The-Genesis-Block/src
yarn mocha ./test.js
```