import React, { Fragment, useState, useEffect } from 'react'
import Modal from 'react-modal';
import styles from './modalAdd.module.scss'
import Button from './../Button'
import { Formik } from 'formik'
import { string, object, number } from 'yup'
import { insertCategoria, insertBeneficio } from './../../utils/fetches'
import Lottie from "react-lottie";
import spinner from '../../public/animated/spinner-white.json'
export const ModalCategoria = ({ isOpen, setIsOpen }) => {
  const spinnerOptions = {
    loop: true,
    autoplay: true,
    animationData: spinner,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  const [img, setImg] = useState(null)
  const [limitFile, setLimitFile] = useState(false)
  const [isSubmitting,setIsSubmitting] = useState(false)
  const onFileChange = event => {
    setImg(event.target.files[0]);
    if (event.target.files[0].size >= 1048576) {
      setLimitFile(true)
    } else {
      setLimitFile(false)
    }
  };
  const renderForm = ({ values, handleBlur, handleSubmit, handleChange, errors, touched }) => {
    return (
      <form id="categoria" onSubmit={handleSubmit} className={styles.form}>

        <label>Imagen: </label><br />
        <input
          type="file"
          id='imagen'
          name='imagen'
          value={values.imagen}
          onChange={onFileChange}
          onBlur={handleBlur} />
        {errors.imagen && touched.imagen && (
          <div className="form--error">
            {errors.imagen}
          </div>
        )}
        {limitFile &&
          <div className="form--error">
            El archivo supera el tamaño permitido de 1MB
          </div>
        }
        <br />
        <label>Nombre: </label><br />
        <input
          id='name'
          name='name'
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.name && touched.name && (
          <div className="form--error">
            {errors.name}
          </div>
        )}
        <br />
        <div className={styles.button__container}>
          <Button color type="button" onClick={() => { setIsOpen(!isOpen) }}>Cerrar</Button>
          <Button color type="submit">
            {isSubmitting? 
            <Lottie
            style={{display:"inline-block", marginRight:"5px"}}
            options={spinnerOptions}
            height={20}
            width={20}
          />
            :
            <Fragment>Guardar</Fragment>}</Button>
        </div>
      </form>
    )
  }
  const submitForm = async (values, actions) => {
    setIsSubmitting(true)
   await insertCategoria(values)
    setIsOpen(false)
    setIsSubmitting(false)
    window.location.reload()  
  }
  const validationSchema = () => object().shape({
    name: string()
      .required('Nombre de la nueva categoría')
  })
  return (
    <Modal
      isOpen={isOpen}
      className={styles.modal}
      overlayClassName={styles.modal__overlay}
      ariaHideApp={false}
    >
      <Fragment>
        <h1>Nueva categoría</h1>
        <Formik
          initialValues={{ name: '', img }}
          enableReinitialize
          onSubmit={submitForm}
          validationSchema={validationSchema}
        >
          {renderForm}
        </Formik>
      </Fragment>
    </Modal>
  )
}


