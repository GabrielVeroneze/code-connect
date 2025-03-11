import { remark } from 'remark'
import { Roboto_Mono } from 'next/font/google'
import { CardPost } from '@/components/CardPost'
import { Post } from '@/types/Post'
import html from 'remark-html'
import logger from '@/logger'
import styles from './page.module.css'

const roboto_mono = Roboto_Mono({
    weight: ['400'],
    subsets: ['latin'],
    display: 'swap',
})

async function getPostBySlug(slug: string): Promise<Post | null> {
    const response = await fetch(`http://localhost:3042/posts?slug=${slug}`)

    if (!response.ok) {
        logger.error('Ops, alguma coisa deu errado')

        return null
    }

    logger.info('Post obtido com sucesso')

    const data: Post[] = await response.json()

    if (data.length === 0) {
        return null
    }

    const post = data[0]

    const processedContent = await remark().use(html).process(post.markdown)
    const contentHtml = processedContent.toString()

    post.markdown = contentHtml

    return post
}

const PagePost = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params

    const post = await getPostBySlug(slug)

    if (!post) {
        return <p>Post não encontrado</p>
    }

    return (
        <main className={styles.principal}>
            <CardPost tamanho="expandido" post={post} />
            <section className={styles.secao}>
                <h2 className={styles.titulo}>Código:</h2>
                <div className={styles.box}>
                    <span
                        className={`${styles.codigo} ${roboto_mono.className}`}
                        dangerouslySetInnerHTML={{
                            __html: post.markdown,
                        }}
                    />
                </div>
            </section>
        </main>
    )
}

export default PagePost
