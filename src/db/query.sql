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

insert into parteVehiculo values (1, 'Motor');
insert into parteVehiculo values (2, 'Llantas');
insert into parteVehiculo values (3, 'Aire acondicionado');
insert into parteVehiculo values (4, 'Frenos');
insert into parteVehiculo values (5, 'Batería');
insert into parteVehiculo values (6, 'Caja de cambios');
insert into parteVehiculo values (7, 'Suspensión');
insert into parteVehiculo values (8, 'Embrague');
insert into parteVehiculo values (9, 'Sistema eléctrico');
insert into parteVehiculo values (10, 'Dirección');


/* Empleado */

create table empleado(
  id int(20) not null auto_increment,
  nombre varchar(20) not null,
  usuario varchar(20) not null,
  contrasenia varchar(20) not null,
  primary key (id)
);

insert into empleado values (1, 'empleado1', 'usuario1', '121');
insert into empleado values (2, 'empleado2', 'usuario2', '122');
insert into empleado values (3, 'empleado3', 'usuario3', '123');
insert into empleado values (4, 'empleado4', 'usuario4', '124');
insert into empleado values (5, 'empleado5', 'usuario5', '125');
insert into empleado values (6, 'empleado6', 'usuario6', '126');
insert into empleado values (7, 'empleado7', 'usuario7', '127');
insert into empleado values (8, 'empleado8', 'usuario8', '128');
insert into empleado values (9, 'empleado9', 'usuario9', '129');
insert into empleado values (10, 'empleado10', 'usuario10', '120');
insert into empleado (nombre, usuario, contrasenia) values ('empleado11', 'usuario10', '121');

/* Vehiculo */

create table vehiculo (
  placa varchar(10) not null, 
  marca varchar(25) DEFAULT null, 
  linea varchar(25) DEFAULT null, 
  modelo varchar(25) DEFAULT null,
  PRIMARY KEY (placa)
);

insert into vehiculo values('ABC111', 'Opel', 'Corsa', '2008');
insert into vehiculo values('ABC112', 'Renault', 'Sandero', '2020');
insert into vehiculo values('ABC113', 'Chevrolet', 'Corsa', '2012');
insert into vehiculo values('ABC114', 'Kia', 'Sportage', '2016');
insert into vehiculo values('ABC115', 'Mazda', 'Mazda6', '2019');

/* Revisión */

create table revision (
  id int(20) not null AUTO_INCREMENT,
  estado boolean,
  fechaRevision timestamp,
  vehiculoPlaca varchar(10) not null,
  empleadoId int(20) not null,
  primary key (id),
  foreign key (vehiculoPlaca) references vehiculo (placa),
  foreign key (empleadoId) references empleado (id)
);

/* Revision parte vehiculo*/

create table revisionParteVehiculo(
  id int(20) not null auto_increment,
  fechaRevison timestamp,
  diagnostico varchar(255),
  revisionId int(20) not null, 
  parteVehiculoId int(20) not null,
  tecnicoId int(20),
  primary key (id),
  foreign key (tecnicoId) references empleado (id),
  foreign key (revisionId) references revision (id),
  foreign key (parteVehiculoId) references parteVehiculo(id)
);



select r.vehiculoPlaca, e.nombre, rpv.diagnostico
from revision r
inner join revisionParteVehiculo rpv on r.id = rpv.revisionId
inner join empleado e on e.id = rpv.tecnicoId; 

select r.vehiculoPlaca, e.nombre, rpv.diagnostico
from ((revision r
inner join revisionParteVehiculo rpv on r.id = rpv.revisionId)
inner join empleado e on e.id = rpv.tecnicoId);

/* Ultima revisión */

select r.vehiculoPlaca as placa, e.nombre as empleado, rpv.diagnostico, pv.nombre as parte
from revision r
inner join revisionParteVehiculo rpv on r.id = rpv.revisionId
inner join empleado e on e.id = rpv.tecnicoId
inner join parteVehiculo pv on rpv.parteVehiculoId = pv.id
where r.vehiculoPlaca = ?;