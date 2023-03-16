# Inicio do curso de Raect:desenvolvendo em React Router com JavaScript -> Alura

<hr/>

<img align="right" width="250px" style="margin-top:-20px" src="public/eu.png">

</br>
</br>

<div dsplay="inline-block">
 
 <h1 align="left">Projeto realizado por:</h1>
 <h2 align="left">Thiago Zambelli</h2>
 
  <a href="https://www.linkedin.com/in/thiagozambelli">
    <img width="80px" src="https://i.ibb.co/RyZx12b/linkedin.png" alt="linkedin" style="vertical-align:top;">
  </a>
</div>

<hr>

&nbsp;
### Aula 1:


- Instalar o react-router-dom;
    * Utilizamos o comando `npm install react-router-dom@6` que pegamos da própria documentação para instalar a versão 6.

- Utilizar os componentes BrowserRouter, Routes e Route do react-router-dom;
    * Dentro do `BrowserRouter`, conseguimos utilizar os outros componentes da biblioteca. O Routes alterna entre diferentes rotas e o `Route` renderiza um determinado componente (com o atributo element) em um determinado caminho (com o atributo path).

- Criar uma rota para um caminho que não existe.
    * Adicionando uma `Route` com o `path='*'`, podemos renderizar uma página de 404, caso a URL acessada não corresponda a nenhuma das outras rotas.

&nbsp;
### Aula 2:

- Diferenciar o comportamento de sites tradicionais e de SPAs;
    - Sites tradicionais são compostos por várias páginas HTML, e uma requisição é realizada para o servidor do site sempre que queremos ir para uma nova página. Já as SPAs (Single Page Applications) são compostas por uma única página HTML, e seu conteúdo é alterado dinamicamente pelo JavaScript.
- Utilizar o componente `Link` do `react-router-dom`;
    - Ele mantém o comportamento de uma SPA, impedindo que a página do navegador recarregue.
- Utilizar o hook `useLocation`;
    - Com ele, podemos obter informações da rota que estamos atualmente.
- Utilizar o componente `NavLink` do `react-router-dom`.
    - Com ele, temos acesso direto à informação do link estar ativo ou não.

&nbsp;
### Aula 3:

- Identificar quando utilizar rotas aninhadas;
    - Colocamos as páginas Inicio e SobreMim como filhas de PaginaPadrao, para que apenas elas reaproveitassem a mesma estrutura. Não queríamos que o Banner aparecesse na página 404.

- Utilizar o componente Outlet;
    - A rota que é pai de outras se responsabiliza por dizer onde elas serão renderizadas com o Outlet do react-router-dom.

- Utilizar o atributo index do Route;
    - O index indica que o caminho da rota é igual ao da rota pai.

- Diferenciar caminhos relativos e absolutos.
    - Caminhos absolutos iniciam com /, enquanto caminhos relativos iniciam sem a /, partindo do caminho da rota pai.

&nbsp;
#### Aula 4:
- Identificar quando utilizar rotas dinâmicas;
    - Rotas dinâmicas são úteis quando queremos ter uma mesma estrutura de página e mudar seu conteúdo de acordo com alguma informação passada na URL. No nosso caso, passamos o id de um post pela URL, buscamos o post de acordo com o id e mostramos suas informações na tela.
- Utilizar os seletores de rotas dinâmicas para criar uma rota dinâmica;
    - Utilizamos a sintaxe /caminho/:nomedoparametro no atributo path de uma Route.
- Utilizar o hook useParams.
    - Com ele, obtemos os parâmetros passados para uma rota dinâmica.

&nbsp;

### Aula 5:
- Componentizar um botão;
    - Criamos o componente BotaoPrincipal, que recebe props que definem seus estilos.

- Utilizar o hook useNavigate;
    - Podemos utilizá-lo para fazer navegações mais complexas, como voltar para a página anterior no navegador.

- Tratar o caso de post não encontrado;
    - Utilizamos o componente NaoEncontrada para quando um post não era encontrado. Vimos duas possíveis soluções para reutilizar o componente PaginaPadrao apenas quando um post era encontrado. Uma delas é aproveitando o Outlet e adicionando os componentes Routes e Route dentro do componente Post; outra é adicionando {children} em PaginaPadrao e permitindo ele possa ser utilizado como um componente pai direto.

&nbsp;

---

&nbsp;

## Detalhes abordados:

&nbsp;

- #### SVG Como componente React:
    > A sintaxe `import { ReactComponent as NomeDoComponente } from 'caminho_do_componente';` é possível devido ao pacote `SVGR`, que já vem por padrão em um projeto `React`. Esse pacote permite que utilizemos um `SVG` como um componente `React`, assim não precisamos utilizá-lo como uma tag img.

&nbsp;

- #### ScrollToTop :

    > Componente que avalia se houve mudança de rota e redireciona para o topo da pagina da aplicação caso sim

    ~~~ javascript
    import { useEffect } from "react";
    import { useLocation } from "react-router-dom";

    export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
    }
    ~~~

- #### Filtro das postagens recomendadas:

    ~~~ javascript
    const postsRecomendados = posts
            // filtrando pelo id da atual para que ela n apareça nas recomendadas
            .filter((post) => post.id !== Number(parametros.id))
            // Invertendo a ordem do maior para o menor
            .sort((a,b) => b.id - a.id)
            // Pegando os 4 primeiros da lista restante
            .slice(0,4);
    ~~~