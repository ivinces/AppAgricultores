const  {Client} = require('pg')
const express = require("express");
const { query } = require('express');
const app = express();
app.use(express.json())

const client = new Client({
    user: "agricultor",
    password: "appagricultor",
    host: "localhost",
    port: "5432",
    database: "SensoresDB"
})


//inicio Cultivo
app.get("/cultivo", async (req,res) => {
    const rows = await readRegister("SELECT * FROM Cultivo");
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(rows));
})
app.post("/cultivo", async (req,res) => {
    let result = {}
    try{
        const reqJson = JSON.parse(req.body.data);
        const rows = await createRegister("INSERT INTO Cultivo (nombre, descripcion, nodo_central, activo) VALUES ($1,$2,$3, $4)",[reqJson.nombre, reqJson.descripcion, reqJson.nodo_central, reqJson.activo]);
        result.success=true;
        }
    catch(e){
        result.success = false;
    }
    finally{
        res.setHeader("Content-Type", "application/json")
        res.send(JSON.stringify(result))
    }
    
})

app.delete("/cultivo", async (req,res) => {
    let result = {}
    try{
        const reqJson = JSON.parse(req.body.data);
        await deleteRegister("DELETE FROM Cultivo WHERE id_cultivo = $1", reqJson.id_cultivo)
        result.success=true;
        }
    catch(e){
        result.success = false;
    }
    finally{
        res.setHeader("Content-Type", "application/json")
        res.send(JSON.stringify(result))
    }
})

app.put("/cultivo", async (req,res) => {
    let result = {}
    try{
        const reqJson = JSON.parse(req.body.data);
        const rows = await updateRegister("UPDATE Cultivo SET nombre = $1, descripcion = $2, nodo_central = $3, activo = $4 WHERE id_cultivo=$5", [reqJson.nombre, reqJson.descripcion, reqJson.nodo_central, reqJson.activo, reqJson.id]);
        result.success=true;
        }
    catch(e){
        result.success = false;
    }
    finally{
        res.setHeader("Content-Type", "application/json")
        res.send(JSON.stringify(result))
    }
    
})
//fin Cultivo


//inicio Umbrales_Cultivo
app.get("/umbrales_cultivo", async (req,res) => {
    const rows = await readRegister("SELECT * FROM Umbrales_Cultivo");
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(rows));
})
app.post("/umbrales_cultivo", async (req,res) => {
    let result = {}
    try{
        const reqJson = JSON.parse(req.body.data);
        const rows = await createRegister("INSERT INTO Umbrales_Cultivo (temp_min, temp_max, humedad_min, humedad_max, radiacion_uv_min, radiacion_uv_max, id_cultivo) VALUES ($1,$2,$3,$4,$5,$6,$7)",[reqJson.temp_min, reqJson.temp_max, reqJson.humedad_min, reqJson.humedad_max, reqJson.radiacion_uv_min, reqJson.radiacion_uv_max, reqJson.id_cultivo]);
        result.success=true;
        }
    catch(e){
        result.success = false;
    }
    finally{
        res.setHeader("Content-Type", "application/json")
        res.send(JSON.stringify(result))
    }
    
})

app.delete("/umbrales_cultivo", async (req,res) => {
    let result = {}
    try{
        const reqJson = JSON.parse(req.body.data);
        await deleteRegister("DELETE FROM Umbrales_Cultivo WHERE id_umbrales = $1", reqJson.id_umbrales)
        result.success=true;
        }
    catch(e){
        result.success = false;
    }
    finally{
        res.setHeader("Content-Type", "application/json")
        res.send(JSON.stringify(result))
    }
})

app.put("/umbrales_cultivo", async (req,res) => {
    let result = {}
    try{
        const reqJson = JSON.parse(req.body.data);
        const rows = await updateRegister("UPDATE Umbrales_Cultivo SET temp_min = $1, temp_max = $2, humedad_min = $3, humedad_max = $4, radiacion_uv_min = $5, radiacion_uv_max = $6, id_cultivo = $7  WHERE id_umbrales=$8",[reqJson.temp_min, reqJson.temp_max, reqJson.humedad_min, reqJson.humedad_max, reqJson.radiacion_uv_min, reqJson.radiacion_uv_max, reqJson.id_cultivo, reqJson.id_umbrales]);
        result.success=true;
        }
    catch(e){
        result.success = false;
    }
    finally{
        res.setHeader("Content-Type", "application/json")
        res.send(JSON.stringify(result))
    }
    
})
//fin Umbrales_Cultivo


//inicio Nodo
app.get("/nodo", async (req,res) => {
    const rows = await readRegister("SELECT * FROM Nodo");
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(rows));
})
app.post("/nodo", async (req,res) => {
    let result = {}
    try{
        const reqJson = JSON.parse(req.body.data);
        const rows = await createRegister("INSERT INTO Nodo (latitud, longitud, activo, cod_nodo, id_cultivo) VALUES  ($1,$2,$3,$4,$5,$6)",[reqJson.latitud, reqJson.longitud, reqJson.activo, reqJson.cod_nodo, reqJson.id_cultivo]);
        result.success=true;
        }
    catch(e){
        result.success = false;
    }
    finally{
        res.setHeader("Content-Type", "application/json")
        res.send(JSON.stringify(result))
    }
    
})

app.delete("/nodo", async (req,res) => {
    let result = {}
    try{
        const reqJson = JSON.parse(req.body.data);
        await deleteRegister("DELETE FROM Nodo WHERE id_nodo = $1", reqJson.id_nodo)
        result.success=true;
        }
    catch(e){
        result.success = false;
    }
    finally{
        res.setHeader("Content-Type", "application/json")
        res.send(JSON.stringify(result))
    }
})

