import React, { Fragment, useState,useEffect } from 'react'
import styles from './admin.module.scss'
import { useRouter } from 'next/router'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
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

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, categorias.length - page * rowsPerPage);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
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
                   <Table aria-label="custom pagination table">
                     <TableBody>
                       {(rowsPerPage > 0
                         ? categorias.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                         : categorias
                       ).map((row) => (
                         <TableRow key={row.name}>
                           <TableCell component="th" scope="row">
                             {row.name}
                           </TableCell>
                           <TableCell style={{ width: 160 }}>
                             {row.image}
                           </TableCell>
                           <TableCell style={{ width: 160 }} align="right">
                             {row.baja}
                           </TableCell>
                         </TableRow>
                       ))}
             
                       {emptyRows > 0 && (
                         <TableRow style={{ height: 53 * emptyRows }}>
                           <TableCell colSpan={6} />
                         </TableRow>
                       )}
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