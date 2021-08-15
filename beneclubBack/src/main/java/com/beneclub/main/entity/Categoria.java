package com.beneclub.main.entity;

import java.io.Serializable;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "beneclub_categorias")
public class Categoria implements Serializable{
	@Id
	private Long idCategoria;
	private String name;
	@OneToMany(targetEntity=Beneficio.class, mappedBy="categoria", fetch=FetchType.EAGER)
	private List<Beneficio> beneficios;
	private boolean baja;
	
	
	public Categoria(Long id, String name, List<Beneficio> beneficios, boolean baja) {
		super();
		this.idCategoria = id;
		this.name = name;
		this.beneficios = beneficios;
		this.baja = baja;
	}
	
	public Categoria() {
		super();
	}

	public Long getId() {
		return idCategoria;
	}
	public void setId(Long id) {
		this.idCategoria = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}

	public List<Beneficio> getBeneficios() {
		return beneficios;
	}
	public void setBeneficios(List<Beneficio> beneficios) {
		this.beneficios = beneficios;
	}
	public boolean isBaja() {
		return baja;
	}
	public void setBaja(boolean baja) {
		this.baja = baja;
	}
	
}
