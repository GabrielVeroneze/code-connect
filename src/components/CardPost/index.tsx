import Image from 'next/image'
import { Avatar } from '@/components/Avatar'
import { Post } from '@/types/Post'
import styles from './CardPost.module.css'

interface CardPostProps {
    post: Post
}

export const CardPost = ({ post }: CardPostProps) => {
    return (
        <article className={styles.card}>
            <header className={styles.cabecalho}>
                <Image
                    className={styles.imagem}
                    src={post.cover}
                    alt={`Capa do post: ${post.title}`}
                    width={438}
                    height={133}
                />
            </header>
            <section className={styles.conteudo}>
                <h2 className={styles.titulo}>{post.title}</h2>
                <p className={styles.texto}>{post.body}</p>
                <a className={styles.link} href="#">
                    Ver detalhes
                </a>
            </section>
            <footer className={styles.rodape}>
                <Avatar
                    imageSrc={post.author.avatar}
                    name={post.author.username}
                />
            </footer>
        </article>
    )
}
