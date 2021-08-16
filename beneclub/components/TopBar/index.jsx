import React, { Fragment, useEffect, useState } from 'react'
import styles from './topBar.module.scss'
import Image from 'next/image'
import Link from 'next/link'
const TopBar = () => {
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
                            Quiero asociarme
                            <div className={styles["menu__item--selected"]}></div>
                        </div>
                    </a>
                </Link>
                <div className={styles.menu__item}>
                    Adherir mi negocio
                    <div className={styles["menu__item--selected"]}></div>
                </div>
            </div>
        )
    }
    return (
        <div className={styles.container}>
            <Image
                src='/images/beneclub.svg'
                width={logoWidth}
                height={logoHeight}
            />
            {width <= 769 ?
                <div className={styles.menu__hamburguer} onClick={toggleMenu}>
                    <Image
                        src='/images/hamburguer.svg'
                        width={20}
                        height={20}
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