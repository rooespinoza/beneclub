import React, { useState, Fragment, useEffect } from 'react'
import FiltroCategoria from '../FiltroCategoria'
import styles from './beneficios.module.scss'
import { getCategorias } from './../../utils/fetches'
import Image from 'next/image'
const Beneficios = () => {
  const [categorias, setCategorias] = useState([])
  useEffect(async () => {
    if (categorias.length === 0) {
      //const aux = await getCategorias()
      //  console.log(aux)
    }

  }, [])
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
  const handleProvinciaChange = (e) => {
    console.log(e.target.value);
  }
  const handleSearchChange = (e) => {
    console.log(e.target.value)
  }
  return (
    <div className={styles.container}>
      <div className={styles.filtros}>
        <div className={styles.categorias}>
          <FiltroCategoria image="/images/salud.svg" name="Salud"></FiltroCategoria>
          <FiltroCategoria image="/images/alimentacion.svg" name="Alimentación saludable"></FiltroCategoria>
          <FiltroCategoria image="/images/aireLibre.svg" name="Aire libre y Deporte"></FiltroCategoria>
        </div>
        <form className={styles.buscador}>
          <select name='provincia' onChange={handleProvinciaChange}>
            {provinces.map((p, index) => { return (<option key={index}>{p.nombre}</option>) })}
          </select>
          <input name="busqueda" onChange={handleSearchChange} />
          <div className={styles.search_imagen}>
            <Image src="/images/search.svg" width={20} height={20} />
          </div>
        </form>
      </div>
      <div className={styles.beneficios__list}>
fgfdgd
      </div>
    </div>
  )
}
export default Beneficios