package com.beneclub.main.controller;

import java.io.IOException;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.beneclub.main.entity.Categoria;
import com.beneclub.main.entity.ImageCategoria;
import com.beneclub.main.service.CategoriaService;


@RestController
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.OPTIONS,
        RequestMethod.DELETE})
@RequestMapping(path = "/categorias")
public class CategoriaController extends BaseController<Categoria, CategoriaService>{
	 @Autowired
	    private final JdbcTemplate jdbcTemplate = new JdbcTemplate();
	 
	  @PutMapping("/altaCategoria/{id}")
	    public boolean altaCategoria(@PathVariable("id") Long id) {
	    	try {
	    	jdbcTemplate.update("UPDATE beneclub_categorias SET bajaCategoria = '0' WHERE idCategoria = "+id);
	    	 return true;
	    	 
	     } catch (Exception ex) {
	            return false;
	        }
	    }
	  
	  @RequestMapping(path = "/image", method = RequestMethod.POST)
	  public int uploadFile(
	          @RequestParam("file") MultipartFile file) throws IOException {
		  try {
			  if (!file.isEmpty()) {

		          String sql = "INSERT INTO imagen_categoria (name, tipo, size, pixel) VALUES(?, ?, ?, ?)";

		          String name = file.getOriginalFilename();
		          String tipo   = file.getContentType();
		          Long size   = file.getSize();
		          byte[] pixel  = file.getBytes();

		          jdbcTemplate.update(sql, name, tipo, size, pixel);	          
		          String sqlId = "SELECT idImage FROM imagen_categoria order by idImage desc limit 1";
		          return jdbcTemplate.queryForObject(sqlId,Integer.class);				  
		      }else {
				  return 0;
		      }
			 
		  } catch (Exception ex) {
			  System.out.println(ex);
	            return 0;
	        }
	    
	  }

	  @RequestMapping(value = "/getImage")
	  public void getUploadedPicture(
	          @RequestParam("idImage") String idImage, HttpServletResponse response)
	          throws IOException {

	      String sql = "SELECT pixel, tipo FROM imagen_categoria WHERE idImage = '" + idImage + "'";
	      List<Map<String, Object>> result = jdbcTemplate.queryForList(sql);

	      if (!result.isEmpty()) {
	          byte[] bytes = (byte[]) result.get(0).get("PIXEL");
	          String mime = (String) result.get(0).get("TIPO");

	          response.setHeader("Content-Type", mime);
	          response.getOutputStream().write(bytes);
	      }
	  }
	  
	 /* @PostMapping("/uploadImg")
	    @Transactional
	    public boolean uploadFile(@RequestParam("file") MultipartFile file, @RequestParam("name") String nombre)
	            throws Exception {
	        try {
	            if (file == null || file.isEmpty()) {
	                throw new Exception("El archivo está corrupto o no puede leerse.");
	            }

	            String upload_folder = ".//classes//static//images//categorias//";
	            byte[] filesBytes = file.getBytes();
	            Path path = Paths.get(upload_folder + nombre);
	            Files.write(path, filesBytes);
	            return true;
	        } catch (Exception ex) {
	            ex.printStackTrace();
	            throw ex;
	        }
	    }*/
	  @GetMapping("/countAllCategorias/")
	    public int getCountAllCategorias() {
	    	String sql = "SELECT count(*) FROM beneclub_categorias";
			return jdbcTemplate.queryForObject(sql,Integer.class);
	    	}
	  @GetMapping("/categorias/{page}")
	    public List<Categoria> getCategoriasXPagina(@PathVariable int page) {
		  int aux = page-1;
	    	int desde=aux*9;    	
	    	int cant = 9;
	    	return this.jdbcTemplate.query(
	    			"SELECT * FROM beneclub_categorias where bajaCategoria = 0 LIMIT "+desde+","+cant,
	                (rs, rowNum) -> {
	                	 Categoria categoria = new Categoria();
		                    categoria.setIdCategoria(rs.getLong("idCategoria"));
		                    categoria.setName(rs.getString("nameCategoria"));
		                    ImageCategoria imagenCategoria = new ImageCategoria();
		                    imagenCategoria.setIdImage(rs.getLong("idImage"));
		                    categoria.setImage(imagenCategoria);
		                    categoria.setBaja(rs.getBoolean("bajaCategoria"));
		           
	                    return categoria;
	                });
	    	}
	  
	  @GetMapping("/categoriasActivas/")
	    public List<Categoria> getCategoriasActivas() {
	    	return this.jdbcTemplate.query(
	    			"SELECT * FROM beneclub_categorias where bajaCategoria = 0",
	                (rs, rowNum) -> {
	                	 Categoria categoria = new Categoria();
		                    categoria.setIdCategoria(rs.getLong("idCategoria"));
		                    categoria.setName(rs.getString("nameCategoria"));
		                    ImageCategoria imagenCategoria= new ImageCategoria();
		                    imagenCategoria.setIdImage(rs.getLong("idImage"));
		                    categoria.setImage(imagenCategoria);
		                    categoria.setBaja(rs.getBoolean("bajaCategoria"));
		           
	                    return categoria;
	                });
	    	}
}
