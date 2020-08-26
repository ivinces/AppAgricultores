const { Pool } = require('pg');

const pool = new Pool({
    user: "agricultor",
    password: "appagricultor",
    host: "localhost",
    port: "5432",
    database: "SensoresDB"
});


//CULTIVO NODO ESTADO MATCH
const getCultivoxNodoxEstado = async (req, res) => {
    const response = await pool.query('SELECT Estado_Nodo.id_estado_nodo, Estado_Nodo.fecha_hora, Estado_Nodo.bateria, Estado_Nodo.categoria, Estado_Nodo.id_nodo, latitud, longitud, Nodo.activo AS n_activo, Cultivo.activo AS c_activo, cod_nodo, nombre, descripcion, nodo_central, Nodo.id_cultivo FROM Estado_Nodo, Nodo, Cultivo WHERE Cultivo.id_cultivo = Nodo.id_cultivo AND Estado_Nodo.id_nodo = Nodo.id_nodo ORDER BY id_cultivo ASC');
    res.status(200).json(response.rows);
};

const getCultivoxNodoxEstadoById = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query('SELECT Estado_Nodo.id_estado_nodo, Estado_Nodo.fecha_hora, Estado_Nodo.bateria, Estado_Nodo.categoria, Estado_Nodo.id_nodo, latitud, longitud, Nodo.activo AS n_activo, Cultivo.activo AS c_activo, cod_nodo, nombre, descripcion, nodo_central, Nodo.id_cultivo FROM Estado_Nodo, Nodo, Cultivo WHERE Cultivo.id_cultivo = Nodo.id_cultivo AND Estado_Nodo.id_nodo = Nodo.id_nodo AND Cultivo.id_cultivo = $1', [id]);
    res.json(response.rows);
};

//CULTIVO NODO ESTADO MATCH




module.exports = {
    getCultivoxNodoxEstado,
    getCultivoxNodoxEstadoById,
};