# Blocos de mineração

No Bitcoin, os blocos contêm uma grande quantidade de informações em seu cabeçalho: a **versão do software**, **timestamp**, o **merkle root**, o **hash do bloco anterior** e a **dificuldade**.

## 🏁 Seu objetivo: Minerar o bloco

O objetivo desta etapa é atualizar a função `mine()` para criar um novo bloco com um identificador exclusivo e adicioná-lo à nossa matriz de `blocks`.

Para fins deste exercício de mineração, nosso bloco será um objeto com uma única propriedade: um `id` que é igual à **tamanho do bloco** antes de ser minerado.

1. Atualize a função `mine()` para criar um novo objeto de bloco com uma única propriedade: `id`
2. Defina a propriedade `id` como a altura do bloco antes de o novo bloco ser adicionado
3. Adicione o objeto de bloco para a matriz de `blocks`

## 🧪 Executar teste

Para verificar se está correto acesse esse caminho em seu terminal e execute o seguinte comando:

```bash
cd Blockchain_Cryptography/03-Proof_Of_Work/02-Mine_Block/src
yarn test
```

ou 

```bash
cd Blockchain_Cryptography/03-Proof_Of_Work/02-Mine_Block/src
yarn mocha ./test.js
```