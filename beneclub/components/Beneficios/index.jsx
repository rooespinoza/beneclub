import React, { useState, Fragment, useEffect } from 'react'
import FiltroCategoria from '../FiltroCategoria'
import styles from './beneficios.module.scss'
import { getCategorias } from './../../utils/fetches'
import Image from 'next/image'
import BeneficioCard from '../BeneficioCard'
const Beneficios = () => {
  const [categorias, setCategorias] = useState([])
  const [beneficio,setBeneficio] = useState({
    name:"Plus pet",
    descuento:"20%",
    image:"pluspet.jpg",
    categoria:"Salud"
  })
  useEffect(async () => {
    if (categorias.length === 0) {
      const aux = await getCategorias()
       console.log(aux)       
       setCategorias(aux)
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
          {categorias.map((categoria)=>(<FiltroCategoria key={categoria.id} image={`/images/${categoria.image}`} name={categoria.name}/>))}
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
        <BeneficioCard beneficio={beneficio}/>
        <BeneficioCard beneficio={beneficio}/>
        <BeneficioCard beneficio={beneficio}/>
        <BeneficioCard beneficio={beneficio}/>
        <BeneficioCard beneficio={beneficio}/>
        <BeneficioCard beneficio={beneficio}/>
      </div>
    </div>
  )
}
export default Beneficios