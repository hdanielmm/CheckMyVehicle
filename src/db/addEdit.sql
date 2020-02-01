USE sonar;
DROP procedure IF EXISTS vehicleAddOrEdit;

DELIMITER //
CREATE PROCEDURE vehicleAddOrEdit (
    IN _id INT,
    IN _license_plate VARCHAR(10),
    IN _brand VARCHAR(25),
    IN _line VARCHAR(25),
    IN _model VARCHAR(25)
)
BEGIN
    IF _id = 0 THEN
        INSERT INTO vehicle (license_plate, brand, line, model)
        VALUES (_license_plate, _brand, _line, _model);
        
        SET _id = LAST_INSERT_ID();
    ELSE
        UPDATE vehicle
        SET 
          license_plate = _license_plate,
          brand = _brand,
          line = _line,
          model = _model
        WHERE id = _id;
    END IF;

    SELECT _id AS id;
END //
DELIMITER;