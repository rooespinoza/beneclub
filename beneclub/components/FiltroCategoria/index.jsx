import React, { useState,Fragment } from 'react'
import styles from './filtroCategoria.module.scss'
import Image from 'next/image'
const FiltroCategoria = ({name,image,id,selectCategoria})=>{
    const loaderCategoria = ({ src, width,quality }) => {
        return `http://localhost:9001/images/categorias/${src}?w=${width}&q=${quality || 75}`
      }
    return(
        <div className={styles.container} id={id} onClick={()=>{selectCategoria(id)}}>
            <div className={styles.img}>
                {image === 'todo.png'?
                <img src={`/images/categorias/todo.png`} alt={name} layout="fill"/>
                :
                <Image loader={loaderCategoria} src={image} layout="fill" width={70} alt={name}/>
                }
            </div>
            <div className={styles.name}>{name}</div>
        </div>
    )
}
export default FiltroCategoria