import Image from 'next/image'
import React, { Fragment } from 'react'
import Button from '../components/Button'
import Preguntas from '../components/Preguntas'
import styles from './../pages/Home/home.module.scss'

const Home = () => {
  return (
    <Fragment>
      <div className={styles.title__container}>
        <div className={styles.title}><h1>Los mejores beneficios, en un solo lugar</h1></div>
      </div>
      <div className={styles.beneficios__container}>
        beneficios
      </div>
      <div className={styles.sumate__container} id="asociarme">
        <div className={styles.sumate__text}>
          <h2>Sumate a Andes Salud</h2>
          Te brindamos salud y motivos para estar saludable.
          <div className={styles.sumate__buttons}>
            <Button secondary type="button">Conocé Andes Salud</Button>
            <Button secondary type="button">Quiero asociarme</Button>
          </div>
        </div>        
      </div>
      <Preguntas/>
    </Fragment>
  )
}
export default Home;
