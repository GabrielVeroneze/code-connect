import { CardPost } from '@/components/CardPost'
import { Post } from '@/types/Post'
import logger from '@/logger'
import styles from './page.module.css'

async function getAllPosts(): Promise<Post[]> {
    const response = await fetch('http://localhost:3042/posts')

    if (!response.ok) {
        logger.error('Ops, alguma coisa deu errado')

        return []
    }

    logger.info('Posts obtidos com sucesso')

    return response.json()
}

const Home = async () => {
    const posts = await getAllPosts()

    return (
        <main className={styles.principal}>
            {posts.map(post => (
                <CardPost key={post.id} post={post} />
            ))}
        </main>
    )
}

export default Home
