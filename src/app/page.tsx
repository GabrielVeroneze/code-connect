import { CardPost } from '@/components/CardPost'
import { PaginatedPosts } from '@/types/PaginatedPosts'
import logger from '@/logger'
import styles from './page.module.css'

async function getAllPosts(page: number): Promise<PaginatedPosts> {
    const response = await fetch(
        `http://localhost:3042/posts?_page=${page}&_per_page=6`
    )

    if (!response.ok) {
        logger.error('Ops, alguma coisa deu errado')
    }

    logger.info('Posts obtidos com sucesso')

    return response.json()
}

const Home = async () => {
    const { data: posts } = await getAllPosts(1)

    return (
        <main className={styles.principal}>
            {posts.map(post => (
                <CardPost key={post.id} post={post} />
            ))}
        </main>
    )
}

export default Home
