const { Pool } = require('pg');

const pool = new Pool({
    user: "agricultor",
    password: "appagricultor",
    host: "localhost",
    port: "5432",
    database: "SensoresDB"
});


//Umbrales
const getUmbrales = async (req, res) => {
    const response = await pool.query('SELECT * FROM Umbrales_Cultivo ORDER BY id_umbrales ASC');
    res.status(200).json(response.rows);
};

const getUmbralesById = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM Umbrales_Cultivo WHERE id_umbrales = $1', [id]);
    res.json(response.rows);
};

const createUmbrales = async (req, res) => {
    const reqJson = JSON.parse(req.body.data);
    const response = await pool.query("INSERT INTO Umbrales_Cultivo (temp_min, temp_max, humedad_min, humedad_max, radiacion_uv_min, radiacion_uv_max, id_cultivo) VALUES ($1,$2,$3,$4,$5,$6,$7)",[reqJson.temp_min, reqJson.temp_max, reqJson.humedad_min, reqJson.humedad_max, reqJson.radiacion_uv_min, reqJson.radiacion_uv_max, reqJson.id_cultivo]);
    res.json({
        message: 'Cultivo Added successfully',
        body: {
            user: {name, email}
        }
    })
};

const updateUmbrales= async (req, res) => {
    const id = parseInt(req.params.id);
    const reqJson = JSON.parse(req.body.data);
    const response =await pool.query("UPDATE Umbrales_Cultivo SET temp_min = $1, temp_max = $2, humedad_min = $3, humedad_max = $4, radiacion_uv_min = $5, radiacion_uv_max = $6, id_cultivo = $7  WHERE id_umbrales=$8",[reqJson.temp_min, reqJson.temp_max, reqJson.humedad_min, reqJson.humedad_max, reqJson.radiacion_uv_min, reqJson.radiacion_uv_max, reqJson.id_cultivo, id]);
    res.json('Umbrales Updated Successfully');
};

const deleteUmbrales = async (req, res) => {
    const id = parseInt(req.params.id);
    await pool.query('DELETE FROM Umbrales where id_umbrales = $1', [
        id
    ]);
    res.json(`Umbrales ${id} deleted Successfully`);
};

//Umbrales




module.exports = {
    getUmbrales,
    getUmbralesById,
    createUmbrales,
    updateUmbrales,
    deleteUmbrales
};