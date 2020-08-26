const { Pool } = require('pg');

const pool = new Pool({
    user: "agricultor",
    password: "appagricultor",
    host: "localhost",
    port: "5432",
    database: "SensoresDB"
});


//CULTIVO NODO MATCH
const getCultivoxUmbrales = async (req, res) => {
    const response = await pool.query('SELECT id_umbrales, temp_min, temp_max, humedad_min, humedad_max, radiacion_uv_min, radiacion_uv_max, Cultivo.activo, nombre, descripcion, nodo_central, Umbrales_Cultivo.id_cultivo FROM Umbrales_Cultivo INNER JOIN Cultivo ON Cultivo.id_cultivo = Umbrales_Cultivo.id_cultivo ORDER BY id_cultivo ASC');
    res.status(200).json(response.rows);
};

const getCultivoxUmbralesById = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query('SELECT id_umbrales, temp_min, temp_max, humedad_min, humedad_max, radiacion_uv_min, radiacion_uv_max, Cultivo.activo, nombre, descripcion, nodo_central, Umbrales_Cultivo.id_cultivo FROM Umbrales_Cultivo INNER JOIN Cultivo ON Cultivo.id_cultivo = Umbrales_Cultivo.id_cultivo WHERE Cultivo.id_cultivo = $1', [id]);
    res.json(response.rows);
};

//CULTIVO NODO MATCH




module.exports = {
    getCultivoxUmbrales,
    getCultivoxUmbralesById,
};