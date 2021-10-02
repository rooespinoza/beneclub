import axios from 'axios'
import useSWR, { useSWRInfinite } from 'swr'
const apiBeneclub = axios.create({
  baseURL: 'http://localhost:9001/',

})
const ruta = "http://localhost/backBeneclub";
//Trae todas las categorias por pagina
export const getCategorias = async (page) => {
  try {
    const respuesta = await fetch(`${ruta}/getCategorias.php?page=` + page);
    const response = await respuesta.json();
    return response;
  } catch (e) {
    throw e.response ? new Error(e.response.data.message) : new Error(e.message)
  }
}

//Trae la cantidad de registros en categorias
export const getCountCategorias = async () => {
  try {
    const respuesta = await fetch(`${ruta}/getCountCategorias.php`);
    const response = await respuesta.json();
    return response;
  } catch (e) {
    throw e.response ? new Error(e.response.data.message) : new Error(e.message)
  }
}
//Trae las categorias activas
export const getCategoriasActivas = async () => {
  try {
    const respuesta = await fetch(`${ruta}/getCategoriasActivas.php`);
    const response = await respuesta.json();
    return response;
  } catch (e) {
    throw e.response ? new Error(e.response.data.message) : new Error(e.message)
  }
}
//Trae todos los beneficios, incluido los dados de baja, paginados
export const getBeneficios = async (page) => {
  try {
    const respuesta = await fetch(`${ruta}/getBeneficios.php?page=` + page);
    const response = await respuesta.json();
    return response;
  } catch (e) {
    throw e.response ? new Error(e.response.data.message) : new Error(e.message)
  }
}
//Trae la cantidad de registros en beneficios
export const getCountBeneficios = async () => {
  try {
    const respuesta = await fetch(`${ruta}/getCountBeneficios.php`);
    const response = await respuesta.json();
    return response;
  } catch (e) {
    throw e.response ? new Error(e.response.data.message) : new Error(e.message)
  }
}
//Trae todos los beneficios activos
export const getBeneficiosActivosxPagina = async (page) => {
  try {
    const respuesta = await fetch(`${ruta}/getBeneficiosActivosxPagina.php?page=` + page);
    const response = await respuesta.json();
    return response;
  } catch (e) {
    throw e.response ? new Error(e.response.data.message) : new Error(e.message)
  }
}
//Trae la cantidad de registros en beneficios
export const getCountBeneficiosActivos = async () => {
  try {
    const respuesta = await fetch(`${ruta}/getCountBeneficiosActivos.php`);
    const response = await respuesta.json();
    return response;
  } catch (e) {
    throw e.response ? new Error(e.response.data.message) : new Error(e.message)
  }
}
//Trae los beneficios de una categoria
export const getBeneficiosXCategorias = async (id) => {
  try {
    const respuesta = await fetch(`${ruta}/getBeneficiosXCategorias.php?idCategoria=` + id);
    const response = await respuesta.json();
    return response;
  } catch (e) {
    throw e.response ? new Error(e.response.data.message) : new Error(e.message)
  }
}
//Trae los beneficios de una provincia
export const getBeneficiosXProvincia = async (provincia) => {
  try {
    const respuesta = await fetch(`${ruta}/getBeneficiosXProvincia.php?provincia=` + provincia);
    const response = await respuesta.json();
    return response;
  } catch (e) {
    throw e.response ? new Error(e.response.data.message) : new Error(e.message)
  }
}
//Login de usuario -------------------------------------------
export const login = async (user) => {
  console.log(user)
  try {
    const respuesta = await fetch(`${ruta}/login.php`, {
      method: "POST",
      body: JSON.stringify(user),
    });
    const response = await respuesta.json();
    return response;

  } catch (e) {
    throw e.response ? new Error(e.response.data.message) : new Error(e.message)
  }
}
//Da de baja un beneficio
export const deleteBeneficio = async (id) => {
  try {
    const respuesta = await fetch(`${ruta}/deleteBeneficio.php?id=` + id);
    const response = await respuesta.json();
    return response;
  } catch (e) {
    throw e.response ? new Error(e.response.data.message) : new Error(e.message)
  }
}
//Da de baja una categoria
export const deleteCategoria = async (id) => {
  try {
    const respuesta = await fetch(`${ruta}/deleteCategoria.php?idCategoria=` + id);
    const response = await respuesta.json();
    return response;
  } catch (e) {
    throw e.response ? new Error(e.response.data.message) : new Error(e.message)
  }
}
//Vuelve a activar un beneficio
export const altaBeneficio = async (id) => {
  try {
    const respuesta = await fetch(`${ruta}/altaBeneficio.php?id=` + id);
    const response = await respuesta.json();
    return response;
  } catch (e) {
    throw e.response ? new Error(e.response.data.message) : new Error(e.message)
  }
}
//Vuelve a activar una categoria
export const altaCategoria = async (id) => {
  try {
    const respuesta = await fetch(`${ruta}/altaCategoria.php?idCategoria=` + id);
    const response = await respuesta.json();
    return response;
  } catch (e) {
    throw e.response ? new Error(e.response.data.message) : new Error(e.message)
  }
}
//Agregar una nueva categoria
export const insertCategoria = async (values) => {
  const img = await guardarImagenCategoria(values.img)
const categoria ={
  'nameCategoria':values.name,
  'baja':0,
  'idImage':img.id
}
const categoriaCarga = JSON.stringify(categoria);
const respuesta = await fetch(`${ruta}/insertCategoria.php`, {
    method: "POST",
    body: categoriaCarga,
});
const response = await respuesta.json();
console.log(response)
return response
}
//guarda una imagen en el servidor
const guardarImagenCategoria = async (imagen) => {
  const formData = new FormData();
  formData.append("file", imagen);
  formData.append("tmp_name", imagen.name)
  try {
    const respuesta = await fetch(`${ruta}/insertImagenCategoria.php`, {
      method: "POST",
      body: formData})
    const response = await respuesta;
    const id = await getIdImagenCategoria();
    return id[0];
  }
  catch (e) {
    throw e.response ? new Error(e.response.data.message) : new Error(e.message)
  }
}
const getIdImagenCategoria = async () =>{
  try {
    const respuesta = await fetch(`${ruta}/getIdImageCategoria.php`);
    const response = await respuesta.json();
    return response;
  } catch (e) {
    throw e.response ? new Error(e.response.data.message) : new Error(e.message)
  }
}

