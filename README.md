# Sobre o projeto 2bdigital

## Requisitos para rodar o projeto

  ### Setup:
  * Node LTS
  * Yarn v1.22
  
  ### Como rodar o projeto?
  * Clone o projeto do repositório: ```git clone https://github.com/thetunnes/technical-test-2bdigital.git```
  * Instale as dependências usando o ``yarn``
  * Execute o comando `yarn dev` para iniciar o projeto.
  * Pronto, agora você já tem acesso a sua aplicação na porta `:3000`

## Sobre 2bstore Site

  Esse projeto, foi desenvolvido como parte do processo de candidatura para a 2bdigital, foi disponibilizado um protótipo no Adobe Xd que deveríamos seguir para desenvolver
  um layout de e-commerce utilizando como preferência a biblioteca React.

  O projeto foi iniciado usando Vite.js, uma ferramenta que facilita, ajuda e agiliza o desenvolvimento de aplicações javascript. Instalei então o Vite utilizando o Yarn
  com um template para React usando TypeScript.
  
  #### Estilizações iniciais (CSS3)
  Iniciando o projeto, logo apaguei alguns arquivos que não seriam necessários e criei uma base de estilos que seriam utilizados por toda a aplicação. 
  Dentro do arquivo `index.css` foram adicionado as váriaveis de CSS, com cores, espaçamentos, tamanho de fonte, espaço entre letras e linhas que seriam utilizadas 
  por toda a aplicação, essas váriaveis foram adicionadas na pseudoclasse `:root`, a qual simboliza que poderá ser acessado por qualquer arquivo CSS que estiver dentro do HTML.
  
  No mesmo arquivo `index.css` adicionamos também estilizações padrão para nossa aplicação 
  (com principal intuito de resetar estilizações padrão de alguns navegadores, mas também defini uma base de estilos para fonte, 
  cores e background que facilitam o desenvolvimento de toda a aplicação.

### Escolhendo bibliotecas
Para manter um padrão na escrita de código da aplicação, adicionei uma configuração ao `ESLint` já instalado junto ao Vite. Escolhi utilizar uma lib disponibilizada pela
Rocketseat que foi apresentada como uma fácil configuração nos projetos desenvolvidos ao longo do curso, para projetos pequenos e projetos pessoais eu quase sempre utilizo
essas configurações, já em projetos grandes e de empresas é preferível que se crie uma configuração personalizada para o projeto!

O projeto consiste em desenvolver o visual de um e-commerce, um e-commerce geralmente dá acesso ao carrinho de compras em qualquer página da aplicação,
para isso, escolhi utilizar o `zustand`, uma biblioteca para gerenciamento de estados de forma global (onde qualquer lugar da aplicação eu possa acessar a store e manipular
os dados e funções que pertence aquele estado). No `zustand`, foi adicionado todo o código para manipular o estado do carrinho de compras (adicionar produtos, remover produtos, manipular quantidade dentro do estoque, visualizar quantidade e listar os produtos).

No projeto, temos pelo menos 2 páginas, a  1ª sendo a landing page inicial com banner e mostruário de produtos, a 2ª sendo a página individual de cada produto,
para fazer o roteamento de páginas pela aplicação, utilizei do `react-router-dom`, que nos permite customizar todas as rotas da aplicação e trás funções que facilitam e agilizam
a manipulação de rotas dentro de uma aplicação React.

Nota-se também que na aplicação, as duas páginas possuem um mesmo layout base (header, 1 seção de produtos e footer), para isso englobei as duas páginas em um único `<Route />`
e passei para ele o `<BaseLayout />`, um componente que renderiza o layout base e substitui o `<Outlet />` pelo conteúdo da página em si.

A aplicação utiliza de Slides por toda a página, para desenvolver bons sliders personalizados, instalei a lib do `swiper` na aplicação, que trás Sliders de fácil manipulação, fácil
edição e com acessibilidade implementada, é uma das melhores e mais utilizadas bibliotecas para slides do mercado.



### Componentes

#### Drawer
O principal e mais funcional componente da aplicação, um Drawer que abre da direita para esquerda e permite manipular todos os produtos do carrinho, calcular valores e finalizar a compra, fiz ele manualmente, sem utilizar bibilotecas, para demonstrar minhas habilidades com JavaScript e CSS. Provavelmente era melhor utilizar um Drawer de alguma biblioteca
de componentes (como ChakraUI) para ter uma melhor acessibilidade, mas por ser o único componente que seria utilizado na aplicação, fiz ele com javascript e css msm.
