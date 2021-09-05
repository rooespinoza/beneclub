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
import com.beneclub.main.service.BeneficioService;



@RestController
@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT,
		RequestMethod.DELETE, RequestMethod.OPTIONS })
@RequestMapping(path = "/beneficios")
public class BeneficioController extends BaseController<Beneficio, BeneficioService> {

    @Autowired
    private final JdbcTemplate jdbcTemplate = new JdbcTemplate();


    @PostMapping("/uploadImg")
    @Transactional
    public boolean uploadFile(@RequestParam("file") MultipartFile file, @RequestParam("name") String nombre)
            throws Exception {
        try {
            if (file == null || file.isEmpty()) {
                throw new Exception("El archivo está corrupto o no puede leerse.");
            }

            String upload_folder = ".//src//main//resources//static//images//beneficios//";
            byte[] filesBytes = file.getBytes();
            Path path = Paths.get(upload_folder + nombre);
            Files.write(path, filesBytes);
            return true;
        } catch (Exception ex) {
            ex.printStackTrace();
            throw ex;
        }
    }
    @GetMapping("/beneficioXCategoria/{id}")
    public List<Beneficio> getFiltradoCategoria(@PathVariable Long id) {
    	return this.jdbcTemplate.query(
    			"SELECT * FROM beneclub_beneficios b INNER JOIN beneclub_categorias c on b.idCategoria=c.idCategoria where b.idCategoria ="+id ,
                (rs, rowNum) -> {
                    Beneficio beneficio = new Beneficio();
                    beneficio.setId(rs.getLong("b.id"));
                    beneficio.setBaja(rs.getBoolean("b.baja"));
                    beneficio.setDescripcion(rs.getString("b.descripcion"));
                    beneficio.setDireccion(rs.getString("b.direccion"));
                    beneficio.setDescuento(rs.getString("b.descuento"));
                    beneficio.setImage(rs.getString("b.image"));
                    beneficio.setMapa(rs.getString("b.mapa"));
                    beneficio.setName(rs.getString("b.name"));
                    beneficio.setProvincia(rs.getString("b.provincia"));
                    
                    Categoria categoria = new Categoria();
                    categoria.setIdCategoria(rs.getLong("c.idCategoria"));
                    categoria.setName(rs.getString("c.nameCategoria"));
                    categoria.setImage(rs.getString("c.imageCategoria"));
                    categoria.setBaja(rs.getBoolean("c.bajaCategoria"));
                    
                    beneficio.setCategoria(categoria);
                    return beneficio;
                });
    	}
    
