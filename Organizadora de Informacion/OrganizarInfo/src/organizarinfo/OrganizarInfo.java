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
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author isabe
 */
public class OrganizarInfo {
    
    
    public static void main(String[] args){
        String sCarpAct = ConstantsArchivo.path_nuevo;
        File carpeta = new File(sCarpAct);
        System.out.println(carpeta.getName());
        File[] archivos= carpeta.listFiles();
        for(File arch:archivos){
            System.out.println(arch.getName());
            String data=ConstantsArchivo.path_nuevo+"\\"+arch.getName();
            JsonData.getJsonData(data);
            Date fecha=new Date();
            SimpleDateFormat dt = new SimpleDateFormat("yyyyy-mm-dd hhmmss");
            System.out.println(dt.format(fecha));
            String nuevo=ConstantsArchivo.path_procesado+"\\"+dt.format(fecha)+".json";
            try { 
                Files.move(Paths.get(data),Paths.get(nuevo));
            } catch (IOException ex) {
                Logger.getLogger(OrganizarInfo.class.getName()).log(Level.SEVERE, null, ex);
            }
        }  
    }
    
    
    
}
