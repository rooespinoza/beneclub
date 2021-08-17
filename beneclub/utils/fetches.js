import axios from 'axios'

  const apiBeneclub = axios.create({
      baseURL:'http://localhost:9001/',
      headers: {
        "Content-type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origins": "*",
        "Access-Control-Allow-Methods": ["GET", "OPTIONS", "POST", "PUT", "DELETE"],
        "Access-Control-Allow-Headers": "Content-Type",
        "cache-control": "no-cache",
        "withCredentials":"true"
      },
  })
  var serverUrl = "http://localhost:9001/";
  var responseEntity = [];
  const config = {
    headers: {
      "Content-type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": ["GET", "OPTIONS", "POST", "PUT", "DELETE"],
      "Access-Control-Allow-Headers": "Content-Type",
      "cache-control": "no-cache",
    },
  };
  export const getCategorias = async()=>{
    try {
        const response = await apiBeneclub.get('/categorias/')
        return response;
    }catch (e) {
        throw e.response ? new Error(e.response.data.message) : new Error(e.message)
    }
  }