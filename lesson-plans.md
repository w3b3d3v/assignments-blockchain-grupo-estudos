# Plano de Estudos Blockchain

Este plano de estudos é baseado no [Ethereum Developer Bootcamp](https://www.alchemy.com/university/courses/ethereum).


## Objetivo do Grupo de Estudos

O Grupo de Estudos é um ambiente dedicado ao compartilhamento e desenvolvimento de conhecimentos em blockchain e suas tecnologias.

## Cronograma

### 1. Criptografia Blockchain

Nesta fase inicial, mergulharemos nos fundamentos da criptografia, um conceito essencial para **entender o funcionamento das tecnologias blockchain**. Vamos explorar o que são **funções de hash** e o que as torna tão especiais. Como essas funções desempenham um papel crucial nas blockchains? Em seguida, exploraremos os **mecanismos de consenso**, essenciais para que redes descentralizadas cheguem a um acordo sobre transações e dados. Para aplicar nosso conhecimento, **criaremos um servidor seguro de chave pública-privada**.

| Conteúdo             | Referência                                                                                                                                                                                                                                 | Exercícios                                                                                   | Extra                                                                                                                                                                                   |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| O Primeiro Primitivo | [Slide Blockchain e criptografia](https://www.canva.com/design/DAGBM5hO5io/46Lep1kkC2akh4c0O5_xtw/view?utm_content=DAGBM5hO5io&utm_campaign=designshare&utm_medium=link&utm_source=editor)     | [Encontre a cor favorita](https://github.com/w3b3d3v/assignments-blockchain-grupo-estudos/tree/main/Ethereum_Dev_Bootcamp/01-Blockchain_Cryptography/01-The_First_Primitive)                                | -                                                                                                                                               |
| Assinaturas digitais | [Slide Criptografia de chave pública](https://www.canva.com/design/DAGAn2-41C4/D1IljDRNNJ_bLxnmoNMglA/view?utm_content=DAGAn2-41C4&utm_campaign=designshare&utm_medium=link&utm_source=editor) | [Hash Message, Sing Message, Recover Key, Key to Address](https://github.com/w3b3d3v/assignments-blockchain-grupo-estudos/tree/main/Ethereum_Dev_Bootcamp/01-Blockchain_Cryptography/02-Digital_Signatures) | [Recursos suplementares sobre assinaturas digitais](https://pt.w3d.community/viniblack/recursos-suplementares-sobre-assinaturas-digitais-2h6j)  |
| Proof of Work        | [Slide Prova de trabalho](https://www.canva.com/design/DAGD6n4EyC4/S2t5iiAUXGhMq2FDrN-kgA/view?utm_content=DAGD6n4EyC4&utm_campaign=designshare&utm_medium=link&utm_source=editor)             | [Mempool, Mine Block, Block Hash, Mine TX, Difficulty  ](https://github.com/w3b3d3v/assignments-blockchain-grupo-estudos/tree/main/Ethereum_Dev_Bootcamp/01-Blockchain_Cryptography/03-Proof_Of_Work)                                       | [Hashing e prova de trabalho (PoW)](https://pt.w3d.community/viniblack/hashing-e-prova-de-trabalho-pow-4pbi), [Recursos suplementares sobre Proof of Work](https://pt.w3d.community/viniblack/recursos-suplementares-sobre-prova-de-trabalho-2fch)   |
| Blockchain Network   | [Slide Blockchain structure](https://www.canva.com/design/DAGGbBpcf40/1fizaLnEQMNumeIPalyENQ/view?utm_content=DAGGbBpcf40&utm_campaign=designshare&utm_medium=link&utm_source=editor)          | [Blocks and hashes, what is in a hash, the genesis block, adding blocks, validating the chain](https://github.com/w3b3d3v/assignments-blockchain-grupo-estudos/tree/main/Ethereum_Dev_Bootcamp/01-Blockchain_Cryptography/04-Blockchain_Network) | [Leitura adicional sobre a Rede Bitcoin](https://pt.w3d.community/viniblack/leitura-adicional-sobre-a-rede-bitcoin-4bff)                                                                                                                |
| Desafio              | [ECDSA Node](https://github.com/w3b3d3v/assignments-blockchain-grupo-estudos/tree/main/Ethereum_Dev_Bootcamp/01-Blockchain_Cryptography/05-Assignments)                                                                                                       | -                                                                                            | -                                                                                                                                                                                                                                   |

### 2. Armazenamento Blockchain

Aqui, aprofundaremos nosso entendimento sobre as estruturas de dados utilizadas para a funcionalidade das blockchains, com foco especial nas árvores binárias. Além disso, compararemos o modelo UTXO, utilizado pelo Bitcoin para rastrear saldos, com o modelo baseado em contas da Ethereum.

| Conteúdo                                          | Referência                    | Exercícios                                                                                                                                                                                                                                               | Extra                                                                                                      |
|---------------------------------------------------|-------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|
| Acompanhamento do estado do usuário da blockchain | [Slide UTXO e Modelos de conta](https://www.canva.com/design/DAGLNv9oiXM/itvTjaQ2DPXTMSqDIL0XtQ/watch?utm_content=DAGLNv9oiXM&utm_campaign=designshare&utm_medium=link&utm_source=editor) | [Keeping Track of Blockchain User State, Tree Data Structures, Blockchain Data Storage](https://github.com/w3b3d3v/assignments-blockchain-grupo-estudos/tree/main/Ethereum_Dev_Bootcamp/02-Blockchain_Storage/01-Keeping_Track_of_Blockchain_User_State) | [Leituras adicionais sobre UTXOs](https://pt.w3d.community/viniblack/leituras-adicionais-sobre-utxos-537l) |
| Estruturas de dados em árvore                     |                               |                                                                                                                                                                                                                                                          |                                                                                                            |
| Armazenamento de dados em blockchain              |                               |                                                                                                                                                                                                                                                          |                                                                                                            |
| Desafio                                           | Merkle Tree Project           |                                                                                                                                                                                                                                                          |                                                                                                            |

### 3. Ethereum

É hora de fazer uma pausa nos conceitos mais densos de ciência da computação, como criptografia, redes peer-to-peer e estruturas de dados. Vamos nos concentrar na Ethereum e entender como funcionam as solicitações de leitura e gravação, e como são transmitidas através da interface JSON-RPC no nó padrão da Ethereum.

### 4. Noções básicas de Smart Contract

Agora, abordaremos os fundamentos dos smart contracts e entenderemos por que são tão empolgantes. Vamos aprender como programá-los utilizando Solidity, uma linguagem popular para desenvolver contratos inteligentes na Ethereum.

### 5. Solidity

Continuaremos a aprimorar nossas habilidades na linguagem Solidity.

### 6. Aprofundando em Solidity

Aprofundaremos ainda mais nossa compreensão da linguagem Solidity, explorando conceitos avançados.

### 7. Governança com Solidity

Finalmente, exploraremos casos de uso reais de smart contracts, utilizando aplicativos populares como Aave, Uniswap e Chainlink. Isso nos ajudará a aprofundar nosso aprendizado e nos inspirar para o projeto final do grupo.
Translate and improve on the page with DeepL
Click the icons to open the advanced mode window. Make informed edits and compare versions.
