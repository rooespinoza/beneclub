import React, { Fragment, useState,useEffect } from 'react'
import Modal from 'react-modal';
import styles from './modalAdd.module.scss'
import Button from './../Button'
import { Formik } from 'formik'
import { string, object,number } from 'yup'
import { insertCategoria,insertBeneficio } from './../../utils/fetches'
export const ModalCategoria = ({ isOpen, setIsOpen }) => {
  const [img, setImg] = useState(null)
  const onFileChange = event => {
    setImg(event.target.files[0]);
  };
  const renderForm = ({ values, handleBlur, handleSubmit, handleChange, errors, touched }) => {
    return (
      <form id="categoria" onSubmit={handleSubmit}>

        <label>Imagen: </label>
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
        <br />
        <label>Nombre: </label>
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
        <Button color type="submit">Guardar</Button>
      </form>
    )
  }
  const submitForm = async (values, actions) => {
    await insertCategoria(values)
    setIsOpen(false)
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


export const ModalBeneficio = ({ isOpen, setIsOpen,categorias }) => {
  const [img, setImg] = useState(null)

  const onFileChange = event => {
    setImg(event.target.files[0]);
  };
  const renderForm = ({ values, handleBlur, handleSubmit, handleChange, errors, touched }) => {
    return (
      <form id="beneficio" onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.row}>
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
        </div>
        <div className={styles.row}>
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
        <div className={styles.row}>
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
        <div className={styles.row}>
        <label>Categoria: </label><br />
        <select name='idCategoria' id='idCategoria'  value={values.idCategoria} onChange={handleChange} onBlur={handleBlur}>
          <option value={0} defaultValue>Seleccionar categoria</option>
          {categorias.map(row => <option key={row.idCategoria} value={row.idCategoria}>{row.name}</option>)}
        </select>
        {errors.descuento && touched.descuento && (
          <div className="form--error">
            {errors.descuento}
          </div>
        )}
        </div>
        <div className={styles.row}>
        <label>Provincia: </label><br />
        <select name='provincia' id='provincia'  value={values.provincia} onChange={handleChange} onBlur={handleBlur}>
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
        </div>
        <div className={styles.row}>
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
        </div>
        <div className={styles.row}>
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
        </div>
        <div className={styles.row}>
        <label>Legales: </label>
        <textarea
          id='legales'
          name='legales'
          value={values.legales}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.legales && touched.legales && (
          <div className="form--error">
            {errors.legales}
          </div>
        )}
        </div>
        <div className={styles.button__container}>
        <Button color type="submit">Guardar</Button>
        </div>
      </form>
    )
  }
  const submitFormBeneficio = async (values, actions) => {
    console.log(values.idCategoria)
    const body={
      img,
      name: values.name,
      descripcion:values.descripcion,
      descuento: values.descuento,
      image: values.img.name,
      mapa: values.mapa,
      provincia:values.provincia,
      direccion:values.direccion,
      categoria: {
        idCategoria: values.idCategoria,
      }
    }
    await insertBeneficio(body)
   window.location.reload()
    setIsOpen(false)
  }
  const validationSchema = () => object().shape({
    name: string()
      .required('Nombre del negocio'),
    descuento:string()
    .required('Es necesario especificar el descuento'),
    provincia: string()
    .required('Seleccione una provincia')
  })
  return (
    <Modal
      isOpen={isOpen}
      className={styles.modal}
      overlayClassName={styles.modal__overlay}
      ariaHideApp={false}
    >
      <h1>Nuevo beneficio</h1>
      <Formik
        initialValues={{ name: '', img, descripcion: '', descuento: '', mapa: '', provincia: '', idCategoria: 0,direccion:'' }}
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