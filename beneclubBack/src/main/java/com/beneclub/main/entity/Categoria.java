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

import org.hibernate.annotations.Type;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "beneclub_categorias")
public class Categoria implements Serializable{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idCategoria;
	@Column(nullable = false)
	private String nameCategoria;
	@OneToMany(targetEntity=Beneficio.class, mappedBy="categoria", fetch=FetchType.EAGER)
	@JsonIgnore
	private List<Beneficio> beneficios;
	@Column(nullable = false, columnDefinition = "TINYINT default false")
	private boolean bajaCategoria;
	private String imageCategoria;
	
	
	public Categoria(Long idCategoria, String name, List<Beneficio> beneficios, boolean baja, String image) {
		super();
		this.idCategoria = idCategoria;
		this.nameCategoria = name;
		this.beneficios = beneficios;
		this.bajaCategoria = baja;
		this.imageCategoria = image;
	}

	public Categoria() {
		super();
	}

	public String getName() {
		return nameCategoria;
	}
	public void setName(String name) {
		this.nameCategoria = name;
	}

	public List<Beneficio> getBeneficios() {
		return beneficios;
	}
	public void setBeneficios(List<Beneficio> beneficios) {
		this.beneficios = beneficios;
	}
	public boolean isBaja() {
		return bajaCategoria;
	}
	public void setBaja(boolean baja) {
		this.bajaCategoria = baja;
	}

	public Long getIdCategoria() {
		return idCategoria;
	}

	public void setIdCategoria(Long idCategoria) {
		this.idCategoria = idCategoria;
	}

	public String getImage() {
		return imageCategoria;
	}

	public void setImage(String image) {
		this.imageCategoria = image;
	}
	
	
}
