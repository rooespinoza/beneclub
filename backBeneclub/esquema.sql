CREATE DATABASE IF NOT EXISTS u959049150_bdbeneclub;
use u959049150_bdbeneclub;


CREATE TABLE `u959049150_bdbeneclub`.`beneclub_user` (
  `id` BIGINT(10) NOT NULL AUTO_INCREMENT,
  `user` VARCHAR(100) NOT NULL,
  `password` VARCHAR(100) NULL,  
  PRIMARY KEY (`id`));

insert into `beneclub_user`(`user`, `password`) values
('admin','adminBeneclub123');

create table IF NOT EXISTS `u959049150_bdbeneclub`.`beneclub_categorias`(
	`idCategoria` BIGINT(10) NOT NULL AUTO_INCREMENT,
    `baja` TINYINT(1) not null default 0,
    `image` varchar(255),
    `name` varchar(255),
    PRIMARY KEY (`idCategoria`));



create table IF NOT EXISTS `u959049150_bdbeneclub`.`beneclub_beneficios`(
	`id` BIGINT(10) NOT NULL AUTO_INCREMENT,
    `baja` TINYINT(1) not null default 0,
    `image` varchar(255),
    `name` varchar(255),
    `descripcion` varchar(255),
    `descuento` varchar(255),
   `mapa` varchar(255),
    `provincia` varchar(255),
    `idCategoria` BIGINT(10) NOT NULL AUTO_INCREMENT,
     CONSTRAINT `idCategoria`
    FOREIGN KEY (`idCategoria`)
    REFERENCES `u959049150_bdbeneclub`.`beneclub_categorias` (`idCategoria`));
PRIMARY KEY (`id`));
    

