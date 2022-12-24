import Image from "next/image"
import styles from '../../styles/guitarras.module.css'
import Layout from "../../components/layout"
import { useState } from 'react'

export default function Producto({ guitarra ,agregarCarrito}) {
    const { nombre, descripcion, imagen, precio } = guitarra[0].attributes
    const [cantidad, setCantidad] = useState(0)

    const handleSubmit = e => {
        e.preventDefault()

        if (cantidad < 1) {
            alert('Cantidad no valida')
            return
        }

        const guitarraSeleccionada = {
            id:guitarra[0].id,
            imagen:imagen.data.attributes.url,
            nombre,
            precio,
            cantidad
        }

        console.log(guitarraSeleccionada);
        agregarCarrito(guitarraSeleccionada)

    }

    return (
        <Layout
            title={`${nombre}`}>

            <div className={styles.guitarra}>
                <Image src={imagen.data.attributes.url} width={600} height={400} alt={`imagen guitarra ${nombre}`} />

                <div className={styles.contenido} >
                    <h3>{nombre}</h3>
                    <p className={styles.descripcion} >{descripcion}</p>
                    <p className={styles.precio} >${precio}</p>

                    <form
                        onSubmit={handleSubmit}
                        className={styles.formulario}>
                        <label htmlFor="cantidad">Cantidad:</label>
                        <select
                            id="cantidad"
                            onChange={e => setCantidad(parseInt(e.target.value))}
                        >
                            <option value="0">--Seleccione --</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>

                        <input type="submit" value="Agregar al carrito" />
                    </form>

                </div>
            </div>
        </Layout>
    )
}


// *----- ROUTING DINAMICO CON SERVERSIDEPROPS-----*

// export async function getServerSideProps({query:{url}}){

//     const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
//     const{data:guitarra} = await respuesta.json()

//     console.log(data)

//     return{
//         props:{
//             guitarra
//         }
//     }
// }



// *----- ROUTING DINAMICO CON getStaticProps-----*


export async function getStaticPaths() {
    const respuesta = await fetch(`${process.env.API_URL}/guitarras`)
    const { data } = await respuesta.json()
    const paths = data.map(guitarra => ({
        params: {
            url: guitarra.attributes.url
        }
    }))


    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params: { url } }) {

    const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
    const { data: guitarra } = await respuesta.json()


    return {
        props: {
            guitarra
        }
    }
}