/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package organizarinfo;

import java.io.File;
import Constants.ConstantsArchivo;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.sql.Connection;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.logging.Level;
import java.util.logging.Logger;
import models.Cultivo;
import models.EstadoSensor;
import models.Registros;
import models.Sensor;
import org.json.simple.JSONObject;

/**
 *
 * @author isabe
 */
public class OrganizarInfo {
    
    
    public static void organizarinfo(){
        String sCarpAct = ConstantsArchivo.path_nuevo;
        File carpeta = new File(sCarpAct);
        File[] archivos= carpeta.listFiles();
        for(File arch:archivos){
            String data=ConstantsArchivo.path_nuevo+"\\"+arch.getName();
            JsonData.getJsonData(data);
            Date fecha=new Date();
            SimpleDateFormat dt = new SimpleDateFormat("yyyyy-mm-dd hhmmss");
            String nuevo=ConstantsArchivo.path_procesado+"\\"+dt.format(fecha)+".json";
            try { 
                Files.move(Paths.get(data),Paths.get(nuevo));
            } catch (IOException ex) {
                Logger.getLogger(OrganizarInfo.class.getName()).log(Level.SEVERE, null, ex);
            }
        }  
    }
    
    public static void parseSensorObject(JSONObject sensor, String nodo) 
    {
        String sensor_id = (String) sensor.get("sensor_id");  
        String datetime = (String) sensor.get("datetime");    
        Double latitud = (Double) sensor.get("latitude"); 
        Double longitude = (Double) sensor.get("longitude");
        String battery = (String) sensor.get("battery");
        String humidity = (String) sensor.get("Humidity");
        String radiation = (String) sensor.get("radiation");
        String temperature = (String) sensor.get("temperature");
        
        Date date1=null;
        try {
            date1=(Date) new SimpleDateFormat("yyyy/MM/dd hh:mm:ss").parse(datetime);
        } catch (java.text.ParseException ex) {
            Logger.getLogger(JsonData.class.getName()).log(Level.SEVERE, null, ex);
        }
       
        
        Cultivo cultivo=new Cultivo(nodo);
        Sensor sensorobj= new Sensor(latitud,longitude,sensor_id, cultivo);
        float valor=0;
        if(!humidity.equals("")){
            sensorobj.setHumedad(true);
            valor=Float.parseFloat(humidity);
        }
        if(!radiation.equals("")){
            sensorobj.setRadiacion(true);
            valor=Float.parseFloat(radiation);
        }
        if(!temperature.equals("")){
            sensorobj.setTemperatura(true);
            valor=Float.parseFloat(temperature);
        }
        EstadoSensor estado=new EstadoSensor(date1, Integer.parseInt(battery),sensorobj);
        
        Registros registro=new Registros(date1,valor, sensorobj);
        
        insertarbase(cultivo, sensorobj,registro,estado);
    }
    
    public static void insertarbase(Cultivo cultivo, Sensor sensor, Registros registro, EstadoSensor estado){
        
        Connection c =PostgreSQLJDBC.conexion();
        
        try {
            
            
            if(!PostgreSQLJDBC.cultivoExist(c, cultivo)){
                PostgreSQLJDBC.insertcultivo(c, cultivo);
            }
            
            if(!PostgreSQLJDBC.sensorExist(c, sensor)){
                PostgreSQLJDBC.insertsensor(c, sensor);
            }
            PostgreSQLJDBC.insertestado(c, estado);
            if(sensor.isHumedad()){
                PostgreSQLJDBC.insertregistro(c, registro, "registro_humedad");
            }
            if(sensor.isRadiacion()){
                PostgreSQLJDBC.insertregistro(c, registro, "registro_radiacion");
            }
            if(sensor.isTemperatura()){
                PostgreSQLJDBC.insertregistro(c, registro, "registro_temperatura");
            }
            c.close();
        } catch (SQLException ex) {
            Logger.getLogger(OrganizarInfo.class.getName()).log(Level.SEVERE, null, ex);
        }
        
    }
    
}
