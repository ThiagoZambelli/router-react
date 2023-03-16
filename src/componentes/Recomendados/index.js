import PostCard from "componentes/PostCard";
import styles from './Recomendados.module.css'

export default function Recomendados({postsRecomendados}){
    return(
        <div className={styles.recomendados}>
            <h2 className={styles.titulo}>Outros posts que você pode gostar:</h2>
            <div className={styles.postagens}>            
                {postsRecomendados.map(post => <PostCard post={post} key={post.id}/>)}
            </div>
        </div>
    )
}