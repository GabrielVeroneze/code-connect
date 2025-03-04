import Image from 'next/image'
import { Avatar } from '@/components/Avatar'
import { Post } from '@/types/Post'
import styles from './CardPost.module.scss'

interface CardPostProps {
    post: Post
}

export const CardPost = ({ post }: CardPostProps) => {
    return (
        <article>
            <header>
                <Image
                    src={post.cover}
                    alt={`Capa do post: ${post.title}`}
                    width={438}
                    height={133}
                />
            </header>
            <section>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <a href="#">Ver detalhes</a>
            </section>
            <footer>
                <Avatar
                    imageSrc={post.author.avatar}
                    name={post.author.username}
                />
            </footer>
        </article>
    )
}
