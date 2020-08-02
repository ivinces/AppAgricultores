package com.app.web.api;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.LinkedList;

public class ConnectDB {
	
	private Connection connection = null;
	private String host="localhost";
	private String port="5433";
	private String db_name="SensoresDB";
	private String username="agricultor";
	private String password="appagricultor";
    
	public Connection conexion() {
		try {
			Class.forName("org.postgresql.Driver");
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
        try {
			connection = DriverManager.getConnection("jdbc:postgresql://"+host+":"+port+"/"+db_name+"", ""+username+"", ""+password+"");
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
        if (connection != null) {
            System.out.println("Connection OK");
        } else {
            System.out.println("Connection Failed");
        }
        return connection;
	}
	
	public LinkedList<LinkedList<String>> read_data(String valor){
		LinkedList<LinkedList<String>> li=new LinkedList<LinkedList<String>>();
        PreparedStatement pst=null;
        
		try {
			pst = conexion().prepareStatement("SELECT * FROM "+valor);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
        ResultSet rs=null;
		try {
			rs = pst.executeQuery();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
        try {
			while (rs.next()) {
				LinkedList<String> lista=new LinkedList <String> ();
				int cont=1;
				while(rs.getMetaData().getColumnCount()> cont) {
					
					lista.add(rs.getString(cont));
			        
			        System.out.print(rs.getString(cont)+" ");
			        cont++;
				}
				lista.add(rs.getString(cont));
				System.out.println();
				li.add(lista);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
        return li;
	}
    
}