    @GetMapping("/beneficioXProvincia/{provincia}")
    public List<Beneficio> getFiltradoProvincia(@PathVariable("provincia") String provincia) {
    	return this.jdbcTemplate.query(
    			"SELECT * FROM beneclub_beneficios b INNER JOIN beneclub_categorias c on b.idCategoria=c.idCategoria where b.provincia = '"+provincia +"'" ,
                (rs, rowNum) -> {
                    Beneficio beneficio = new Beneficio();
                    beneficio.setId(rs.getLong("b.id"));
                    beneficio.setBaja(rs.getBoolean("b.baja"));
                    beneficio.setDescripcion(rs.getString("b.descripcion"));
                    beneficio.setDireccion(rs.getString("b.direccion"));
                    beneficio.setDescuento(rs.getString("b.descuento"));
                    beneficio.setImage(rs.getString("b.image"));
                    beneficio.setMapa(rs.getString("b.mapa"));
                    beneficio.setName(rs.getString("b.name"));
                    beneficio.setProvincia(rs.getString("b.provincia"));
                    
                    Categoria categoria = new Categoria();
                    categoria.setIdCategoria(rs.getLong("c.idCategoria"));
                    categoria.setName(rs.getString("c.nameCategoria"));
                    categoria.setImage(rs.getString("c.imageCategoria"));
                    categoria.setBaja(rs.getBoolean("c.bajaCategoria"));                    
                    
                    beneficio.setCategoria(categoria);
                    return beneficio;
                });
    	}
    @GetMapping("/beneficiosAll/{page}")
    public List<Beneficio> getBenefcios(@PathVariable int page) {
    	int aux = page-1;
    	int desde=aux*9;    	
    	int cant = 9;
    	return this.jdbcTemplate.query(
    			"SELECT * FROM beneclub_beneficios b INNER JOIN beneclub_categorias c on b.idCategoria=c.idCategoria LIMIT "+desde+","+cant,
                (rs, rowNum) -> {
                    Beneficio beneficio = new Beneficio();
                    beneficio.setId(rs.getLong("b.id"));
                    beneficio.setBaja(rs.getBoolean("b.baja"));
                    beneficio.setDescripcion(rs.getString("b.descripcion"));
                    beneficio.setDireccion(rs.getString("b.direccion"));
                    beneficio.setDescuento(rs.getString("b.descuento"));
                    beneficio.setImage(rs.getString("b.image"));
                    beneficio.setMapa(rs.getString("b.mapa"));
                    beneficio.setName(rs.getString("b.name"));
                    beneficio.setProvincia(rs.getString("b.provincia"));
                    
                    Categoria categoria = new Categoria();
                    categoria.setIdCategoria(rs.getLong("c.idCategoria"));
                    categoria.setName(rs.getString("c.nameCategoria"));
                    categoria.setImage(rs.getString("c.imageCategoria"));
                    categoria.setBaja(rs.getBoolean("c.bajaCategoria"));
                    
                    beneficio.setCategoria(categoria);
                    return beneficio;
                });
    	}
    @GetMapping("/countBeneficiosActivos/")
    public int getCountBeneficioActivo() {
    	String sql = "SELECT count(*) FROM beneclub_beneficios where baja = 0";
		return jdbcTemplate.queryForObject(sql,Integer.class);
    	}
    @GetMapping("/countAllBeneficios/")
    public int getCountAllBeneficio() {
    	String sql = "SELECT count(*) FROM beneclub_beneficios";
		return jdbcTemplate.queryForObject(sql,Integer.class);
    	}
    @GetMapping("/beneficiosActivosxPagina/{page}")
    public List<Beneficio> getBenefcioActivoPaginado(@PathVariable int page) {
    	int aux = page-1;
    	int desde=aux*9;    	
    	int cant = 9;
    	return this.jdbcTemplate.query(
    			"SELECT * FROM beneclub_beneficios b INNER JOIN beneclub_categorias c on b.idCategoria=c.idCategoria where baja = 0 LIMIT "+desde+","+cant,
                (rs, rowNum) -> {
                    Beneficio beneficio = new Beneficio();
                    beneficio.setId(rs.getLong("b.id"));
                    beneficio.setBaja(rs.getBoolean("b.baja"));
                    beneficio.setDescripcion(rs.getString("b.descripcion"));
                    beneficio.setDireccion(rs.getString("b.direccion"));
                    beneficio.setDescuento(rs.getString("b.descuento"));
                    beneficio.setImage(rs.getString("b.image"));
                    beneficio.setMapa(rs.getString("b.mapa"));
                    beneficio.setName(rs.getString("b.name"));
                    beneficio.setProvincia(rs.getString("b.provincia"));
                    
                    Categoria categoria = new Categoria();
                    categoria.setIdCategoria(rs.getLong("c.idCategoria"));
                    categoria.setName(rs.getString("c.nameCategoria"));
                    categoria.setImage(rs.getString("c.imageCategoria"));
                    categoria.setBaja(rs.getBoolean("c.bajaCategoria"));
                    
                    beneficio.setCategoria(categoria);
                    return beneficio;
                });
    	}
    
    @PutMapping("/altaBeneficio/{id}")
    public boolean altaBeneficio(@PathVariable("id") Long id) {
    	System.out.println(id);
    	try {
    	jdbcTemplate.update("UPDATE beneclub_beneficios SET baja = '0' WHERE id = "+id);
    	 return true;
    	 
     } catch (Exception ex) {
            return false;
        }
    }
}
