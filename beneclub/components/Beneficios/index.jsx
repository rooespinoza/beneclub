import React, { useState, Fragment, useEffect } from 'react'
import FiltroCategoria from '../FiltroCategoria'
import styles from './beneficios.module.scss'
import { getBeneficios, getCategorias,getBeneficiosXCategorias,getBeneficiosXProvincia } from './../../utils/fetches'
import Image from 'next/image'
import BeneficioCard from '../BeneficioCard'
const Beneficios = () => {
  const [categorias, setCategorias] = useState([])
  const [beneficios, setBeneficios] = useState([])
  const [categoriaSelected, setCategoriaSelected] = useState()
  useEffect(async () => {
    if (categorias.length === 0) {
      const aux = await getCategorias()
      setCategorias(aux)
    }
    if (beneficios.length === 0) {
      const aux = await getBeneficios()
      setBeneficios(aux)
    }
  }, [])
  useEffect(async () => {
    if(categoriaSelected){
      const aux = await getBeneficiosXCategorias(categoriaSelected)
      setBeneficios(aux)
    }
  }, [categoriaSelected])
  const provinces = [
    {
      nombre: 'Provincia'
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
  const handleProvinciaChange = async(e) => {
    const aux = await getBeneficiosXProvincia(e.target.value)
    setBeneficios(aux)
  }
  const handleSearchChange = (e) => {
    console.log(e.target.value)
  }
  return (
    <div className={styles.container}>
      <div className={styles.filtros}>
        <div className={styles.categorias}>
          { categorias.map((categoria) => (<FiltroCategoria key={categoria.idCategoria} id={categoria.idCategoria} image={`/images/${categoria.image}`} name={categoria.name} selectCategoria={setCategoriaSelected} />))}
        </div>
        <form className={styles.buscador}>
          <select name='provincia' onChange={handleProvinciaChange}>
            {provinces.map((p, index) => { return (<option key={index} value={p.nombre}>{p.nombre}</option>) })}
          </select>
          <input name="busqueda" onChange={handleSearchChange} />
          <div className={styles.search_imagen}>
            <Image src="/images/search.svg" width={20} height={20} />
          </div>
        </form>
      </div>
      <div className={styles.beneficios__list}>
        {beneficios.length != 0 ? 
          <Fragment>{beneficios.map((beneficio) => <BeneficioCard key={beneficio.id} beneficio={beneficio} />)}</Fragment> 
          :
          <Fragment><p>Estamos cargando los beneficios</p></Fragment>
        }
        
      </div>
    </div>
  )
}
export default Beneficios