import React, { useState,Fragment } from 'react'
import styles from './preguntas.module.scss'
import Image from 'next/image'
const Preguntas = () => {
    const [pregunta,setPregunta] = useState(0)
    const togglePregunta= (id) => {
        if(pregunta === id){
            setPregunta(0);
        }else{
            setPregunta(id)
        }
    }
    return (
        <div className={styles.container} id="preguntas">
            <h2>Respondemos tus dudas</h2>
            <div className={styles.preguntas__container}>
                <div className={styles.preguntas__title} onClick={()=>{togglePregunta(1)}}>
                    {pregunta === 1 ? <img src="/images/arrow-up.svg" width={30} height={9} alt="arrow"/> : <img src="/images/arrow-down.svg" width={30} height={9} alt="arrow"/>}
                    ¿Qué es Beneclub?
                    {pregunta === 1 ?
                        <div className={styles.respuesta}>
                            Beneclub es el club de beneficios de Andes Salud, pensado especialmente para acompañar a sus asociados en más de un aspecto de su vida.
                        </div>:<Fragment></Fragment>}
                </div>
                <div className={styles.preguntas__title} onClick={()=>{togglePregunta(2)}}>
                    {pregunta === 2 ? <img src="/images/arrow-up.svg" width={30} height={9} alt="arrow"/> : <img src="/images/arrow-down.svg" width={30} height={9} alt="arrow"/>}
                    ¿Quiénes acceden a los beneficios?
                    {pregunta === 2 ?
                        <div className={styles.respuesta}>
                            Los beneficios son exclusivos para los asociados de Andes Salud.
                        </div>:<Fragment></Fragment>}
                </div>
                <div className={styles.preguntas__title} onClick={()=>{togglePregunta(3)}}>
                    {pregunta === 3 ? <img src="/images/arrow-up.svg" width={30} height={9} alt="arrow"/> : <img src="/images/arrow-down.svg" width={30} height={9} alt="arrow"/>}
                    ¿Cómo se hace efectivo el beneficio?
                    {pregunta === 3 ?
                        <div className={styles.respuesta}>
                            Sólo es necesario presentar tu credencial de Andes Salud en el local al realizar el pago.
                        </div>:<Fragment></Fragment>}
                </div>
                <div className={styles.preguntas__title} onClick={()=>{togglePregunta(4)}}>
                    {pregunta === 4 ? <img src="/images/arrow-up.svg" width={30} height={9} alt="arrow"/> : <img src="/images/arrow-down.svg" width={30} height={9} alt="arrow"/>}
                    ¿Tiene costo?
                    {pregunta === 4 ?
                        <div className={styles.respuesta}>
                            No, el uso de Beneclub es totalmente gratuito para los asociados de Andes Salud.
                        </div>:<Fragment></Fragment>}
                </div>
                <div className={styles.preguntas__title} onClick={()=>{togglePregunta(5)}}>
                    {pregunta === 5 ? <img src="/images/arrow-up.svg" width={30} height={9} alt="arrow"/> : <img src="/images/arrow-down.svg" width={30} height={9} alt="arrow"/>}
                    Tengo un comercio, ¿Cómo lo adhiero a Beneclub?
                    {pregunta === 5 ?
                        <div className={styles.respuesta}>
                            Para adherir tu comercio podés comunicarte con nosotros al 0800-222-999 o escribirnos al prueba@andessalud.com
                        </div>:<Fragment></Fragment>}
                </div>
                <div className={styles.preguntas__title} onClick={()=>{togglePregunta(6)}}>
                    {pregunta === 6 ? <img src="/images/arrow-up.svg" width={30} height={9} alt="arrow"/> : <img src="/images/arrow-down.svg" width={30} height={9} alt="arrow"/>}
                    ¿Puedo utilizar los beneficios en cualquier provincia?
                    {pregunta === 6 ?
                        <div className={styles.respuesta}>
                            Si, pero estos dependen de cada comercio. Dentro del listado de beneficios podés filtrar por provincias y ver cuales te quedan cerca de tu domicilio.
                        </div>:<Fragment></Fragment>}
                </div>
            </div>
        </div>
    
    )
}
export default Preguntas;