# Sobre o projeto 2bdigital

> O projeto pode ser acessado no link a seguir => https://technical-test-2bdigital.vercel.app

## Requisitos para rodar o projeto

  ### Setup:
  * Node LTS
  * Yarn v1.22
  
  ### Como rodar o projeto?
  * Clone o projeto do repositório: ```git clone https://github.com/thetunnes/technical-test-2bdigital.git```
  * Instale as dependências usando o ``yarn``
  * Execute o comando `yarn dev` para iniciar o projeto.
  * Pronto, agora você já tem acesso a sua aplicação na porta `:3000`

  ### Technologies
  * Vite v4.4.5
  * TypeScript
  * ESLint
  * Config ESLint Rocketseat v2.1.0
  * Zustand
  * Swiper
  * Lucide React (Icons)

## Sobre 2bstore Site

  Esse projeto, foi desenvolvido como parte do processo de candidatura para a 2bdigital, foi disponibilizado um protótipo no Adobe Xd que deveríamos seguir para desenvolver
  um layout de e-commerce utilizando como preferência a biblioteca React.

  O projeto foi iniciado usando Vite.js, uma ferramenta que facilita, ajuda e agiliza o desenvolvimento de aplicações javascript. Instalei então o Vite utilizando o Yarn
  com um template para React usando TypeScript.


  ### Testes automatizados (unit test)

  Como boa prática para escrita de código saber desenvolver testes unitários é essencial, qualquer aplicação web se beneficia dos testes automatizados, como também auxiliam muito o desenvolvedor a criar e refatorar o código já testado. 
  
  Não utilizei os benefícios do TDD no projeto, pois ele já estava pronto e funcional, faltavam apenas os `unit test`. Aqui nesse pequeno trecho irei falar um pouco sobre os meus conhecimentos e o que eu aprendi desenvolvendo testes para a aplicação:

  * `TDD é uma metodologia ágil o qual nos diz para desenvolver orientado a testes, ou seja, 1º desenvolver os testes, 2º criar o código/refatorar até que passe no teste (Red, Refactoring, Green)`

  #### Bibliotecas para criação dos testes
  * @testing-library/react
  * vitest
  * @vitest/coverage-v8
  * @vitest/ui

  #### Funções, ferramentas e utilitários

  * vi => utilitário do vitest que trás diversas funções que facilita a criação de testes
  * render => Insere elementos e componentes no `document.body`
  * screen => Auxilia na seleção de elementos em tela e permite executar eventos para eles
  * beforeEach => função executada antes de executar cada teste, serve geralmente para resetar campos ou definir uma estrutura
  * renderHook => uma função criada pela testing-library que define um escopo para executar hooks da aplicação dentro dos testes
  * act => essa função eu de fato não conhecia, desenvolvendo os testes para essa aplicação vi os benefícios que ela trás. Definida na própria utils de testes do React essa função simula melhor o teste para funcionar como se estivesse em um navegador, em conjunto do renderHook eles simulam muito bem como as funções e alteração de estados são executadas no navegador. 

  A refatoração de código no componente `ProductInCart` e criação da função `productIsOnSale()` foi necessária para cobrir todos os testes dentro do componente, só fui entender que o código estava com "problema" e verboso após começar a idealizar os testes unitários nesse componente.
  
  #### Estilizações iniciais (CSS3)
  Iniciando o projeto, logo apaguei alguns arquivos que não seriam necessários e criei uma base de estilos que seriam utilizados por toda a aplicação. 
  Dentro do arquivo `index.css` foram adicionado as váriaveis de CSS, com cores, espaçamentos, tamanho de fonte, espaço entre letras e linhas que seriam utilizadas 
  por toda a aplicação, essas váriaveis foram adicionadas na pseudoclasse `:root`, a qual simboliza que poderá ser acessado por qualquer arquivo CSS que estiver dentro do HTML.
  
  No mesmo arquivo `index.css` adicionamos também estilizações padrão para nossa aplicação com principal intuito de resetar estilizações padrão de alguns navegadores, mas também defini uma base de estilos para fonte, 
  cores e background que facilitam o desenvolvimento de toda a aplicação.

### Escolhendo bibliotecas
Para manter um padrão na escrita de código da aplicação, adicionei uma configuração ao `ESLint` já instalado junto ao Vite. Escolhi utilizar instalar um pacote npm criado com um padrão de `ESLint` e `Prettier` já configurados.

#### Zustand
O projeto consiste em desenvolver o visual de um e-commerce, um e-commerce geralmente dá acesso ao carrinho de compras em qualquer página da aplicação,
para isso, escolhi utilizar o `zustand`, uma biblioteca para gerenciamento de estados de forma global (onde qualquer lugar da aplicação eu possa acessar a store e manipular
os dados e funções que pertence aquele estado). No `zustand`, foi adicionado todo o código para manipular o estado do carrinho de compras (adicionar produtos, remover produtos, manipular quantidade dentro do estoque, visualizar quantidade e listar os produtos).

#### Swiper
A aplicação utiliza de Slides por toda a página, para desenvolver bons sliders personalizados, instalei a lib do `swiper` na aplicação, que trás Sliders de fácil manipulação, fácil
edição e com acessibilidade implementada, é uma das melhores e mais utilizadas bibliotecas para slides do mercado.
