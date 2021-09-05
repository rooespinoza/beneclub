package com.beneclub.main.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.beneclub.main.entity.Beneficio;
import com.beneclub.main.entity.Categoria;
import com.beneclub.main.entity.Usuario;
import com.beneclub.main.service.UsuarioService;



@RestController
@CrossOrigin( methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT,
        RequestMethod.DELETE,RequestMethod.OPTIONS})
@RequestMapping(path = "beneclub/usuario")
public class UsuarioController extends BaseController<Usuario, UsuarioService>{
	
	 @Autowired
	    private final JdbcTemplate jdbcTemplate = new JdbcTemplate();
	 private BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder ();
	 

	 @PostMapping("/registro")
	    public boolean registro() throws Exception {
	        try {
	        	String sql = "SELECT count(*) FROM beneclub_user WHERE user = ?";
	        	boolean exists = false;
	        	int count = jdbcTemplate.queryForObject(sql,new Object[] { "admin" },Integer.class);
	        	exists = count > 0;
	        	if(!exists) {
	        		String password = bCryptPasswordEncoder.encode("adminBeneclub123");
		            String user = "admin";
		            this.jdbcTemplate.update("Insert into beneclub_user(password,user) values(?,?)",password,user);
		                    
		            return true;
	        	}else {
	        		return false;
	        	}
	            

	        } catch (Exception ex) {
	            return false;
	        }
	    }
	  @PostMapping("/login")
	    public Usuario login(@RequestParam String cuenta, @RequestParam String pass) throws Exception {
	        try {
	            Usuario user = new Usuario();
	            user = this.jdbcTemplate.queryForObject(
	        			"SELECT * FROM beneclub_user where user = '"+cuenta +"'",
	                    (rs, rowNum) -> {
	                    	Usuario aux = new Usuario();
	                    	aux.setId(rs.getLong("id"));
	                    	aux.setPassword(rs.getString("password"));
	                    	aux.setUser(rs.getString("user"));
	                    	return aux;
	                    });
	            
	            bCryptPasswordEncoder.matches(pass,user.getPassword());
	            System.out.println("fdsf");
	            return user;

	        } catch (Exception ex) {
	        	 throw ex;
	        }
	    }
}
