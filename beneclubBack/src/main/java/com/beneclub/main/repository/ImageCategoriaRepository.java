package com.beneclub.main.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.beneclub.main.entity.ImageCategoria;

public interface ImageCategoriaRepository extends JpaRepository<ImageCategoria, Long> {
	Optional<ImageCategoria> findByName(String name);
}
