import React, { Fragment, useEffect, useState } from 'react'
import styles from './topBar.module.scss'
import Button from './../Button'
import Link from 'next/link'
import {ModalContacto} from './../ModalContacto';
const TopBar = () => {
    const [width, setWidth] = useState()
    const [isExtended, setIsExtended] = useState(false)
    const [logoWidth, setLogoWidth] = useState(120)
    const [logoHeight, setLogoHeight] = useState(75)
    const [isOpen, setIsOpen] = useState(false)
    useEffect(() => {
        setWidth(window.innerWidth)
        if (window.innerWidth <= 769) {
            setLogoWidth(90);
            setLogoHeight(45)
        }
    }, [])
    const toggleNuevo = () => {
        setIsOpen(!isOpen);
    }
    const toggleMenu = () => setIsExtended(!isExtended)
    const renderMenu = () => {
        return (
            <div className={styles.menu}>
                <Link href="/#beneficios">
                    <a>
                        <div className={styles.menu__item}>
                            Beneficios
                            <div className={styles["menu__item--selected"]}></div>
                        </div>
                    </a>
                </Link>
                <Link href="/#preguntas">
                    <a>
                        <div className={styles.menu__item}>
                            Preguntas frecuentes
                            <div className={styles["menu__item--selected"]}></div>
                        </div>
                    </a>
                </Link>
                <Link href="/#asociarme">
                    <a>
                        <div className={styles.menu__item}>
                            <Button primary type="button">
                                Quiero asociarme
                            </Button>
                        </div>
                    </a>
                </Link>
                <div className={styles.menu__item} onClick={toggleNuevo}>
                    Adherir mi negocio
                    <div className={styles["menu__item--selected"]}></div>
                </div>
            </div>
        )
    }
    return (
        <Fragment>
            <div className={styles.container}>
                <Link href="/#">
                    <a>
                        <img
                            src='/images/beneclub.svg'
                            width={logoWidth}
                            height={logoHeight}
                            alt="beneclub"
                        />
                    </a>
                </Link>
                {width <= 769 ?
                    <div className={styles.menu__hamburguer} onClick={toggleMenu}>
                        <img
                            src='/images/hamburguer.svg'
                            width={20}
                            height={20}
                            alt="menu"
                        />
                        {isExtended ?
                            <Fragment>{renderMenu()}</Fragment> : <Fragment></Fragment>}
                    </div>
                    :
                    <Fragment>{renderMenu()}</Fragment>
                }
                
            </div>
            <ModalContacto isOpen={isOpen} setIsOpen={setIsOpen}/>
            </Fragment>
    )
}
export default TopBar;