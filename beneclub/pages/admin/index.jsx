import React, { Fragment } from 'react'
import styles from './admin.module.scss'
import { useRouter } from 'next/router'

const Admin = () =>{
    const router = useRouter()
    if(typeof window !== 'undefined'){
        if(localStorage.length === 0){
            router.push('/login')
        }
    }
    const cerrarSesion = () =>{
        localStorage.clear()
        router.push('/')
    }
    return(
        <Fragment>
        <div>Admin session</div>
        <div onClick={cerrarSesion}>cerrar sesion</div>
        </Fragment>
    )
}
export default Admin