const { Pool } = require('pg');

const pool = new Pool({
    user: "agricultor",
    password: "appagricultor",
    host: "localhost",
    port: "5432",
    database: "SensoresDB"
});


//Nodo
const getNodo = async (req, res) => {
    const response = await pool.query('SELECT * FROM Nodo ORDER BY id_nodo ASC');
    res.status(200).json(response.rows);
};

const getNodoById = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM Nodo WHERE id_nodo = $1', [id]);
    res.json(response.rows);
};

const createNodo = async (req, res) => {
    const reqJson = JSON.parse(req.body.data);
    const response = await pool.query("INSERT INTO Nodo (latitud, longitud, activo, cod_nodo, id_cultivo) VALUES  ($1,$2,$3,$4,$5,$6)",[reqJson.latitud, reqJson.longitud, reqJson.activo, reqJson.cod_nodo, reqJson.id_cultivo]);
    res.json({
        message: 'Cultivo Added successfully',
        body: {
            user: {name, email}
        }
    })
};

const updateNodo= async (req, res) => {
    const id = parseInt(req.params.id);
    const reqJson = JSON.parse(req.body.data);
    const response =await pool.query("UPDATE Nodo SET latitud = $1, longitud = $2, activo = $3, cod_nodo = $4, id_cultivo = $5  WHERE id_nodo=$6",[reqJson.latitud, reqJson.longitud, reqJson.activo, reqJson.cod_nodo, reqJson.id_cultivo, id]);
    res.json('Nodo Updated Successfully');
};

const deleteNodo = async (req, res) => {
    const id = parseInt(req.params.id);
    await pool.query('DELETE FROM Nodo where id_nodo = $1', [
        id
    ]);
    res.json(`Nodo ${id} deleted Successfully`);
};

//Nodo




module.exports = {
    getNodo,
    getNodoById,
    createNodo,
    updateNodo,
    deleteNodo
};