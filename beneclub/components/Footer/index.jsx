import React, { useState, useEffect } from 'react';
import styles from './footer.module.scss';
import Image from 'next/image';
import Link from 'next/link';
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
                    <Image src='/images/andesSalud-footer.svg' width={widthLogo} height={heightLogo} />
                    <Image src='/images/Beneclub-footer.svg' width={widthLogo} height={heightLogo} />
                </div>
                <div className={styles.socialContainer}>
                    <Image src='/images/whatsapp.svg' width={20} height={20} />
                    <Link href='https://www.facebook.com/andes.salud'>
                        <a target='_blank'>
                            <Image src='/images/facebook.svg' width={20} height={20} />
                        </a>
                    </Link>
                    <Link href='https://www.instagram.com/andes.salud/'>
                        <a target='_blank'>
                            <Image src='/images/instagram.svg' width={20} height={20} />
                        </a>
                    </Link>
                    <Link href='https://www.linkedin.com/company/andes-salud/'>
                        <a target='_blank'>
                            <Image src='/images/linkedIn.svg' width={20} height={20} />
                        </a>
                    </Link>
                </div>
            </div>
            <div className={styles.pinkContainer}>Todos los derechos reservados de Andes Salud</div>
        </div>
    )
}
export default Footer;

