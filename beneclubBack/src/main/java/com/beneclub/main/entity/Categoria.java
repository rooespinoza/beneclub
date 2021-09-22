package com.beneclub.main.entity;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

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
	@OneToOne
    @JoinColumn(name = "idImage", nullable = false)
	private ImageCategoria image;
	
	public Categoria(Long idCategoria, String name, List<Beneficio> beneficios, boolean baja, String image) {
		super();
		this.idCategoria = idCategoria;
		this.nameCategoria = name;
		this.beneficios = beneficios;
		this.bajaCategoria = baja;
	}

	public Categoria() {
		super();
	}

	public Categoria(Long idCategoria) {
		super();
		this.idCategoria = idCategoria;
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

	public ImageCategoria getImage() {
		return image;
	}

	public void setImage(ImageCategoria image) {
		this.image = image;
	}


	
	
}
