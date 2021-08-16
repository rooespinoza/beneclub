import Image from 'next/image'
import React, { Fragment } from 'react'
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
        </div>        
      </div>
    </Fragment>
  )
}
export default Home;
