import logger from '@/logger'
import { Post } from '@/types/Post'

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

    return data[0]
}

const PagePost = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params

    const post = await getPostBySlug(slug)

    return (
		<h1>{post?.title}</h1>
	)
}

export default PagePost
