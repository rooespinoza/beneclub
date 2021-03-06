import React, { useState, useEffect, Fragment } from 'react';
import styles from './modal.module.scss';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Image from 'next/image'
const ModalComponent = ({ open, toogleModal, beneficio }) => {
    const [width, setWidht] = useState();
    const [widthImage, setwidthImage] = useState('300');
    const [heightImage, setheightImage] = useState(300);
    const [mapa, setMapa] = useState('')
    useEffect(() => {
        setWidht(window.innerWidth)
        if (window.innerWidth <= 640) {
            setwidthImage(300)
            setheightImage(300)
        }
        if (beneficio.mapa && beneficio.mapa.indexOf("<iframe>")) {
            setMapa(beneficio.mapa.slice(13, -88))
        }
    }, [])

    const loaderBeneficio = ({ src, quality }) => {
        return `http://localhost/backBeneclub/getImagenBeneficio.php?id=${src}`
      }
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={styles.modal}
                open={open}
                onClose={toogleModal}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={styles.canvas}>
                        {width > 640 ?
                            <div className={styles.headerModal}>
                                <div className={styles.catBeneficio}>
                                    {beneficio.nameCategoria}
                                </div>
                                <div className={styles.closeButton} onClick={toogleModal}>
                                    <img src='/images/cerrar.svg' width={15} height={15} alt="close"/>
                                </div>
                            </div>
                            : <Fragment></Fragment>}
                        <div className={styles.bodyModal}>
                            <div className={styles.contBeneficio}>
                                <div className={styles.img}>
                                    {beneficio.idImage != "" ?
                                        <Image loader={loaderBeneficio} src={beneficio.idImage.toString()} alt={beneficio.name} layout="fill" />
                                        :
                                        <img src={`/images/beneficios/default.jpg`} alt={beneficio.name} layout="fill" />}
                                </div>
                                {width <= 640 ?
                                    <div className={styles.closeButton} onClick={toogleModal}>
                                        <img src='/images/cerrar.svg' width={15} height={15} alt="close"/>
                                    </div>
                                    :
                                    <Fragment></Fragment>}
                            </div>
                            <div className={styles.textBeneficio}>
                                {width <= 640 ?
                                    <div className={styles.catBeneficio}>
                                        {beneficio.nameCategoria}
                                    </div>
                                    : <Fragment></Fragment>}
                                <div className={styles.textCategoria}>{beneficio.name}</div>
                                <div className={styles.textDescuento}>{beneficio.descuento}</div>
                                {width >= 640 ?
                                    <div className={styles.textCredencial}>Presentando tu credencial</div>
                                    : <Fragment></Fragment>}
                            </div>
                        </div>
                        <div className={styles.map}>
                            <iframe src={mapa} width="90%" height="300px" allowFullScreen="" loading="lazy"></iframe>
                        </div>
                        <div className={styles.footerModal}>
                            {beneficio.descripcion}
                        </div>
                    </div>
                </Fade>

            </Modal>
        </div>
    )
}

export default ModalComponent;