import Link from 'next/link'
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

        return {
            first: 1,
            prev: null,
            next: null,
            last: 1,
            pages: 1,
            items: 0,
            data: []
        }
    }

    logger.info('Posts obtidos com sucesso')

    return response.json()
}

const Home = async ({ searchParams }: { searchParams: Promise<{ page: string }> }) => {
    const { page } = await searchParams
    const currentPage = Number(page) || 1

    const { data: posts, prev, next } = await getAllPosts(currentPage)

    return (
        <main className={styles.principal}>
            <section className={styles.posts}>
                {posts.map(post => (
                    <CardPost key={post.id} post={post} />
                ))}
            </section>
            <nav className={styles.links}>
                {prev && (
                    <Link className={styles.link} href={`/?page=${prev}`}>
                        Página anterior
                    </Link>
                )}
                {next && (
                    <Link className={styles.link} href={`/?page=${next}`}>
                        Próxima página
                    </Link>
                )}
            </nav>
        </main>
    )
}

export default Home
