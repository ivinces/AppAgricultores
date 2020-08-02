package com.app.web.api;

import java.util.LinkedList;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

/** Example resource class hosted at the URI path "/myresource"
 */
@Path("")
public class RestApi {
    
    /** Method processing HTTP GET requests, producing "text/plain" MIME media
     * type.
     * @return String that will be send back as a response of type "text/plain".
     */
	
	ConnectDB cdb=new ConnectDB();
	
    @GET 
    @Path("/cultivo")
    @Produces(MediaType.APPLICATION_JSON)
    public String cultivo_getIt() {
    	LinkedList<LinkedList<String>> li=cdb.read_data("Cultivo");
    	String str="";
    	str+="[";

    	int num = 0;
    	System.out.println(li.get(num));
        while (li.size() > num) {
        	str+="\n   { \n     \"id_cultivo\":\""+ li.get(num).get(0)+
        	 		"\", \n     \"nombre\":\""+li.get(num).get(1)+
        	 		"\", \n     \"descripcion\":\""+li.get(num).get(2)+
        	 		"\", \n     \"nodo\":\""+li.get(num).get(3)+"\" \n   },";
        	num++;
        }
        str = str.substring(0, str.length() - 1);
        str+="\n]";
    	System.out.println(str);
    	return str;
    }
    
    @GET
    @Path("/cultivo/{id}") 
    @Produces(MediaType.APPLICATION_JSON)
    public String cultivoItemId(@PathParam("id") Integer id) {
    	LinkedList<LinkedList<String>> li=cdb.read_data("Cultivo");
    	String str="";
    	str+="{ \n     \"id_cultivo\":\""+ li.get(id-1).get(0)+
    	 		"\", \n     \"nombre\":\""+li.get(id-1).get(1)+
    	 		"\", \n     \"descripcion\":\""+li.get(id-1).get(2)+
    	 		"\", \n     \"nodo\":\""+li.get(id-1).get(3)+"\" \n}";
    	return str;
    }
    
    @GET 
    @Path("/umbrales_cultivo")
    @Produces(MediaType.APPLICATION_JSON)
    public String umbrales_cultivo_getIt() {
    	LinkedList<LinkedList<String>> li=cdb.read_data("Umbrales_Cultivo");
    	String str="";
    	str+="[";

    	int num = 0;
        while (li.size() > num) {
        	str+="\n   { \n     \"id_umbrales\":\""+li.get(num).get(0)+
	 		"\", \n     \"temp_min\":\""+li.get(num).get(1)+
	 		"\", \n     \"temp_max\":\""+li.get(num).get(2)+
	 		"\", \n     \"humedad_min\":\""+li.get(num).get(3)+
	 		"\", \n     \"humedad_max\":\""+li.get(num).get(4)+
	 		"\", \n     \"radiacion_uv_min\":\""+li.get(num).get(5)+
	 		"\", \n     \"radiacion_uv_max\":\""+li.get(num).get(6)+
	 		"\", \n     \"id_cultivo\":\""+li.get(num).get(7)+"\" \n   },";
        	num++;
        }
        str = str.substring(0, str.length() - 1);
        str+="\n]";
    	System.out.println(str);
    	return str;
    }
    
    @GET
    @Path("/umbrales_cultivo/{id}") 
    @Produces(MediaType.APPLICATION_JSON)
    public String umbrales_cultivoItemId(@PathParam("id") Integer id) {
    	LinkedList<LinkedList<String>> li=cdb.read_data("Umbrales_Cultivo");
    	String str="";
    	str+="{ \n     \"id_umbrales\":\""+li.get(id-1).get(0)+
    	 		"\", \n     \"temp_min\":\""+li.get(id-1).get(1)+
    	 		"\", \n     \"temp_max\":\""+li.get(id-1).get(2)+
    	 		"\", \n     \"humedad_min\":\""+li.get(id-1).get(3)+
    	 		"\", \n     \"humedad_max\":\""+li.get(id-1).get(4)+
    	 		"\", \n     \"radiacion_uv_min\":\""+li.get(id-1).get(5)+
    	 		"\", \n     \"radiacion_uv_max\":\""+li.get(id-1).get(6)+
    	 		"\", \n     \"id_cultivo\":\""+li.get(id-1).get(7)+"\" \n}";
    	return str;
    }
    
