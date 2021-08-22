import React, { useState,Fragment } from 'react'
import styles from './beneficioCard.module.scss'
import Image from 'next/image'

const BeneficioCard = ({beneficio})=>{
    console.log(beneficio)
    if(beneficio){
        return(
            <div className={styles.container}>
                <div className={styles.image}>
                <Image src={`/images/beneficios/${beneficio.image}`} alt={beneficio.name} width={170} height={170}/>
                </div>
               <div className={styles.text__container}>
                   <p><span className={styles.text__descuento}>{beneficio.descuento}</span></p>
                   <div className={styles.text__negocio}>{beneficio.name}</div>
                   <div className={styles.text__categoria}>{beneficio.categoria.name}</div>
               </div>
            </div>
        )
    }else{
        return(<div></div>)
    }
    
}
export default BeneficioCard