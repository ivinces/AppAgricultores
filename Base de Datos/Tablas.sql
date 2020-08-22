CREATE TABLE Cultivo(
	id_cultivo serial PRIMARY KEY,
	nombre VARCHAR(50),
	descripcion VARCHAR(250),
	nodo_central VARCHAR(50) NOT NULL,
	activo BOOLEAN DEFAULT TRUE
);

CREATE TABLE Umbrales_Cultivo(
	id_umbrales serial PRIMARY KEY,
	temp_min FLOAT,
	temp_max FLOAT,
	humedad_min FLOAT,
	humedad_max FLOAT,
	radiacion_uv_min FLOAT,
	radiacion_uv_max FLOAT,
	id_cultivo INT NOT NULL,
	FOREIGN KEY(id_cultivo)
		REFERENCES Cultivo(id_cultivo)

);

CREATE TABLE Nodo(
	id_nodo serial PRIMARY KEY,
	latitud FLOAT,
	longitud FLOAT,
	activo BOOLEAN DEFAULT TRUE,
	cod_nodo VARCHAR(50) NOT NULL,
	id_cultivo INT NOT NULL,
	FOREIGN KEY(id_cultivo)
		REFERENCES Cultivo(id_cultivo)
);

CREATE TABLE Estado_Nodo(
	id_estado_nodo serial PRIMARY KEY,
	fecha_hora TIMESTAMP,
	bateria INT,
	categoria VARCHAR(15),
	id_nodo INT NOT NULL,
	FOREIGN KEY(id_nodo)
		REFERENCES Nodo(id_nodo)
);

CREATE TABLE Registros(
	id_registro serial PRIMARY KEY,
	fecha_hora TIMESTAMP,
	temperatura FLOAT,
	humedad FLOAT,
	radiacion FLOAT,
	id_nodo INT NOT NULL,
	FOREIGN KEY(id_nodo)
		REFERENCES Nodo(id_nodo)
);

