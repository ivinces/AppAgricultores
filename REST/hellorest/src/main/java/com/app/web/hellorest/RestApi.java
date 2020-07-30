
package com.app.web.hellorest;

import java.util.LinkedList;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

/** Example resource class hosted at the URI path "/myresource"
 */
@Path("/myresource")
public class RestApi {
    
    /** Method processing HTTP GET requests, producing "text/plain" MIME media
     * type.
     * @return String that will be send back as a response of type "text/plain".
     */
	public String id = "01234"; 
	public String nombre = "Max";
	public String descripcion = "lorem ipsum";
	public String nodo = "nodo1";
	
	ConnectDB cdb=new ConnectDB();
	
    @GET 
    @Path("/cultivo")
    @Produces(MediaType.APPLICATION_JSON)
    public String cultivo_getIt() {
    	LinkedList<LinkedList<String>> li=cdb.read_data("Cultivo");
    	String str="";
    	str+="{";

    	int num = 0;
    	System.out.println(li.get(num));
        while (li.size() > num) {
        	str+="{\"id_cultivo\":\""+ li.get(num).get(0)+
        	 		"\", \"nombre\":\""+li.get(num).get(1)+
        	 		"\", \"descripcion\":\""+li.get(num).get(2)+
        	 		"\", \"nodo\":\""+li.get(num).get(3)+"\"}";
        	num++;
        }
        str+="}";
    	System.out.println(str);
    	return str;
    }
    
    
    @GET 
    @Path("/umbrales_cultivo")
    @Produces(MediaType.APPLICATION_JSON)
    public String umbrales_cultivo_getIt() {
    	LinkedList<LinkedList<String>> li=cdb.read_data("Umbrales_Cultivo");
    	String str="";
    	str+="{";

    	int num = 0;
        while (li.size() > num) {
        	str+="{\"id_umbrales\":\""+li.get(num).get(0)+
	 		"\", \"temp_min\":\""+li.get(num).get(1)+
	 		"\", \"temp_max\":\""+li.get(num).get(2)+
	 		"\", \"humedad_min\":\""+li.get(num).get(3)+
	 		"\", \"humedad_max\":\""+li.get(num).get(4)+
	 		"\", \"radiacion_uv_min\":\""+li.get(num).get(5)+
	 		"\", \"radiacion_uv_max\":\""+li.get(num).get(6)+
	 		"\", \"id_cultivo\":\""+li.get(num).get(7)+"\"}";
        	num++;
        }
        str+="}";
    	System.out.println(str);
    	return str;
    }
    
    
    @GET 
    @Path("/sensor")
    @Produces(MediaType.APPLICATION_JSON)
    public String sensor_getIt() {
    	LinkedList<LinkedList<String>> li=cdb.read_data("Sensor");
    	String str="";
    	str+="{";

    	int num = 0;
        while (li.size() > num) {
        	str+="{\"id_sensor\":\""+ li.get(num).get(0)+
         	 		"\", \"temperatura\":\""+li.get(num).get(1)+
         	 		"\", \"humedad\":\""+li.get(num).get(2)+
         	 		"\", \"radiacion\":\""+li.get(num).get(3)+
         	 		"\", \"latitud\":\""+li.get(num).get(5)+
         	 		"\", \"longitud\":\""+li.get(num).get(5)+
         	 		"\", \"id_cultivo\":\""+li.get(num).get(6)+"\"}";
        	num++;
        }
        str+="}";
    	System.out.println(str);
    	return str;
    }
    
    
    @GET 
    @Path("/estado_sensor")
    @Produces(MediaType.APPLICATION_JSON)
    public String estado_sensor_getIt() {
    	LinkedList<LinkedList<String>> li=cdb.read_data("Sensor");
    	String str="";
    	str+="{";

    	int num = 0;
        while (li.size() > num) {
        	str+="{\"id_estado_sensor\":\""+ li.get(num).get(0)+
          	 		"\", \"fecha_hora\":\""+li.get(num).get(1)+
          	 		"\", \"bateria\":\""+li.get(num).get(2)+
          	 		"\", \"categoria\":\""+li.get(num).get(3)+
          	 		"\", \"id_sensor\":\""+li.get(num).get(4)+"\"}";
        	num++;
        }
        str+="}";
    	System.out.println(str);
    	return str;
    }
    
    
    @GET 
    @Path("/registro_temperatura")
    @Produces(MediaType.APPLICATION_JSON)
    public String registro_temperatura_getIt() {
    	LinkedList<LinkedList<String>> li=cdb.read_data("registro_temperatura");
    	String str="";
    	str+="{";

    	int num = 0;
        while (li.size() > num) {
        	str+="{\"id_reg_temp\":\""+ li.get(num).get(0)+
           	 		"\", \"fecha_hora\":\""+li.get(num).get(1)+
           	 		"\", \"valor\":\""+li.get(num).get(2)+
           	 		"\", \"id_sensor\":\""+li.get(num).get(3)+"\"}";
        	num++;
        }
        str+="}";
    	System.out.println(str);
    	return str;
    	
    }

    
    @GET 
    @Path("/registro_humedad")
    @Produces(MediaType.APPLICATION_JSON)
    public String registro_humedad_getIt() {
    	LinkedList<LinkedList<String>> li=cdb.read_data("registro_humedad");
    	String str="";
    	str+="{";

    	int num = 0;
        while (li.size() > num) {
        	str+="{\"id_reg_humedad\":\""+ li.get(num).get(0)+
           	 		"\", \"fecha_hora\":\""+li.get(num).get(1)+
           	 		"\", \"valor\":\""+li.get(num).get(2)+
           	 		"\", \"id_sensor\":\""+li.get(num).get(3)+"\"}";
        	num++;
        }
        str+="}";
    	System.out.println(str);
    	return str;
    	
    }
    

    
    @GET 
    @Path("/registro_radiacion")
    @Produces(MediaType.APPLICATION_JSON)
    public String registro_radiacion_getIt() {
    	LinkedList<LinkedList<String>> li=cdb.read_data("registro_radiacion");
    	String str="";
    	str+="{";

    	int num = 0;
        while (li.size() > num) {
        	str+="{\"id_reg_radiacion\":\""+ li.get(num).get(0)+
           	 		"\", \"fecha_hora\":\""+li.get(num).get(1)+
           	 		"\", \"valor\":\""+li.get(num).get(2)+
           	 		"\", \"id_sensor\":\""+li.get(num).get(3)+"\"}";
        	num++;
        }
        str+="}";
    	System.out.println(str);
    	return str;
    	
    }
}
