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
import java.sql.Statement;
import java.text.SimpleDateFormat;
import java.util.Date;
import models.Cultivo;
import models.EstadoNodo;
import models.Registros;
import models.Nodo;
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
            st = c.prepareStatement("INSERT INTO cultivo(nombre, descripcion, nodo_central) VALUES ('"+cultivo.getNombre()+"', '"+cultivo.getDescripcion()+"', '"+cultivo.getNodo()+"')");
            st.executeUpdate();
            
            
        } catch (SQLException ex) {
            Logger.getLogger(PostgreSQLJDBC.class.getName()).log(Level.SEVERE, null, ex);
        }
        
    }
    
    public static void insertnodo(Connection c, Nodo nodo){
        int id_cultivo=getidcultivo(c,nodo.getCultivo());
        PreparedStatement st;
               
        String sql="INSERT INTO nodo(latitud, longitud, cod_nodo, id_cultivo) VALUES ("+nodo.getLatitud()+","+nodo.getLongitud()+", '"+nodo.getCod_nodo()+"', "+id_cultivo+")";
        
        try {
            st = c.prepareStatement(sql);
            st.executeUpdate();
        } catch (SQLException ex) {
            Logger.getLogger(PostgreSQLJDBC.class.getName()).log(Level.SEVERE, null, ex);
        }
      
    
    }
    
    public static void insertestado(Connection c, EstadoNodo estado){
        
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
        int id_nodo=getidnodo(c,estado.getNodo());
  
        
        PreparedStatement st;
        try {
            st = c.prepareStatement("INSERT INTO estado_nodo(fecha_hora, bateria, categoria, id_nodo) VALUES ('"+fechastring+"', "+bateria+", '"+categoria+"', "+id_nodo+")");
            st.executeUpdate();
            
        } catch (SQLException ex) {
            Logger.getLogger(PostgreSQLJDBC.class.getName()).log(Level.SEVERE, null, ex);
        }
    
    }
    
    public static void insertregistro(Connection c, Registros registro){
        Date fecha=registro.getFecha_hora();
        SimpleDateFormat dt = new SimpleDateFormat("YYYY-MM-dd HH:mm:ss");
        String fechastring=dt.format(fecha);
        int id_nodo=getidnodo(c,registro.getNodo());
        PreparedStatement st;
        try {
            st = c.prepareStatement("INSERT INTO registros(fecha_hora, temperatura, humedad, radiacion, id_nodo) VALUES ('"+fechastring+"', "+registro.getTemperatura()+", "+registro.getHumedad()+", "+registro.getRadiacion()+","+id_nodo+")");
            st.executeUpdate();
            
        } catch (SQLException ex) {
            Logger.getLogger(PostgreSQLJDBC.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
    
    public static int getidcultivo(Connection c, Cultivo cultivo){
        PreparedStatement st;
        try {
            st = c.prepareStatement("SELECT * FROM cultivo WHERE nodo_central='"+cultivo.getNodo()+"' AND activo=TRUE");
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
    
    public static int getidnodo(Connection c, Nodo nodo){
        PreparedStatement st;
        try {
            st = c.prepareStatement("SELECT * FROM nodo WHERE cod_nodo='"+nodo.getCod_nodo()+"' AND activo=TRUE");
            ResultSet rs = st.executeQuery();
            
            if(rs.next()){
                int id_nodo=rs.getInt("id_nodo");
                rs.close();
                st.close();
                return id_nodo;
            }
           
        } catch (SQLException ex) {
            Logger.getLogger(PostgreSQLJDBC.class.getName()).log(Level.SEVERE, null, ex);
        }
        
        
        return 0;
    }
    
    public static boolean nodoExist(Connection c,Nodo nodo){
        PreparedStatement st;
        try {
            st = c.prepareStatement("SELECT * FROM nodo WHERE cod_nodo='"+nodo.getCod_nodo()+"' AND activo=TRUE");
            ResultSet rs = st.executeQuery();
            
            if(rs.next()){
                rs.close();
                st.close();
                return true;
            }
           
        } catch (SQLException ex) {
            Logger.getLogger(PostgreSQLJDBC.class.getName()).log(Level.SEVERE, null, ex);
        }
        
        
        return false;
    }
    
    public static boolean cultivoExist(Connection c,Cultivo cultivo){
        PreparedStatement st;
        try {
            st = c.prepareStatement("SELECT * FROM cultivo WHERE nodo_central='"+cultivo.getNodo()+"' AND activo=TRUE");
            ResultSet rs = st.executeQuery();
            
            if(rs.next()){
                rs.close();
                st.close();
                return true;
            }
           
        } catch (SQLException ex) {
            Logger.getLogger(PostgreSQLJDBC.class.getName()).log(Level.SEVERE, null, ex);
        }
       
        return false;
    }
}
