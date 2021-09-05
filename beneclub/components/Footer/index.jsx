import React, { useState, useEffect } from 'react';
import styles from './footer.module.scss';
import Link from 'next/link';
import Image from 'next/image'
const Footer = () => {
    const [widthLogo, setWidthLogo] = useState(320)
    const [heightLogo, setHeightLogo] = useState(100)
    useEffect(() => {
        if (window.innerWidth <= 769) {
            setWidthLogo(250);
            setHeightLogo(60);
        }
    }, [])
    return (
        <div className={styles.footer}>
            <div className={styles.whiteContainer}>
                <div className={styles.logosContainer}>
                    <img src='/images/andesSalud-footer.svg' width={widthLogo} height={heightLogo} alt="andes salud"/>
                    <img src='/images/Beneclub-footer.svg' width={widthLogo} height={heightLogo} alt="beneclub"/>
                </div>
                <div className={styles.socialContainer}>
                <Link href="http://api.whatsapp.com/send?phone=+5492614661214&text=Hola,%20tengo%20una%20consulta%20sobre%20Beneclub.">
                        <a target='_blank'>
                    <img src='/images/whatsapp.svg' width={20} height={20} alt="whatsapp"/>
                    </a>
                    </Link>
                    <Link href='https://www.facebook.com/andes.salud'>
                        <a target='_blank'>
                            <img src='/images/facebook.svg' width={20} height={20} />
                        </a>
                    </Link>
                    <Link href='https://www.instagram.com/andes.salud/?hl=es-la'>
                        <a target='_blank'>
                            <img src='/images/instagram.svg' width={20} height={20} alt="instagram"/>
                        </a>
                    </Link>
                    <Link href='https://www.linkedin.com/in/andessalud/'>
                        <a target='_blank'>
                            <img src='/images/linkedIn.svg' width={20} height={20} alt="linkedIn"/>
                        </a>
                    </Link>
                </div>
            </div>
            <div className={styles.pinkContainer}>Todos los derechos reservados de Andes Salud</div>
        </div>
    )
}
export default Footer;

