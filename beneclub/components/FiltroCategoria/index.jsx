import React, { useState,Fragment } from 'react'
import styles from './filtroCategoria.module.scss'
import Image from 'next/image'

const FiltroCategoria = ({name,image,id})=>{
    return(
        <div className={styles.container}>
            <Image src={image} width={82} height={82}/>
            {name}
        </div>
    )
}
export default FiltroCategoria