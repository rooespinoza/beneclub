package com.beneclub.main.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.beneclub.main.entity.Beneficio;
import com.beneclub.main.repository.BeneficioRepository;


@Service
public class BeneficioService extends BaseService<Beneficio,BeneficioRepository>{
	@Override
	public boolean delete(Long id) throws Exception {
		try {

			Beneficio entity = new Beneficio();
			if (repository.existsById(id)) {
				Optional<Beneficio> entityOptional = repository.findById(id);
				entity = entityOptional.get();
				entity.setBaja(true);
				entity = repository.save(entity);
			}
			if (!entity.isBaja()) {
				return true;
			} else {
				return false;
			}

		} catch (IllegalArgumentException e) {
			throw new IllegalArgumentException(e.getMessage());

		} catch (Exception e) {
			throw new Exception(e.getMessage());
		}

	}
	

}
