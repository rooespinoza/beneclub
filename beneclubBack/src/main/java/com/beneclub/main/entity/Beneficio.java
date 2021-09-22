package com.beneclub.main.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;



@Entity
@Table(name = "beneclub_beneficios")
public class Beneficio implements Serializable{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(nullable = false)
	private String name;
	@ManyToOne
    @JoinColumn(name = "idCategoria", nullable = false, updatable = false)
	private Categoria categoria;
	private String provincia;
	@Column(columnDefinition = "NVARCHAR(1000)")
	private String descripcion;
	@Column(columnDefinition = "NVARCHAR(500)")
	private String mapa;
	private String direccion;
	@Column(nullable = false, columnDefinition = "TINYINT default false")
	private boolean baja;
	@OneToOne
    @JoinColumn(name = "idImage", nullable = false)
	private ImagenBeneficio image;
	private String descuento;



	public Beneficio(Long id, String name, Categoria categoria, String provincia, String descripcion, String mapa,
			String direccion, boolean baja, ImagenBeneficio image, String descuento) {
		super();
		this.id = id;
		this.name = name;
		this.categoria = categoria;
		this.provincia = provincia;
		this.descripcion = descripcion;
		this.mapa = mapa;
		this.direccion = direccion;
		this.baja = baja;
		this.image = image;
		this.descuento = descuento;
	}

	public Beneficio() {
		super();
	}

	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}

	public Categoria getCategoria() {
		return categoria;
	}
	public void setCategoria(Categoria categoria) {
		this.categoria = categoria;
	}
	public String getProvincia() {
		return provincia;
	}
	public void setProvincia(String provincia) {
		this.provincia = provincia;
	}
	public String getDescripcion() {
		return descripcion;
	}
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public String getMapa() {
		return mapa;
	}

	public void setMapa(String mapa) {
		this.mapa = mapa;
	}

	public String getDireccion() {
		return direccion;
	}
	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}
	public boolean isBaja() {
		return baja;
	}
	public void setBaja(boolean baja) {
		this.baja = baja;
	}
	public ImagenBeneficio getImage() {
		return image;
	}
	public void setImage(ImagenBeneficio image) {
		this.image = image;
	}

	public String getDescuento() {
		return descuento;
	}

	public void setDescuento(String descuento) {
		this.descuento = descuento;
	}
	
	
}
