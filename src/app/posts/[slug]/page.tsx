import { remark } from 'remark'
import { Post } from '@/types/Post'
import html from 'remark-html'
import logger from '@/logger'

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

    return (
        <div>
            <h1>{post?.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post?.markdown ?? '' }} />
        </div>
    )
}

export default PagePost
