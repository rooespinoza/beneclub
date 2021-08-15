package com.beneclub.main.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.beneclub.main.entity.Categoria;
import com.beneclub.main.service.CategoriaService;



@RestController
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT,
        RequestMethod.DELETE})
@RequestMapping(path = "beneclub/categorias")
public class CategoriaController extends BaseController<Categoria, CategoriaService>{
	 @Autowired
	    private final JdbcTemplate jdbcTemplate = new JdbcTemplate();
}
