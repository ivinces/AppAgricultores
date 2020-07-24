/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package organizarinfo;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

/**
 *
 * @author isabe
 */
public class JsonData {
    
    public static void getJsonData(String archivo){
        
        //JSON parser object to parse read file
        JSONParser jsonParser = new JSONParser();
         
        try (FileReader reader = new FileReader(archivo))
        {
            //Read JSON file
            Object obj = jsonParser.parse(reader);
            JSONObject jo = (JSONObject) obj; 
            
            String nodo = (String) jo.get("id_nodo"); 
            System.out.println(nodo);
            
            JSONArray data = (JSONArray) jo.get("data");
            System.out.println(data);
            
            data.forEach(sensor->parseSensorObject( (JSONObject) sensor ) );  

       
           
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (ParseException e) {
            e.printStackTrace();
        }
    }
    
    private static void parseSensorObject(JSONObject sensor) 
    {
         
        //Get employee first name
        String sensor_id = (String) sensor.get("sensor_id");    
        System.out.println("Sensor: "+sensor_id);
        String datetime = (String) sensor.get("datetime");    
        System.out.println("Fecha: "+datetime);
        Double latitud = (Double) sensor.get("latitude");    
        System.out.println("Latitud: "+latitud);
        Double longitude = (Double) sensor.get("longitude");    
        System.out.println("Longitud: "+longitude);
        String battery = (String) sensor.get("battery");    
        System.out.println("Bateria: "+battery);
        String humidity = (String) sensor.get("Humidity");    
        System.out.println("Humedad: "+humidity);
        String radiation = (String) sensor.get("radiation");    
        System.out.println("Radiación: "+radiation);
        String temperature = (String) sensor.get("temperature");    
        System.out.println("Temperatura: "+temperature);
        
    }
    
}
