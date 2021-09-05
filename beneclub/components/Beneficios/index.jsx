import React, { useState, Fragment, useEffect } from 'react'
import FiltroCategoria from '../FiltroCategoria'
import styles from './beneficios.module.scss'
import {getBeneficiosActivosxPagina, getCategoriasActivas, getBeneficiosXCategorias, getBeneficiosXProvincia,getCountBeneficiosActivos } from './../../utils/fetches'
import BeneficioCard from '../BeneficioCard'
import Lottie from "react-lottie";
import spinner from '../../public/animated/spinner.json'
import Pagination from '@material-ui/lab/Pagination';
import { ModalBeneficio } from '../ModalAdd'
import Image from 'next/image'
const Beneficios = (isOpenBeneficio,setIsOpenBeneficio) => {
  const [categorias, setCategorias] = useState([])
  const [beneficios, setBeneficios] = useState([])
  const [categoriaSelected, setCategoriaSelected] = useState()
  const [page, setPage] = useState(1);
  const [count, setCount] = useState();
  const [noSearch, setNoSearch] =useState(false)
  useEffect(()=> {
    async function fetchData(){
      if (categorias.length === 0) {
        const aux = await getCategoriasActivas()
        setCategorias(aux)
      }
      if (beneficios.length === 0) {
        const auxCount = await getCountBeneficiosActivos()
        const aux = await getBeneficiosActivosxPagina(page)
        if (auxCount <= 9) {
          setCount(1)
        } else {
          setCount(Math.trunc(auxCount / 9) + 1)
        }
        
        setBeneficios(aux)
      }
    }
    fetchData();
  }, [])
  const spinnerOptions = {
    loop: true,
    autoplay: true,
    animationData: spinner,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  useEffect(() => {
    async function fetchData(){
      if (categoriaSelected) {
        if (categoriaSelected == 0) {
  
          const aux = await getBeneficiosActivosxPagina(page)
          setBeneficios(aux)
        } else {
          const aux = await getBeneficiosXCategorias(categoriaSelected)
          setBeneficios(aux)
        }
      }
    }
    fetchData();

  }, [categoriaSelected])
  
  useEffect(() => {
    async function fetchData(){
      const aux = await getBeneficiosActivosxPagina(page)      
      setBeneficios(aux)
    }
    fetchData();

  }, [page])
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
  const handleSearchChange = async(e) => {
    var text = e.target.value
    if(text != ''){
      const data = beneficios
      const newData = data.filter(function(item){
          const itemData = item.name.toUpperCase()
          const textData = text.toUpperCase()
          return itemData.indexOf(textData) > -1
      })    
      if(newData.length===0){
        setNoSearch(true)
      }
      setBeneficios(newData)
    }else{
      const aux = await getBeneficiosActivosxPagina(page)
      setBeneficios(aux)
    }
    
  }
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Fragment>
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
          <input name="search" onChange={handleSearchChange} />
          <div className={styles.search_imagen}>
            <img src="/images/search.svg" width={20} height={20} alt="search"/>
          </div>
        </form>
      </div>
      <div className={styles.beneficios__list}>
        {beneficios && beneficios.length != 0 ?
          <Fragment>{beneficios.map((beneficio) => <Fragment key={beneficio.id}> {!beneficio.baja && <BeneficioCard  beneficio={beneficio} />}</Fragment>)}</Fragment>
          :
          noSearch && beneficios.length === 0 ?<div>No se encontraron coincidencias</div>:
          <div className={styles.spinner}><Lottie
          style={{display:"inline-block", marginRight:"5px"}}
          options={spinnerOptions}
          height={50}
          width={50}
        /></div>
        }
      </div>
      <div className={styles.paginator}>
      <Pagination count={count} color="primary" onChange={handleChangePage}/>
      </div>
      
    </div>
    <ModalBeneficio isOpen={isOpenBeneficio.isOpenBeneficio} setIsOpen={isOpenBeneficio.setIsOpenBeneficio} categorias={categorias} />
    </Fragment>
  )
}
export default Beneficios