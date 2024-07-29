# Taxa de minerador

Neste ponto, você pode estar se perguntando por que no terceiro estágio exigimos apenas que o valor total de entrada **fosse maior** que o valor total de saída.

Não deveríamos também lançar um erro quando o valor de saída for menor? 🤔

Não! Na verdade, **o restante é dado ao minerador**! 🔨

Esta é uma escolha de design no sistema Bitcoin. É chamada de **taxa de transação**.

A taxa de transação pode ajudar a agilizar sua solicitação. É muito mais provável que um minerador inclua sua transação em seu próximo bloco se você incluir um prêmio bem alto para ele coletar!💰

> 📖 O Bitcoin tem um [suprimento controlado](https://en.bitcoin.it/wiki/Controlled_supply). Por um tempo limitado, há uma recompensa para o minerador em cada bloco. Em um certo ponto, isso vai parar e a única recompensa para o minerador se tornará as **taxas de transação**.

## 🏁 Seu objetivo: Calcular a taxa!

No final da função `execute`, calcule a taxa como a soma de todas as entradas menos a soma de todas as saídas.

1. Dado que lançamos um erro se as entradas forem insuficientes, esse número deve ser **pelo menos zero**. Sempre que as saídas forem menores, essa deve ser uma taxa positiva.
2. Armazene o valor da taxa em uma propriedade chamada `fee` na própria transação.

Por exemplo:
```javascript
const iTXO = new TXO(fromAddress, 5);
const oTXO = new TXO(toAddress, 3);

const tx = new Transaction([iTXO], [oTXO]);

tx.execute();

console.log( tx.fee ); // 2
```

Boa dica! 🎩


## 🧪 Executar teste

Para verificar se está correto acesse esse caminho em seu terminal e execute o seguinte comando:

```bash
cd 02-Blockchain_Storage/01-Keeping_Track_of_Blockchain_User_State/05-Miners_Fee/src
yarn test
```

ou 

```bash
cd 02-Blockchain_Storage/01-Keeping_Track_of_Blockchain_User_State/05-Miners_Fee/src
yarn mocha ./test.js
```