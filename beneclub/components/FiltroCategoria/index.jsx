import React, { useState,Fragment } from 'react'
import styles from './filtroCategoria.module.scss'
import Image from 'next/image'

const FiltroCategoria = ({name,image,id,selectCategoria})=>{
    return(
        <div className={styles.container} id={id} onClick={()=>{selectCategoria(id)}}>
            <Image src={`http://localhost:9001/images/categorias/${image}`} width={82} height={82}/>
            {name}
        </div>
    )
}
export default FiltroCategoria