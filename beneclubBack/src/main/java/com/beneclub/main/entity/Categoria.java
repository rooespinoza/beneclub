package com.beneclub.main.entity;

import java.io.Serializable;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "beneclub_categorias")
public class Categoria implements Serializable{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idCategoria;
	@Column(nullable = false)
	private String name;
	@OneToMany(targetEntity=Beneficio.class, mappedBy="categoria", fetch=FetchType.EAGER)
	private List<Beneficio> beneficios;
	@Column(nullable = false, columnDefinition = "boolean default false")
	private boolean baja;
	private String image;
	
	
	public Categoria(Long idCategoria, String name, List<Beneficio> beneficios, boolean baja, String image) {
		super();
		this.idCategoria = idCategoria;
		this.name = name;
		this.beneficios = beneficios;
		this.baja = baja;
		this.image = image;
	}

	public Categoria() {
		super();
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

	public Long getIdCategoria() {
		return idCategoria;
	}

	public void setIdCategoria(Long idCategoria) {
		this.idCategoria = idCategoria;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}
	
	
}
