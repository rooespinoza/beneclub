import React, { Fragment, useState } from 'react'
import Button from '../../components/Button'
import { Formik, Field } from 'formik'
import styles from './login.module.scss'
import { object, string, addMethod } from 'yup'
import { login } from '../../utils/fetches'
import { useRouter } from 'next/router'
import Lottie from "react-lottie";
import spinner from '../../public/animated/spinner.json'
const Login = () => {
  const router = useRouter()
  const [isSubmiting, setIsSubmiting] = useState(false)
  if(typeof window !== 'undefined'){
    localStorage.clear()
  }
  const spinnerOptions = {
    loop: true,
    autoplay: true,
    animationData: spinner,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  const renderForm = ({ values, handleBlur, handleSubmit, handleChange, errors, isSubmitting, touched }) => {
    return (
      <form onSubmit={handleSubmit} id='login' className={styles.form}>
        <label>Usuario</label><br></br>
        <input
          name="user"
          value={values.user}
          onChange={handleChange}
          onBlur={handleBlur}
          inputMode="email"
        />
        {errors.user && touched.user && (
          <div className="form--error">
            {errors.user}
          </div>
        )}

        <br></br>

        <label>Contraseña</label><br></br>
        <input
          type='password'
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          autoComplete="current-password"
        />

        {errors.password && touched.password && (
          <div className="form--error">
            {errors.password}
          </div>
        )}

        <div className={styles.button}>
          {isSubmiting ?
            <Button
              primary
              disabled
              type="button"
            >
              <Fragment>
                <Lottie
                  style={{display:"inline-block", marginRight:"5px"}}
                  options={spinnerOptions}
                  height={20}
                  width={20}
                />
                Cargando
              </Fragment>
            </Button>
            :
            <Button
              primary
              type="submit"
            >              
                Ingresar
            </Button>
            }


        </div>
      </form>
    )

  }

  const submitForm = async (values, actions) => {
    setIsSubmiting(true)
    const response = await login(values)
    if (response) {
      setIsSubmiting(false)
      localStorage.setItem('login', true)
      router.push('/admin')
    }
  }
  const validationForm = () => object().shape({
    user: string()
      .required('Ingresa un usuario'),
    password: string()
      .required('Ingresa una contraseña')
  })

  return (
    <Fragment>
      <div className={styles.logo} onClick={() => { router.push("/") }}>
        <img src={'/images/beneclub.svg'} alt="logo" width={150} height={100} />
      </div>
      <div className={styles.container}>
        <div className={styles.title}>
          Ingreso
        </div>
        <Formik
          initialValues={{
            user: '',
            password: ''
          }}
          onSubmit={submitForm}
          validationSchema={validationForm}
        >
          {renderForm}
        </Formik>
      </div>

    </Fragment>
  )
}
export default Login;