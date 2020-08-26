const { Pool } = require('pg');

const pool = new Pool({
    user: "agricultor",
    password: "appagricultor",
    host: "localhost",
    port: "5432",
    database: "SensoresDB"
});


//CULTIVO NODO MATCH
const getCultivoxNodoxRegistros = async (req, res) => {
    const response = await pool.query('SELECT Registros.id_registro, Registros.fecha_hora, Registros.temperatura, Registros.humedad, Registros.radiacion, Registros.id_nodo, latitud, longitud, Nodo.activo AS n_activo, Cultivo.activo AS c_activo, cod_nodo, nombre, descripcion, nodo_central, Nodo.id_cultivo FROM Registros, Nodo, Cultivo WHERE Cultivo.id_cultivo = Nodo.id_cultivo AND Registros.id_nodo = Nodo.id_nodo ORDER BY id_cultivo ASC');
    res.status(200).json(response.rows);
};

const getCultivoxNodoxRegistrosById = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query('SELECT Registros.id_registro, Registros.fecha_hora, Registros.temperatura, Registros.humedad, Registros.radiacion, Registros.id_nodo, latitud, longitud, Nodo.activo AS n_activo, Cultivo.activo AS c_activo, cod_nodo, nombre, descripcion, nodo_central, Nodo.id_cultivo FROM Registros, Nodo, Cultivo WHERE Cultivo.id_cultivo = Nodo.id_cultivo AND Registros.id_nodo = Nodo.id_nodo AND Cultivo.id_cultivo = $1', [id]);
    res.json(response.rows);
};

//CULTIVO NODO MATCH




module.exports = {
    getCultivoxNodoxRegistros,
    getCultivoxNodoxRegistrosById,
};