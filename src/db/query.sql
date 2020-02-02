/* ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'eemcdml1983';
 ALTER USER 'sonar'@'localhost' IDENTIFIED WITH mysql_native_password BY 'sonartelematics';
*/
CREATE DATABASE IF NOT EXISTS sonar;

/* Maestra partes vehiculo*/

create table parteVehiculo(
  id int(20) not null auto_increment,
  nombre varchar(20),
  primary key (id)
);

/* Empleado */

create table empleado(
  id int(20) not null auto_increment,
  nombre varchar(20) not null,
  usuario varchar(20) not null,
  contrasenia varchar(20) not null,
  primary key (id)
);

/* Vehiculo */

create table vehiculo (
  placa varchar(10) not null, 
  marca varchar(25) DEFAULT null, 
  linea varchar(25) DEFAULT null, 
  modelo varchar(25) DEFAULT null,
  PRIMARY KEY (placa)
);

/* Revisión */

create table revision (
  id int(20) not null AUTO_INCREMENT,
  estado boolean,
  fecha timestamp,
  vehiculoPlaca varchar(10) not null,
  empleadoId int(20) not null,
  primary key (id),
  foreign key (vehiculoPlaca) references vehiculo (placa),
  foreign key (empleadoId) references empleado (id)
);

/* Revision parte vehiculo*/

create table revisionParteVehiculo(
  id int(20) not null auto_increment,
  fechaRevison timestamp not null,
  diagnostico varchar(255),
  revisionId int(20) not null, 
  parteVehiculoId int(20) not null,
  tecnicoId int(20) not null,
  primary key (id),
  foreign key (tecnicoId) references empleado (id),
  foreign key (revisionId) references revision (id),
  foreign key (parteVehiculoId) references parteVehiculo(id)
);