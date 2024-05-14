# Definindo a Dificuldade

No bitcoin, a dificuldade é ajustada a cada 2016 blocos, ou seja, a cada duas semanas, com os blocos sendo minerados em média a cada 10 minutos.

Nesse ponto, a dificuldade é ajustada para tentar manter os intervalos de mineração em torno dessa marca de 10 minutos por bloco.

## 🏁 Seu objetivo: Proof of Work

Agora é hora de realmente minerar o bloco. É aqui que começamos a parte do **trabalho** da prova de trabalho!

1. Na função `mine`, antes de fazer o hashing do bloco, adicione uma propriedade nonce. Essa propriedade deve começar em `0`
2. Continue alterando o nonce até encontrar um hash que **seja menor** que `TARGET_DIFFICULTY`

Você pode comparar um `BigInt` com outro `BigInt` usando os operadores de comparação do JavaScript.
Você pode converter de um hash para um `BigInt` por:

```javascript
const hash = SHA256("example");
const int = BigInt(`0x${hash}`);
```

## 🧪 Executar teste

Para verificar se está correto acesse esse caminho em seu terminal e execute o seguinte comando:

```bash
cd Blockchain_Cryptography/03-Proof_Of_Work/05-Difficulty/src
yarn test
```

ou 

```bash
cd Blockchain_Cryptography/03-Proof_Of_Work/05-Difficulty/src
yarn mocha ./test.js
```