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

            String upload_folder = ".//src//main//resources//static//images//";
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
    			"SELECT * FROM beneclub.beneclub_beneficios where idCategoria ="+id ,
                (rs, rowNum) -> {
                    Beneficio beneficio = new Beneficio();
                    beneficio.setId(rs.getLong("id"));
                    beneficio.setBaja(rs.getBoolean("baja"));
                    beneficio.setDescripcion(rs.getString("descripcion"));
                    beneficio.setDireccion(rs.getString("direccion"));
                    beneficio.setDescuento(rs.getString("descuento"));
                    beneficio.setImage(rs.getString("image"));
                    beneficio.setLatitud(rs.getString("latitud"));
                    beneficio.setLongitud(rs.getString("longitud"));
                    beneficio.setName(rs.getString("name"));
                    beneficio.setProvincia(rs.getString("provincia"));
                    
                    Categoria categoria = new Categoria();
                    categoria.setIdCategoria(rs.getLong("idCategoria"));
                    
                    beneficio.setCategoria(categoria);
                    return beneficio;
                });
    	}
}
