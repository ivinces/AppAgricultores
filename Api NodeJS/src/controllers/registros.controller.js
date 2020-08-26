const { Pool } = require('pg');

const pool = new Pool({
    user: "agricultor",
    password: "appagricultor",
    host: "localhost",
    port: "5432",
    database: "SensoresDB"
});


//Registros
const getRegistros = async (req, res) => {
    const response = await pool.query('SELECT * FROM Registros ORDER BY id_registro ASC');
    res.status(200).json(response.rows);
};

const getRegistrosById = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM Registros WHERE id_registro = $1', [id]);
    res.json(response.rows);
};

const createRegistros = async (req, res) => {
    const reqJson = JSON.parse(req.body.data);
    const response = await pool.query("INSERT INTO Registros (fecha_hora, temperatura, humedad, radiacion, id_nodo) VALUES ($1,$2,$3,$4,$5)",[reqJson.fecha_hora, reqJson.temperatura, reqJson.humedad, reqJson.radiacion, reqJson.id_nodo]);
    res.json({
        message: 'Cultivo Added successfully',
        body: {
            user: {name, email}
        }
    })
};

const updateRegistros= async (req, res) => {
    const id = parseInt(req.params.id);
    const reqJson = JSON.parse(req.body.data);
    const response =await pool.query("UPDATE Registros SET fecha_hora = $1, temperatura = $2, humedad = $3, radiacion = $4, id_nodo = $5  WHERE id_registro=$6",[reqJson.fecha_hora, reqJson.temperatura, reqJson.humedad, reqJson.radiacion, reqJson.id_nodo, id]);
    res.json('Registros Updated Successfully');
};

const deleteRegistros = async (req, res) => {
    const id = parseInt(req.params.id);
    await pool.query('DELETE FROM Registros where id_registro = $1', [
        id
    ]);
    res.json(`Registros ${id} deleted Successfully`);
};

//Registros




module.exports = {
    getRegistros,
    getRegistrosById,
    createRegistros,
    updateRegistros,
    deleteRegistros
};