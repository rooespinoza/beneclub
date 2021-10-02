import React, { Fragment,useState } from 'react'
import Beneficios from '../components/Beneficios'
import Button from '../components/Button'
import Preguntas from '../components/Preguntas'
import styles from './../pages/Home/home.module.scss'
import { useRouter } from 'next/router'
import TopBar from './../components/TopBar'
const Home = () => {
  const router = useRouter()
  const goAndes = ()=>{
    router.push("http://www.andessalud.com.ar/")
  }
  const goCotiza = ()=>{
    router.push("https://andessalud.com.ar/CotizaTuPlan/")
  }
  return (
    <Fragment>
      <TopBar/>
      <div className={styles.title__container}>
        <div className={styles.title}><h1>Los mejores beneficios, en un solo lugar</h1></div>
      </div>
      <div className={styles.beneficios__container}>
      <Beneficios/>
      </div>
      <div className={styles.sumate__container} id="asociarme">
        <div className={styles.sumate__text}>
          <h2>Sumate a Andes Salud</h2>
          Te brindamos salud y motivos para estar saludable.
          <div className={styles.sumate__buttons}>
            <Button secondary type="button" onClick={goAndes}>Conocé Andes Salud</Button>
            <Button secondary type="button" onClick={goCotiza}>Quiero asociarme</Button>
          </div>
        </div>        
      </div>
      <Preguntas/>
    </Fragment>
  )
}
export default Home;
