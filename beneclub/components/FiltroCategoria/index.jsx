import React, { useState,Fragment } from 'react'
import styles from './filtroCategoria.module.scss'
import Image from 'next/image'

const FiltroCategoria = ({name,image,id,selectCategoria})=>{
    return(
        <div className={styles.container} id={id} onClick={()=>{selectCategoria(id)}}>
            <div className={styles.img}>
            <Image src={`http://localhost:9001/images/categorias/${image}`} layout="fill" alt={name}/>
            </div>
            <div className={styles.name}>{name}</div>
        </div>
    )
}
export default FiltroCategoria