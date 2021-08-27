import React, { useState, Fragment, useEffect } from 'react'
import FiltroCategoria from '../FiltroCategoria'
import styles from './beneficios.module.scss'
import { getBeneficios, getCategorias, getBeneficiosXCategorias, getBeneficiosXProvincia } from './../../utils/fetches'
import Image from 'next/image'
import BeneficioCard from '../BeneficioCard'
import Lottie from "react-lottie";
import spinner from '../../public/animated/spinner.json'
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
  const spinnerOptions = {
    loop: true,
    autoplay: true,
    animationData: spinner,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  useEffect(async () => {
    if (categoriaSelected) {
      console.log(categoriaSelected)
      if (categoriaSelected == 0) {

        const aux = await getBeneficios()
        setBeneficios(aux)
      } else {
        const aux = await getBeneficiosXCategorias(categoriaSelected)
        setBeneficios(aux)
      }
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
  const handleProvinciaChange = async (e) => {
    const aux = await getBeneficiosXProvincia(e.target.value)
    setBeneficios(aux)
  }
  const handleSearchChange = (e) => {
    console.log(e.target.value)
  }
  return (
    <div className={styles.container}>
      <div className={styles.filtros}>
        <div className={styles.categoriasContainer}>
          <div className={styles.categorias}>
          {categorias.map((categoria) => (<FiltroCategoria key={categoria.idCategoria} id={categoria.idCategoria} image={`${categoria.image}`} name={categoria.name} selectCategoria={setCategoriaSelected} />))}
            {categoriaSelected != 0 ? <FiltroCategoria
              key="0"
              id="0"
              image="todo.png"
              name="Todo"
              selectCategoria={setCategoriaSelected} />
              : <Fragment></Fragment>}
          </div>
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
          <Fragment>{beneficios.map((beneficio) => <Fragment> {!beneficio.baja && <BeneficioCard key={beneficio.id} beneficio={beneficio} />}</Fragment>)}</Fragment>
          :
          <div className={styles.spinner}><Lottie
          style={{display:"inline-block", marginRight:"5px"}}
          options={spinnerOptions}
          height={50}
          width={50}
        /></div>
        }

      </div>
    </div>
  )
}
export default Beneficios