    @GET 
    @Path("/sensor")
    @Produces(MediaType.APPLICATION_JSON)
    public String sensor_getIt() {
    	LinkedList<LinkedList<String>> li=cdb.read_data("Sensor");
    	String str="";
    	str+="[";
    	int num = 0;
        while (li.size() > num) {
        	str+="\n   { \n     \"id_sensor\":\""+ li.get(num).get(0)+
         	 		"\", \n     \"temperatura\":\""+li.get(num).get(1)+
         	 		"\", \n     \"humedad\":\""+li.get(num).get(2)+
         	 		"\", \n     \"radiacion\":\""+li.get(num).get(3)+
         	 		"\", \n     \"latitud\":\""+li.get(num).get(4)+
         	 		"\", \n     \"longitud\":\""+li.get(num).get(5)+
         	 		"\", \n     \"id_cultivo\":\""+li.get(num).get(6)+"\" \n   },";
        	num++;
        }
        str = str.substring(0, str.length() - 1);
        str+="\n]";
    	System.out.println(str);
    	return str;
    }
    
    @GET
    @Path("/sensor/{id}") 
    @Produces(MediaType.APPLICATION_JSON)
    public String sensorItemId(@PathParam("id") Integer id) {
    	LinkedList<LinkedList<String>> li=cdb.read_data("Sensor");
    	String str="";
    	if(id>0 && id<=li.size()) {
    		str+="{ \n     \"id_sensor\":\""+ li.get(id-1).get(0)+
         	 		"\", \n     \"temperatura\":\""+li.get(id-1).get(1)+
         	 		"\", \n     \"humedad\":\""+li.get(id-1).get(2)+
         	 		"\", \n     \"radiacion\":\""+li.get(id-1).get(3)+
         	 		"\", \n     \"latitud\":\""+li.get(id-1).get(5)+
         	 		"\", \n     \"longitud\":\""+li.get(id-1).get(5)+
         	 		"\", \n     \"id_cultivo\":\""+li.get(id-1).get(6)+"\" \n}";
    		return str;
    		}
    	return null;
    	}
    
    @GET 
    @Path("/estado_sensor")
    @Produces(MediaType.APPLICATION_JSON)
    public String estado_sensor_getIt() {
    	LinkedList<LinkedList<String>> li=cdb.read_data("Estado_Sensor");
    	String str="";
    	str+="[";

    	int num = 0;
        while (li.size() > num) {
        	str+="\n   { \n     \"id_estado_sensor\":\""+ li.get(num).get(0)+
          	 		"\", \n     \"fecha_hora\":\""+li.get(num).get(1)+
          	 		"\", \n     \"bateria\":\""+li.get(num).get(2)+
          	 		"\", \n     \"categoria\":\""+li.get(num).get(3)+
          	 		"\", \n     \"id_sensor\":\""+li.get(num).get(4)+"\" \n   },";
        	num++;
        }
        str = str.substring(0, str.length() - 1);
        str+="\n]";
    	System.out.println(str);
    	return str;
    }
    
    @GET
    @Path("/estado_sensor/{id}") 
    @Produces(MediaType.APPLICATION_JSON)
    public String estadoSensorItemId(@PathParam("id") Integer id) {
    	LinkedList<LinkedList<String>> li=cdb.read_data("Estado_Sensor");
    	String str="";
    	if(id>0 && id<=li.size()) {
    		str+="{ \n     \"id_estado_sensor\":\""+ li.get(id-1).get(0)+
          	 		"\", \n     \"fecha_hora\":\""+li.get(id-1).get(1)+
          	 		"\", \n     \"bateria\":\""+li.get(id-1).get(2)+
          	 		"\", \n     \"categoria\":\""+li.get(id-1).get(3)+
          	 		"\", \n     \"id_sensor\":\""+li.get(id-1).get(4)+"\" \n}";
    		return str;
    		}
    	return null;
    	}
    
    
    @GET 
    @Path("/registro_temperatura")
    @Produces(MediaType.APPLICATION_JSON)
    public String registro_temperatura_getIt() {
    	LinkedList<LinkedList<String>> li=cdb.read_data("registro_temperatura");
    	String str="";
    	str+="[";

    	int num = 0;
        
        while (li.size() > num) {
        	str+="\n   { \n     \"id_reg_temp\":\""+ li.get(num).get(0)+
           	 		"\", \n     \"fecha_hora\":\""+li.get(num).get(1)+
           	 		"\", \n     \"valor\":\""+li.get(num).get(2)+
           	 		"\", \n     \"id_sensor\":\""+li.get(num).get(3)+"\" \n   },";
        	num++;
        }
        str = str.substring(0, str.length() - 1);
        str+="\n]";
        
        
    	System.out.println(str);
    	return str;
    	
    }

