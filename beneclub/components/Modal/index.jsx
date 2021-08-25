import React, { useState, useEffect, Fragment } from 'react';
import styles from './modal.module.scss';
import Image from 'next/image';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import BeneficioCard from './../BeneficioCard/index';
import image from 'next/image';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const ModalComponent = ({ open, toogleModal, beneficio }) => {
    const [width,setWidht]=useState();
    const [widthImage,setwidthImage]=useState('300');
    const [heightImage,setheightImage]=useState(300);

    useEffect(()=>{
        setWidht(window.innerWidth)
        if (window.innerWidth<=640){
            setwidthImage(300)
            setheightImage(300)
        }
    },[])
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
                        {width>640?
                        <div className={styles.headerModal}>
                            <div className={styles.catBeneficio}>
                                {beneficio.categoria.name}
                            </div>
                            <div className={styles.closeButton} onClick={toogleModal}>
                                <Image src='/images/cerrar.svg' width={15} height={15}></Image>
                            </div>
                        </div>
                        :<Fragment></Fragment>}
                        <div className={styles.bodyModal}>
                            <div className={styles.contBeneficio}>
                                {width<=640 ?
                                <Image src={`/images/beneficios/${beneficio.image}`} width={widthImage} height={heightImage} layout='responsive'></Image>
                                :<Image src={`/images/beneficios/${beneficio.image}`} width={widthImage} height={heightImage}></Image>}
                                {width<=640 ? 
                                <div className={styles.closeButton} onClick={toogleModal}>
                                    <Image src='/images/cerrar.svg' width={15} height={15}></Image>
                                </div>
                                :
                                <Fragment></Fragment>}
                            </div>
                            <div className={styles.textBeneficio}>
                                {width<=640 ?
                                <div className={styles.catBeneficio}>
                                {beneficio.categoria.name}
                                </div>
                                :<Fragment></Fragment>}
                                <div className={styles.textCategoria}>{beneficio.name}</div>
                                <div className={styles.textDescuento}>{beneficio.descuento}</div>
                                {width>=640 ?
                                    <div className={styles.textCredencial}>Presentando tu credencial</div>
                                    :<Fragment></Fragment>}
                            </div>
                        </div>
                        <div className={styles.map}>
                                
                            <iframe src={beneficio.latitud} width="90%" height="300px"  allowfullscreen="" loading="lazy"></iframe>
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