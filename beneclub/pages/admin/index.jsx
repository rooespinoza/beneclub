import React, { Fragment, useState, useEffect } from 'react'
import styles from './admin.module.scss'
import { useRouter } from 'next/router'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Pagination from '@material-ui/lab/Pagination';
import { ModalCategoria, ModalBeneficio } from './../../components/ModalAdd'
import Modal from 'react-modal';
import Button from './../../components/Button'
import { getBeneficios, getCategorias, deleteBeneficio, deleteCategoria, altaBeneficio, altaCategoria, getCountBeneficios, getCountCategorias,getCountContacto,getContactos,deleteContacto } from './../../utils/fetches.js'
const Admin = () => {
  const router = useRouter()
  const [itemSelected, setItemSelected] = useState(1);
  if (typeof window !== 'undefined') {
    if (localStorage.length === 0) {
      router.push('/login')
    }
  }
  const cerrarSesion = () => {
    localStorage.clear()
    router.push('/')
  }
  const home = () => {
    router.push('/')
  }
  const [page, setPage] = useState(1);
  const [count, setCount] = useState();
  const [pageCat, setPageCat] = useState(1);
  const [countCat, setCountCat] = useState();
  const [pageCon, setPageCon] = useState(1);
  const [countCon, setCountCon] = useState();
  const [isOpenCategoria, setIsOpenCategoria] = useState(false)
  const [isOpenBeneficio, setIsOpenBeneficio] = useState(false)
  const [isOpenModal, setIsOpenModal] = useState(false)
  const toggleModal = () => setIsOpenModal(!isOpenModal);
  const [selectedRowId, setSelectedRowId] = useState(0)
  const [categorias, setCategorias] = useState([])
  const [beneficios, setBeneficios] = useState([])
  const [contacto, setContacto] = useState([])
  useEffect(() => {
    async function fetchData() {
      if (categorias && categorias.length === 0) {
        const auxCount = await getCountCategorias()
        if (auxCount["count(*)"] <= 9) {
          setCountCat(1)
        } else {
          setCountCat(Math.trunc(auxCount["count(*)"] / 9) + 1)
        }
        const aux = await getCategorias(pageCat)
        setCategorias(aux)
      }
      if (beneficios && beneficios.length === 0) {
        const auxCount = await getCountBeneficios()
        const aux = await getBeneficios(page)
        if (auxCount["count(*)"] <= 9) {
          setCount(1)
        } else {
          setCount(Math.trunc(auxCount["count(*)"] / 9) + 1)
        }
        setBeneficios(aux)
      }
      if (contacto && contacto.length === 0) {
        const auxCount = await getCountContacto()
        const aux = await getContactos(pageCon)
        if (auxCount["count(*)"] <= 9) {
          setCountCon(1)
        } else {
          setCountCon(Math.trunc(auxCount["count(*)"] / 9) + 1)
        }
        setContacto(aux)
      }
    }
    fetchData();
  }, [])

  useEffect(() => {
    async function fetchData() {
      const aux = await getBeneficios(page)
      setBeneficios(aux)
    }
    fetchData();

  }, [page])

  useEffect(() => {
    async function fetchData() {
      const aux = await getCategorias(pageCat)
      setCategorias(aux)
    }
    fetchData();

  }, [pageCat])

  useEffect(() => {
    async function fetchData() {
      const aux = await getContactos(pageCon)
      setContacto(aux)
    }
    fetchData();

  }, [pageCon])

  const categoriasColumn = [
    { field: 'name', headerName: 'Nombre', width: 90 },
    { field: 'image', headerName: 'Nombre imagen', width: 90 },
    { field: 'baja', headerName: 'Activo', width: 90 },
    { field: 'button', headerName: '', width: 90 }
  ]
  const contactoColumn = [
    { field: 'nombeComercio', headerName: 'Comercio', width: 90 },
    { field: 'nombre', headerName: 'Nombre', width: 90 },
    { field: 'telefono', headerName: 'Teléfono', width: 90 },
    { field: 'email', headerName: 'Email', width: 90 },
    { field: 'button', headerName: '', width: 90 }
  ]
  const beneficiosColumn = [
    { field: 'name', headerName: 'Nombre', width: 90 },
    { field: 'descuento', headerName: 'Descuento', width: 90 },
    { field: 'provincia', headerName: 'Provincia', width: 90 },
    { field: 'direccion', headerName: 'Dirección', width: 90 },
    { field: 'baja', headerName: 'Activo', width: 90 },
    { field: 'button', headerName: '', width: 90 }
  ]
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangePageCategoria = (event, newPage) => {
    setPageCat(newPage);
  };
  const handleChangePageContacto = (event, newPage) => {
    setPageCon(newPage);
  };
  const deleteRow = async () => {
    if (itemSelected == 2) {
      await deleteBeneficio(selectedRowId)
    }
    if (itemSelected == 1) {
      await deleteCategoria(selectedRowId)
    }
    setIsOpenModal(false)
    window.location.reload();
    if(itemSelected ==3){
      await deleteContacto(selectedRowId)
    }
  }
  const altaBene = async (id) => {
    await altaBeneficio(id);
    window.location.reload();
  }
  const altaCate = async (id) => {
    await altaCategoria(id);
    window.location.reload();
  }
  const nuevo = () => {
    if (itemSelected === 1) {
      setIsOpenCategoria(true)
    }
    if (itemSelected === 2) {
      setIsOpenBeneficio(true)
    }
  }

  return (
    <Fragment>
      <div className={styles.menu}>
        <div onClick={home} className={styles.cerrarSesion}>Ir al home</div>
        <div onClick={cerrarSesion} className={styles.cerrarSesion}>Cerrar sesión</div>
      </div>
      <div className={styles.container__total}>
        <div className={styles.menuOpciones}>
          <div className={styles.menuItem} onClick={() => { setItemSelected(1) }}>
            Categorias
            {itemSelected === 1 ? <div className={styles["menu__item--selected"]}></div> : <Fragment></Fragment>}
          </div>
          <div className={styles.menuItem} onClick={() => { setItemSelected(2) }}>
            Beneficios
            {itemSelected === 2 ? <div className={styles["menu__item--selected"]}></div> : <Fragment></Fragment>}
          </div>
          <div className={styles.menuItem} onClick={() => { setItemSelected(3) }}>
            Nuevos comercios
            {itemSelected ===3 ? <div className={styles["menu__item--selected"]}></div> : <Fragment></Fragment>}
          </div>
        </div>
        {itemSelected !=3 &&(<Button color type='button' onClick={nuevo}>Nuevo</Button>)}
        <div className={styles.container}>
          {itemSelected === 1 ?
            <Fragment>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      {categoriasColumn.map((column) => {
                        <TableCell>{column.headerName}</TableCell>
                      })}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {categorias.map((row) => (
                      <TableRow key={row.idCategoria}>
                        <TableCell>{row.nameCategoria}</TableCell>
                        <TableCell>{row.idImage}</TableCell>
                        <TableCell>{!row.baja ? <Fragment>Activo</Fragment> : <Fragment>Deshabilitado</Fragment>}</TableCell>
                        {!row.baja ?
                          <TableCell>
                            <div onClick={() => { setSelectedRowId(row.idCategoria); toggleModal() }} className={styles.button__delete}>
                              Eliminar
                            </div>
                          </TableCell>
                          :
                          <TableCell>
                            <div onClick={() => { altaCate(row.idCategoria) }} className={styles.button__delete}>
                              Activar
                            </div>
                          </TableCell>
                        }
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <div className={styles.paginator}>
                <Pagination count={countCat} color="primary" onChange={handleChangePageCategoria} />
              </div>
            </Fragment>
            :
            itemSelected === 2 ?
            <Fragment>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      {beneficiosColumn.map((column) => {
                        <TableCell>{column.headerName}</TableCell>
                      })}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {beneficios.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.descuento}</TableCell>
                        <TableCell>{row.provincia}</TableCell>
                        <TableCell>{row.direccion}</TableCell>
                        <TableCell>{!row.baja ? <Fragment>Activo</Fragment> : <Fragment>Deshabilitado</Fragment>}</TableCell>
                        {!row.baja ?
                          <TableCell>
                            <div onClick={() => { setSelectedRowId(row.id); toggleModal() }} className={styles.button__delete}>
                              Eliminar
                            </div>
                          </TableCell>
                          :
                          <TableCell>
                            <div onClick={() => { altaBene(row.id) }} className={styles.button__delete}>
                              Activar
                            </div>
                          </TableCell>
                        }
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <div className={styles.paginator}>
                <Pagination count={count} color="primary" onChange={handleChangePage} />
              </div>
            </Fragment>
            :
            <Fragment>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      {contactoColumn.map((column) => {
                        <TableCell>{column.headerName}</TableCell>
                      })}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {contacto.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell>{row.nombreComercio}</TableCell>
                        <TableCell>{row.nombre}</TableCell>
                        <TableCell>{row.telefono}</TableCell>
                        <TableCell>{row.email}</TableCell>
                          <TableCell>
                            <div onClick={() => { setSelectedRowId(row.id); toggleModal() }} className={styles.button__delete}>
                              Eliminar
                            </div>
                          </TableCell>                        
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <div className={styles.paginator}>
                <Pagination count={countCon} color="primary" onChange={handleChangePageContacto} />
              </div>
            </Fragment>
          }
        </div>
      </div>
      <Modal
        isOpen={isOpenModal}
        className={styles.modal}
        overlayClassName={styles.modal__overlay}
        ariaHideApp={false}
      >
        {itemSelected == 1 ?
          <p>¿Desea eliminar esta categoría?</p>
          :
          itemSelected == 2 ?
          <p>¿Desea eliminar este beneficio?</p>
          :
          <p>¿Desea eliminar este nuevo comercio?</p>
        }<Button primary type='button' onClick={toggleModal}>Cancelar</Button>
        <Button primary type='button' onClick={deleteRow}>Eliminar</Button>
      </Modal>
      <ModalCategoria isOpen={isOpenCategoria} setIsOpen={setIsOpenCategoria} />
      <ModalBeneficio isOpen={isOpenBeneficio} setIsOpen={setIsOpenBeneficio} categorias={categorias} />
    </Fragment>
  )
}
export default Admin