app.put("/nodo", async (req,res) => {
    let result = {}
    try{
        const reqJson = JSON.parse(req.body.data);
        const rows = await updateRegister("UPDATE Nodo SET latitud = $1, longitud = $2, activo = $3, cod_nodo = $4, id_cultivo = $5  WHERE id_nodo=$6",[reqJson.latitud, reqJson.longitud, reqJson.activo, reqJson.cod_nodo, reqJson.id_cultivo, reqJson.id_nodo]);
        result.success=true;
        }
    catch(e){
        result.success = false;
    }
    finally{
        res.setHeader("Content-Type", "application/json")
        res.send(JSON.stringify(result))
    }
    
})
//fin Nodo


//inicio Estado_Nodo
app.get("/estado_nodo", async (req,res) => {
    const rows = await readRegister("SELECT * FROM Estado_Nodo");
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(rows));
})
app.post("/estado_nodo", async (req,res) => {
    let result = {}
    try{
        const reqJson = JSON.parse(req.body.data);
        const rows = await createRegister("INSERT INTO Estado_Nodo (fecha_hora, bateria, categoria, id_nodo) VALUES ($1,$2,$3,$4)",[reqJson.fecha_hora, reqJson.bateria, reqJson.categoria, reqJson.id_nodo]);
        result.success=true;
        }
    catch(e){
        result.success = false;
    }
    finally{
        res.setHeader("Content-Type", "application/json")
        res.send(JSON.stringify(result))
    }
    
})

app.delete("/estado_nodo", async (req,res) => {
    let result = {}
    try{
        const reqJson = JSON.parse(req.body.data);
        await deleteRegister("DELETE FROM Estado_Nodo WHERE id_estado_nodo = $1", reqJson.id_estado_nodo)
        result.success=true;
        }
    catch(e){
        result.success = false;
    }
    finally{
        res.setHeader("Content-Type", "application/json")
        res.send(JSON.stringify(result))
    }
})

app.put("/estado_nodo", async (req,res) => {
    let result = {}
    try{
        const reqJson = JSON.parse(req.body.data);
        const rows = await updateRegister("UPDATE Estado_Nodo SET fecha_hora = $1, bateria = $2, categoria = $3, id_nodo = $4  WHERE id_estado_nodo=$5",[reqJson.fecha_hora, reqJson.bateria, reqJson.categoria, reqJson.id_nodo, reqJson.id_estado_nodo]);
        result.success=true;
        }
    catch(e){
        result.success = false;
    }
    finally{
        res.setHeader("Content-Type", "application/json")
        res.send(JSON.stringify(result))
    }
    
})
//fin Estado_Nodo


//inicio Registros
app.get("/registros", async (req,res) => {
    const rows = await readRegister("SELECT * FROM registros");
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(rows));
})
app.post("/registros", async (req,res) => {
    let result = {}
    try{
        const reqJson = JSON.parse(req.body.data);
        const rows = await createRegister("INSERT INTO Registros (fecha_hora, temperatura, humedad, radiacion, id_nodo) VALUES ($1,$2,$3,$4,$5)",[reqJson.fecha_hora, reqJson.temperatura, reqJson.humedad, reqJson.radiacion, reqJson.id_nodo]);
        result.success=true;
        }
    catch(e){
        result.success = false;
    }
    finally{
        res.setHeader("Content-Type", "application/json")
        res.send(JSON.stringify(result))
    }
    
})

app.delete("/registros", async (req,res) => {
    let result = {}
    try{
        const reqJson = JSON.parse(req.body.data);
        await deleteRegister("DELETE FROM Registros WHERE id_registro = $1", reqJson.id_registro)
        result.success=true;
        }
    catch(e){
        result.success = false;
    }
    finally{
        res.setHeader("Content-Type", "application/json")
        res.send(JSON.stringify(result))
    }
})

app.put("/registros", async (req,res) => {
    let result = {}
    try{
        const reqJson = JSON.parse(req.body.data);
        const rows = await updateRegister("UPDATE Registros SET fecha_hora = $1, temperatura = $2, humedad = $3, radiacion = $4, id_nodo = $5  WHERE id_registro=$6",[reqJson.fecha_hora, reqJson.temperatura, reqJson.humedad, reqJson.radiacion, reqJson.id_nodo, reqJson.id_registro]);
        result.success=true;
        }
    catch(e){
        result.success = false;
    }
    finally{
        res.setHeader("Content-Type", "application/json")
        res.send(JSON.stringify(result))
    }
    
})
//fin Registros


app.listen(8085, () => console.log("Web server is listening... on port 8085"))


start()
async function start(){
    await connect();
}



//funciones de la base
async function connect() {
    try{
        await client.connect();
    }
    catch(e){
        console.log("Failed to connect "+e)
    }
}

async function readRegister(query){
    try{
        const results = await client.query(query);
        return results.rows;
    }
    catch(e){
        return [];
    }
}

async function createRegister(query, lista){
    try{
        await client.query(query,lista);
        return true
    }
    catch(e){
        return false;
    }
}

async function deleteRegister(query, id){
    try{
        await client.query(query, [id]);
        return true
    }
    catch(e){
        return false;
    }
}

async function updateRegister(query, lista){
    try{
        await client.query(query, lista);
        return true
    }
    catch(e){
        return false;
    }
}

