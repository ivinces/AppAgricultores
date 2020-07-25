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
import java.sql.Statement;
import java.util.logging.Level;
import java.util.logging.Logger;
import Constants.ConstantsDB;
import java.sql.PreparedStatement;
import models.Cultivo;
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
      System.out.println("Opened database successfully");
      
      return c;
    }
    
    public void insertcultivo(Connection c, Cultivo cultivo){
        PreparedStatement st;
        try {
            st = c.prepareStatement("INSERT INTO cultivo(nombre, descripcion, nodo) VALUES (?, ?, ?)");
            st.setString(1, cultivo.getNombre());
            st.setString(2, cultivo.getDescripcion());
            st.setString(3, cultivo.getNodo());
            ResultSet rs = st.executeQuery();
            
            rs.close();
            st.close();
            
        } catch (SQLException ex) {
            Logger.getLogger(PostgreSQLJDBC.class.getName()).log(Level.SEVERE, null, ex);
        }
        System.out.println("Operation done insert cultivo successfully");
    }
    public void insertsensor(Connection c, Sensor sensor){
        PreparedStatement st;
        try {
            st = c.prepareStatement("INSERT INTO sensor(temperatura, humedad, radiacion, latitud, longitud, id_cultivo, cod_sensor) VALUES (?, ?, ?, ?, ?, ?, ?)");
            st.setBoolean(1, sensor.isTemperatura());
            st.setBoolean(2, sensor.isHumedad());
            st.setBoolean(3, sensor.isTemperatura());
            st.setFloat(4, sensor.getLatitud());
            st.setFloat(5, sensor.getLongitud());
            st.setString(6, sensor.getCultivo().getNodo());
            ResultSet rs = st.executeQuery();
            
            rs.close();
            st.close();
            
        } catch (SQLException ex) {
            Logger.getLogger(PostgreSQLJDBC.class.getName()).log(Level.SEVERE, null, ex);
        }
      System.out.println("Operation done insert sensor successfully");
    
    }
    
    public void insertestado(Connection c){
        
    
    }
    
    public boolean sensorExist(Connection c,Sensor sensor){
        PreparedStatement st;
        try {
            st = c.prepareStatement("SELECT * FROM sensor WHERE cod_sensor='?'");
            st.setString(1, sensor.getCod_sensor());
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
    
    public boolean cultivoExist(Connection c,Cultivo cultivo){
        PreparedStatement st;
        try {
            st = c.prepareStatement("SELECT * FROM cultivo WHERE nodo='?'");
            st.setString(1, cultivo.getNodo());
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
