import Link from 'next/link'
import { CardPost } from '@/components/CardPost'
import { PaginatedPosts } from '@/types/PaginatedPosts'
import logger from '@/utils/logger'
import styles from './page.module.css'

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
