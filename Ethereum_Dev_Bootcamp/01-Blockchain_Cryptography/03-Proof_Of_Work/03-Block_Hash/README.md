# Hash de Bloco

Normalmente, todas as informações no cabeçalho do bloco são combinadas para criar um hash exclusivo com base nessas propriedades.

Se algo for alterado no cabeçalho, isso afetará o hash. Como cada bloco também contém o hash do bloco anterior, isso também afetará todos os blocos futuros

## 🏁 Seu objetivo: Adicione o Hash


1. Stringify o objeto de bloco usando `JSON.stringify`
2. Obtenha o hash `SHA256` do objeto de bloco encadeado
3. Defina o valor resultante para uma propriedade de `hash` no bloco minerado imediatamente antes de minerá-lo

> ⚠️ Não adicione a propriedade hash no bloco antes de calcular o hash!

## 🧪 Executar teste

Para verificar se está correto acesse esse caminho em seu terminal e execute o seguinte comando:

```bash
cd Blockchain_Cryptography/03-Proof_Of_Work/03-Block_Hash/src
yarn test
```

ou 

```bash
cd Blockchain_Cryptography/03-Proof_Of_Work/03-Block_Hash/src
yarn mocha ./test.js
```