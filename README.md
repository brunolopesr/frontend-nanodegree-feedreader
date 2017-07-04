# Nanodegree TDD Feed Reader

Este projeto P6 do curso Nanodegree Desenvolvedor Web Front End da Udacity, serve para demonstrar os conhecimentos obtidos no curso de TDD,
o qual faz parte do nanodegree em questão.

Utilizando a framework de testes Jasmine, criamos vários testes para um aplicativo de Leitura de RSS Feeds.

Os testes feitos foram:

- Se todos os feeds tem URL definida e não vazia, ou seja, se cada objeto dentro do array allFeeds tem um atributo url
e se esse atributo não é igual a uma string vazia ''

- Se todos os feeds tem nome definido e não vazio, ou seja, se cada objeto dentro do array allFeeds tem um atributo name
e se esse atributo não é igual a uma string vazia ''

- Se o menu do aplicativo é oculto por padrão.

- Se o botão de menu mostra e oculta o menu com sucesso.

- Se o feed carrega com sucesso, ou seja, se loadFeed (função assíncrona) depois de concluir sua execução, gera pelo menos
um elemento '.entry' dentro do contâiner '.feed'

- Se trocar de feed realmente troca os artigos, ou seja, testa se selecionar outro feed no menu realmente troca os artigos depois
que loadFeed (função assíncrona) termina sua execução.

# Como utilizar o aplicativo online

- Acesse o [aplicativo](https://brunolopesr.github.io/frontend-nanodegree-feedreader)

- Verifique a seção Jasmine do aplicativo e os testes realizados e como eles são concluídos com sucesso

- Para maior entendimento, abra o arquivo jasmine/spec/feedreader.js para estudar os matchers do Jasmine nos recursos
do Feed Reader

# Como utilizar o aplicativo localmente

1. Baixe ou clone este repositório
2. Navegue até o diretório local
3. Abra o arquivo index.html em um navegador de internet (Exemplo: Google Chrome)