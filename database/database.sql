CREATE DATABASE gitei;
USE gitei;

CREATE TABLE personas(
	id INT(11) not null auto_increment primary key,
    cedula BigInt(20),
    nombre varchar(100),
    apellido varchar(100),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

Describe personas;