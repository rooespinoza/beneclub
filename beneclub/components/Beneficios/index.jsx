import React, { useState,Fragment, useEffect } from 'react'
import FiltroCategoria from '../FiltroCategoria'
import styles from './beneficios.module.scss'
import {getCategorias} from './../../utils/fetches'
const Beneficios = ()=>{
    const [categorias,setCategorias] = useState([])
    useEffect(async()=>{
        const aux = await getCategorias()
        console.log(aux)
    },[])
    const provinces = [
        {
          nombre: ''
        },
        {
          nombre: 'San Luis'
        },
        {
          nombre: 'San Juan'
        },
        {
          nombre: 'Mendoza'
        }
      ]
    return(
        <div className={styles.container}>
            <FiltroCategoria image="/images/salud.svg" name="Salud"></FiltroCategoria>
            <FiltroCategoria image="/images/alimentacion.svg" name="Alimentación saludable"></FiltroCategoria>
            <FiltroCategoria image="/images/aireLibre.svg" name="Aire libre y Deporte"></FiltroCategoria>
            <div className={styles.filtros}>

            </div>
            <div className={styles.beneficios__list}>

            </div>
        </div>
    )
}
export default Beneficios