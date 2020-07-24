/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package organizarinfo;

import java.io.File;
/**
 *
 * @author isabe
 */
public class OrganizarInfo {
    
    
    public static void main(String[] args){
        String sCarpAct = "";
        File carpeta = new File(sCarpAct);
        System.out.println(carpeta.getName());
        JsonData.getJsonData("data.json");
    }
    
    
    
}
