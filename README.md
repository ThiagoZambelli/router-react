# Inicio do curso de Raect:desenvolvendo em React Router com JavaScript -> Alura

<hr>

### Aula 1:


- Instalar o react-router-dom;
    * Utilizamos o comando `npm install react-router-dom@6` que pegamos da própria documentação para instalar a versão 6.

- Utilizar os componentes BrowserRouter, Routes e Route do react-router-dom;
    * Dentro do `BrowserRouter`, conseguimos utilizar os outros componentes da biblioteca. O Routes alterna entre diferentes rotas e o `Route` renderiza um determinado componente (com o atributo element) em um determinado caminho (com o atributo path).

- Criar uma rota para um caminho que não existe.
    * Adicionando uma `Route` com o `path='*'`, podemos renderizar uma página de 404, caso a URL acessada não corresponda a nenhuma das outras rotas.

### Aula 2:

- Diferenciar o comportamento de sites tradicionais e de SPAs;
    - Sites tradicionais são compostos por várias páginas HTML, e uma requisição é realizada para o servidor do site sempre que queremos ir para uma nova página. Já as SPAs (Single Page Applications) são compostas por uma única página HTML, e seu conteúdo é alterado dinamicamente pelo JavaScript.
- Utilizar o componente `Link` do `react-router-dom`;
    - Ele mantém o comportamento de uma SPA, impedindo que a página do navegador recarregue.
- Utilizar o hook `useLocation`;
    - Com ele, podemos obter informações da rota que estamos atualmente.
- Utilizar o componente `NavLink` do `react-router-dom`.
    - Com ele, temos acesso direto à informação do link estar ativo ou não.