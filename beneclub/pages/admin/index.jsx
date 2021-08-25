import React, { Fragment, useState,useEffect } from 'react'
import styles from './admin.module.scss'
import { useRouter } from 'next/router'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Image from 'next/image'
import { getBeneficios, getCategorias, getBeneficiosXCategorias, getBeneficiosXProvincia } from './../../utils/fetches.js'
const Admin = () => {
    const router = useRouter()
    const [itemSelected,setItemSelected] = useState(1);
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
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
  
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
        { field: 'idCategoria', headerName: 'ID', width: 90,hide: true,  identity: true },
        { field: 'name', headerName: 'Nombre', width: 90 },
        { field: 'image', headerName: 'Nombre imagen', width: 90 },
        { field: 'baja', headerName: 'Activo', width: 90 },
        { field: 'button', headerName: '', width: 90 }

      ]
      const deleteRow = (id)=>{

      }
    return (
        <Fragment>
        <div className={styles.menu}>
            <div onClick={cerrarSesion} className={styles.cerrarSesion}>Cerrar sesion</div>
        </div>
            <div className={styles.container__total}>
                <div className={styles.menuOpciones}>
                    <div className={styles.menuItem}>
                        Categorias
                        {itemSelected ===1 ? <div className={styles["menu__item--selected"]}></div>:<Fragment></Fragment>}
                    </div>
                    <div className={styles.menuItem}>
                        Beneficios
                        {itemSelected ===2 ? <div className={styles["menu__item--selected"]}></div>:<Fragment></Fragment>}
                    </div>
                </div>
                <div className={styles.container}>
                  {itemSelected ===1?
                     <TableContainer>
                     <Table>
                       <TableHead>
                         <TableRow>
                           {categoriasColumn.map((column)=>{
                             <TableCell>{column.headerName}</TableCell>
                           })}
                         </TableRow>
                       </TableHead>
                       <TableBody>
                         {categorias.map((row) => (
                           <TableRow key={row.idCategoria}>
                             <TableCell>{row.idCategoria}</TableCell>
                             <TableCell>{row.name}</TableCell>
                             <TableCell>{row.image}</TableCell>
                             <TableCell>{!row.baja ? <Fragment>Activo</Fragment>:<Fragment>Deshabilitado</Fragment>}</TableCell>
                             <TableCell><div onClick={()=>{deleteRow(row.idCategoria)}}><Image src='/images/delete.svg' alt='delete' width={20} height={20}/></div></TableCell>
                           </TableRow>
                         ))}
                       </TableBody>
                     </Table>
                   </TableContainer>
                 :<div></div>}
                </div>
            </div>

        </Fragment>
    )
}
export default Admin