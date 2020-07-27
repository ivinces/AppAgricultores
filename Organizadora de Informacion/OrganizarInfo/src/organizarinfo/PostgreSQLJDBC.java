/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package organizarinfo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;
import Constants.ConstantsDB;
import Constants.EnumCategoriaEstado;
import java.sql.PreparedStatement;
import java.text.SimpleDateFormat;
import java.util.Date;
import models.Cultivo;
import models.EstadoSensor;
import models.Registros;
import models.Sensor;
/**
 *
 * @author isabe
 */
public class PostgreSQLJDBC {
    
    public static Connection conexion(){
        Connection c = null;
      try {
         c = DriverManager
            .getConnection(ConstantsDB.DB,ConstantsDB.usuario, ConstantsDB.clave);
      } catch (SQLException e) {
         System.err.println(e.getClass().getName()+": "+e.getMessage());
         System.exit(0);
      }
      
      return c;
    }
    
    public static void insertcultivo(Connection c, Cultivo cultivo){
        PreparedStatement st;
        try {
            st = c.prepareStatement("INSERT INTO cultivo(nombre, descripcion, nodo) VALUES ('"+cultivo.getNombre()+"', '"+cultivo.getDescripcion()+"', '"+cultivo.getNodo()+"')");
            st.executeUpdate();
            
            
        } catch (SQLException ex) {
            Logger.getLogger(PostgreSQLJDBC.class.getName()).log(Level.SEVERE, null, ex);
        }
        
    }
    
    public static void insertsensor(Connection c, Sensor sensor){
        int id_cultivo=getidcultivo(c,sensor.getCultivo());
        PreparedStatement st;
        
        String sql="INSERT INTO sensor(temperatura, humedad, radiacion, latitud, longitud, id_cultivo, cod_sensor) VALUES ("+sensor.isTemperatura()+", "+sensor.isHumedad()+", "+sensor.isRadiacion()+", "+sensor.getLatitud()+", "+sensor.getLongitud()+", "+id_cultivo+", '"+sensor.getCod_sensor()+"')";
        
        try {
            st = c.prepareStatement(sql);
            st.executeUpdate();
        } catch (SQLException ex) {
            Logger.getLogger(PostgreSQLJDBC.class.getName()).log(Level.SEVERE, null, ex);
        }
      
    
    }
    
    public static void insertestado(Connection c, EstadoSensor estado){
        
        int bateria=estado.getBateria();
        String categoria="";
        
        if(bateria<=20){
            categoria=EnumCategoriaEstado.ROJO.toString(); 
        }
        else if(bateria>20 && bateria<=50){
            categoria=EnumCategoriaEstado.AMARILLO.toString(); 
        }
        else{
            categoria=EnumCategoriaEstado.VERDE.toString(); 
        }
        
        Date fecha=estado.getFecha_hora();
        SimpleDateFormat dt = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
        String fechastring=dt.format(fecha);
        int id_sensor=getidsensor(c,estado.getSensor());
        
        PreparedStatement st;
        try {
            st = c.prepareStatement("INSERT INTO estado_sensor(fecha_hora, bateria, categoria, id_sensor) VALUES ('"+fechastring+"', "+bateria+", '"+categoria+"', "+id_sensor+")");
            st.executeUpdate();
            
        } catch (SQLException ex) {
            Logger.getLogger(PostgreSQLJDBC.class.getName()).log(Level.SEVERE, null, ex);
        }
    
    }
    
    public static void insertregistro(Connection c, Registros registro,String tabla){
        Date fecha=registro.getFecha_hora();
        SimpleDateFormat dt = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
        String fechastring=dt.format(fecha);
        
        int id_sensor=getidsensor(c,registro.getSensor());
        
        PreparedStatement st;
        try {
            st = c.prepareStatement("INSERT INTO "+tabla+"(fecha_hora, valor, id_sensor) VALUES ('"+fechastring+"', "+registro.getValor()+", "+id_sensor+")");
            st.executeUpdate();
            
        } catch (SQLException ex) {
            Logger.getLogger(PostgreSQLJDBC.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
    
    public static int getidcultivo(Connection c, Cultivo cultivo){
        PreparedStatement st;
        try {
            st = c.prepareStatement("SELECT * FROM cultivo WHERE nodo='"+cultivo.getNodo()+"'");
            ResultSet rs = st.executeQuery();
            
            if(rs.next()){
                int id_cultivo=rs.getInt("id_cultivo");
                rs.close();
                st.close();
                return id_cultivo;
            }
           
        } catch (SQLException ex) {
            Logger.getLogger(PostgreSQLJDBC.class.getName()).log(Level.SEVERE, null, ex);
        }
        
        
        return 0;
    }
    
    public static int getidsensor(Connection c, Sensor sensor){
        PreparedStatement st;
        try {
            st = c.prepareStatement("SELECT * FROM sensor WHERE cod_sensor='"+sensor.getCod_sensor()+"'");
            ResultSet rs = st.executeQuery();
            
            if(rs.next()){
                int id_cultivo=rs.getInt("id_sensor");
                rs.close();
                st.close();
                return id_cultivo;
            }
           
        } catch (SQLException ex) {
            Logger.getLogger(PostgreSQLJDBC.class.getName()).log(Level.SEVERE, null, ex);
        }
        
        
        return 0;
    }
    
    public static boolean sensorExist(Connection c,Sensor sensor){
        PreparedStatement st;
        try {
            st = c.prepareStatement("SELECT * FROM sensor WHERE cod_sensor='"+sensor.getCod_sensor()+"'");
            ResultSet rs = st.executeQuery();
            
            if(rs.next()){
                rs.close();
                st.close();
                return true;
            }
            else{
                rs.close();
                st.close();
                return false;
            }
           
        } catch (SQLException ex) {
            Logger.getLogger(PostgreSQLJDBC.class.getName()).log(Level.SEVERE, null, ex);
        }
        
        return false;
    }
    
    public static boolean cultivoExist(Connection c,Cultivo cultivo){
        
        String sql="SELECT * FROM cultivo WHERE nodo='"+cultivo.getNodo()+"'";
        PreparedStatement st;
        try {
            st = c.prepareStatement(sql);
            ResultSet rs = st.executeQuery();
            if(rs.next()){
                rs.close();
                st.close();
                return true;
            }
            else{
                rs.close();
                st.close();
                return false;
            }
           
        } catch (SQLException ex) {
            Logger.getLogger(PostgreSQLJDBC.class.getName()).log(Level.SEVERE, null, ex);
        }
        
        return false;
    }
}
