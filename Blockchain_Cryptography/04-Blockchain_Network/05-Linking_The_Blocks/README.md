# Hash Anterior

É hora de adicionar mais uma entrada **crucial** ao cálculo do hash do nosso bloco: o **hash do bloco anterior** na cadeia.

![Imgur](https://i.imgur.com/2k7rPv9.png)

Isso cria uma cadeia em que qualquer alteração nos dados de um bloco anterior afetará cada bloco subsequente.

> 🔎 Vamos dar uma olhada no que uma mudança faria em [detalhes](#modificacao-dados).

## 📋 Detalhes

<a id="modificacao-dados"></a>

### Modificação de dados

O diagrama abaixo mostra como cada bloco contém um hash dos dados do bloco e o hash do bloco anterior. A compreensão dessa arquitetura nos ajudará a entender por que uma cadeia de blocos é considerada tão segura.

![Imgur](https://i.imgur.com/2k7rPv9.png)

**Experimento mental**: O que aconteceria se mudássemos o BTC de Alice para "4 BTC" no Bloco Gênesis? 🤔

Vamos destacar as alterações em **vermelho**:

![Imgur](https://i.imgur.com/H7T01b6.png)

Uau! Cada hash foi alterado 🤯

Como os dados do primeiro bloco afetaram o cálculo do hash do bloco Genesis, seu hash foi alterado. O hash do Genesis afeta então o cálculo do hash do Bloco nº 1, pois seu hash inclui o hash do bloco anterior (hash do Bloco Genesis). Portanto, o hash do Bloco nº 1 também foi alterado. O hash do Bloco nº 1 afeta então o cálculo do hash do Bloco nº 2. Esse tipo de padrão continuará até o enésimo bloco em uma blockchain de comprimento N. Com isso em mente, podemos concluir que a alteração de um bloco anterior em uma cadeia de blocos **sempre afetará todos os blocos após essa alteração inicial**.

Isso significa que, para fazer **até mesmo a menor alteração** nos dados do bloco de gênese, seria necessário **substituir toda a cadeia de blocos**.

> 🧠 O motivo pelo qual as cadeias de blocos são seguras é que uma rede maciça trabalha continuamente para **computar um único bloco**, enquanto um hacker precisaria **computar vários blocos** para realmente afetar o histórico de uma cadeia de blocos. Esse processo de computação é chamado de **mineração** e falaremos sobre por que ele é computacionalmente caro em uma etapa futura.

# 🏁 Seu objetivo: Link Blocks

Para vincular os blocos, é necessário realizar duas coisas:

1. Adicione uma propriedade `previousHash` a cada bloco. O valor dessa propriedade deve ser o hash do bloco **anterior a ele** na cadeia.
2. Use essa propriedade `previousHash` no cálculo do hash do bloco.

> 💡 Dicas

* Um bom local para adicionar a propriedade `previousHash` no bloco seria na função `addBlock`, em que um bloco é colocado na cadeia.
* Até o momento, a classe `Block` em seu arquivo `Block.js` ainda não contém uma propriedade `previousHash` e, no momento, só faz o hash de `this.data` de um bloco - você também deve incluir a propriedade `this.previousHash` do bloco na função `toHash`!
* Você pode adicionar várias entradas à função SHA256 usando o operador + por exemplo:

```javascript
    const hash = SHA256("dog" + "cat"); // hash de cachorro e gato juntos
```

## 🧪 Executar teste

Para verificar se está correto acesse esse caminho em seu terminal e execute o seguinte comando:

```bash
cd Blockchain_Cryptography/04-Blockchain_Network/05-Linking_The_Blocks/src
yarn test
```

ou 

```bash
cd Blockchain_Cryptography/04-Blockchain_Network/05-Linking_The_Blocks/src
yarn mocha ./test.js
```