package com.beneclub.main.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
@Entity
@Table(name = "imagen_beneficio")
public class ImagenBeneficio {
	@Id
	@Column(name = "idImage")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idImage;
	
	private String name;
	private String tipo;
	private Long size;
	@JsonIgnore
	@OneToOne(mappedBy = "image")
	private Beneficio beneficio;
	@Column(name = "pixel", length = 10485760)
	private byte[] pixel;
	
	public ImagenBeneficio(Long idImage, String name, String tipo, Long size, byte[] pixel) {
		super();
		this.idImage = idImage;
		this.name = name;
		this.tipo = tipo;
		this.size = size;
		this.pixel = pixel;
	}
	
	public ImagenBeneficio(Long idImage) {
		super();
		this.idImage = idImage;
	}

	public ImagenBeneficio() {
		super();
	}

	public Long getIdImage() {
		return idImage;
	}

	public void setIdImage(Long idImage) {
		this.idImage = idImage;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public Long getSize() {
		return size;
	}

	public void setSize(Long size) {
		this.size = size;
	}

	public byte[] getPixel() {
		return pixel;
	}

	public void setPixel(byte[] pixel) {
		this.pixel = pixel;
	}

	public Beneficio getBeneficio() {
		return beneficio;
	}

	public void setBeneficio(Beneficio beneficio) {
		this.beneficio = beneficio;
	}


}
