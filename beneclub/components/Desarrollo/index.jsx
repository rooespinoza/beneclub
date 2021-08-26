import styles from './desarrollo.module.scss'
import Image from 'next/image'
import React from 'react'
const Desarrollo = () => {
    return (
        <div className={styles.fondo}>
            <div className={styles.beneclub}>
                <Image src="/images/beneclub-blanco.png" width={167} height={69} />
            </div>
            <div className={styles.title}>
                Sitio en desarrollo
            </div>
            <div className={styles.text}>
                Te esperamos en Octubre para que disfrutes de los mejores <br /><b>descuentos y beneficios</b>
            </div>
            <div className={styles.loading}>
                <Image src="/images/loading.png" width={270} height={12}></Image>
                <div className={styles.loadingText}>
                    Loading
                </div>
            </div>
        </div>
    )
}
export default Desarrollo;