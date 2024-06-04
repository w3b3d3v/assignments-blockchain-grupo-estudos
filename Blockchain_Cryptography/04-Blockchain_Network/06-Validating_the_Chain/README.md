# Validação da chain

Os blockchains são executados por uma rede de computadores. Quando um computador encontra um novo bloco, ele transmite sua nova versão do blockchain para todos os seus pares. Pode haver várias versões do blockchain em um determinado momento. Entretanto, o **blockchain válido mais longo** é o aceito.

> 🔎 Vamos dar uma olhada mais de perto na lógica por trás disso em [detalhes](#consenso-blockchain).

## 📋 Detalhes

<a id="consenso-blockchain"></a>

### Consenso em blockchain

Diz-se que as blockchains compartilham uma fonte comum de verdade. Isso ocorre porque todas as máquinas que operam na rede podem chegar a um **consenso** comum sobre qual é a verdade.

O mecanismo de consenso que descrevemos nesta lição é chamado de **Prova de Trabalho**. Uma das principais regras do Proof of Work é que a **cadeia mais longa** vence. Essa regra existe para garantir que a versão do blockchain com** mais recursos computacionais** seja a versão atual da verdade.

Portanto, a pergunta que devemos fazer a nós mesmos é:** Por que é tão difícil computar um novo bloco?** 🤔

A resposta é que ele foi **projetado para ser difícil**. A dificuldade é um **recurso** de uma blockchain projetada para exigir recursos significativos a fim de derivar um novo bloco. Essa é a **segurança** por trás da rede, o que a torna extremamente cara para ser atacada. 🔒

O processo pelo qual um novo bloco é derivado é chamado de **mineração** e a dificuldade da mineração é ajustada pela rede à medida que novos recursos entram e saem do sistema.

### Mineração ⛏️

A mineração é o processo pelo qual novos blocos são descobertos para uma blockchain. Um novo bloco precisa atender a regras para se encaixar em uma cadeia de blocos.

Essas regras são aquelas em que estamos trabalhando! O novo bloco deve incluir um hash calculado por alguns **metadados**, alguns **dados transacionais** e o **hash anterior** do bloco que o precedeu.

Uma última regra foi adicionada para manipular a dificuldade do bloco: O hash do bloco deve conter um **determinado número de zeros**.

☝ A única maneira de obter esse hash com os dados mencionados é adicionar um valor aleatório, chamado de **nonce**, aos dados durante o cálculo do hash. Essencialmente, o computador deve **continuar adivinhando incessantemente** até encontrar um bloco que satisfaça essas condições.

Quando um bloco é encontrado, o computador transmite esse bloco para a rede e é recompensado financeiramente por isso.


# 🏁 Seu objetivo: Criar uma função isValid

1. Crie uma função chamada `isValid` em nosso `Blockchain` que retornará `true` ou `false` se um bloco for válido ou inválido, respectivamente
2. `isValid` deve verificar a integridade de cada bloco em sua cadeia, observando o campo `previousHash` de cada bloco e certificando-se de que ele seja igual ao hash do bloco anterior

## 💡 Dica

> Para comparar a saída da função `SHA256`, você precisará convertê-la em uma cadeia de caracteres (`.toString`) antes de compará-la. Exemplo:

```javascript
    const hash1 = SHA256("a");
    const hash2 = SHA256("a");

    console.log(hash1 === hash2); // false
    console.log(hash1.toString() === hash2.toString()); // true
```

> 👀 Observe que o primeiro é `false`! Esses dois são **objetos** e são comparados por **referência**, e é por isso que precisamos convertê-los em uma string!

## 🧪 Executar teste

Para verificar se está correto acesse esse caminho em seu terminal e execute o seguinte comando:

```bash
cd Blockchain_Cryptography/04-Blockchain_Network/06-Validating_the_Chain/src
yarn test
```

ou 

```bash
cd Blockchain_Cryptography/04-Blockchain_Network/06-Validating_the_Chain/src
yarn mocha ./test.js
```