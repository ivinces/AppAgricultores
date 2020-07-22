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

/**
 *
 * @author isabe
 */
public class PostgreSQLJDBC {
    
    public Connection conexion(){
        Connection c = null;
      try {
         c = DriverManager
            .getConnection("jdbc:postgresql://localhost:5432/SensoresDB",
            "agricultor", "appagricultor");
      } catch (SQLException e) {
         System.err.println(e.getClass().getName()+": "+e.getMessage());
         System.exit(0);
      }
      System.out.println("Opened database successfully");
      
      return c;
    }
    
    public void insertcultivo(Connection c){
        Statement stmt = null;
        try {
            stmt = c.createStatement();
            String sql = "INSERT INTO cultivo("+
            "nombre, descripcion)" +
            "VALUES ('Cultivo', 'Nuevo Cultivo');";

            stmt.executeUpdate(sql);
            stmt.close();
            c.commit();
            c.close();
        } catch (SQLException ex) {
            Logger.getLogger(PostgreSQLJDBC.class.getName()).log(Level.SEVERE, null, ex);
        }

        System.out.println("Records created successfully");
    
    }
    public void insertsensor(Connection c, String nodo,float temperatura,float humedad,float radiacion,float latitud,float longitud){
        Statement stmt = null;
      try {
         stmt = c.createStatement();
         ResultSet rs = stmt.executeQuery( "SELECT id_cultivo FROM cultivo WHERE nodo='"+nodo+"';" );
         int id = rs.getInt("id_cultivo");
         rs.close();
         String sql = "INSERT INTO sensor(temperatura, humedad, radiacion, latitud, longitud," +
         "id_estado_sensor, id_cultivo)" +
         "VALUES (?, ?, ?, ?, ?, ?, ?,"+id+");";

            stmt.executeUpdate(sql);
         stmt.close();
         c.commit();
         c.close();
      } catch ( Exception e ) {
         System.err.println( e.getClass().getName()+": "+ e.getMessage() );
         System.exit(0);
      }
      System.out.println("Operation done successfully");
    
    }
    
    public void insertestado(Connection c){
        
    
    }
}