//Agrega un beneficio
export const insertBeneficio = async (values) => {
  const img = await guardarImagenBeneficio(values.img);
  const body = {
    name: values.name,
    image: img.id,
    baja: 0,
    descripcion: values.descripcion,
    direccion: values.direccion,
    mapa: values.mapa,
    provincia: values.provincia,
    categoria: values.categoria.idCategoria,
    descuento: values.descuento
  }
  try {
    const beneficioCarga = JSON.stringify(body);
    const respuesta = await fetch(`${ruta}/insertBeneficio.php`, {
        method: "POST",
        body: beneficioCarga,
    });
    const response = await respuesta.json();
    return response;
  } catch (e) {
    throw e.response ? new Error(e.response.data.message) : new Error(e.message)
  }
}
//guarda una imagen en el servidor
const guardarImagenBeneficio = async (imagen) => {
  const formData = new FormData();
  formData.append("file", imagen);
  formData.append("tmp_name", imagen.name)
  try {
    const respuesta = await fetch(`${ruta}/insertImagenBeneficio.php`, {
      method: "POST",
      body: formData})
    const response = await respuesta;
    const id = await getIdImagenBeneficio();
    return id[0];
  }
  catch (e) {
    throw e.response ? new Error(e.response.data.message) : new Error(e.message)
  }
}
const getIdImagenBeneficio = async () =>{
  try {
    const respuesta = await fetch(`${ruta}/getIdImageBeneficio.php`);
    const response = await respuesta.json();
    return response;
  } catch (e) {
    throw e.response ? new Error(e.response.data.message) : new Error(e.message)
  }
}


export const insertContacto = async (values) => {
  console.log(values)
  try {
    const contactoCarga = JSON.stringify(values);
    const respuesta = await fetch(`${ruta}/insertContacto.php`, {
        method: "POST",
        body: contactoCarga,
    });
    const response = await respuesta.json();
    return response;
  } catch (e) {
    throw e.response ? new Error(e.response.data.message) : new Error(e.message)
  }
}

export const getCountContacto = async () => {
  try {
    const respuesta = await fetch(`${ruta}/getCountContacto.php`);
    const response = await respuesta.json();
    return response;
  } catch (e) {
    throw e.response ? new Error(e.response.data.message) : new Error(e.message)
  }
}

export const getContactos = async (page) => {
  try {
    const respuesta = await fetch(`${ruta}/getContactos.php?page=` + page);
    const response = await respuesta.json();
    return response;
  } catch (e) {
    throw e.response ? new Error(e.response.data.message) : new Error(e.message)
  }
}

export const deleteContacto = async (id) => {
  try {
    const respuesta = await fetch(`${ruta}/deleteContacto.php?id=` + id);
    const response = await respuesta.json();
    return response;
  } catch (e) {
    throw e.response ? new Error(e.response.data.message) : new Error(e.message)
  }
}