    @GET
    @Path("/registro_temperatura/{id}") 
    @Produces(MediaType.APPLICATION_JSON)
    public String registroTemperaturaItemId(@PathParam("id") Integer id) {
    	LinkedList<LinkedList<String>> li=cdb.read_data("registro_temperatura");
    	String str="";
    	if(id>0 && id<=li.size()) {
    		str+="{ \n     \"id_reg_temp\":\""+ li.get(id-1).get(0)+
           	 		"\", \n     \"fecha_hora\":\""+li.get(id-1).get(1)+
           	 		"\", \n     \"valor\":\""+li.get(id-1).get(2)+
           	 		"\", \n     \"id_sensor\":\""+li.get(id-1).get(3)+"\" \n}";
    		return str;
    		}
    	return null;
    	}
    
    @GET 
    @Path("/registro_humedad")
    @Produces(MediaType.APPLICATION_JSON)
    public String registro_humedad_getIt() {
    	LinkedList<LinkedList<String>> li=cdb.read_data("registro_humedad");
    	String str="";
    	str+="[";

    	int num = 0;
    	while (li.size() > num) {
        	str+="\n   { \n     \"id_reg_humedad\":\""+ li.get(num).get(0)+
           	 		"\", \n     \"fecha_hora\":\""+li.get(num).get(1)+
           	 		"\", \n     \"valor\":\""+li.get(num).get(2)+
           	 		"\", \n     \"id_sensor\":\""+li.get(num).get(3)+"\" \n   },";
        	num++;
        }
        str = str.substring(0, str.length() - 1);
        str+="\n]";
    	System.out.println(str);
    	return str;
    	
    }
    
    @GET
    @Path("/registro_humedad/{id}") 
    @Produces(MediaType.APPLICATION_JSON)
    public String registroHumedadItemId(@PathParam("id") Integer id) {
    	LinkedList<LinkedList<String>> li=cdb.read_data("registro_humedad");
    	String str="";
    	if(id>0 && id<=li.size()) {
    		str+="{ \n     \"id_reg_humedad\":\""+ li.get(id-1).get(0)+
           	 		"\", \n     \"fecha_hora\":\""+li.get(id-1).get(1)+
           	 		"\", \n     \"valor\":\""+li.get(id-1).get(2)+
           	 		"\", \n     \"id_sensor\":\""+li.get(id-1).get(3)+"\" \n}";
    		return str;
    		}
    	return null;
    	}

    
    @GET 
    @Path("/registro_radiacion")
    @Produces(MediaType.APPLICATION_JSON)
    public String registro_radiacion_getIt() {
    	LinkedList<LinkedList<String>> li=cdb.read_data("registro_radiacion");
    	String str="";
    	str+="[";

    	int num = 0;
        while (li.size() > num) {
        	str+="\n   { \n     \"id_reg_radiacion\":\""+ li.get(num).get(0)+
           	 		"\", \n     \"fecha_hora\":\""+li.get(num).get(1)+
           	 		"\", \n     \"valor\":\""+li.get(num).get(2)+
           	 		"\", \n     \"id_sensor\":\""+li.get(num).get(3)+"\" \n   },";
        	num++;
        }
        str = str.substring(0, str.length() - 1);
        str+="\n]";
    	System.out.println(str);
    	return str;
    	
    }
    
    @GET
    @Path("/registro_radiacion/{id}") 
    @Produces(MediaType.APPLICATION_JSON)
    public String registroRadiacionItemId(@PathParam("id") Integer id) {
    	LinkedList<LinkedList<String>> li=cdb.read_data("registro_radiacion");
    	String str="";
    	if(id>0 && id<=li.size()) {
    		str+="{ \n     \"id_reg_radiacion\":\""+ li.get(id-1).get(0)+
           	 		"\", \n     \"fecha_hora\":\""+li.get(id-1).get(1)+
           	 		"\", \n     \"valor\":\""+li.get(id-1).get(2)+
           	 		"\", \n     \"id_sensor\":\""+li.get(id-1).get(3)+"\" \n}";
    		return str;
    		}
    	return null;
    	}
}
