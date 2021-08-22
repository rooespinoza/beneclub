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
    //const classes = useStyles();
    console.log(beneficio);
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
                        <div className={styles.headerModal}>
                            <div className={styles.catBeneficio}>
                                {beneficio.categoria.name}
                            </div>
                            <div className={styles.closeButton} onClick={toogleModal}>
                                <Image src='/images/cerrar.svg' width={15} height={15}></Image>
                            </div>
                        </div>
                        <div className={styles.bodyModal}>
                            <div className={styles.contBeneficio}>
                                <Image src={`/images/beneficios/${beneficio.image}`} width={300} height={300}></Image>
                            </div>
                            <div className={styles.textBeneficio}>
                                <div className={styles.textCategoria}>{beneficio.name}</div>
                                <div className={styles.textDescuento}>{beneficio.descuento}</div>
                                <div className={styles.textCredencial}>Presentando tu credencial</div>
                            </div>
                        </div>
                        <div className={styles.map}>
                                
                                    <iframe src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.751458138692!2d${beneficio.longitud}!3d${beneficio.latitud}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e094c11a23707%3A0xfe7682193dd0ad31!2sTupungato%20718%2C%20Mendoza!5e0!3m2!1ses-419!2sar!4v1629607728660!5m2!1ses-419!2sar`} width="600" height="450"  allowfullscreen="" loading="lazy"></iframe>
                        </div>
                    </div>
                </Fade>

            </Modal>
        </div>
    )
}

export default ModalComponent;