import { Route, Routes, useParams } from "react-router-dom";
import posts from 'assets/json/posts.json';
import PostModelo from "componentes/PostModelo";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import './Post.css'
import NaoEncontrado from "paginas/NaoEncontrado";
import PaginaPadrao from "componentes/PaginaPadrao";
import Recomendados from "componentes/Recomendados";

export default function Post() {
    const parametros = useParams();

    const post = posts.find((post) => {
        return post.id === Number(parametros.id);
    })

    if (!post) {
        return <NaoEncontrado />
    }

    const postsRecomendados = posts
        .filter((post) => post.id !== Number(parametros.id))
        .sort((a,b) => b.id - a.id)
        .slice(0,4);

    return (
        <Routes>
            <Route path="*" element={<PaginaPadrao />}>
                <Route index element={
                    <PostModelo
                        fotoCapa={`/assets/posts/${post.id}/capa.png`}
                        titulo={post.titulo}
                    >
                        <div className="post-markdown-container">
                            <ReactMarkdown>
                                {post.texto}
                            </ReactMarkdown>
                        </div>
                        <Recomendados postsRecomendados={postsRecomendados}/>
                    </PostModelo>
                } />
            </Route>
        </Routes>
    )
}