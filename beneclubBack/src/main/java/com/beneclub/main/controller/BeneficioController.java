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
import com.beneclub.main.service.BeneficioService;

import ebs.back.entity.ArticuloManufacturado;
import ebs.back.entity.Insumo;
import ebs.back.entity.Receta;
import ebs.back.entity.Stock;




@RestController
@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT,
		RequestMethod.DELETE, RequestMethod.OPTIONS })
@RequestMapping(path = "beneclub/beneficios")
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
                "SELECT r.cantidadInsumo, i.idInsumo, i.denominacion, i.unidadMedida, s.actual "
                        + "FROM Stock s INNER JOIN Insumo i ON s.idStock = i.idStock INNER JOIN Receta r ON i.idInsumo = r.idInsumo WHERE r.idManufacturado = "
                        + id,

                (rs, rowNum) -> {
                    Beneficio beneficio = new Beneficio();
                    beneficio.setId(id);
                    receta.setCantidadInsumo(rs.getFloat("r.cantidadInsumo"));

                    Insumo insumo = new Insumo();
                    insumo.setIdInsumo(rs.getLong("i.idInsumo"));
                    insumo.setDenominacion(rs.getString("i.denominacion"));
                    insumo.setUnidadMedida(rs.getString("i.unidadMedida"));

                    Stock stock = new Stock();
                    stock.setActual(rs.getFloat("s.actual"));

                    insumo.setStock(stock);
                    receta.setInsumo(insumo);

                    return receta;
                });
}
