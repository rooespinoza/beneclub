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

import com.beneclub.main.entity.Beneficio;
import com.beneclub.main.entity.Categoria;
import com.beneclub.main.entity.ImageCategoria;
import com.beneclub.main.entity.ImagenBeneficio;
import com.beneclub.main.service.BeneficioService;



@RestController
@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT,
		RequestMethod.DELETE, RequestMethod.OPTIONS })
@RequestMapping(path = "/beneficios")
public class BeneficioController extends BaseController<Beneficio, BeneficioService> {

    @Autowired
    private final JdbcTemplate jdbcTemplate = new JdbcTemplate();


    @RequestMapping(path = "/image", method = RequestMethod.POST)
	  public int uploadFile(
	          @RequestParam("file") MultipartFile file) throws IOException {
		  try {
			  if (!file.isEmpty()) {

		          String sql = "INSERT INTO imagen_beneficio (name, tipo, size, pixel) VALUES(?, ?, ?, ?)";

		          String name = file.getOriginalFilename();
		          String tipo   = file.getContentType();
		          Long size   = file.getSize();
		          byte[] pixel  = file.getBytes();

		          jdbcTemplate.update(sql, name, tipo, size, pixel);	          
		          String sqlId = "SELECT idImage FROM imagen_beneficio order by idImage desc limit 1";
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

	      String sql = "SELECT pixel, tipo FROM imagen_beneficio WHERE idImage = '" + idImage + "'";
	      List<Map<String, Object>> result = jdbcTemplate.queryForList(sql);

	      if (!result.isEmpty()) {
	          byte[] bytes = (byte[]) result.get(0).get("PIXEL");
	          String mime = (String) result.get(0).get("TIPO");

	          response.setHeader("Content-Type", mime);
	          response.getOutputStream().write(bytes);
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
                    ImagenBeneficio imagenBeneficio = new ImagenBeneficio();
                    imagenBeneficio.setIdImage(rs.getLong("idImage"));
                    beneficio.setImage(imagenBeneficio);
                    beneficio.setMapa(rs.getString("b.mapa"));
                    beneficio.setName(rs.getString("b.name"));
                    beneficio.setProvincia(rs.getString("b.provincia"));
                    
                    Categoria categoria = new Categoria();
                    categoria.setIdCategoria(rs.getLong("c.idCategoria"));
                    categoria.setName(rs.getString("c.nameCategoria"));

                    ImageCategoria imagenCategoria = new ImageCategoria();
                    imagenCategoria.setIdImage(rs.getLong("c.idImage"));
                    categoria.setImage(imagenCategoria);
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
                    ImagenBeneficio imagenBeneficio = new ImagenBeneficio();
                    imagenBeneficio.setIdImage(rs.getLong("idImage"));
                    beneficio.setImage(imagenBeneficio);
                    beneficio.setMapa(rs.getString("b.mapa"));
                    beneficio.setName(rs.getString("b.name"));
                    beneficio.setProvincia(rs.getString("b.provincia"));
                    
                    Categoria categoria = new Categoria();
                    categoria.setIdCategoria(rs.getLong("c.idCategoria"));
                    categoria.setName(rs.getString("c.nameCategoria"));

                    ImageCategoria imagenCategoria = new ImageCategoria();
                    imagenCategoria.setIdImage(rs.getLong("c.idImage"));
                    categoria.setImage(imagenCategoria);
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
                    ImagenBeneficio imagenBeneficio = new ImagenBeneficio();
                    imagenBeneficio.setIdImage(rs.getLong("idImage"));
                    beneficio.setImage(imagenBeneficio);
                    beneficio.setMapa(rs.getString("b.mapa"));
                    beneficio.setName(rs.getString("b.name"));
                    beneficio.setProvincia(rs.getString("b.provincia"));
                    
                    Categoria categoria = new Categoria();
                    categoria.setIdCategoria(rs.getLong("c.idCategoria"));
                    categoria.setName(rs.getString("c.nameCategoria"));

                    ImageCategoria imagenCategoria = new ImageCategoria();
                    imagenCategoria.setIdImage(rs.getLong("c.idImage"));
                    categoria.setImage(imagenCategoria);
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
                    ImagenBeneficio imagenBeneficio = new ImagenBeneficio();
                    imagenBeneficio.setIdImage(rs.getLong("idImage"));
                    beneficio.setImage(imagenBeneficio);
                    beneficio.setMapa(rs.getString("b.mapa"));
                    beneficio.setName(rs.getString("b.name"));
                    beneficio.setProvincia(rs.getString("b.provincia"));
                    
                    Categoria categoria = new Categoria();
                    categoria.setIdCategoria(rs.getLong("c.idCategoria"));
                    categoria.setName(rs.getString("c.nameCategoria"));

                    ImageCategoria imagenCategoria = new ImageCategoria();
                    imagenCategoria.setIdImage(rs.getLong("c.idImage"));
                    categoria.setImage(imagenCategoria);
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
