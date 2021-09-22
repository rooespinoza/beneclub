import axios from 'axios'
import useSWR, { useSWRInfinite } from 'swr'
  const apiBeneclub = axios.create({
      baseURL:'http://localhost:9001/',
     
  })
//Trae todas las categorias por pagina
  export const getCategorias = async(page)=>{
    try {      
      await apiBeneclub.post('beneclub/usuario/registro/')
        const response = await apiBeneclub.get('categorias/categorias/'+page)
        return response.data;
    }catch (e) {
        throw e.response ? new Error(e.response.data.message) : new Error(e.message)
    }
  }

   //Trae la cantidad de registros en categorias
   export const getCountCategorias = async()=>{
    try {
      await apiBeneclub.post('beneclub/usuario/registro/')
        const response = await apiBeneclub.get('categorias/countAllCategorias/')
        return response.data;
    }catch (e) {
        throw e.response ? new Error(e.response.data.message) : new Error(e.message)
    }
  }

  //Trae las categorias activas
  export const getCategoriasActivas = async()=>{
    try {      
      await apiBeneclub.post('beneclub/usuario/registro/')
        const response = await apiBeneclub.get('/categorias/categoriasActivas/')
        return response.data;
    }catch (e) {
        throw e.response ? new Error(e.response.data.message) : new Error(e.message)
    }
  }
//Trae todos los beneficios, incluido los dados de baja, paginados
  export const getBeneficios = async(page)=>{
    try {
      await apiBeneclub.post('beneclub/usuario/registro/')
        const response = await apiBeneclub.get('beneficios/beneficiosAll/'+page)
        return response.data;
    }catch (e) {
        throw e.response ? new Error(e.response.data.message) : new Error(e.message)
    }
  }
  //Trae la cantidad de registros en beneficios
  export const getCountBeneficios = async()=>{
    try {
      await apiBeneclub.post('beneclub/usuario/registro/')
        const response = await apiBeneclub.get('beneficios/countAllBeneficios/')
        return response.data;
    }catch (e) {
        throw e.response ? new Error(e.response.data.message) : new Error(e.message)
    }
  }
   //Trae todos los beneficios activos
  export const getBeneficiosActivosxPagina = async(page)=>{
    try {
        const response = await apiBeneclub.get('/beneficios/beneficiosActivosxPagina/'+page)
        return response.data;
    }catch (e) {
        throw e.response ? new Error(e.response.data.message) : new Error(e.message)
    }
  }
    //Trae la cantidad de registros en beneficios
    export const getCountBeneficiosActivos = async()=>{
      try {
        await apiBeneclub.post('beneclub/usuario/registro/')
          const response = await apiBeneclub.get('beneficios/countBeneficiosActivos/')
          return response.data;
      }catch (e) {
          throw e.response ? new Error(e.response.data.message) : new Error(e.message)
      }
    }
 //Trae los beneficios de una categoria
  export const getBeneficiosXCategorias = async(id)=>{
    try {
        const response = await apiBeneclub.get('/beneficios/beneficioXCategoria/'+id)
        return response.data;
    }catch (e) {
        throw e.response ? new Error(e.response.data.message) : new Error(e.message)
    }
  }
//Trae los beneficios de una provincia
  export const getBeneficiosXProvincia = async(provincia)=>{
    try {
        const response = await apiBeneclub.get('/beneficios/beneficioXProvincia/'+provincia)
        return response.data;
    }catch (e) {
        throw e.response ? new Error(e.response.data.message) : new Error(e.message)
    }
  }
//Login de usuario
  export const login = async(user)=>{
    try {      
      await apiBeneclub.post('beneclub/usuario/registro/')
      const response = await apiBeneclub.post('/beneclub/usuario/login/?pass='+user.password+'&cuenta='+user.user)
      return response;
  }catch (e) {
      throw e.response ? new Error(e.response.data.message) : new Error(e.message)
  }
  }
//Da de baja un beneficio
  export const deleteBeneficio = async(id)=>{
    try {
      const response = await apiBeneclub.delete('/beneficios/'+id)
      return response;
  }catch (e) {
      throw e.response ? new Error(e.response.data.message) : new Error(e.message)
  }
  }
//Da de baja una categoria
  export const deleteCategoria = async(id)=>{
    try {
      const response = await apiBeneclub.delete('/categorias/'+id)
      return response;
  }catch (e) {
      throw e.response ? new Error(e.response.data.message) : new Error(e.message)
  }
  }
    //Vuelve a activar un beneficio
  export const altaBeneficio = async(id)=>{
    try {
      const response = await apiBeneclub.put('/beneficios/altaBeneficio/'+id)
      return response;
  }catch (e) {
      throw e.response ? new Error(e.response.data.message) : new Error(e.message)
  }
  }
    //Vuelve a activar una categoria
  export const altaCategoria = async(id)=>{
    try {
      const response = await apiBeneclub.put('/categorias/altaCategoria/'+id)
      return response;
  }catch (e) {
      throw e.response ? new Error(e.response.data.message) : new Error(e.message)
  }
  }
//Agregar una nueva categoria
  export const insertCategoria = async(values)=>{
    const img = await guardarImagenCategoria(values.img)
    const body = {name: values.name, image:img, baja:0}

    try {
      const response = await apiBeneclub.post('/categorias/',body, {
        headers: {
          "Access-Control-Allow-Origins": "*",
          "cache-control": "no-cache",
        },
      })
      return response;
  }catch (e) {
      throw e.response ? new Error(e.response.data.message) : new Error(e.message)
  }
  }
//guarda una imagen en el servidor
  const guardarImagenCategoria = async(imagen)=> {
    const formData = new FormData();
    formData.append("file", imagen);
    formData.append("name",imagen.name)
    try{
   const response = await apiBeneclub.post('/categorias/image',formData)
   console.log(response)
    return response.data;
  }
  catch (e){
    throw e.response ? new Error(e.response.data.message) : new Error(e.message)
  }
}
//Agrega un beneficio
export const insertBeneficio = async(values)=>{ 
  const img = await guardarImagenBeneficio(values.img);
  const body = {
    name: values.name, 
    image:img, 
    baja:0,
    descripcion:values.descripcion,
    direccion:values.direccion,
    mapa:values.mapa,
    provincia:values.provincia,
    categoria:values.categoria.idCategoria,
    descuento:values.descuento
  }
  try {
    const response = await apiBeneclub.post('/beneficios/',body, {
      headers: {
        "Access-Control-Allow-Origins": "*",
        "cache-control": "no-cache",
      },
    })
    return response;
}catch (e) {
    throw e.response ? new Error(e.response.data.message) : new Error(e.message)
}
}
//guarda una imagen en el servidor
const guardarImagenBeneficio = async(imagen)=> {
  const formData = new FormData();
  formData.append("file", imagen);
  formData.append("name",imagen.name)
  try{
 const response = await apiBeneclub.post('/beneficios/image',formData)
 return response.data;
}
catch (e){
  throw e.response ? new Error(e.response.data.message) : new Error(e.message)
}
}