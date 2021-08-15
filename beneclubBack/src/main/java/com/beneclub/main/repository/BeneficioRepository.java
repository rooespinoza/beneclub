package com.beneclub.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.beneclub.main.entity.Beneficio;


@Repository
public interface BeneficioRepository extends JpaRepository<Beneficio, Long>{

}
