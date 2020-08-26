const { Pool } = require('pg');

const pool = new Pool({
    user: "agricultor",
    password: "appagricultor",
    host: "localhost",
    port: "5432",
    database: "SensoresDB"
});


//CULTIVO
const getCultivo = async (req, res) => {
    const response = await pool.query('SELECT * FROM Cultivo ORDER BY id_cultivo ASC');
    res.status(200).json(response.rows);
};

const getCultivoById = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM Cultivo WHERE id_cultivo = $1', [id]);
    res.json(response.rows);
};

const createCultivo = async (req, res) => {
    const reqJson = JSON.parse(req.body.data);
    const response = await pool.query("INSERT INTO Cultivo (nombre, descripcion, nodo_central, activo) VALUES ($1,$2,$3, $4)",[reqJson.nombre, reqJson.descripcion, reqJson.nodo_central, reqJson.activo]);
    res.json({
        message: 'Cultivo Added successfully',
        body: {
            user: {name, email}
        }
    })
};

const updateCultivo = async (req, res) => {
    const id = parseInt(req.params.id);
    const reqJson = JSON.parse(req.body.data);

    const response =await pool.query("UPDATE Cultivo SET nombre = $1, descripcion = $2, nodo_central = $3, activo = $4 WHERE id_cultivo=$5", [reqJson.nombre, reqJson.descripcion, reqJson.nodo_central, reqJson.activo, id]);
    res.json('Cultivo Updated Successfully');
};

const deleteCultivo = async (req, res) => {
    const id = parseInt(req.params.id);
    await pool.query('DELETE FROM Cultivo where id_cultivo = $1', [
        id
    ]);
    res.json(`Cultivo ${id} deleted Successfully`);
};

//CULTIVO




module.exports = {
    getCultivo,
    getCultivoById,
    createCultivo,
    updateCultivo,
    deleteCultivo
};