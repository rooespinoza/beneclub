package com.beneclub.main.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.beneclub.main.entity.Categoria;
import com.beneclub.main.repository.CategoriaRepository;

@Service
public class CategoriaService extends BaseService<Categoria,CategoriaRepository>{
	@Override
	public boolean delete(Long id) throws Exception {
		try {

			Categoria entity = new Categoria();
			if (repository.existsById(id)) {
				Optional<Categoria> entityOptional = repository.findById(id);
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
