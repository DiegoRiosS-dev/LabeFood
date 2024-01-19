-- Active: 1705165593009@@127.0.0.1@3306@estudo


-- Caso vá utilizar o script migration não precisa usar esse arquivo sql
-- O propior migration criara as tabelas e fara a inserção das mesma
-- O migration só ira inserir dados nas tabelas products e restaurants 

DROP TABLE IF EXISTS labefood_user_address;
DROP TABLE IF EXISTS labefood_payment;
DROP TABLE IF EXISTS labefood_order;
DROP TABLE IF EXISTS labefood_user;
DROP TABLE IF EXISTS labefood_product;
DROP TABLE IF EXISTS labefood_restaurant;






CREATE TABLE `labefood_user` (
	id VARCHAR(255) PRIMARY KEY UNIQUE NOT NULL,
	name VARCHAR(50) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  cpf VARCHAR(20)	NOT NULL UNIQUE,
  password VARCHAR(30) NOT NULL,
  has_Address BOOLEAN NOT NULL
);
CREATE TABLE `labefood_user_address` (
	id VARCHAR(255) PRIMARY KEY NOT NULL UNIQUE,
  street VARCHAR(50) NOT NULL,
  number INT NOT NULL,
  neighbourhood VARCHAR(50) NOT NULL,
  city VARCHAR(50) NOT NULL,
  state VARCHAR(50) NOT NULL,
  complement VARCHAR(150) NOT NULL,
  fk_user VARCHAR(255) NOT NULL,
  FOREIGN KEY(fk_user) REFERENCES labefood_user(id)
);

CREATE TABLE `labefood_restaurant` (
	id VARCHAR(255) PRIMARY KEY NOT NULL UNIQUE,
	name VARCHAR(50) NOT NULL UNIQUE,
  logo_url VARCHAR(255),
  category VARCHAR(30) NOT NULL,
  description VARCHAR(255) NOT NULL ,
  delivery_time INT NOT NULL,
  shipping INT NOT NULL,
  address VARCHAR(150)    
);
CREATE TABLE `labefood_product` (
	id VARCHAR(255) PRIMARY KEY NOT NULL UNIQUE,
  name VARCHAR(50) NOT NULL,
  url_img VARCHAR(255) NOT NULL,
  category VARCHAR(30) NOT NULL,
  price INT NOT NULL,
  fk_restaurant VARCHAR(255) NOT NULL,
  FOREIGN KEY(fk_restaurant) REFERENCES labefood_restaurant(id)
);

CREATE TABLE `labefood_order` (
	id VARCHAR(255) PRIMARY KEY NOT NULL UNIQUE,
  order_hours VARCHAR(10) NOT NULL,
  fk_user VARCHAR(255) NOT NULL,
  fk_product VARCHAR(255) NOT NULL,
  FOREIGN KEY(fk_user) REFERENCES labefood_user(id),
  FOREIGN KEY(fk_product) REFERENCES labefood_product(id)
);

CREATE TABLE `labefood_payment` (
	id VARCHAR(255) PRIMARY KEY NOT NULL UNIQUE,
	payment VARCHAR(20) NOT NULL, 
  fk_order VARCHAR(255) NOT NULL,
  FOREIGN KEY(fk_order) REFERENCES labefood_order(id)
);

