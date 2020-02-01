// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'eemcdml1983';
// ALTER USER 'sonar'@'localhost' IDENTIFIED WITH mysql_native_password BY 'sonartelematics';

CREATE DATABASE IF NOT EXISTS sonar;

CREATE TABLE vehicle (
  id INT(11) NOT NULL AUTO_INCREMENT, 
  license_plate VARCHAR(10) NOT NULL UNIQUE, 
  brand VARCHAR(25) DEFAULT NULL, 
  line VARCHAR(25) DEFAULT NULL, 
  model VARCHAR(25) DEFAULT NULL,
  PRIMARY KEY (id)
);

describe vehicle;

INSERT INTO vehicle VALUES (1, 'JGQ711', 'brand1', 'line1', '2010');
INSERT INTO vehicle VALUES (2, 'HPG588', 'brand1', 'line2', '2011');
INSERT INTO vehicle VALUES (3, 'KEH943', 'brand2', 'line2', '2015');

select * from vehicle;

/* Technician */

CREATE TABLE technician (
  id INT(10) NOT NULL AUTO_INCREMENT,
  name VARCHAR(25),
  PRIMARY KEY (id)
);

describe technician;

/* Review */

DROP TABLE review;

CREATE TABLE review (
  id INT(10) NOT NULL AUTO_INCREMENT,
  date_review TIMESTAMP,
  license_plate VARCHAR(10),
  checked BOOLEAN DEFAULT 0,
  PRIMARY KEY (id),
  FOREIGN KEY (license_plate) REFERENCES vehicle (license_plate)
);

describe review;

/* Items */

DROP TABLE item;

CREATE TABLE item (
  id INT(10) NOT NULL AUTO_INCREMENT,
  name VARCHAR(25),
  review_id INT(10),
  technician_id INT(10),
  comments VARCHAR(255),
  checked BOOLEAN DEFAULT 0,
  PRIMARY KEY (id),
  FOREIGN KEY (review_id) REFERENCES review (id),
  FOREIGN KEY (technician_id) REFERENCES technician (id)
);

describe item;
