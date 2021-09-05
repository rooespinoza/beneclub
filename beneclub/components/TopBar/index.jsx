import React, { Fragment, useEffect, useState } from 'react'
import styles from './topBar.module.scss'
import Image from 'next/image'
import Button from './../Button'
import Link from 'next/link'
const TopBar = (setIsOpenBeneficio) => {
    const [width, setWidth] = useState()
    const [isExtended, setIsExtended] = useState(false)
    const [logoWidth, setLogoWidth] = useState(120)
    const [logoHeight, setLogoHeight] = useState(75)
    useEffect(() => {
        setWidth(window.innerWidth)
        if (window.innerWidth <= 769) {
            setLogoWidth(90);
            setLogoHeight(45)
        }
    }, [])
    const openBeneficio = ()=>{
        setIsOpenBeneficio.setIsOpenBeneficio(!setIsOpenBeneficio.isOpenBeneficio)
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
                <div className={styles.menu__item} onClick={openBeneficio}>
                    Adherir mi negocio
                    <div className={styles["menu__item--selected"]}></div>
                </div>
            </div>
        )
    }
    return (
        <div className={styles.container}>
            <Link href="/#">
                <a>
                    <Image
                        src='/images/beneclub.svg'
                        width={logoWidth}
                        height={logoHeight}
                        alt="beneclub"
                    />
                </a>
            </Link>
            {width <= 769 ?
                <div className={styles.menu__hamburguer} onClick={toggleMenu}>
                    <Image
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
    )
}
export default TopBar;