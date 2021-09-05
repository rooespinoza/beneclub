package com.beneclub.main.controller;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.beneclub.main.entity.Beneficio;
import com.beneclub.main.entity.Categoria;
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
	  
	  @PostMapping("/uploadImg")
	    @Transactional
	    public boolean uploadFile(@RequestParam("file") MultipartFile file, @RequestParam("name") String nombre)
	            throws Exception {
	        try {
	            if (file == null || file.isEmpty()) {
	                throw new Exception("El archivo está corrupto o no puede leerse.");
	            }

	            String upload_folder = ".//src//main//resources//static//images//categorias//";
	            byte[] filesBytes = file.getBytes();
	            Path path = Paths.get(upload_folder + nombre);
	            Files.write(path, filesBytes);
	            return true;
	        } catch (Exception ex) {
	            ex.printStackTrace();
	            throw ex;
	        }
	    }
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
		                    categoria.setImage(rs.getString("imageCategoria"));
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
		                    categoria.setImage(rs.getString("imageCategoria"));
		                    categoria.setBaja(rs.getBoolean("bajaCategoria"));
		           
	                    return categoria;
	                });
	    	}
}
