import React, { useState,Fragment } from 'react'
import styles from './beneficioCard.module.scss'
import ModalComponent from './../Modal'
import Image from 'next/image'

const BeneficioCard = ({beneficio})=>{
    const [open,setOpen] = useState(false);
    const toogleModal=()=>{
        setOpen(!open);
    }
    
    console.log(beneficio.image.idImage)
    const loaderBeneficio = ({ src, width, quality }) => {
        return `http://localhost:9001/beneficios/getImage?idImage=${src}?w=${width}&q=${quality || 75}`
      }
    if(beneficio){
        return(
            <Fragment>
            <div className={styles.container} onClick={toogleModal}>
                <div className={styles.image}>
                    {beneficio.image?
                        <Image loader={loaderBeneficio} src={beneficio.image.idImage.toString()} width={170} height={170} alt={beneficio.name}/>
                    :
                    <img src={`/images/beneficios/default.jpg`} alt={beneficio.name} width={170} height={170}/>}
                </div>
               <div className={styles.text__container}>
                   <p><span className={styles.text__descuento}>{beneficio.descuento}</span></p>
                   <div className={styles.text__negocio}>{beneficio.name}</div>
                   <div className={styles.text__categoria}>{beneficio.categoria.name}</div>
               </div>
            </div>
            <ModalComponent open={open} toogleModal={toogleModal} beneficio={beneficio}></ModalComponent>
            </Fragment>
        )
    }else{
        return(<div></div>)
    }
    
}
export default BeneficioCard