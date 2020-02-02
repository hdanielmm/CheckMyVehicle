/* ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'eemcdml1983';
 ALTER USER 'sonar'@'localhost' IDENTIFIED WITH mysql_native_password BY 'sonartelematics';
*/
CREATE DATABASE IF NOT EXISTS sonar;

/* Maestra partes vehiculo*/

create table parteVehiculo(
  id int(10) not null,
  nombre varchar(20),
  primary key (id)
);

/* Empleado */

create table empleado(
  id int(10) not null,
  nombre varchar(20) not null,
  usuario varchar(20) not null,
  contrasenia varchar(20) not null,
  primary key (id)
);

/* Vehiculo */

CREATE TABLE vehiculo (
  placa VARCHAR(10) NOT NULL, 
  marca VARCHAR(25) DEFAULT NULL, 
  linea VARCHAR(25) DEFAULT NULL, 
  modelo VARCHAR(25) DEFAULT NULL,
  PRIMARY KEY (placa)
);

/* Revisión */

CREATE TABLE revision (
  id INT(10) NOT NULL AUTO_INCREMENT,
  estado boolean,
  vehiculoPlaca varchar(10) not null,
  empleadoId int(10) not null,
  primary key (id),
  foreign key (vehiculoPlaca) references vehiculo (placa),
  foreign key (empleadoId) references empleado (id)
);

/* Revision parte vehiculo*/

create table revisionParteVehiculo(
  id int(10) not null,
  fechaRevison timestamp not null,
  diagnostico varchar(255),
  revisionId int(10) not null, 
  parteVehiculoId int(10),
  tecnicoId int(10) not null,
  primary key (id),
  foreign key (tecnicoId) references empleado (id),
  foreign key (revisionId) references revision (id),
  foreign key (parteVehiculoId) references parteVehiculo(id)
);