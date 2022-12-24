import Post from "../components/post"
import Layout from "../components/layout"
import styles from '../styles/grid.module.css'
export default function Blog({ posts }) {

    return (
        <Layout title={'Blog'} description={'Blog de musica, venta de guitarras, consejos , GuitarraLa'}>
            <main className="contenedor">
                <h1 className="heading">Blog</h1>
                <div className={styles.grid}>
                    {posts.map(post => (
                        <Post
                            key={post.id}
                            post={post.attributes}
                        />
                    ))
                    }</div>
            </main>

        </Layout>
    )
}

// ------- STATIC PROPS ----- 
export async function getStaticProps() {
    const respuesta = await fetch(`${process.env.API_URL}/posts?populate=imagen`)
    const { data: posts } = await respuesta.json()
    return {
        props: {
            posts
        }
    }
}