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

#### Zustand
O projeto consiste em desenvolver o visual de um e-commerce, um e-commerce geralmente dá acesso ao carrinho de compras em qualquer página da aplicação,
para isso, escolhi utilizar o `zustand`, uma biblioteca para gerenciamento de estados de forma global (onde qualquer lugar da aplicação eu possa acessar a store e manipular
os dados e funções que pertence aquele estado). No `zustand`, foi adicionado todo o código para manipular o estado do carrinho de compras (adicionar produtos, remover produtos, manipular quantidade dentro do estoque, visualizar quantidade e listar os produtos).

#### Router DOM
No projeto, temos pelo menos 2 páginas, a  1ª sendo a landing page inicial com banner e mostruário de produtos, a 2ª sendo a página individual de cada produto,
para fazer o roteamento de páginas pela aplicação, utilizei do `react-router-dom`, que nos permite customizar todas as rotas da aplicação e trás funções que facilitam e agilizam
a manipulação de rotas dentro de uma aplicação React.

Nota-se também que na aplicação, as duas páginas possuem um mesmo layout base (header, 1 seção de produtos e footer), para isso englobei as duas páginas em um único `<Route />`
e passei para ele o `<BaseLayout />`, um componente que renderiza o layout base e substitui o `<Outlet />` pelo conteúdo da página em si.

#### Swiper
A aplicação utiliza de Slides por toda a página, para desenvolver bons sliders personalizados, instalei a lib do `swiper` na aplicação, que trás Sliders de fácil manipulação, fácil
edição e com acessibilidade implementada, é uma das melhores e mais utilizadas bibliotecas para slides do mercado.



### Principais componentes

#### Drawer
O principal e mais funcional componente da aplicação, um Drawer que abre da direita para esquerda e permite manipular todos os produtos do carrinho, calcular valores e finalizar a compra, fiz ele manualmente, sem utilizar bibilotecas, para demonstrar minhas habilidades com JavaScript e CSS. Provavelmente era melhor utilizar um Drawer de alguma biblioteca
de componentes (como ChakraUI) para ter uma melhor acessibilidade, porém como ele seria o único componente que seria utilizado da biblioteca na aplicação, fiz ele com javascript e css msm. Para abrir e fechar o Drawer, foi criado um `Context API` que armazena um boolean (verdadeiro ou falso), colocando o Provider do Context englobando o `<Routes />` nosso Drawer pode ser aberto ou fechado por qualquer lugar da aplicação.

#### Product
O componente `<Product />` renderiza cada produto dentro dos Sliders, ele recebe como `propriedades` todas as informações do produto e renderiza uma Box responsiva com aqueles dados. Esse componente possui uma lógica única, onde se o usuário clicar em qualquer lugar do `Product`, ele é redirecionado para a página do Produto, mas caso o clique seja em algum botão `<Size />` (para selecionar o tamanho do produto), o usuário não é redirecionado. Outra condição dessa função é se o botão _Comprar_ for clicado e um tamanho já tenha sido selecionado o produto é adicionado ao carrinho, caso não exista o usuário é redirecionado. 
Para criar essa função foi utilizado conceitos como Event Listener e condicionais para decidir qual ação seria executada.

#### Carousels
A aplicação possui diversos carroséis, alguns bem semelhantes e outros com um visual único (como o da página de detalhes do Produto). Como já comentado, para desenvolver eles utilizei a biblioteca `swiper`, que trás todo o funcional pronto e permite adicionarmos módulos conforme a necessidade do Carrossel. Foi só seguir a documentação da biblioteca analisando quais módulos e funções atenderiam os sliders da aplicação desenvolvida, a documentação é bem descritiva e completa.

#### Header
O componente Header foi bem simples de fazer, não criei um visual para a navegação do menu em uma versão mobile, porém ao menos ocultei a nav e adicionei um botão para abertura de um menu mobile (sem nenhuma ação adicionada a ele).

#### Cart
O Cart é responsável por exibir a quantidade de produtos que estão no carrinho (essa informação é retirada do estado global criado com o Zustand) e também é o componente que determina se o Drawer do carrinho está aberto ou fechado, de acordo com o estado retornado pelo `Context API`.


#### Price Shipping
Esse componente deveria calcular o frete em relação ao CEP inserido, o ideal seria ter uma API o qual eu envio o CEP como paramêtro e é retornado as possibilidades de frete e seus valores para renderizar em tela. O que realmente foi feito é um Input com o seu valor formatado no modelo CEP que seta um estado, ele não verifica se o CEP existe, como também não faz calculo de valor nenhum, apenas verifica se o CEP possui os 8 números, se possuir exibe fretes fícticios, caso não possua uma mensagem de erro é exibida.

#### Products List (BestSaller, Launch, Unmissable)
Os produtos exibidos no carrossel, foram adicionados manualmente em array (ou seja, para cada carrossel foi adicionado um array de objetos onde cada objeto representa um produto. Na prática e no desenvolvimento de uma aplicação real para exibir essa lista de produtos criaria uma requisição a API, pegando a resposta dessa requisição direcionando os produtos para seus respectivos Carrossel.
