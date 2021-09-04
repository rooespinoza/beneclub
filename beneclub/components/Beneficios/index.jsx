import React, { useState, Fragment, useEffect } from 'react'
import FiltroCategoria from '../FiltroCategoria'
import styles from './beneficios.module.scss'
import {getBeneficiosActivosxPagina, getCategorias, getBeneficiosXCategorias, getBeneficiosXProvincia } from './../../utils/fetches'
import Image from 'next/image'
import BeneficioCard from '../BeneficioCard'
import Lottie from "react-lottie";
import spinner from '../../public/animated/spinner.json'
import Pagination from '@material-ui/lab/Pagination';
const Beneficios = () => {
  const [categorias, setCategorias] = useState([])
  const [beneficios, setBeneficios] = useState([])
  const [categoriaSelected, setCategoriaSelected] = useState()
  const [page, setPage] = useState(1);
  const [count, setCount] = useState();
  useEffect(()=> {
    async function fetchData(){
      if (categorias.length === 0) {
        const aux = await getCategorias()
        setCategorias(aux)
      }
      if (beneficios.length === 0) {
        const aux = await getBeneficiosActivosxPagina(page)
        if(aux<=9){
          setCount(1)
        }else{
          setCount(Math.trunc(aux.length/9)+1)
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
      console.log(page)
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
  const handleSearchChange = (e) => {
  }
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
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
            <Image src="/images/search.svg" width={20} height={20} alt="search"/>
          </div>
        </form>
      </div>
      <div className={styles.beneficios__list}>
        {beneficios && beneficios.length != 0 ?
          <Fragment>{beneficios.map((beneficio) => <Fragment key={beneficio.id}> {!beneficio.baja && <BeneficioCard  beneficio={beneficio} />}</Fragment>)}</Fragment>
          :
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
  )
}
export default Beneficios