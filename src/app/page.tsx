import { CardPost } from '@/components/CardPost'

async function getAllPosts() {
    const response = await fetch('http://localhost:3042/posts')

    if (!response.ok) {
        console.log('Ops, alguma coisa deu errado')
    }

    return response.json()
}

const Home = async () => {
    const posts = await getAllPosts()

    return (
        <main>
            {posts.map(post => (
                <CardPost key={post.id} post={post} />
            ))}
        </main>
    )
}

export default Home
