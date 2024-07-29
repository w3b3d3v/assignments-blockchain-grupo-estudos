# ECDSA Node

A melhor maneira de entender profundamente a blockchain é colocar-se no modo de desenvolvimento. Como seria construir sua própria blockchain? Vamos começar aplicando nosso conhecimento sobre hashes e assinaturas digitais em nosso primeiro projeto: **ECDSA Node**.

Nesse projeto, você terá um front-end react simples que se comunicará com um único servidor. Esse servidor será responsável pela transferência de saldos entre contas. Como se trata de um único servidor, ele é *centralizado*, portanto, precisaremos confiar que o operador do servidor não é mal-intencionado para este exercício (falaremos mais sobre isso depois!).

## 🏁 Seu objetivo: ECDSA

Este projeto começa com um cliente que tem permissão para transferir quaisquer fundos de qualquer conta para outra conta. Isso não é muito seguro. Ao aplicar assinaturas digitais, podemos exigir que somente o usuário com a **chave privada** apropriada possa criar uma assinatura que permita a transferência de fundos de uma conta para outra. Em seguida, o servidor pode **verificar** a assinatura para movimentar fundos de uma conta para outra.

1. Incorporar a criptografia de chave pública para que as transferências só possam ser concluídas com uma assinatura válida
2. A pessoa que envia a transação deve verificar se possui a chave privada correspondente ao endereço que está enviando os fundos

> 🤔 Enquanto estiver trabalhando neste projeto, considere as implicações de segurança de suas decisões de implementação. E se alguém interceptasse uma assinatura válida, seria possível reproduzir essa transferência enviando-a de volta ao servidor?

### Instruções por escrito
Para este projeto, você fará o desenvolvimento local. Isso significa que você precisará de algumas coisas extras para configurar:
1. Faça o download de um editor de código, se ainda não tiver um, recomendamos o VSCode, mas fique à vontade para escolher o editor que preferir
2. Clone esse repositório localmente: https://github.com/alchemyplatform/ecdsa-node executando o seguinte comando em sua linha de comando:
> git clone git@github.com:alchemyplatform/ecdsa-node.git

3. Siga as instruções do Leiame para saber como executar o projeto. Certifique-se de executar o cliente e o servidor como dois processos separados!

Depois de começar a funcionar, você notará alguns componentes que nos são fornecidos para iniciar:

1. Endereços de carteira - há três endereços e saldos de carteira predefinidos em nosso arquivo `index.js` do servidor
2. O lado esquerdo da interface do usuário nos mostra a carteira e o saldo da conta
3. O lado direito da interface do usuário é onde podemos enviar um valor para um endereço de carteira especificado

### Dicas
#### Recursos úteis
Vamos incorporar os conceitos que aprendemos nesta semana ao projeto final. Aqui estão alguns recursos que lhe serão úteis ao trabalhar nesse projeto:

1. Exercícios sobre chaves públicas na lição sobre assinaturas digitais (Recuperar chaves, assinar mensagens, fazer hash de mensagens)
2. A biblioteca [Ethereum Cryptography](https://github.com/ethereum/js-ethereum-cryptography) - especificamente a [geração de chaves privadas aleatórias](https://github.com/ethereum/js-ethereum-cryptography#secp256k1-curve)

#### Soluções ideais
Como em todos os projetos abertos, há várias soluções que podemos criar aqui, algumas são melhores do que outras. Recomendamos assistir ao [vídeo passo a passo (EN)](https://www.loom.com/share/0d3c74890b8e44a5918c4cacb3f646c4) para entender quais são as soluções ideais e as vantagens e desvantagens de cada caminho.