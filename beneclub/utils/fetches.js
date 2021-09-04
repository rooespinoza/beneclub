import axios from 'axios'
import useSWR, { useSWRInfinite } from 'swr'
  const apiBeneclub = axios.create({
      baseURL:'http://localhost:9001/',
     
  })

  export const getCategorias = async()=>{
    try {      
      await apiBeneclub.post('beneclub/usuario/registro/')
        const response = await apiBeneclub.get('/categorias/')
        return response.data;
    }catch (e) {
        throw e.response ? new Error(e.response.data.message) : new Error(e.message)
    }
  }

  export const getBeneficios = async()=>{
    try {
      await apiBeneclub.post('beneclub/usuario/registro/')
        const response = await apiBeneclub.get('/beneficios/')
        
        return response.data;
    }catch (e) {
        throw e.response ? new Error(e.response.data.message) : new Error(e.message)
    }
  }

  export const getBeneficiosXCategorias = async(id)=>{
    try {
        const response = await apiBeneclub.get('/beneficios/beneficioXCategoria/'+id)
        return response.data;
    }catch (e) {
        throw e.response ? new Error(e.response.data.message) : new Error(e.message)
    }
  }

  export const getBeneficiosXProvincia = async(provincia)=>{
    try {
        const response = await apiBeneclub.get('/beneficios/beneficioXProvincia/'+provincia)
        return response.data;
    }catch (e) {
        throw e.response ? new Error(e.response.data.message) : new Error(e.message)
    }
  }

  export const login = async(user)=>{
    try {      
      await apiBeneclub.post('beneclub/usuario/registro/')
      const response = await apiBeneclub.post('/beneclub/usuario/login/?pass='+user.password+'&cuenta='+user.user)
      return response;
  }catch (e) {
      throw e.response ? new Error(e.response.data.message) : new Error(e.message)
  }
  }

  export const deleteBeneficio = async(id)=>{
    try {
      const response = await apiBeneclub.delete('/beneficios/'+id)
      return response;
  }catch (e) {
      throw e.response ? new Error(e.response.data.message) : new Error(e.message)
  }
  }

  export const deleteCategoria = async(id)=>{
    try {
      const response = await apiBeneclub.delete('/categorias/'+id)
      return response;
  }catch (e) {
      throw e.response ? new Error(e.response.data.message) : new Error(e.message)
  }
  }
    
  export const altaBeneficio = async(id)=>{
    try {
      const response = await apiBeneclub.put('/beneficios/altaBeneficio/'+id)
      return response;
  }catch (e) {
      throw e.response ? new Error(e.response.data.message) : new Error(e.message)
  }
  }

  export const altaCategoria = async(id)=>{
    try {
      const response = await apiBeneclub.put('/categorias/altaCategoria/'+id)
      return response;
  }catch (e) {
      throw e.response ? new Error(e.response.data.message) : new Error(e.message)
  }
  }

  export const insertCategoria = async(values)=>{
    
    const body = {name: values.name, image:values.img.name, baja:0}
    console.log(body)    
    try {
      const response = await apiBeneclub.post('/categorias/',body, {
        headers: {
          "Access-Control-Allow-Origins": "*",
          "cache-control": "no-cache",
        },
      }).then((response)=>guardarImagenCategoria(values.img))
      return response;
  }catch (e) {
      throw e.response ? new Error(e.response.data.message) : new Error(e.message)
  }
  }

  const guardarImagenCategoria = async(imagen)=> {
    const formData = new FormData();
    formData.append("file", imagen);
    formData.append("name",imagen.name)
    console.log("sdf")
    try{
   const response = await apiBeneclub.post('/categorias/uploadImg',formData)
   console.log(response)
  }
  catch (e){
    throw e.response ? new Error(e.response.data.message) : new Error(e.message)
  }
}

export const insertBeneficio = async(values)=>{ 
  console.log(values)
  try {
    const response = await apiBeneclub.post('/beneficios/',values, {
      headers: {
        "Access-Control-Allow-Origins": "*",
        "cache-control": "no-cache",
      },
    }).then((response)=>guardarImagenBeneficio(values.img))
    return response;
}catch (e) {
    throw e.response ? new Error(e.response.data.message) : new Error(e.message)
}
}

const guardarImagenBeneficio = async(imagen)=> {
  const formData = new FormData();
  formData.append("file", imagen);
  formData.append("name",imagen.name)
  console.log("sdf")
  try{
 const response = await apiBeneclub.post('/beneficios/uploadImg',formData)
 console.log(response)
}
catch (e){
  throw e.response ? new Error(e.response.data.message) : new Error(e.message)
}
}