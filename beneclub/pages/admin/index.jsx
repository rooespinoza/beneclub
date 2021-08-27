import React, { Fragment, useState, useEffect } from 'react'
import styles from './admin.module.scss'
import { useRouter } from 'next/router'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import Image from 'next/image'
import {ModalCategoria, ModalBeneficio} from './../../components/ModalAdd'
import Modal from 'react-modal';
import Button from './../../components/Button'
import { getBeneficios, getCategorias, deleteBeneficio,deleteCategoria,altaBeneficio,altaCategoria } from './../../utils/fetches.js'
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
  const [page, setPage] = React.useState(0);
  const [isOpenCategoria,setIsOpenCategoria] =useState(false)
  const [isOpenBeneficio,setIsOpenBeneficio] = useState(false)
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
const [isOpenModal,setIsOpenModal]=useState(false)
const toggleModal = () =>setIsOpenModal(!isOpenModal);
const [selectedRowId,setSelectedRowId] =useState(0)
  const [categorias, setCategorias] = useState([])
  const [beneficios, setBeneficios] = useState([])
  useEffect(async () => {
    if (categorias.length === 0) {
      const aux = await getCategorias()
      setCategorias(aux)
    }
    if (beneficios.length === 0) {
      const aux = await getBeneficios()
      setBeneficios(aux)
    }
  }, [])
  const categoriasColumn = [
    { field: 'name', headerName: 'Nombre', width: 90 },
    { field: 'image', headerName: 'Nombre imagen', width: 90 },
    { field: 'baja', headerName: 'Activo', width: 90 },
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

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const deleteRow = async() => {
    if(itemSelected==2){
       await deleteBeneficio(selectedRowId)
    }
    if(itemSelected==1){
    await deleteCategoria(selectedRowId)
    }
    setIsOpenModal(false)
    window.location.reload();
  }
  const altaBene = async(id) =>{
   const response= await altaBeneficio(id);
   window.location.reload();
  }
  const altaCate = async(id) =>{
    const response= await altaCategoria(id);
    window.location.reload();
  }
  const nuevo = () =>{
    if(itemSelected===1) {
      setIsOpenCategoria(true)
    }
    if(itemSelected===2){
      setIsOpenBeneficio(true)
    }
  }

  return (
    <Fragment>
      <div className={styles.menu}>
        <div onClick={cerrarSesion} className={styles.cerrarSesion}>Cerrar sesión</div>
      </div>
      <div className={styles.container__total}>
        <div className={styles.menuOpciones}>
          <div className={styles.menuItem} onClick={()=>{setItemSelected(1)}}>
            Categorias
            {itemSelected === 1 ? <div className={styles["menu__item--selected"]}></div> : <Fragment></Fragment>}
          </div>
          <div className={styles.menuItem}  onClick={()=>{setItemSelected(2)}}>
            Beneficios
            {itemSelected === 2 ? <div className={styles["menu__item--selected"]}></div> : <Fragment></Fragment>}
          </div>
        </div>
        <Button color type='button' onClick={nuevo}>Nuevo</Button>
        <div className={styles.container}>
          {itemSelected === 1 ?
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
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.image}</TableCell>
                      <TableCell>{!row.baja ? <Fragment>Activo</Fragment> : <Fragment>Deshabilitado</Fragment>}</TableCell>
                      {!row.baja?
                      <TableCell>
                        <div onClick={() => { setSelectedRowId(row.idCategoria);toggleModal() }} className={styles.button__delete}>
                          Eliminar
                        </div>
                      </TableCell>
                      :
                      <TableCell>
                        <div onClick={() => {altaCate(row.idCategoria)}} className={styles.button__delete}>
                          Activar
                        </div>
                      </TableCell>
                      }
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={categorias.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </TableContainer>
            : 
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
                    {!row.baja?
                      <TableCell>
                        <div onClick={() => { setSelectedRowId(row.id);toggleModal() }} className={styles.button__delete}>
                          Eliminar
                        </div>
                      </TableCell>
                      :
                      <TableCell>
                        <div onClick={() => {altaBene(row.id)}} className={styles.button__delete}>
                          Activar
                        </div>
                      </TableCell>
                      }
                     </TableRow>
                ))}
              </TableBody>
            </Table>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={beneficios.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableContainer>}
        </div>
      </div>
      <Modal
        isOpen={isOpenModal}
        className={styles.modal}
        overlayClassName={styles.modal__overlay}
        ariaHideApp={false}
      >
        {itemSelected==1?
        <p>¿Desea eliminar esta categoría?</p>
        :
        <p>¿Desea eliminar este beneficio?</p>
        }<Button primary type='button' onClick={toggleModal}>Cancelar</Button>
        <Button primary type='button' onClick={deleteRow}>Eliminar</Button>
      </Modal>
        <ModalCategoria isOpen={isOpenCategoria} setIsOpen={setIsOpenCategoria}/>
        <ModalBeneficio isOpen={isOpenBeneficio} setIsOpen={setIsOpenBeneficio} categorias={categorias}/>
    </Fragment>
  )
}
export default Admin