CREATE TABLE Umbrales_Cultivo(
	id_umbrales serial PRIMARY KEY,
	temp_min FLOAT,
	temp_max FLOAT,
	humedad_min FLOAT,
	humedad_max FLOAT,
	radiacion_uv_min FLOAT,
	radiacion_uv_max FLOAT
);

CREATE TABLE Cultivo(
	id_cultivo serial PRIMARY KEY,
	nombre VARCHAR(50),
	descripcion VARCHAR(250),
	id_umbrales INT NOT NULL,
	FOREIGN KEY(id_umbrales)
		REFERENCES Umbrales_Cultivo(id_umbrales)
);

CREATE TABLE Estado_Sensor(
	id_estado_sensor serial PRIMARY KEY,
	fecha_hora TIMESTAMP,
	bateria INT,
	categoria VARCHAR(15)
);

CREATE TABLE Sensor(
	id_sensor serial PRIMARY KEY,
	temperatura BOOLEAN DEFAULT FALSE,
	humedad BOOLEAN DEFAULT FALSE,
	radiacion BOOLEAN DEFAULT FALSE,
	latitud FLOAT,
	longitud FLOAT,
	id_estado_sensor INT NOT NULL,
	id_cultivo INT NOT NULL,
	FOREIGN KEY(id_estado_sensor)
		REFERENCES Estado_Sensor(id_estado_sensor),
	FOREIGN KEY(id_cultivo)
		REFERENCES Cultivo(id_cultivo)
);

CREATE TABLE registro_temperatura(
	id_reg_temp serial PRIMARY KEY,
	fecha_hora TIMESTAMP,
	valor FLOAT,
	id_sensor INT NOT NULL,
	FOREIGN KEY(id_sensor)
		REFERENCES Sensor(id_sensor)
);

CREATE TABLE registro_humedad(
	id_reg_humedad serial PRIMARY KEY,
	fecha_hora TIMESTAMP,
	valor FLOAT,
	id_sensor INT NOT NULL,
	FOREIGN KEY(id_sensor)
		REFERENCES Sensor(id_sensor)
);

CREATE TABLE registro_radiacion(
	id_reg_radiacion serial PRIMARY KEY,
	fecha_hora TIMESTAMP,
	valor FLOAT,
	id_sensor INT NOT NULL,
	FOREIGN KEY(id_sensor)
		REFERENCES Sensor(id_sensor)
);