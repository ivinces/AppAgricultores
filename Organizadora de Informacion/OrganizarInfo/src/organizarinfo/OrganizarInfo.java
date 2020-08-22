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
import java.util.concurrent.TimeUnit;
import java.util.logging.Level;
import java.util.logging.Logger;
import models.Cultivo;
import models.EstadoNodo;
import models.Registros;
import models.Nodo;
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
        try {
            TimeUnit.SECONDS.sleep(1);
        } catch (InterruptedException ex) {
            Logger.getLogger(OrganizarInfo.class.getName()).log(Level.SEVERE, null, ex);
        }
        int cod=1;
        for(File arch:archivos){
            String data=ConstantsArchivo.path_nuevo+"\\"+arch.getName();
            JsonData.getJsonData(data);
            Date fecha=new Date();
            SimpleDateFormat dt = new SimpleDateFormat("yyyyy-MM-dd hhmmss");
            String nuevo=ConstantsArchivo.path_procesado+"\\"+dt.format(fecha)+"C"+cod+".json";
            cod++;
            try { 
                Files.move(Paths.get(data),Paths.get(nuevo));
            } catch (IOException ex) {
                Logger.getLogger(OrganizarInfo.class.getName()).log(Level.SEVERE, null, ex);
            }
        }  
    }
    
    public static void parseSensorObject(JSONObject sensor, String nodo_central) 
    {
        String nodo_id = (String) sensor.get("nodo_id");  
        String datetime = (String) sensor.get("datetime");    
        Double latitud = (Double) sensor.get("latitude"); 
        Double longitude = (Double) sensor.get("longitude");
        String battery = (String) sensor.get("battery");
        String humidity = (String) sensor.get("humidity");
        String radiation = (String) sensor.get("radiation");
        String temperature = (String) sensor.get("temperature");
        
        Date date1=null;
        try {
            date1=(Date) new SimpleDateFormat("yyyy/MM/dd hh:mm:ss").parse(datetime);
        } catch (java.text.ParseException ex) {
            Logger.getLogger(JsonData.class.getName()).log(Level.SEVERE, null, ex);
        }
       
        
        Cultivo cultivo=new Cultivo(nodo_central);
        Nodo nodoobj=new Nodo(nodo_id, true, latitud, longitude, cultivo);
        //Sensor sensorobj= new Sensor(latitud,longitude,sensor_id, cultivo);
        float humedad=Float.parseFloat(humidity);
        float temperatura=Float.parseFloat(temperature);
        float radiacion=Float.parseFloat(radiation);
        
        EstadoNodo estado=new EstadoNodo(date1, Integer.parseInt(battery), nodoobj);
        
        Registros registro= new Registros(date1, temperatura, radiacion, humedad, nodoobj);
        
        
        insertarbase(cultivo, nodoobj,registro,estado);
    }
    
    public static void insertarbase(Cultivo cultivo, Nodo nodo, Registros registro, EstadoNodo estado){
        
        Connection c =PostgreSQLJDBC.conexion();
        
        try {
            if(!PostgreSQLJDBC.cultivoExist(c, cultivo)){
                PostgreSQLJDBC.insertcultivo(c, cultivo);
            }
            
            if(!PostgreSQLJDBC.nodoExist(c, nodo)){
                PostgreSQLJDBC.insertnodo(c, nodo);
            }
            PostgreSQLJDBC.insertestado(c, estado);
            PostgreSQLJDBC.insertregistro(c, registro);
            
            c.close();
        } catch (SQLException ex) {
            Logger.getLogger(OrganizarInfo.class.getName()).log(Level.SEVERE, null, ex);
        }
        
    }
    
}
