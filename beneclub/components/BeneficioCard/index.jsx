import React, { useState, Fragment } from 'react'
import styles from './beneficioCard.module.scss'
import Image from 'next/image'
import ModalComponent from './../Modal/index';

const BeneficioCard = ({ beneficio }) => {
    const [open,setOpen] = useState(false);
    const toogleModal=()=>{
        setOpen(!open);
    }


    if (beneficio) {
        return (
            <Fragment>
                <div className={styles.container} onClick={toogleModal}>
                    <div className={styles.image}>
                        <Image src="/images/beneficios/pluspet.jpg" width={170} height={170} />
                    </div>
                    <div className={styles.text__container}>
                        <p><span className={styles.text__descuento}>{beneficio.descuento}</span></p>
                        <p><span className={styles.text__negocio}>{beneficio.name}</span></p>
                        <p><span className={styles.text__categoria}>{beneficio.categoria.name}</span></p>
                    </div>
                </div>
                <ModalComponent open={open} toogleModal={toogleModal} beneficio={beneficio}></ModalComponent>
            </Fragment>
        )
    } else {
        return (<div></div>)
    }

}
export default BeneficioCard