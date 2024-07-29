# Saídas de transações não gastas

O Bitcoin usa** Unspent Transaction Outputs** para lidar com a propriedade de moedas pelo usuário. Isso se opõe a um modelo **baseado em contas** usado pelo Ethereum, que rastreia saldos de endereços específicos.

Vamos considerar alguns exemplos. 👇

## Exemplo 1 de UTXO

Bob executa um **Bitcoin Miner** . Ele calcula um bloco com sucesso e se recompensa com **12,5 BTC** conforme as regras de emissão. Este é um **Unspent Transaction Output** (UTXO) totalmente novo que Bob introduziu no sistema.

Agora, digamos que Bob queira enviar 6,0 BTC para Alice. Ele pode fazer isso usando seu UTXO com 12,5 BTC. Mas, espere, Bob não quer enviar 12,5 BTC para Alice! Como lidamos com o **restante**? 🤔

Acontece que o Bitcoin permite que você designe **múltiplas saídas** por transação. Nesta transação em particular, criaremos um UTXO de **6,0 BTC para Alice** e outro UTXO de **6,5 BTC** para Bob (o restante). Então, marcaremos o UTXO de 12,5 BTC como **gasto** , já que foi usado como uma entrada para a transação. Legal! 😎

## Exemplo 2 de UTXO

Uma coisa que pode acontecer frequentemente ao usar esse modelo é que os usuários acabam com muitos UTXOs pequenos. Conforme **Alice** faz transações com a rede, o UTXO se divide em saídas menores até que ela fique com 3 UTXOs de valores 1,0 BTC, 1,5 BTC e 0,8 BTC.

Digamos que Alice queira comprar algo por **3,0 BTC** . Ela pode fazer isso especificando **muitas entradas** para a transação. Ela pode colocar todos os três UTXOs como entradas na transação para um total de 3,3 BTC. Após a transação ser executada, ela receberá um novo UTXO de 0,3 BTC e suas entradas anteriores serão todas marcadas como gastas.

Ok, chega de exemplos por enquanto! Vamos aprender por nós mesmos com alguns exercícios de codificação.

[Start coding](./01-Transaction_Output)
