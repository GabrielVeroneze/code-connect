import logger from '@/utils/logger'
import { PaginatedPosts } from '@/types/PaginatedPosts'

export async function getAllPosts(page: number): Promise<PaginatedPosts> {
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
            data: [],
        }
    }

    logger.info('Posts obtidos com sucesso')

    return response.json()
}
