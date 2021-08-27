package com.beneclub.main.controller;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

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
	    	jdbcTemplate.update("UPDATE beneclub.beneclub_categorias SET baja = '0' WHERE idCategoria = "+id);
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
}
