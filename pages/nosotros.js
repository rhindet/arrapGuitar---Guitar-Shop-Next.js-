import Image from 'next/image'
import Layout from "../components/layout"
import styles from '../styles/nosotros.module.css'

export default function Nosotros() {
    return (
        <Layout title={'Nosotros'} description={'Sobre nosostros , GuitarLa tienda de musica'}>
            <main className="contenedor">
                <h1 className="heading">
                    Nosotros
                </h1>
                <div className={styles.contenido}>
                    <Image src="/img/nosotros.jpg" width={1000} height={800} alt='imagen sobre nosotros' />
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies massa neque, vitae tincidunt nisi consequat congue. Curabitur pharetra varius semper. Sed at dictum diam. Aenean facilisis augue a congue accumsan.

                        </p>
                        <p>Donec pharetra vitae purus ac posuere. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam eget luctus lectus, quis bibendum tellus. Proin porttitor malesuada lectus eget consequat. Integer id metus a augue consequat bibendum quis ac dolor. Donec pretium pellentesque turpis et elementum. Aenean at mi lacus. Fusce sit amet libero magna.</p>
                    </div>
                </div>
            </main>

        </Layout>
    )
}
