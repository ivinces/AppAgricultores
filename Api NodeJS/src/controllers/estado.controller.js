const { Pool } = require('pg');

const pool = new Pool({
    user: "agricultor",
    password: "appagricultor",
    host: "localhost",
    port: "5432",
    database: "SensoresDB"
});


//Estado_Nodo
const getEstado_Nodo = async (req, res) => {
    const response = await pool.query('SELECT * FROM Estado_Nodo ORDER BY id_estado_nodo ASC');
    res.status(200).json(response.rows);
};

const getEstado_NodoById = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM Estado_Nodo WHERE id_estado_nodo = $1', [id]);
    res.json(response.rows);
};

const createEstado_Nodo = async (req, res) => {
    const reqJson = JSON.parse(req.body.data);
    const response = await pool.query("INSERT INTO Estado_Nodo (fecha_hora, bateria, categoria, id_nodo) VALUES ($1,$2,$3,$4)",[reqJson.fecha_hora, reqJson.bateria, reqJson.categoria, reqJson.id_nodo]);
    res.json({
        message: 'Cultivo Added successfully',
        body: {
            user: {name, email}
        }
    })
};

const updateEstado_Nodo= async (req, res) => {
    const id = parseInt(req.params.id);
    const reqJson = JSON.parse(req.body.data);
    const response =await pool.query("UPDATE Estado_Nodo SET fecha_hora = $1, bateria = $2, categoria = $3, id_nodo = $4  WHERE id_estado_nodo=$5",[reqJson.fecha_hora, reqJson.bateria, reqJson.categoria, reqJson.id_nodo, id]);
    res.json('Estado_Nodo Updated Successfully');
};

const deleteEstado_Nodo = async (req, res) => {
    const id = parseInt(req.params.id);
    await pool.query('DELETE FROM Estado_Nodo where id_estado_nodo = $1', [
        id
    ]);
    res.json(`Estado_Nodo ${id} deleted Successfully`);
};

//Estado_Nodo




module.exports = {
    getEstado_Nodo,
    getEstado_NodoById,
    createEstado_Nodo,
    updateEstado_Nodo,
    deleteEstado_Nodo
};