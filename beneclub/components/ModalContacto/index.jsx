import React, { Fragment, useState, useEffect } from 'react'
import Modal from 'react-modal';
import styles from './modalAdd.module.scss'
import Button from '../Button'
import { Formik } from 'formik'
import { string, object, number } from 'yup'
import { insertContacto } from '../../utils/fetches'
import Lottie from "react-lottie";
import spinner from '../../public/animated/spinner-white.json'
export const ModalContacto = ({ isOpen, setIsOpen }) => {
  const spinnerOptions = {
    loop: true,
    autoplay: true,
    animationData: spinner,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [enviado, setEnviado] = useState(false)
  const validationSchema = () => object().shape({
    nombre: string()
      .required('Nombre del negocio'),
    telefono: string()
      .required('Necesitamos un teléfono para ponernos en contacto'),
    email: string()
      .required('Necesitamos un email para ponernos en contacto'),
    nombreComercio: string()
      .required('¿Cómo se llama tu comercio?')
  })
  const submitForm = async (values, actions) => {
    setIsSubmitting(true)
    await insertContacto(values)
    setIsSubmitting(false)
    setEnviado(true)
  }
  const renderForm = ({ values, handleBlur, handleSubmit, handleChange, errors, touched }) => {

    return (
      <form id="nuevoBeneficio" onSubmit={handleSubmit} className={styles.form}>
        <label>Nombre: </label><br />
        <input
          type="text"
          id='nombre'
          name='nombre'
          value={values.nombre}
          onChange={handleChange}
          onBlur={handleBlur} />
        {errors.nombre && touched.nombre && (
          <div className="form--error">
            {errors.nombre}
          </div>
        )}
        <br />
        <label>Teléfono: </label><br />
        <input
          type="text"
          id='telefono'
          name='telefono'
          value={values.telefono}
          onChange={handleChange}
          onBlur={handleBlur} />
        {errors.telefono && touched.telefono && (
          <div className="form--error">
            {errors.telefono}
          </div>
        )}
        <br />
        <label>Email: </label><br />
        <input
          type="mail"
          id='email'
          name='email'
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur} />
        {errors.email && touched.email && (
          <div className="form--error">
            {errors.email}
          </div>
        )}
        <br />
        <label>Nombre comercio: </label><br />
        <input
          type="text"
          id='nombreComercio'
          name='nombreComercio'
          value={values.nombreComercio}
          onChange={handleChange}
          onBlur={handleBlur} />
        {errors.nombreComercio && touched.nombreComercio && (
          <div className="form--error">
            {errors.nombreComercio}
          </div>
        )}
        <br />
        <div className={styles.button__container}>
          <Button color type="button" onClick={() => { setIsOpen(!isOpen) }}>Cerrar</Button>
          <Button color type="submit">
            {isSubmitting ?
              <Lottie
                style={{ display: "inline-block", marginRight: "5px" }}
                options={spinnerOptions}
                height={20}
                width={20}
              />
              :
              <Fragment>Enviar</Fragment>}</Button>

        </div>
      </form>
    )
  }
  return (
    <Modal
      isOpen={isOpen}
      className={styles.modalBeneficio}
      overlayClassName={styles.modal__overlay}
      ariaHideApp={true}
    >
      {enviado ?
        <Fragment>
          <h1>¡Listo!</h1>
          <p>Nos pondremos en contacto para dar de alta el beneficio</p>
          <Button color type="button" onClick={() => { setIsOpen(!isOpen) }}>Aceptar</Button>

        </Fragment>
        :
        <Fragment>
          <h1>Adherir mi negocio</h1>
          <Formik
            initialValues={{ nombre: '', telefono: '', email: '', nombreComercio: '' }}
            enableReinitialize
            onSubmit={submitForm}
            validationSchema={validationSchema}
          >
            {renderForm}
          </Formik>
        </Fragment>
      }

    </Modal>
  )
}

export default { ModalContacto };