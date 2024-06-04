# Blocos e hashes

O nome Blockchain é muito apropriado! Ela é, de fato, uma **cadeia de blocos**. 🅱️⛓

Cada bloco contém **dados transacionais**, alguns **metadados** que descrevem o próprio bloco e um **link** para o bloco anterior. Esses componentes são inseridos em uma [função de hash](#funcao-hash) para criar uma sequência exclusiva de bits para representar o bloco.



## 📋 Detalhes

<a id="funcao-hash"></a>

### Função hash

As funções de hash são usadas para receber dados de entrada de qualquer tamanho e gerar uma série exclusiva de bits de um tamanho específico que representa os dados originais.

Uma função de hash criptográfica ideal pode, com qualquer entrada, retornar uma saída **consistente**, mas **aparentemente aleatória**.

É importante que o resultado seja **consistente** para que possamos confiar em colocar as mesmas entradas e receber o mesmo resultado.

Também é importante que a **aleatoriedade** seja forte o suficiente para que seja impossível reconstruir a entrada a partir da saída. Dessa forma, sabemos que é à prova de violação.

Por exemplo, o algoritmo `SHA256` receberá uma entrada como Dan e retornará uma saída consistente:

```javascript
    const hash = SHA256("Dan");
    console.log( hash.toString() ); // b12595…1cbe7e
```

> ☝ O registro é abreviado e, na verdade, tem 64 caracteres hexadecimais. O SHA256 produz **256** bits. Como um caractere hexadecimal requer **4** bits, há **64** caracteres hexadecimais em um hash SHA256.

Se, em vez disso, minha entrada fosse o `dan` em minúsculas, o resultado seria **completamente** diferente:

```javascript
    const hash = SHA256("dan");
    console.log( hash.toString() ); // ec4f2d…56f1cb
```

Essas saídas de hash são **aparentemente aleatórias** em relação às suas entradas: `"Dan"` e `"dan"`. Eles também são **consistentes**, ou seja, ao inserir essas entradas, sempre obteremos os mesmos resultados. Por esses motivos, o sha256 é uma função de hash criptográfico ideal e é usado com frequência em programas criptográficos.

<a id="cripto-js"></a>

### Crypto-JS

A biblioteca `crypto-js` nos fornece vários utilitários criptográficos. Especificamente, o método `SHA256` é uma implementação do algoritmo SHA256 projetado pela NSA.

Essa função recebe qualquer cadeia de caracteres como argumento, independentemente do tamanho, e a transforma em uma matriz de 256 bits. Se chamarmos `toString()` nesse objeto retornado, receberemos uma cadeia hexadecimal de 64 caracteres.

<a id="hexadecimal"></a>

### Hexadecimal
Você perceberá que as saídas mostradas consistem em um conjunto de caracteres que vão de `a` a `f` e de `0` a `9`. Esses são **caracteres hexadecimais**. Tornou-se comum usar hexadecimal ao exibir um hash.

> 🧐 Você também verá com frequência um hash com um `0x` na frente. Esse prefixo significa que a **notação hexadecimal está sendo usada**. Portanto, se você vir uma cadeia de caracteres `"0x123abc"`, o "`0x"` indica o uso de hexadecimais e o valor da cadeia é, na verdade, apenas `"123abc"`.

Para o arquivo de teste nesta etapa, você notará que o hash do bloco está sendo testado pela expressão regular (regex) `/^[0-9A-F]{64}$/i`. Ela está simplesmente testando para ver se essa é uma saída hexadecimal de 64 caracteres.

> 🔠 As expressões regulares podem ajudar a definir um padrão de pesquisa para dados de entrada. Saiba mais sobre expressões regulares na [MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions)

**Por que 64 caracteres hexadecimais?**

Um bit pode representar dois valores: `0` e `1`. Dois bits podem representar quatro valores: `00`, `01`, `10` e `11`. Quatro bits podem representar 16 valores de `0000` a `1111`. Podemos mapear cada um desses valores para um caractere no alfabeto hexadecimal, pois ele contém 16 caracteres! Como o `SHA256` gera 256 bits, dividimos esse valor pelo número de bits para representar um caractere hexadecimal (4) para obter 64 caracteres.

# 🏁 Seu objetivo: Retorna um Hash

Em seu arquivo **Block.js**, temos uma classe **Block**. Usando a função **SHA256** da biblioteca [Crypto JS](#cripto-js), retorne um hash válido na função toHash.

Por enquanto, não há necessidade de fazer hash de nada em particular, pois o bloco não contém nenhum dos componentes mencionados acima.

> 🎨 Sinta-se à vontade para enviar uma mensagem, seu próprio nome ou nada! Contanto que seja uma cadeia [hexadecimal](#hexadecimal) de 64 caracteres, você passará nesta etapa.

## 🧪 Executar teste

Para verificar se está correto acesse esse caminho em seu terminal e execute o seguinte comando:

```bash
cd Blockchain_Cryptography/04-Blockchain_Network/01-Blocks_and_Hashes/src
yarn test
```

ou 

```bash
cd Blockchain_Cryptography/04-Blockchain_Network/01-Blocks_and_Hashes/src
yarn mocha ./test.js
```