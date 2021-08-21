import axios from 'axios'

  const apiBeneclub = axios.create({
      baseURL:'http://localhost:9001/',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
  })

  export const getCategorias = async()=>{
    try {
        const response = await apiBeneclub.get('/categorias/')
        return response.data;
    }catch (e) {
        throw e.response ? new Error(e.response.data.message) : new Error(e.message)
    }
  }

  export const getBeneficios = async()=>{
    try {
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
        console.log(response.data)
        return response.data;
    }catch (e) {
        throw e.response ? new Error(e.response.data.message) : new Error(e.message)
    }
  }