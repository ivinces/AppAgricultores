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
            
            String nodo = (String) jo.get("nodo_central"); 
            
            JSONArray data = (JSONArray) jo.get("data");
            
            data.forEach(sensor->OrganizarInfo.parseSensorObject( (JSONObject) sensor, nodo) );  

       
           
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (ParseException e) {
            e.printStackTrace();
        }
    }
    
    
    
}
