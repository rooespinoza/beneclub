import React from 'react'
import Modal from 'react-modal';
import styles from './modalAdd.module.scss'
import Button from './../Button'
import Formik from 'formik'
export const ModalCategoria = ({isOpen}) =>{
return(
    <Modal
    isOpen={isOpen}
    className={styles.modal}
    overlayClassName={styles.modal__overlay}
    ariaHideApp={false}
  >
    <h1>Nueva categoría</h1>
    <Formik
      initialValues={{name='',image:''}}
    >

    </Formik>
  </Modal>
)
}
export const ModalBeneficio = ({isOpen}) =>{
    return(
        <Modal
        isOpen={isOpen}
        className={styles.modal}
        overlayClassName={styles.modal__overlay}
        ariaHideApp={false}
      >
         <h1>Nuevo beneficio</h1>
      </Modal>
    )
    }

    export default ModalBeneficio;