export const ModalBeneficio = ({ isOpen, setIsOpen, categorias }) => {
  const spinnerOptions = {
    loop: true,
    autoplay: true,
    animationData: spinner,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  const [img, setImg] = useState(null)
  const [limitFile, setLimitFile] = useState(false)
  
  const [isSubmitting,setIsSubmitting] = useState(false)
  const onFileChange = event => {
    setImg(event.target.files[0]);
    if (event.target.files[0].size >= 1048576) {
      setLimitFile(true)
    } else {
      setLimitFile(false)
    }
  };
  const renderForm = ({ values, handleBlur, handleSubmit, handleChange, errors, touched }) => {
    return (
      <form id="beneficio" onSubmit={handleSubmit} className={styles.formBeneficio}>
        <div className={styles.row}>
          <div className={styles.row__doble}>
            <div>
              <label>Logo: </label><br />
              <input
                type="file"
                id='imagen'
                name='imagen'
                value={values.imagen}
                onChange={onFileChange}
                onBlur={handleBlur} />
              {errors.imagen && touched.imagen && (
                <div className="form--error">
                  {errors.imagen}
                </div>
              )}
              {limitFile &&
                <div className="form--error">
                  El archivo supera el tamaño permitido de 1MB
                </div>
              }
            </div>
          </div>
          <div className={styles.row__doble}>
            <div>
              <label>Negocio: </label><br />
              <input
                id='name'
                name='name'
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.name && touched.name && (
                <div className="form--error">
                  {errors.name}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.row__doble}>
            <div>
              <label>Descuento: </label><br />
              <input
                id='descuento'
                name='descuento'
                value={values.descuento}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.descuento && touched.descuento && (
                <div className="form--error">
                  {errors.descuento}
                </div>
              )}
            </div>
          </div>
          <div className={styles.row__doble}>
            <Fragment>
              <label>Categoria: </label><br />
              <select name='idCategoria' id='idCategoria' value={values.idCategoria} onChange={handleChange} onBlur={handleBlur}>
                <option value={0} defaultValue>Seleccionar categoria</option>
                {categorias.map(row => <option key={row.idCategoria} value={row.idCategoria}>{row.nameCategoria}</option>)}
              </select>
              {errors.descuento && touched.descuento && (
                <div className="form--error">
                  {errors.descuento}
                </div>
              )}
            </Fragment>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.row__doble}>
            <Fragment>
              <label>Provincia: </label><br />
              <select name='provincia' id='provincia' value={values.provincia} onChange={handleChange} onBlur={handleBlur}>
                <option defaultValue value=''>Seleccionar provincia</option>
                <option value='Mendoza'>Mendoza</option>
                <option value='San Juan'>San Juan</option>
                <option value='San Luis'>San Luis</option>
              </select>
              {errors.descuento && touched.descuento && (
                <div className="form--error">
                  {errors.descuento}
                </div>
              )}
            </Fragment>
          </div>
          <div className={styles.row__doble}>
            <Fragment>
              <label>Dirección: </label><br />
              <input
                id='direccion'
                name='direccion'
                value={values.direccion}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.direccion && touched.direccion && (
                <div className="form--error">
                  {errors.direccion}
                </div>
              )}
            </Fragment>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.row__doble}>
            <Fragment>
              <label>Mapa: </label><br />
              <input
                id='mapa'
                name='mapa'
                value={values.mapa}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.mapa && touched.mapa && (
                <div className="form--error">
                  {errors.mapa}
                </div>
              )}
            </Fragment>
          </div>
          <div className={styles.row__doble}>
            <Fragment>
              <label>Legales: </label>
              <textarea
                id='descripcion'
                name='descripcion'
                value={values.descripcion}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.descripcion && touched.descripcion && (
                <div className="form--error">
                  {errors.descripcion}
                </div>
              )}
            </Fragment>
          </div>
        </div>
        <div className={styles.button__container}>
          <Button color type="button" onClick={() => { setIsOpen(!isOpen) }}>Cerrar</Button>
          <Button color type="submit">
            {isSubmitting? 
            <Lottie
            style={{display:"inline-block", marginRight:"5px"}}
            options={spinnerOptions}
            height={20}
            width={20}
          />
            :
              <Fragment>Guardar</Fragment>}</Button>

        </div>
      </form>
    )
  }
  const submitFormBeneficio = async (values, actions) => {
    setIsSubmitting(true)
    const body = {
      img,
      name: values.name,
      descripcion: values.descripcion,
      descuento: values.descuento,
      image: values.img.name,
      mapa: values.mapa,
      provincia: values.provincia,
      direccion: values.direccion,
      categoria: {
        idCategoria: values.idCategoria,
      }
    }
    await insertBeneficio(body)    
    setIsSubmitting(false)
   window.location.reload()
    setIsOpen(false)
  }
  const validationSchema = () => object().shape({
    name: string()
      .required('Nombre del negocio'),
    descuento: string()
      .required('Es necesario especificar el descuento'),
    provincia: string()
      .required('Seleccione una provincia')
  })
  return (
    <Modal
      isOpen={isOpen}
      className={styles.modalBeneficio}
      overlayClassName={styles.modal__overlay}
      ariaHideApp={true}
    >
      <h1>Nuevo beneficio</h1>
      <Formik
        initialValues={{ name: '', img, descripcion: '', descuento: '', mapa: '', provincia: '', idCategoria: 0, direccion: '' }}
        enableReinitialize
        onSubmit={submitFormBeneficio}
        validationSchema={validationSchema}
      >
        {renderForm}
      </Formik>
    </Modal>
  )
}

export default { ModalBeneficio, ModalCategoria };